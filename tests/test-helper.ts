// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import { setTesting } from '@embroider/macros';
import { App, Router } from '../demo-app/app.gts';
import { initialize as initActiveModel } from 'active-model-adapter/initializers/active-model-adapter';

Router.prototype.location = 'none';

export function start() {
  setTesting(true);
  const app = App.create({
    autoboot: false,
    rootElement: '#ember-testing',
  });
  initActiveModel(app);
  setApplication(app);
  setup(QUnit.assert);
  setupEmberOnerrorValidation();
  qunitStart();
}
