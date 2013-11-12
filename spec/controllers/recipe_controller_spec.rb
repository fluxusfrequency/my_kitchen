require 'spec_helper'

describe RecipesController do
  before do
    @recipe1 = Recipe.create(:title => 'Salsa')
    @recipe2 = Recipe.create(:title => 'Guacamole')
  end

  it { should respond_to :index }
  it { should respond_to :new }
  it { should respond_to :create }
  it { should respond_to :show }
  it { should respond_to :update }
  it { should respond_to :destroy }

  describe 'GET /recipes' do
    it 'returns a list of recipes' do
      get :index, format: :json
      response.body.should have_json_size(2)
      response.body.should have_json_path('0/id')
      response.body.should be_json_eql(%|"Salsa"|).at_path('0/title')

      response.body.should have_json_path('1/id')
      response.body.should be_json_eql(%|"Guacamole"|).at_path('1/title')
    end
  end

  describe 'GET /recipes/new' do
    it 'returns a new recipe' do
      get :new, format: :json
      response.body.should have_json_path('id')
      response.body.should have_json_path('title')
      response.body.should have_json_path('created_at')
      response.body.should have_json_path('updated_at')
    end
  end

  describe 'POST /recipes' do
    it 'returns a new recipe' do
      post :create, recipe: {"title" => 'Quesadilla'}, format: :json
      response.body.should be_json_eql(%|3|).at_path('id')
      response.body.should be_json_eql(%|"Quesadilla"|).at_path('title')
    end
  end

  describe 'GET /recipes/:id' do
    it 'returns the attributes for a recipe' do
      get :show, id: @recipe1.id, format: :json
      response.body.should have_json_path('id')
      response.body.should be_json_eql(%|"Salsa"|).at_path('title')
    end
  end

  describe 'PUT /recipes/:id' do
    it 'updates the params of a recipe' do
      put :update, id: @recipe1.id, recipe: {"title" => 'Salsa Picante'}, format: :json
      @recipe1.reload
      @recipe1.title.should == "Salsa Picante"
      # response.body.should be_json_eql(%|1|).at_path('id')
      # response.body.should be_json_eql(%|"Salsa Picante"|).at_path('title')
    end
  end

  describe 'DELETE /recipes/:id' do
    it 'deletes a recipe' do
      count = Recipe.count
      delete :destroy, id: @recipe1.id, format: :json
      Recipe.count.should == (count - 1)
      # response.body.should be_json_eql(%|1|).at_path('id')
    end
  end

end
