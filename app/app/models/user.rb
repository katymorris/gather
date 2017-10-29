class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:facebook]
         
  has_one :user_profile
  has_many :friendships
  has_many :friends, :through => :friendships
  has_many :friend_requests, dependent: :destroy
  has_many :pending_friends, through: :friend_requests, source: :friend

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

  #CHECK FOR FRIENDS
  #must enter as array of users
  def self.check_for_friends(users)
    users.each do |user|

    end
  end

  #DATA GATHERING

    def self.search(term)
      if term != ""
        users = User.where("first_name = ?", term)
      else
        users = User.all
      end
      user_data(users)

    end

    #accepts either a single object or an Array and gets/sends the user's relevent
    def self.user_data(users)
      userData = Array.new
      users.each do |user|
        tempHash = Hash.new
        tempHash["first_name"] = user.first_name
        tempHash["last_name"] = user.last_name
        tempHash["username"] = user.username
        tempHash["title"] = user.title
        tempHash["id"] = user.id

        userData.push tempHash
      end
      return userData
    end

  end
