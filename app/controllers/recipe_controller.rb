class RecipeController < ApplicationController

  def index
    Recipe.all
  end

  def new
    @recipe = Recipe.new
    @recipe.to_json
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.to_json
  end

  def show
  end

  def update
  end

  def destroy
  end

  def recipe_params
    # params.require(:recipe).permit(:title)
  end

end
