import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';

export default OAuth2PasswordGrant.extend({

  serverTokenEndpoint: config.APP.AUTH_URL + "login",

  /**
   Makes a request to the OAuth 2.0 server.
   @method makeRequest
   @param {String} url The request URL
   @param {Object} data The request data
   @return {jQuery.Deferred} A promise like jQuery.Deferred as returned by `$.ajax`
   @protected
   */
    makeRequest: function(url, data) {
    const options = {
      url: url,
      data: data,
      type: 'GET',
      dataType: 'json',
      contentType: 'application/vnd.api+json',
      accept: 'application/vnd.api+json'
    };

    const clientId = this.get('clientId');
    if (!Ember.isEmpty(clientId)) {
      const base64ClientId = window.btoa(clientId.concat(':'));
      Ember.merge(options, {
        headers: {
          Authorization: `Basic ${base64ClientId}`
        }
      });
    }

    return Ember.$.ajax(options);
  },

  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if(Ember.isEmpty(data.meta["session-token"])){
        reject();
      }else{
        resolve(data);
      }
    });
  }

});
