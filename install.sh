#!/bin/sh

ME="$(/usr/bin/id -run)"

sudo mv /etc/apt/sources.list /etc/apt/sources.list.WORKING && \
  sudo cp /home/$ME/dotfiles/sources.list /etc/apt/sources.list && \
  sudo apt update

# ==============================
# Check for package installation
# ==============================

for package in firefox-esr nmap wget curl zsh zsh-syntax-highlighting nano git fzf tmux neovim neomutt python3 python3-pip newsboat mc terminator w3m htop bashtop glances rtorrent qbittorent-nox mosh neofetch; 
  do if [ -f /usr/bin/$package ] || [ -f /bin/$package ];
        then echo "$package is here, boss"; 
        else echo; echo "Installing $package now, dawg"; 
          sudo apt install --no-install-recommends -y $package;  echo; 
     fi; 
  done; echo

# Install Exa
if ! [ -f $(whereis exa) ]; then
    echo "Exa has taken a hike. Gettin' it back."
      sudo apt install -y cargo && \
      sudo cargo install exa
fi


# Install Vivaldi Browser 
echo Checking for Vivaldi Browser installation ...
if ! [ $(sudo dpkg-query -l vivaldi) ]; then
  echo "No Vivaldi in sight. Installing it."; 
    wget -qO- https://repo.vivaldi.com/archive/linux_signing_key.pub | sudo apt-key add - && \
    sudo add-apt-repository 'deb https://repo.vivaldi.com/archive/deb/ stable main' && \
    sudo apt update && \ 
    sudo apt install vivaldi && \ 
    sudo apt -f install
fi

# Install TUIR (Terminal UI For Reddit)
  # Using Python
     # pip3 install tuir

  # Install it from GitLab 
     # git clone git@gitlab.com:ajak/tuir.git && cd tuir && python setup.py install



if [[ $(uname --kernel-release) = *Microsoft* ]]; then
  setx.exe WSLUSER 'USERPROFILE/up:SystemRoot/up:WIN_USER'
  setx.exe WSLENV 'WSLUSER/up'
  echo "Don't forget to reboot the system for the ENV variable changes to take effect. Vivaldi won't like you otherwise."
fi

# Install Vim-Plug if necessary
# - https://github.com/junegunn/vim-plug

if ! [ -f $HOME/dotfiles/nvim/autoload/plug.vim ]; then
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
ln -sf $HOME/dotfiles/ranger             $HOME/.config/ranger
ln -sf $HOME/dotfiles/rofi               $HOME/.config/rofi
ln -sf $HOME/dotfiles/terminator         $HOME/.config/terminator
ln -sf $HOME/dotfiles/tmux.conf          $HOME/.tmux.conf
ln -sf $HOME/dotfiles/tuir               $HOME/.config/tuir
ln -sf $HOME/dotfiles/w3m                $HOME/.w3m
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
echo "All done. Make sure to reboot if you're on WSL to set the WSLUSER environmental variable. Enjoy!"
