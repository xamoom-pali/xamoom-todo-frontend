import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  creators: DS.hasMany("user")
  //assignedUser: DS.hasMany("user")
});
