JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['post_show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .delete-post-show" : "deletePost",
    "dblclick #post-body": "editBody",
    "dblclick #post-title": "editTitle",
    "blur .edited-body": "updateBody",
    "blur .edited-title": "updateTitle"
  },

  updateBody: function (event) {
    var editedBody = $(event.currentTarget).val();
    this.model.save({ body: editedBody });
  },

  updateTitle: function (event) {
    var editedTitle = $(event.currentTarget).val();
    this.model.save({ title: editedTitle });
  },

  editTitle: function (event) {
    var $title = $(event.currentTarget);
    var $titleForm = $("<input type='text'>").attr("value", $title.text());
    $titleForm.addClass("edited-title");
    $title.replaceWith($titleForm);
  },

  editBody: function(event){
    var $body = $(event.currentTarget);
    var $bodyForm = $("<textarea>").text($body.text());
    $bodyForm.addClass("edited-body");
    $body.replaceWith($bodyForm);
  },

  deletePost: function(event){
    this.model.destroy();
    this.remove();
    Backbone.history.navigate("", { trigger: true });
  },

  render: function () {
    this.$el.html(this.template({ post: this.model }));
    return this;
  }
});
