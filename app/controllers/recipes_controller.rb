class RecipesController < ApplicationController
  respond_to :json

  def index
    respond_with Recipe.all
  end

  def new
    @recipe = Recipe.new
    respond_with @recipe
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.save if @recipe.valid?
    respond_with @recipe 
  end

  def show
    @recipe = Recipe.find(params[:id])
    respond_with @recipe
  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update(recipe_params)
    respond_with @recipe
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    respond_with @recipe
  end

  private

  def recipe_params
    params.require(:recipe).permit("title")
  end

end
