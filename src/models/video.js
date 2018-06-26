var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    // this.set('id', video.id.videoId);
    // this.set('title', video.snippet.title);
    // this.set('description', video.snippet.description);
    // this.set('etag', video.snippet.etag);
    // this.set('url', video.snippet.thumbnails.default.url);
    this.set('id', video.id.videoId);
  },

  select: function() {
    console.log('select is being called');
    this.trigger('select', this);
  }

});
