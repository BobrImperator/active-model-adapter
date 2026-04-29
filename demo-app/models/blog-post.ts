import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import type BlogAuthor from './blog-author';
import type PostComment from './post-comment';

export default class BlogPost extends Model {
  @attr() declare postTitle: string;
  @attr() declare bodyContent: string;
  @attr('date') declare publishedAt: Date;
  @attr('boolean') declare isPublished: boolean;
  @belongsTo('blog-author', { async: false, inverse: null })
  declare blogAuthor: BlogAuthor;
  @hasMany('post-comment', { async: false, inverse: 'blogPost' })
  declare postComments: PostComment[];
}
