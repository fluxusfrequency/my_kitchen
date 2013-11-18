var app = app || {};

var app.Recipe = Backbone.Model.extend({
  defaults: {
    title: '',
    ingredients: [],
    description: '',
    category: '',
  },
});