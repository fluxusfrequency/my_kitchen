var app = app || {};

app.RecipeView = Backbone.View.extend({
  tagName: 'div',
  className: 'recipeContainer',
  template: _.template( $('#recipeTemplate').html() ),

  events: {
    'click .delete': 'deleteRecipe'
  },

  deleteRecipe: function() {
    this.model.destroy();
    this.remove();
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ));
    return this;
  }
});