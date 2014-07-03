Package.describe({
  summary: "This is a test View."
});

Package.on_use(function (api, where) {
  api.use(['famono'], 'client');

  api.add_files('baseView.js', 'client');

  api.export('BaseView', 'client');
});

Package.on_test(function (api) {
  api.use('baseView');

  api.add_files('baseView_tests.js', ['client', 'server']);
});
