import EmberApp from 'ember-strict-application-resolver';
import EmberRouter from '@ember/routing/router';
import activeModelInitializer from 'active-model-adapter/initializers/active-model-adapter';

export class Router extends EmberRouter {
  location = 'history';
  rootURL = '/';
}

export class App extends EmberApp {
  modules = {
    './router': Router,
    './initializers/active-model-adapter': activeModelInitializer,
    ...import.meta.glob('./adapters/**/*', { eager: true }),
    ...import.meta.glob('./serializers/**/*', { eager: true }),
    ...import.meta.glob('./services/**/*', { eager: true }),
    ...import.meta.glob('./models/**/*', { eager: true }),
    ...import.meta.glob('./routes/**/*', { eager: true }),
    ...import.meta.glob('./templates/**/*', { eager: true }),
  };
}

Router.map(function () {});
