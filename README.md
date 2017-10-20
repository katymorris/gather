# Gather

Make sure to run rails 5.1 and ruby 2.2.5

Install Vagrant/Virtual Box 
SSH into box:
* -vagrant up
* -vagrant ssh
* -cd ..
* -cd vagrant
* -cd getty
* bundle install
* sudo apt-get update
* sudo apt-get install nodejs
* sudo apt-get install npm
* npm config set registry http://registry.npmjs.org/
* sudo npm install -g n
* sudo n latest
* curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
* echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
* sudo apt-get update && sudo apt-get install yarn

Webpacker must be installed BEFORE React on Rails Gem

* bundle exec rails webpacker:install
* bundle 

NOW you'll install React on Rails

* bundle exec rails webpacker:install:react
* add gem to Gemfile - gem 'react_on_rails', '~> 9.0.1'
* bundle
* commit responsitory to git (generator will not work properly if not committed)
* rails generate react_on_rails:install
* bundle
* yarn

Install Foreman for live changes
* sudo apt install ruby-foreman

* You can start the server using:
* foreman start -f Procfile.dev
* this uses port 5000
* or
* rails s -b 0.0.0.0
* this uses port 3000

* Make sure everything works by going to 192.168.33.30:3000/hello_world
