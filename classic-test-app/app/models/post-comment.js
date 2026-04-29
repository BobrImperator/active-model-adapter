import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostCommentModel extends Model {
  @attr() commentBody;
  @belongsTo('blog-post', { async: false, inverse: 'postComments' }) blogPost;
}
