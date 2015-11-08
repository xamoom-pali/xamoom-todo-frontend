import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  identification: 'bruno',
  password: 'agreatpassword',

  actions: {
    authenticate() {
      console.log("authenticating...");
      let { identification, password } = this.getProperties('identification', 'password');
      console.log("identification is: " + identification + ", password is: " + password);
      this.get('session').authenticate('authenticator:xamoomCloudAuth', identification, password).then(() => {
        console.log("Authentication successful!");
        console.log("---------");
        //console.log(data);
        console.log(this.get("session.session.content.authenticated.meta.session-token"));
        console.log("---------");
        this.transitionToRoute('list');
      }).catch((reason) => {
        console.log("Error occured!");
        console.log("---------");
        console.log(reason);
        console.log("---------");
        this.set('errorMessage', "Error message: " + reason.error);
      });
    }
  }

});
