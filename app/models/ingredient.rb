class Ingredient < ActiveRecord::Base
  validates :title, presence: true
end
