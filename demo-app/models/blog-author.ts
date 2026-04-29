import Model, { attr } from '@ember-data/model';

export default class BlogAuthor extends Model {
  @attr() declare firstName: string;
  @attr() declare lastName: string;
}
