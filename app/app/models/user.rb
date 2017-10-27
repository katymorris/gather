class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:facebook]
         
  has_one :user_profile

  before_create :build_default_profile

    #DEFAULT BUILDS

  def build_default_profile
    build_user_profile
    true # Always return true in callbacks as the normal 'continue' state
  end

    #AUTHENTICATION

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.first_name = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails, 
      # uncomment the line below to skip the confirmation emails.
      # user.skip_confirmation!
    end
  end

  #DATA GATHERING

    def self.search(term)
      if term != ""
        User.where("first_name = ?", term).to_json
      else
        User.all.to_json
      end
    end

    def self.userData(id)
      puts id
      puts "cool"
      user = User.find(id)
      userData = Hash.new
      userData["first_name"] = user.first_name
      userData["last_name"] = user.last_name
      userData["username"] = user.username
      userData["title"] = user.title
      userData["id"] = user.id
      return userData
    end

  end
