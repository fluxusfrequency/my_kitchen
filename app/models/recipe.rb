class Recipe < ActiveRecord::Base
  validates :title, presence: true

  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  has_one :recipe_categories
  has_one :category, through: :recipe_categories
end
