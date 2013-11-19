var MyKitchen = MyKitchen || {};

$(function() {
  MyKitchen.recipesList = new MyKitchen.RecipeList();

  MyKitchen.router = new MyKitchen.Router();
  Backbone.history.start({pushState: true});
});