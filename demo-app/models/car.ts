import Model, { attr } from '@ember-data/model';

export default class Car extends Model {
  @attr() declare brand: string;
}
