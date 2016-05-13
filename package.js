Package.describe({
  name: 'phambanhan:xml2js',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'XML to JavaScript object converter',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  xml2js: '0.4.8'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.3.2.4');
  api.use('ecmascript');
  api.export('xml2js');
  api.add_files([
    'xml2js.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['phambanhan:xml2js', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('xml2js-tests.js', ['server']);
});
