import type Application from '@ember/application';
import { ActiveModelAdapter, ActiveModelSerializer } from '../index.ts';

export function initialize(application: Application): void {
  application.register('adapter:-active-model', ActiveModelAdapter);
  application.register('serializer:-active-model', ActiveModelSerializer);
}

export default {
  initialize,
};
