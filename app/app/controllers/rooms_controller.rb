class RoomsController < ApplicationController

    def show
        @current_user = current_user
        puts "id"
        puts params
        @user = User.userData(params[:id])
        @profile = UserProfile.userProfileData(params[:id])
        if @user["title"] == nil
            @user["title"] = "Add a title"
        end
        if @profile["about"] == nil
            @profile["about"] = "Share some details about yourself"
        end
    end

end
