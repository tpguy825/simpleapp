#!/bin/bash

sudo dpkg --add-architecture i386

curl -fsSL https://dl.winehq.org/wine-builds/Release.key
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
echo "**************** Starting to add lib stuff ****************"
sudo apt-get install -y libselinux1:i386
sudo apt-get install -y libavcodec58:i386
sudo apt-get install -y libmount1:i386
sudo apt-get install -y librsvg2-2:i386
sudo apt-get install -y libpcre2-8-0:i386
sudo apt-get install -y libfaudio0:i386
sudo apt-get install -y libglib2.0-0:i386
sudo apt-get install -y libgstreamer1.0-0:i386
sudo apt-get install -y libgstreamer-plugins-base1.0-0:i386
echo "**************** Starting install of libwine ****************"
sudo apt-get install -y libwine:i386
