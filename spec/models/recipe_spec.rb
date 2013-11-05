require 'spec_helper'

describe Recipe do
  recipe = Recipe.create!(:title => "Salsa")
  it { should validate_presence_of :title }
  it { should have_many :ingredients }
  it { should have_one :category }
  recipe.to_json { should include_json({"title" => "Salsa"}) }
end
