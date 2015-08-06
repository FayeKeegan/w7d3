JournalApp.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id/edit": "postEdit",
    "posts/:id": "postShow"
  },

  initialize: function(options) {
    this.posts = options.posts;
    this.$rootEl = options.$rootEl;
  },

  postsIndex: function (callback) {
    var view = new JournalApp.Views.PostsIndex({ collection: this.posts });
    this.$rootEl.find(".content").empty();
    this.$rootEl.find(".sidebar").html(view.render().$el);
    this.posts.fetch();
  },

  postShow: function (id) {
    this.postsIndex();
    var post = this.posts.getOrFetch(id);
    var view = new JournalApp.Views.PostShow({ model: post });
    this.swap(view);
  },

  postEdit: function (id) {
    this.postsIndex();
    var post = this.posts.getOrFetch(id);
    var view = new JournalApp.Views.PostForm({
      model: post,
      collection: this.posts
    });
    this.swap(view);
  },

  postNew: function () {
    this.postsIndex();
    var post = new JournalApp.Models.Post();
    var view = new JournalApp.Views.PostForm({
      model: post,
      collection: this.posts
    });
    this.swap(view);
  },

  swap: function (view) {
    if (this.view) {
      this.view.remove();
    }
    this.view = view;
    this.$rootEl.find('.content').html(view.render().$el);
  }
});
