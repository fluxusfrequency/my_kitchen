require 'spec_helper'

describe RecipeCategory do
  it { should validate_presence_of :recipe }
  it { should validate_presence_of :category }

end
