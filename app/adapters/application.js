import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  session: Ember.inject.service('session'),
  host: 'http://xamoom-api-dot-xamoom-tricia.appspot.com',
  headers: Ember.computed('session.session.content.authenticated.meta.session-token', function() {
    console.log("Computing session token, session token is:" + this.get('session.session.content.authenticated.meta.session-token'));
    return {
      //'Access-Control-Allow-Origin' : '*',
      'Accept': 'application/vnd.api+json',
      'Authorization': this.get('session.session.content.authenticated.meta.session-token'),
      'Content-Type': 'application/vnd.api+json'
    };
  })


});
