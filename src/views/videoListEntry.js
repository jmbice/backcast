var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', function(e) {
      this.render();
      // this.model.select();
    }, this);
    // this.model.on('change', fu)
  },
  
  // events: {
  //   'click title': 'handleClick'
  // },
  
  // handleClick: function(e) {
  //   console.log(e);
  //   e.select();

  // },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
