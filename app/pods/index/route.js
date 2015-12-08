import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('https://api.forecast.io/forecast/' + params.api_key + '/' + params.lat_lon + '/?callback=?').then(function(data) {
      return data;
    });
  },
  actions: {
    refresh: function() {
      this.refresh();
      console.log("Wx data reloaded");
    }
  },
  renderTemplate() {
    this.render('deprecated');
  }
});
