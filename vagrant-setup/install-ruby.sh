#!/usr/bin/env bash

 source $HOME/.rvm/scripts/rvm

rvm install 2.2.5

 shift

 if (( $# ))
 then gem install $@
 fi

 rvm cleanup all

 gem install bundler