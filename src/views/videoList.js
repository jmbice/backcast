var VideoListView = Backbone.View.extend({
  
  // el: '#video-list',
  
  collection: this.videos,

  initialize: function(collection) {
    this.listenTo(this.collection, 'sync', this.render);
    // console.log(collection.collection.models);
    // this.collection.on('change', function() {
      
    // })
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.$el.children().detach();
    if (this.collection) {
      this.collection.forEach(function(model) {
        var video = new VideoListEntryView({model: model});
        this.$el.append(video.render().$el);
      
      }, this); 
    }
    // this.$el.children().detach();
    // this.$el.html(this.template());
    return this;
  },

  // renderVideo: function(video) {
  //   var videoView = new VideoView
  // }

  template: templateURL('src/templates/videoList.html')

});
