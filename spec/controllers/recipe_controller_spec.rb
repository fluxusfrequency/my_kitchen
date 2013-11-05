require 'spec_helper'

describe RecipeController do
  controller = RecipeController.new
  params = {:title => 'Salsa'}

  it { should respond_to :index }
  it { should respond_to :new }
  it { should respond_to :create }
  it { should respond_to :show }
  it { should respond_to :update }
  it { should respond_to :destroy }

  controller.index { should include_json({"title" => "Salsa"}) }
  controller.new { should include_json({"title" => "Salsa"}) }
  controller.create { should include_json({"title" => "Salsa"}) }
  controller.update { should include_json({"title" => "Salsa"}) }
  controller.destroy
  # last_response.body { should match '200' }
end
