var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  model: Video,

  render: function(videos) {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.children().detach();
    this.$el.html(this.template(
      //pass in the video object here
    ));

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
