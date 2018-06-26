var VideoListView = Backbone.View.extend({
  
  el: '.list',

  model: Video,


  initialize: function(videos) {
    // is for new-search, rerender this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    //detaches children elements from $el, which is list on app.html template
    this.$el.children().detach();
    //applies the template to this $el
    this.$el.html(this.template());
    //appends to the children...
    this.$el.children().append(
      //this.collection is mapped over, and the Videos are initialized,
      //the render function on eachVideo object is called (see videoListEntry for output specifics),
      //the result of the render is an element, which is returned and appended.
      this.collection.map(function(vids) {
        return new VideoListEntryView({model: vids}).render();
      })
    );
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});
