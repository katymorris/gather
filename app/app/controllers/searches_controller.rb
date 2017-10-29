class SearchesController < ApplicationController

  def index
    @users = User.search(params[:q]).to_json
    @current_user = current_user
    render template: 'searches/index' 
  end 

  private

  def search_params
      params.permit(:q)
  end
end
