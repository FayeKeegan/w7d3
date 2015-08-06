window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Routers.PostRouter({
      posts: new JournalApp.Collections.Posts(),
      $rootEl: $('div.root')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
