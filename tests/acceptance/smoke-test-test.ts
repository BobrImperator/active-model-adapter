import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import Pretender from 'pretender';

let pretender: Pretender;

module('Acceptance | smoke test', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    pretender = new Pretender(function () {});

    pretender.get('/cars', function () {
      return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify({
          cars: [
            { id: 1, brand: 'Subaru' },
            { id: 2, brand: 'Ford' },
          ],
        }),
      ];
    });
  });

  hooks.afterEach(function () {
    pretender.shutdown();
  });

  test('visiting /', async function (assert) {
    await visit('/');

    assert.dom('li').exists({ count: 2 });
  });
});
