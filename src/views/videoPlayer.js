var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  model: Video,

  initialize: function(videos) {
    // this.collection.on('select', this.render);
    this.listenTo(this.collection, 'select', this.render);
  },

  render: function(video) {
    console.log('render is being called?');
    video = video || this.collection.models[0];
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.children().detach();
    console.log(this.collection.models);
    this.$el.html(this.template(video.attributes));

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
