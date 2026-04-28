// Optional features compatible with ember-source 3.24/3.28 (no-implicit-route-model didn't exist)
const optionalFeaturesLegacy = {
  'config/optional-features.json': JSON.stringify({
    'application-template-wrapper': false,
    'default-async-observers': true,
    'jquery-integration': false,
    'template-only-glimmer-components': true,
  }),
};

export default {
  packageManager: 'pnpm',
  scenarios: [
    {
      name: 'ember-data-3.24',
      npm: {
        devDependencies: {
          'ember-source': '~3.24.0',
          'ember-data': '~3.24.0',
          '@ember-data/adapter': '~3.24.0',
          '@ember-data/model': '~3.24.0',
          '@ember-data/serializer': '~3.24.0',
          '@ember-data/store': '~3.24.0',
          '@ember/string': '^3.0.1',
          'ember-inflector': '^4.0.2',
          'ember-qunit': '^5.1.5',
          '@ember/test-helpers': '^2.4.2',
          'ember-resolver': '^8.1.0',
          'ember-cli': '~4.12.3',
        },
      },
      files: optionalFeaturesLegacy,
    },
    {
      name: 'ember-data-3.28',
      npm: {
        devDependencies: {
          'ember-source': '~3.28.0',
          'ember-data': '~3.28.0',
          '@ember-data/adapter': '~3.28.0',
          '@ember-data/model': '~3.28.0',
          '@ember-data/serializer': '~3.28.0',
          '@ember-data/store': '~3.28.0',
          '@ember/string': '^3.0.1',
          'ember-inflector': '^4.0.2',
          'ember-resolver': '^10.0.0',
          'ember-cli': '~4.12.3',
        },
      },
      files: optionalFeaturesLegacy,
    },
    {
      name: 'ember-data-4.4',
      npm: {
        devDependencies: {
          'ember-source': '~4.4.0',
          'ember-data': '~4.4.0',
          '@ember-data/adapter': '~4.4.0',
          '@ember-data/model': '~4.4.0',
          '@ember-data/serializer': '~4.4.0',
          '@ember-data/store': '~4.4.0',
          '@ember/string': '^3.0.1',
          'ember-inflector': '^4.0.2',
        },
      },
    },
    {
      name: 'ember-data-4.8',
      npm: {
        devDependencies: {
          'ember-source': '~4.8.0',
          'ember-data': '~4.8.0',
          '@ember-data/adapter': '~4.8.0',
          '@ember-data/model': '~4.8.0',
          '@ember-data/serializer': '~4.8.0',
          '@ember-data/store': '~4.8.0',
          '@ember/string': '^3.0.1',
          'ember-inflector': '^4.0.2',
        },
      },
    },
    {
      name: 'ember-data-4.12',
      npm: {
        devDependencies: {
          'ember-source': '~4.12.0',
          'ember-data': '~4.12.0',
          '@ember-data/adapter': '~4.12.0',
          '@ember-data/model': '~4.12.0',
          '@ember-data/serializer': '~4.12.0',
          '@ember-data/store': '~4.12.0',
          '@ember/string': '^3.0.1',
          'ember-inflector': '^4.0.2',
        },
      },
    },
  ],
};
