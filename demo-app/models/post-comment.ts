import Model, { attr, belongsTo } from '@ember-data/model';
import type BlogPost from './blog-post';

export default class PostComment extends Model {
  @attr() declare commentBody: string;
  @belongsTo('blog-post', { async: false, inverse: 'postComments' })
  declare blogPost: BlogPost;
}
