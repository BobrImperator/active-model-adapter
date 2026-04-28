import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    return hash({
      cars: this.store.findAll('car'),
      blogPosts: this.store.findAll('blog-post'),
    });
  }
}
