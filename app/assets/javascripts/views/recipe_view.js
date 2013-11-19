MyKitchen.RecipeView = Backbone.View.extend({
  el: '#new-recipe',
  tagName: 'div',
  className: 'recipeContainer',
  template: '#recipeTemplate',

  events: {
    'click .delete': 'deleteRecipe'
  },

  deleteRecipe: function() {
    this.model.destroy();
    this.remove();
  },

  render: function() {
    templateBody = $(this.template).html();
    compiledTemplate = _.template(templateBody);
    renderedRecipe = compiledTemplate(this.model);

    this.$el.html(renderedRecipe);
    return this;
  }
});