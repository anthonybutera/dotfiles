#!/bin/sh
# ln -sf /path/to/dotfile  /path/to/destination

# User
ln -sf ./bash_aliases  $HOME/.bash_aliases
ln -sf ./bashrc        $HOME/.bashrc
ln -sf ./nanorc        $HOME/.nanorc
ln -sf ./tmux.conf     $HOME/.tmux.conf
ln -sf ./vimrc         $HOME/.vimrc
ln -sf ./zshrc         $HOME/.zshrc
ln -sf ./vim           $HOME/.vim
ln -sf ./nvim          $HOME/.config/nvim

# Root
ln -sf ./bash_aliases  /root/.bash_aliases
ln -sf ./bashrc        /root/.bashrc
ln -sf ./nanorc.root   /root/.nanorc
ln -sf ./vimrc         /root/.vimrc
ln -sf ./zshrc         /root/.zshrc
