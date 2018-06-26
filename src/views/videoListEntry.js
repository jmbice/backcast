var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', function(e) {
      this.render();
      // this.model.select();
    }, this);
  },
  
  events: {
    'click': 'handleClick'
  },
  
  handleClick: function() {
    this.model.select();
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
