'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('atomic:app', function() {
  var cssPreprocessor = 'less';
  var cssPreprocessorExtension = cssPreprocessor.replace('sass', 'scss');

  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({ projectName: 'Test Project' })
      .withPrompts({ namespace: 'mse' })
      .withPrompts({ author: 'Test Runner' })
      .withPrompts({ cssPreprocessor: cssPreprocessor })
      .withPrompts({ galen: true })
      .withPrompts({ karma: true })
      .withPrompts({ camelized: true })
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates project files', function() {
    assert.file([
      'bower.json',
      'package.json',
      '.gitignore',
      'README.md'
    ]);
  });

  it('creates editor config files', function() {
    assert.file([
      '.editorconfig',
      '.csscomb.json',
      '.stylelintrc',
      '.eslintrc'
    ]);
  });

  it('creates test config files', function() {
    assert.file([
      'tests/galen.test.js',
      'tests/karma.conf.js'
    ]);
  });

  it('creates grunt task config files', function() {
    assert.file([
      'tasks/aliases.yaml',
      'tasks/copy.js',
      'tasks/' + cssPreprocessor + '.js',
      'tasks/postcss.js',
      'tasks/eslint.js',
      'tasks/parallelize.js',
      'tasks/babel.js',
      'tasks/galen.js',
      'tasks/rev.js',
      'tasks/bump.js',
      'tasks/htmlmin.js',
      'tasks/svgmin.js',
      'tasks/imagemin.js',
      'tasks/usemin.js',
      'tasks/clean.js',
      'tasks/injector.js',
      'tasks/useminPrepare.js',
      'tasks/combine_mq.js',
      'tasks/jade.js',
      'tasks/watch.js',
      'tasks/connect.js',
      'tasks/karma.js',
      'tasks/wiredep.js'
    ]);
  });

  it('creates jade source files', function() {
    assert.file([
      'app/index.jade',
      'app/0_basics/_default.jade',
      'app/1_atoms/index.jade',
      'app/2_molecules/index.jade',
      'app/3_organisms/index.jade',
      'app/4_templates/index.jade',
      'app/5_pages/index.jade'
    ]);
  });

  it('creates javascript source files', function() {
    assert.file([
      'app/0_basics/controller.js'
    ]);
  });

  it('creates stylesheet files: ' + cssPreprocessorExtension, function() {
    assert.file([
      'app/0_basics/main.' + cssPreprocessorExtension,
      'app/0_basics/ie9.' + cssPreprocessorExtension,
      'app/0_basics/nojs.' + cssPreprocessorExtension,
      'app/0_basics/variables.' + cssPreprocessorExtension,

      'app/0_basics/nx-helpers/nx-colorclasses.' + cssPreprocessorExtension,
      'app/0_basics/nx-helpers/nx-mediaqueries.' + cssPreprocessorExtension,
      'app/0_basics/nx-helpers/nx-radiocheckbox.' + cssPreprocessorExtension,
      'app/0_basics/nx-helpers/nx-spacerclasses.' + cssPreprocessorExtension
    ]);
  });

  it('creates content files', function() {
    assert.file([
      'app/0_basics/basics.yaml'
    ]);
  });

  it('checks if all EJS Patterns have been resolved', function() {
    assert.noFileContent('tasks/watch.js', '<%=');
    assert.noFileContent('tasks/injector.js', '<%=');
  })
});
