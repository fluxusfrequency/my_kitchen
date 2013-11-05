class RecipeIngredient < ActiveRecord::Base
  validates :recipe, presence: true
  validates :ingredient, presence: true  
  validates :quantity, presence: true, numericality: true

  belongs_to :recipe
  belongs_to :ingredient
end
