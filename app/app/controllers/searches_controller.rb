class SearchesController < ApplicationController
    layout "search"

  def index
    @users = User.search(params[:q])
    @hello_world_props = { name: "Stranger" }
    render template: 'searches/index' 
  end 

  private

  def search_params
      params.permit(:q)
  end
end
