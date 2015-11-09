import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  session: Ember.inject.service('session'),
  host: 'http://xamoom-api-dot-xamoom-tricia.appspot.com',
  headers: Ember.computed('session.session.content.authenticated.meta.session-token', function() {
    console.log("Computing session token, session token is:" + this.get('session.session.content.authenticated.meta.session-token'));
    const sessionToken = this.get("session.session").get("content.authenticated.meta.session-token");
    return {
      'Accept': 'application/vnd.api+json',
      'Authorization': sessionToken,
      'Content-Type': 'application/vnd.api+json'
    };
  })


});
