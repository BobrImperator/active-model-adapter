import Model, { attr } from '@ember-data/model';

export default class BlogAuthorModel extends Model {
  @attr() firstName;
  @attr() lastName;
}
