class FriendRequestsController < ApplicationController

    def create
        if current_user.friend_requests.find_by(id: params[:friend_request][:friend_id]) == nil
            @friend_request = current_user.friend_requests.new(friend_request_params)
            respond_to do |format|
                if @friend_request.save
                    format.json { render :show, status: :created, location: @friend_request }
                else
                    render json: @friend_request.errors, status: :unprocessable_entity
                end
            end
        else 
            respond_to do |format|
                format.json { render json: {} ,  status: :no_content  }
            end
        end
    end

    private
    
    # def set_friend_request
    #     @friend_request = FriendRequest.find(params[:id])
    # end
        def friend_request_params
            params.require(:friend_request).permit(:friend_id, :user_id)
        end
end
