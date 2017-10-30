class NotificationsController < ApplicationController
    
    def create
        user = User.find(params[:notification][:user_id])
        puts "userrr"
        puts user
        @notification = user.notifications.new(notification_params)
        @notification.notifiable_type = params[:notifiable_type][:notifiable_type]
        
        respond_to do |format|
            if @notification.save!
                puts "saved"
                format.json { render :show, status: :created, location: @notification }
            else
                puts "not saved"
                render json: @notification.errors, status: :unprocessable_entity
            end
        end
    end

    private

        def notification_params
            params.require(:notification).permit(:notified_by, :user_id)
        end
        def notifiable_type_params
            params.require(:notifiable_type).permit(:notifiable_type)
        end
end
