var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videoList = new VideoListView();
    this.videoPlayer = new VideoPlayerView();
    this.render();
  },


  render: function() {
    // this.VideoListView.render();
    this.$el.html(this.template());
    this.videoList.render();
    this.videoPlayer.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
