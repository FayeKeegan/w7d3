JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts_index_item"],

  tagName: "li",

  className: "list-group-item",

  events: {
    "click .delete-post": "deletePost",
    "click a.post-show": "showPost"
  },

  render: function(){
    var content = this.template( { post: this.model } );
    this.$el.html(content);
    window.view = this;
    return this;
  },

  deletePost: function(event) {
    event.preventDefault();
    this.$el.remove();
    this.model.destroy();
    Backbone.history.navigate("", { trigger: true });
  },

  showPost: function (event) {
    event.preventDefault();
    Backbone.history.navigate("posts/" + this.model.get("id"), { trigger: true });
  }
});
