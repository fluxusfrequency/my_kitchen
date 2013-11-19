MyKitchen.Router = Backbone.Router.extend({
  routes: {
    'recipes': 'recipes',
    'recipe/:id': 'showRecipe',
    'recipes/new': 'addRecipe',
    'recipes/:id/edit': 'updateRecipe'
  },

  recipes: function() {
    (new MyKitchen.RecipesView()).render();
  },

  initialize: function() {
    this.listenTo( this.collection, 'add', this.renderRecipe );
    this.listenTo( this.collection, 'reset', this.render );
  },

  showRecipe: function(id) {
    var recipe = MyKitchen.recipeList.findWhere({id: id});
    (new MyKitchen.RecipeView({model: recipe})).render();
  },

  addRecipe: function() {
    (new MyKitchen.AddRecipeView()).render();
  },

  updateRecipe: function() {
    var recipe = MyKitchen.recipeList.findWhere({id: id});
    recipe.update();
    (new MyKitchen.RecipesView()).render();
  },

});