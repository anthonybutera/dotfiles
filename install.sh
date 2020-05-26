#!/bin/sh
# ln -sf /path/to/dotfile  /path/to/destination


# Check for VIM/NeoVIM installation
# - sudo apt install vim neovim
for package in {neovim}; do dpkg -s $package >/dev/null 2>&1 && {echo $package is installed.} || {sudo apt install $package}; done


# Install Vim-Plug if necessary
# - https://github.com/junegunn/vim-plug

if [ ! -f $HOME/.config/nvim/autoload/plug.vim ]; then
  sh -c 'curl -kfLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
fi


# Configure Aliases

ME="$(/usr/bin/id -run)"

# User
# ln -sf $HOME/dotfiles/vim           $HOME/.vim
ln -sf $HOME/dotfiles/nvim          $HOME/.config/nvim

ln -sf $HOME/dotfiles/bash_aliases  $HOME/.bash_aliases
ln -sf $HOME/dotfiles/bashrc        $HOME/.bashrc
ln -sf $HOME/dotfiles/nanorc        $HOME/.nanorc
ln -sf $HOME/dotfiles/tmux.conf     $HOME/.tmux.conf
ln -sf $HOME/dotfiles/nvim/init.vim $HOME/.vimrc
ln -sf $HOME/dotfiles/w3m_keymap    $HOME/.w3m_keymap
ln -sf $HOME/dotfiles/zshrc         $HOME/.zshrc


# Root
sudo ln -sf /home/$ME/dotfiles/bash_aliases  /root/.bash_aliases
sudo ln -sf /home/$ME/dotfiles/bashrc        /root/.bashrc
sudo ln -sf /home/$ME/dotfiles/nanorc.root   /root/.nanorc
sudo ln -sf /home/$ME/dotfiles/nvim/init.vim /root/.vimrc
sudo ln -sf /home/$ME/dotfiles/w3m_keymap    /root/.w3m_keymap
sudo ln -sf /home/$ME/dotfiles/zshrc         /root/.zshrc




