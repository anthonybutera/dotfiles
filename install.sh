#!/bin/sh

ME="$(/usr/bin/id -run)"


# Check for NeoVIM installation

if ! [ -x "$(command -v neovim)" ]; then
  echo "Is NeoVIM installed? If not, it will be!"
  sudo apt install neovim -y
fi


# If USER's .config folder exists, rename it and symlink to dotfiles/dot-config-files/user
echo "Checking for $HOME/.config and redirecting it ..." ;
if [ -d $HOME/.config ]; then
  mv $HOME/.config $HOME/.config-old && ln -sf $HOME/dotfiles/dot-config-files/user $HOME/.config
else
  ln -sf $HOME/dotfiles/dot-config-files/user $HOME/.config
fi


# If ROOT's .config folder exists, rename it and symlink to dotfiles/dot-config-files/root
echo "Checking for /root/.config and redirecting it" ; 
if sudo [ -d /root/.config ]; then
  sudo mv /root/.config /root/.config-old && sudo ln -sf /home/$ME/dotfiles/dot-config-files/root /root/.config
else
  sudo ln -sf /home/$ME/dotfiles/dot-config-files/root /root/.config
fi



# Install Vim-Plug if necessary
# - https://github.com/junegunn/vim-plug

if [ ! -f $HOME/dotfiles/dot-config-files/user/nvim/autoload/plug.vim ]; then
 curl -kfLo ~/dotfiles/dot-config-files/user/nvim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
fi



# Configure Aliases
# ln -sf /path/to/dotfile  /path/to/destination

# User
ln -sf $HOME/dotfiles/bash_aliases                           $HOME/.bash_aliases
ln -sf $HOME/dotfiles/bashrc                                 $HOME/.bashrc
ln -sf $HOME/dotfiles/dot-config-files/user/nvim/init.vim    $HOME/.vimrc
ln -sf $HOME/dotfiles/zshrc                                  $HOME/.zshrc

# ln -sf $HOME/dotfiles/nvim         $HOME/.config/nvim
# ln -sf $HOME/dotfiles/nanorc       $HOME/.nanorc
# ln -sf $HOME/dotfiles/tmux.conf    $HOME/.tmux.conf
# ln -sf $HOME/dotfiles/w3m_keymap   $HOME/.w3m_keymap


# Root
sudo ln -sf /home/$ME/dotfiles/bash_aliases                           /root/.bash_aliases
sudo ln -sf /home/$ME/dotfiles/bashrc                                 /root/.bashrc
sudo ln -sf /home/$ME/dotfiles/dot-config-files/user/nvim/init.vim    /root/.vimrc
sudo ln -sf /home/$ME/dotfiles/zshrc                                  /root/.zshrc

# sudo ln -sf /home/$ME/dotfiles/nvim          /root/.config/nvim 
# sudo ln -sf /home/$ME/dotfiles/nanorc.root   /root/.nanorc
# sudo ln -sf /home/$ME/dotfiles/w3m_keymap    /root/.w3m_keymap


echo "All done. Enjoy!"
