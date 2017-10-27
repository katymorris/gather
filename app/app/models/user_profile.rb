class UserProfile < ApplicationRecord
    belongs_to :user

    def self.userProfileData(id)
        profile = UserProfile.find_by("user_id")
        profileData = Hash.new
        profileData["about"] = profile.about
        return profileData
    end
end
