/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'todo-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      AUTH_URL: "http://xamoom-api-dot-xamoom-tricia.appspot.com/auth/"
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    'default-src': "'self'",
    'frame-src': "https://www.youtube.com https://w.soundcloud.com",
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com",
    'font-src': "'self' https://*.gstatic.com",
    'connect-src': "'self' http://xamoom-api-dot-xamoom-tricia.appspot.com",
    'img-src': "'self' data: https://*.googleapis.com https://*.gstatic.com",
    'style-src': "'self' 'unsafe-inline' https://*.googleapis.com",
    'media-src': "'self' https://storage.googleapis.com http://files.puls4.com"
  };

  return ENV;
};
