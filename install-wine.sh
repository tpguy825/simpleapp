#!/bin/bash

sudo dpkg --add-architecture i386

curl -fsSL  https://dl.winehq.org/wine-builds/Release.key
sudo apt-key add Release.key

sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu/

sudo apt-add-repository https://dl.winehq.org/wine-builds/ubuntu/
sudo apt-get update

wget -O Release2.key https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/xUbuntu_18.04/Release.key
sudo apt-key add Release2.key

sudo apt-add-repository 'deb https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/xUbuntu_18.04/ ./'

sudo apt-get install -y --install-recommends winehq-stable
sudo apt-get install -y winetricks
sudo apt-get install -y winbind
sudo apt-get install -y wine32
sudo apt-get install -y libwine:i386
