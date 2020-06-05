#!/bin/sh

ME="$(/usr/bin/id -run)"


# ==============================
# Check for package installation
# ==============================

for package in {wget,curl,zsh,nano,tmux,neovim,neomutt,mc,qutebrowser,rofi,terminator,w3m,htop} ; do sudo apt install --no-install-recommends -y $package ;done


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
sudo ln -sf /home/$ME/nvim/init.vim           /root/.vimrc
sudo ln -sf /home/$ME/dotfiles/zshrc          /root/.zshrc

sudo ln -sf /home/$ME/dotfiles/nvim           /root/.config/nvim 
sudo ln -sf /home/$ME/dotfiles/nanorc         /root/.nanorc
sudo ln -sf /home/$ME/dotfiles/w3m_keymap     /root/.w3m_keymap


echo "All done. Enjoy!"
