var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#recipes',

  initialize: function() {
    this.collection = new app.Recipes();
    this.render();

    this.listenTo( this.collection, 'add', this.renderRecipe );
    this.listenTo( this.collection, 'reset', this.render );
  },

  events: {
    'click #add': 'addRecipe'
  },

  render: function() {
    this.collection.each(function ( recipe ) ) {
      this.renderRecipe( recipe );
    }, this);
  },

  renderRecipe: function() {
    var recipeView = new app.RecipeView({
      model: recipe
    });
    this.$el.append( recipeView.render().el );
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
  }

});