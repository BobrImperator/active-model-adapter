import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BlogPostModel extends Model {
  @attr() postTitle;
  @attr() bodyContent;
  @attr('date') publishedAt;
  @attr('boolean') isPublished;
  @belongsTo('blog-author', { async: false, inverse: null }) blogAuthor;
  @hasMany('post-comment', { async: false, inverse: 'blogPost' }) postComments;
}
