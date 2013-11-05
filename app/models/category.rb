class Category < ActiveRecord::Base
  validates :title, presence: true

  has_many :recipe_categories
  has_many :recipes, through: :recipe_categories
end
