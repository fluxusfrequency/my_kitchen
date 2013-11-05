require 'spec_helper'

describe Recipe do
  it { should validate_presence_of :title }
  it { should have_many :ingredients }
  it { should have_one :category }
end
