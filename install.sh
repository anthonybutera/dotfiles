#!/bin/sh
# ln -sf /path/to/dotfile  /path/to/destination

# sudo apt install vim neovim

ME="$(/usr/bin/id -run)"

# User
ln -sf $HOME/dotfiles/bash_aliases  $HOME/.bash_aliases
ln -sf $HOME/dotfiles/bashrc        $HOME/.bashrc
ln -sf $HOME/dotfiles/nanorc        $HOME/.nanorc
ln -sf $HOME/dotfiles/tmux.conf     $HOME/.tmux.conf
ln -sf $HOME/dotfiles/vimrc         $HOME/.vimrc
ln -sf $HOME/dotfiles/zshrc         $HOME/.zshrc

ln -sf $HOME/vim           $HOME/.vim
ln -sf $HOME/nvim          $HOME/.config/nvim

# Root
sudo ln -sf /home/$ME/dotfiles/bash_aliases  /root/.bash_aliases
sudo ln -sf /home/$ME/dotfiles/bashrc        /root/.bashrc
sudo ln -sf /home/$ME/dotfiles/nanorc.root   /root/.nanorc
sudo ln -sf /home/$ME/dotfiles/vimrc         /root/.vimrc
sudo ln -sf /home/$ME/dotfiles/zshrc         /root/.zshrc


# Install Vim-Plug if necessary
# - https://github.com/junegunn/vim-plug

if [ ! -f $HOME/.vim/autoload/plug.vim ]; then
    curl -kfLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
fi
