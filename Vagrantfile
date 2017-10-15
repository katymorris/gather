# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/xenial64"
    # config.vm.box_url = "http://files.vagrantup.com/precise64.box"
    config.vm.hostname = "app"
    config.vm.network "private_network", ip: "192.168.33.30"

    config.vm.synced_folder "./app", "/home/vagrant/app"

    config.vm.provision :shell, path: "./vagrant-setup/mysql-setup.sh"
    config.vm.provision :shell, path: "./vagrant-setup/install-rvm.sh", args: "stable", privileged: false
    config.vm.provision :shell, path: "./vagrant-setup/install-ruby.sh", privileged: false
    config.vm.provision :shell, path: "./vagrant-setup/install-git.sh", privileged: false

end
