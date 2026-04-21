/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Pretender from 'pretender';
import type { TestContext } from '@ember/test-helpers';

let pretender: Pretender;

import Model, { attr } from '@ember-data/model';
import ActiveModelAdapter, {
  ActiveModelSerializer,
} from 'active-model-adapter';
import AdapterError from '@ember-data/adapter/error';
import { StringTransform } from '@ember-data/serializer/transform';

class Book extends Model {
  @attr('string')
  declare name?: string;

  @attr('string')
  declare genre?: string;
}

class ApplicationAdapter extends ActiveModelAdapter {}
class ApplicationSerializer extends ActiveModelSerializer {}

module('Unit | Adapter | active model adapter errors test', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
     
    pretender = new Pretender(function () {});
    this.owner.register('adapter:application', ApplicationAdapter);
    this.owner.register('serializer:application', ApplicationSerializer);
    this.owner.register('model:book', Book);
    this.owner.register('transform:string', StringTransform);
  });

  hooks.afterEach(function () {
    pretender.shutdown();
  });

  test('errors can be iterated once intercepted by the adapter', async function (this: TestContext, assert) {
    assert.expect(3);

    const store = this.owner.lookup('service:store');

    store.push({
      data: {
        type: 'book',
        id: '1',
        attributes: {
          name: 'Bossypants',
          genre: 'Memoir',
        },
      },
    });

    const post = store.peekRecord('book', '1');

    pretender.put('/books/1', function () {
      const headers = {};
      const httpStatus = 422;
      const payload = {
        errors: {
          name: ['rejected'],
          genre: ['rejected'],
        },
      };
      return [httpStatus, headers, JSON.stringify(payload)];
    });

    post.setProperties({
      name: 'Yes, Please',
      genre: 'Comedy',
    });

    try {
      await post.save();
    } catch (e: any) {
      assert.ok(e.isAdapterError, 'error is an adapter error');

      assert.equal(
        post.errors.errorsFor('name')[0].message,
        'rejected',
        'model.errors.attribute_name works'
      );
      assert.deepEqual(
        post.errors.messages,
        ['rejected', 'rejected'],
        'errors.messages works'
      );
    }
  });
});
