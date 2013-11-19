MyKitchen.RecipesView = Backbone.View.extend({
  tagName: 'div',
  className: 'recipesContainer',
  template: '#recipesTemplate',

  events: {
    'click #add': 'addRecipe'
  },

  render: function() {
    templateBody = $(this.template).html();
    compiledTemplate = _.template(templateBody);
    renderedRecipes = compiledTemplate(MyKitchen.recipeList);

    this.$el.html(renderedRecipes);
    return this;
  }


});