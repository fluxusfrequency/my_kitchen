var app = app || {};

var RecipeList = Backbone.Collection.extend({
  model: app.Recipe,
  url: '/api/recipes'
});