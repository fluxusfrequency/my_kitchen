MyKitchen.RecipeList = Backbone.Collection.extend({
  model: MyKitchen.Recipe,
  url: '/api/recipes'
});
