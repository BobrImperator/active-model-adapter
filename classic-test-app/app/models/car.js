import Model, { attr } from '@ember-data/model';

export default class CarModel extends Model {
  @attr() brand;
}
