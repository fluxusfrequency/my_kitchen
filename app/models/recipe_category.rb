class RecipeCategory < ActiveRecord::Base
  validates :recipe, presence: true
  validates :category, presence: true

  belongs_to :recipe
  belongs_to :category
end
