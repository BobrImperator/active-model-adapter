// When building your addon for older Ember versions you need to have the required files
const compatFiles = {
  'ember-cli-build.cjs': `const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { compatBuild } = require('@embroider/compat');
module.exports = async function (defaults) {
  const { buildOnce } = await import('@embroider/vite');
  let app = new EmberApp(defaults);
  return compatBuild(app, buildOnce);
};`,
  'config/optional-features.json': JSON.stringify({
    'application-template-wrapper': false,
    'default-async-observers': true,
    'jquery-integration': false,
    'template-only-glimmer-components': true,
    'no-implicit-route-model': true,
  }),
};

const compatDeps = {
  '@embroider/compat': '^4.0.3',
  'ember-cli': '^5.12.0',
  'ember-auto-import': '^2.10.0',
  '@ember/optional-features': '^2.2.0',
};

export default {
  packageManager: 'pnpm',
  scenarios: [
    {
      name: 'ember-lts-3.28',
      npm: {
        devDependencies: {
          'ember-source': '~3.28.0',
          ...compatDeps,
          'ember-cli': '^4.12.0',
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
        SKIP_DECLARATIONS: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-4.4',
      npm: {
        devDependencies: {
          'ember-source': '~4.4.0',
          ...compatDeps,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
        SKIP_DECLARATIONS: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-4.8',
      npm: {
        devDependencies: {
          'ember-source': '~4.8.0',
          ...compatDeps,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
        SKIP_DECLARATIONS: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-4.12',
      npm: {
        devDependencies: {
          'ember-source': '~4.12.0',
          ...compatDeps,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
        SKIP_DECLARATIONS: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-5.4',
      npm: {
        devDependencies: {
          'ember-source': '~5.4.0',
          ...compatDeps,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-5.8',
      npm: {
        devDependencies: {
          'ember-source': '~5.8.0',
          ...compatDeps,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-5.12',
      npm: {
        devDependencies: {
          'ember-source': '~5.12.0',
          ...compatDeps,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-6.4',
      npm: {
        devDependencies: {
          'ember-source': 'npm:ember-source@~6.4.0',
        },
      },
    },
    {
      name: 'ember-lts-6.8',
      npm: {
        devDependencies: {
          'ember-source': 'npm:ember-source@~6.8.0',
        },
      },
    },
    {
      name: 'ember-lts-6.12',
      npm: {
        devDependencies: {
          'ember-source': 'npm:ember-source@~6.12.0',
        },
      },
    },
    {
      name: 'ember-latest',
      npm: {
        devDependencies: {
          'ember-source': 'npm:ember-source@latest',
        },
      },
    },
    {
      name: 'ember-beta',
      npm: {
        devDependencies: {
          'ember-source': 'npm:ember-source@beta',
        },
      },
    },
    {
      name: 'ember-alpha',
      npm: {
        devDependencies: {
          'ember-source': 'npm:ember-source@alpha',
        },
      },
    },
    {
      name: 'ember-data-5.4',
      npm: {
        devDependencies: {
          'ember-data': '~5.4.0',
          '@ember-data/adapter': '~5.4.0',
          '@ember-data/model': '~5.4.0',
          '@ember-data/serializer': '~5.4.0',
          '@ember-data/store': '~5.4.0',
        },
      },
    },
    {
      name: 'ember-data-5.8',
      npm: {
        devDependencies: {
          'ember-data': '~5.8.0',
          '@ember-data/adapter': '~5.8.0',
          '@ember-data/legacy-compat': '~5.8.0',
          '@ember-data/model': '~5.8.0',
          '@ember-data/serializer': '~5.8.0',
          '@ember-data/store': '~5.8.0',
          '@warp-drive/build-config': '~5.8.0',
        },
      },
    },
    {
      name: 'ember-data-latest',
      npm: {
        devDependencies: {
          'ember-data': 'latest',
          '@ember-data/adapter': 'latest',
          '@ember-data/legacy-compat': 'latest',
          '@ember-data/model': 'latest',
          '@ember-data/serializer': 'latest',
          '@ember-data/store': 'latest',
          '@warp-drive/build-config': 'latest',
        },
      },
    },
    {
      name: 'ember-data-beta',
      npm: {
        devDependencies: {
          'ember-data': 'beta',
          '@ember-data/adapter': 'beta',
          '@ember-data/legacy-compat': 'beta',
          '@ember-data/model': 'beta',
          '@ember-data/serializer': 'beta',
          '@ember-data/store': 'beta',
          '@warp-drive/build-config': 'beta',
        },
      },
    },
  ],
};
