MyKitchen.AddRecipeView = Backbone.View.extend({
  
  el: '#new-recipe',

  model: MyKitchen.Recipe,

  events: {
    'click #add': 'addRecipe'
  },

  addRecipe: function( e ) {
    e.preventDefault();

    var formData = {};
  
    $( '#addRecipe div' ).children( 'input' ).each( function( i, el ) {
      if( $( el ).val() !== '') {
        if( el.id === 'ingredients' ){
          formData[ el.id ] = [];
          _.each( $( el ).val().split( ' ' ), function( ingredient ) {
            formData[ el.id ].push({ 'ingredient': ingredient });
          });
        } else {
          formData[ el.id ] = $( el ).val();
        }
      }
      
      $( el ).val( '' );
    });

    this.collection.create( formData );
  },

  render: function() {
    templateBody = $(this.template).html();
    compiledTemplate = _.template(templateBody);
    renderedRecipes = compiledTemplate(MyKitchen.recipeList);

    this.$el.html(renderedRecipes);
    return this;
  }

});