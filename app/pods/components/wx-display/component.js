import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    refreshForecast: function() {
      console.log('refresh action triggered');
      this.sendAction('refresh');
    }
  }
});
