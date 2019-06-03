const {resolve} = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const logger = require('../logger');
const webpackConfig = require('../../../config/webpack.config.dev');

const compiler = webpack(webpackConfig);

module.exports = function setup(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      logger,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));

  app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('/about/us', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('/about/terms', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('/about/privacy', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('/about/investors', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('/event/*', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('/user/*', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('/search', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('/test', (req, res) => {
    res.sendFile(resolve(__dirname, '..', '..', '..', 'build-dev', 'client', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  app.get('*', (req, res) => res.status(404).send());
};
