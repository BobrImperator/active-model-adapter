import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import Pretender from 'pretender';

let pretender;

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

    pretender.get('/blog_posts', function () {
      return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify({
          blog_posts: [
            {
              id: 1,
              post_title: 'Welcome to Ember',
              body_content:
                'Ember is a framework for ambitious web developers.',
              published_at: '2024-01-15T10:00:00Z',
              is_published: true,
              blog_author_id: 1,
              post_comment_ids: [1, 2],
            },
            {
              id: 2,
              post_title: 'ActiveModel Adapter Deep Dive',
              body_content:
                'The ActiveModel adapter handles snake_case conventions.',
              published_at: '2024-02-20T14:30:00Z',
              is_published: true,
              blog_author_id: 2,
              post_comment_ids: [3],
            },
          ],
          blog_authors: [
            { id: 1, first_name: 'Jane', last_name: 'Doe' },
            { id: 2, first_name: 'John', last_name: 'Smith' },
          ],
          post_comments: [
            { id: 1, comment_body: 'Great introduction!', blog_post_id: 1 },
            { id: 2, comment_body: 'Very helpful, thanks!', blog_post_id: 1 },
            { id: 3, comment_body: 'Learned something new.', blog_post_id: 2 },
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

    assert.dom('#cars li').exists({ count: 2 });
  });

  test('blog posts are shown', async function (assert) {
    await visit('/');

    const request = pretender.handledRequests.find(
      (r) => r.url === '/blog_posts',
    );
    assert.ok(request, 'Request was made to /blog_posts');

    assert.dom('.blog-post h2').exists({ count: 2 });
    assert.dom('.blog-post:first-of-type h2').hasText('Welcome to Ember');
    assert
      .dom('.blog-post:first-of-type .body')
      .hasText('Ember is a framework for ambitious web developers.');

    assert.dom('.blog-post:first-of-type .author').hasText('by Jane Doe');
    assert.dom('.blog-post:last-of-type .author').hasText('by John Smith');

    assert.dom('.blog-post:first-of-type .comments li').exists({ count: 2 });
    assert.dom('.blog-post:last-of-type .comments li').exists({ count: 1 });
  });
});
