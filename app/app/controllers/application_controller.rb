class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def search
    @users = User.search(params[:q])
    puts "users"
    puts @users
    render template: 'searches/index' 
  end 

  private

  def search_params
      params.permit(:q)
  end

end
