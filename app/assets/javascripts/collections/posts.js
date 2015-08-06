JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: "posts",

  model: JournalApp.Models.Post,

  getOrFetch: function(id){
    var post = this.get(id);
    if (!post){
      post = new JournalApp.Models.Post({id: id});
    }
    var that = this;
    post.fetch({
      success: function () {
        that.add(post);
        return post;
      },

      error: function () {
        return null;
      }
    });

    return post;
  }
});
