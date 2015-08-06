JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['post_form'],

  tagName: 'form',

  events: {
    "click .create-post": "submitPost"
  },

  initialize: function(){
    this.listenTo(this.model, "change", this.saveAndRedirect);
  },

  saveAndRedirect: function(post){
    this.collection.add(post);
    Backbone.history.navigate("posts/" + post.get("id"), { trigger: true });
  },

  render: function () {
    var content = this.template({ post: this.model});
    this.$el.html(content);
    return this;
  },

  submitPost: function(event){
    event.preventDefault();
    var view = this;
    var postData = $(event.currentTarget).parent().serializeJSON();
    this.model.save(postData, {wait: true});
  }


});
