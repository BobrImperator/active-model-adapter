import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import type Store from '@ember-data/store';
import { hash } from 'rsvp';

export default class Application extends Route {
  @service('store') declare store: Store;

  model() {
    return hash({
      cars: this.store.findAll('car'),
      blogPosts: this.store.findAll('blog-post'),
    });
  }
}
