Package.describe({
  name: "rcdelfin:meteor-lodash",
  summary: "Wrapper for Lo-Dash v4.16.4",
  version: "4.16.4",
  git: "https://github.com/rcdelfin/meteor-lodash.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles('lodash/lodash.js');
  api.addFiles('export.js');

  api.export('lodash');
  api.export('_');
});