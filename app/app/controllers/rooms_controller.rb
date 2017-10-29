class RoomsController < ApplicationController

    def show
        @current_user = current_user
        user = User.find(params[:id])
        @user = User.user_data(user)
        @profile = UserProfile.userProfileData(params[:id])
        if @user["title"] == nil
            @user["title"] = "Add a title"
        end
        if @profile["about"] == nil
            @profile["about"] = "Share some details about yourself"
        end
    end

end
