import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    refreshForecast: function() {
      console.log('refresh action triggered');
      this.sendAction('refresh');
    }
  },
  roundTemp: Ember.computed('model', function() {
    return Math.round(this.get('model').currently.temperature);
  })
});
