require 'spec_helper'

describe Ingredient do
  it { should validate_presence_of :title }
  it { should have_many :recipes }
end
