# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create
user.first_name = "Katy"
user.last_name = "Morris"
user.email = 'katy@null.com'
user.password = 'password'
user.username =  Faker::Pokemon.name
user.save!

50.times do
	user = User.create
	user.first_name = Faker::Name.first_name
	user.last_name = Faker::Name.last_name
	user.email = Faker::Internet.email
	user.password = 'password'
	user.username =  Faker::Pokemon.name
	user.save!
end


# User.create(
# 	email: "katym@null.com",
# 	encrypted_password: "password",
# 	first_name: "Katy",
# 	last_name: "Morris",
# 	username: Faker::Pokemon.name
# )

# 50.times do 
# 	User.create!(
# 		username: Faker::Pokemon.name,
# 	  	first_name: Faker::Name.first_name,
# 	  	last_name: Faker::Name.last_name,
# 	  	email: Faker::Internet.email,
# 	  	password: "password"
# 	)
# end