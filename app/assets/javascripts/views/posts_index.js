JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],

  tagName: 'ul',

  initialize: function () {
    this.listenTo(this.collection, "sync reset", this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var view = this;
    this.collection.each(function (post) {
      var indexItem = new JournalApp.Views.PostsIndexItem({ model: post });
      view.$el.append(indexItem.render().$el);
    });
    return this;
  },

  refreshPosts: function (callback) {
    this.collection.fetch({
      reset: true,
      success: callback
    });
  }
});
