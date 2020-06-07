#!/bin/sh

ME="$(/usr/bin/id -run)"

sudo mv /etc/apt/sources.list /etc/apt/sources.list.WORKING && \
  sudo cp /home/$ME/dotfiles/sources.list /etc/apt/sources.list \
  sudo apt update

# ==============================
# Check for package installation
# ==============================

for package in firefox nmap wget curl zsh nano tmux neovim newsboat mc terminator w3m htop glances transmission-cli ; do if [ -f $(/usr/bin/$package) ]; then echo "$package is here, boss"; else sudo apt install --no-install-recommends -y $package; fi; done; echo


# Install NeoMutt
if [ ! -f $(/usr/bin/neomutt) ]; then
  echo "NeoMutt ain't here, chief. Installing it."; 
  sudo apt install --no-install-recommends -y $(wget -P /tmp/ http://debian-archive.trafficmanager.net/debian/pool/main/n/neomutt/neomutt_20191207+dfsg.1-1.1_amd64.deb) && sudo apt upgrade -y neomutt
fi


# Install Vivaldi Browser 
echo Checking for Vivaldi Browser installation ...
if [ ! -f $(sudo dpkg-query -l vivaldi) ]; then
  echo "Vivaldi ain't here, dawg. Installing it."; 
  wget -qO- https://repo.vivaldi.com/archive/linux_signing_key.pub | sudo apt-key add - && \
  sudo add-apt-repository 'deb https://repo.vivaldi.com/archive/deb/ stable main' && \
  sudo apt update && \ 
  sudo apt install vivaldi-stable && \ 
  sudo apt -f install
  # sudo apt install --no-install-recommends -y $(wg wet -P /tmp/ https://downloads.vivaldi.com/stable/vivaldi-stable_3.0.1874.38-1_amd64.deb)
fi


# Install Vim-Plug if necessary
# - https://github.com/junegunn/vim-plug

if [ ! -f $HOME/dotfiles/nvim/autoload/plug.vim ]; then
 curl -kfLo ~/dotfiles/nvim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
fi


# Configure Aliases
# ln -sf /path/to/dotfile  /path/to/destination

# User
ln -sf $HOME/dotfiles/bashrc             $HOME/.bashrc
ln -sf $HOME/dotfiles/bash_aliases       $HOME/.bash_aliases
ln -sf $HOME/dotfiles/mc                 $HOME/.config/mc
ln -sf $HOME/dotfiles/nano               $HOME/.config/nano
ln -sf $HOME/dotfiles/nanorc             $HOME/.nanorc
ln -sf $HOME/dotfiles/mutt/muttrc        $HOME/.muttrc
ln -sf $HOME/dotfiles/newsboat           $HOME/.config/newsboat
ln -sf $HOME/dotfiles/nvim               $HOME/.config/nvim
ln -sf $HOME/dotfiles/nvim/init.vim      $HOME/.vimrc
ln -sf $HOME/dotfiles/qutebrowser        $HOME/.config/qutebrowser
ln -sf $HOME/dotfiles/rofi               $HOME/.config/rofi
ln -sf $HOME/dotfiles/terminator         $HOME/.config/terminator
ln -sf $HOME/dotfiles/tmux.conf          $HOME/.tmux.conf
ln -sf $HOME/dotfiles/w3m                $HOME/.config/w3m
ln -sf $HOME/dotfiles/w3m/keymap         $HOME/.w3m_keymap
ln -sf $HOME/dotfiles/zshrc              $HOME/.zshrc

# Root
sudo ln -sf /home/$ME/dotfiles/bash_aliases   /root/.bash_aliases
sudo ln -sf /home/$ME/dotfiles/bashrc         /root/.bashrc
sudo ln -sf /home/$ME/dotfiles/nvim/init.vim  /root/.vimrc
sudo ln -sf /home/$ME/dotfiles/zshrc          /root/.zshrc

sudo ln -sf /home/$ME/dotfiles/nvim           /root/.config/nvim 
sudo ln -sf /home/$ME/dotfiles/nanorc.root    /root/.nanorc
sudo ln -sf /home/$ME/dotfiles/w3m/keymap     /root/.w3m_keymap


source ~/.zshrc
echo "All done. Enjoy!"
