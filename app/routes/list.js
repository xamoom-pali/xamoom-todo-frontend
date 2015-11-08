import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    console.log("Loading lists");
    return this.store.findAll('list');
  }
});
