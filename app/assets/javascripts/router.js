MyKitchen.Router = Backbone.Router.extend({
  routes: {
    'recipes': 'recipes',
    'recipe/:id': 'showRecipe',
    'recipes/new': 'addRecipe',
    'recipes/edit/:id': 'updateRecipe',
    'recipes/delete/:id': 'destroyRecipe'
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
    (new MyKitchen.AddRecipeView()).addRecipe();
  },

  updateRecipe: function() {
    var recipe = MyKitchen.recipeList.findWhere({id: id});
    recipe.update();
    (new MyKitchen.RecipesView()).render();
  },

  destroyRecipe: function() {
    var recipe = MyKitchen.recipeList.findWhere({id: id});
    (new MyKitchen.RecipeView({model: recipe})).deleteRecipe();
  }


});