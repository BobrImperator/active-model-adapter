import Pretender from 'pretender';
import config from 'classic-test-app/config/environment';

export function initialize() {
  if (config.environment === 'test') {
    return;
  }

  const server = new Pretender();

  server.get('/cars', function () {
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

  server.get('/blog_posts', function () {
    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({
        blog_posts: [
          {
            id: 1,
            post_title: 'Welcome to Ember',
            body_content: 'Ember is a framework for ambitious web developers.',
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
}

export default {
  initialize,
};
