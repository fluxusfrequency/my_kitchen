var MyKitchen = Backbone.Model.extend({
  defaults: {
    title: 'New Recipe'
  }
});

var newMyKitchen = new MyKitchen({
  title: 'Burrito Grande'
});

var MyKitchenView = Backbone.View.extend({
  tagName: 'div',

  myKitchenTpl = _.template( $('#recipe_template').html() ),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function() {
    this.$el = $('#recipe')
  },

  render: function() {
    this.$el.html( this.myKitchenTpl(this.model.to_JSON() ) );
    this.input = this.$('.edit');
    return this;
  },

  edit: function() {

  },

  close: function() {

  },

  updateOnEnter: function(e) {

  }
});

var myKitchenView = new MyKitchenView({model: newMyKitchen});