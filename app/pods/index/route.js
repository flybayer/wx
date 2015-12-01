import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('https://api.forecast.io/forecast/62b24d25c4f157aa20bce8d87fa841ef/45.0419,-93.1967?callback=?').then(function(data) {
      return data;
    });
  }
});
