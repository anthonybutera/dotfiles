
# Customize to your needs...
if [[ $(uname --kernel-release) = *Microsoft* ]]; then
 BROWSER="$(locate vivaldi.exe | grep -i appdata)"
else
 BROWSER="$(which vivaldi)"
fi


export PATH=$HOME/.local/bin/:/$HOME/.cargo/bin:$PATH
export EDITOR=$(which nvim)
export RTV_BROWSER=$BROWSER
export TUIR_BROWSER=$BROWSER

if [ $(hostname) = "SEF-SVCDSK-V6K" ]; then
  export REQUESTS_CA_BUNDLE=/etc/ssl/certs/Netskope.pem     # Netskope SSL certificate for Rooms To Go
fi


# Fix Globbing
# - https://www.bartbusschots.ie/s/2019/06/12/bash-to-zsh-file-globbing-and-no-matches-found-errors/
setopt NULL_GLOB

# PromptInit themes
autoload -Uz vcs_info compinit promptinit colors && colors
compinit
promptinit


# ==========================================================
# This will set the default prompt to the Walters theme
# Only 1 line from each section can be uncommented at a time
# User = green
# Root = red

THEMES_DIR="/home/$(/usr/bin/id -run)/dotfiles/zsh-themes"

if [ $(id -u) != 0 ]; then
     prompt fade yellow
###     source $THEMES_DIR/mortalscumbag.zsh-theme       # Green 2-lined prompt
###     source $THEMES_DIR/terminalparty.zsh-theme       # Minimal 1-lined prompt, time on right
###     source $THEMES_DIR/windows.zsh-theme             # Windows Command Prompt 
else
     prompt fade red
###     source /home/$(id -nu 1000)/dotfiles/zsh-themes/mrtazz.zsh-theme              # Red standard prompt
fi
# =====================================================


# Sets terminal type to Xterm 256-color
export TERM=xterm-256color
export COLORTERM="truecolor"

# ZSH-specific aliases
alias history='fc -flt "%b-%d-%Y  %A  %r" -500'


# History settings
HISTFILE=$HOME/.zsh_history
HISTSIZE=100000
SAVEHIST=$HISTSIZE
setopt histappend
export PROMPT_COMMAND="history -a; history -c; history -r; $PROMPT_COMMAND"


# ZSH-specific options
setopt autocd
setopt autopushd
setopt no_beep
setopt extended_history
# setopt flowcontrol 
setopt hist_ignore_dups
# setopt hist_ignore_space
setopt hist_verify
# setopt inc_append_history                 # Disable this is SHARE_HISTORY is enabled
setopt interactive
setopt menu_complete
setopt monitor
setopt prompt_subst
setopt pushd_ignore_dups
setopt share_history
setopt zle


# Fix CTRL + Arrow Keys issue
bindkey "^[[1;5C" forward-word
bindkey "^[[1;5D" backward-word


# Make CTRL + U erase to the beginning of the line
bindkey \^U backward-kill-line

# Make CTRL + K erase to the end of the line
bindkey \^K kill-line

# Add blank line after each command
precmd() { print "" }


# Local syntax highlighting ( sudo apt install zsh-syntax-highlighting )
source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh


# ZSH Tab Completion - Case Insensitivity
zstyle ':completion*' menu select
zstyle ':completion:*' matcher-list '' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=*' 'l:|=* r:|=*'


# For TMUX 
export SUPER_L='Super_L'
export ALT_L='M-'


# ======================================
# ======================================
# ======================================


#-------- Color Manpages
export LESS_TERMCAP_mb=$'\E[01;31m'             # begin blinking
export LESS_TERMCAP_md=$'\E[01;31m'             # begin bold
export LESS_TERMCAP_me=$'\E[0m'                 # end mode
export LESS_TERMCAP_se=$'\E[0m'                 # end standout-mode
export LESS_TERMCAP_so=$'\E[01;44;33m'          # begin standout-mode - info box
export LESS_TERMCAP_ue=$'\E[0m'                 # end underline
export LESS_TERMCAP_us=$'\E[01;32m'             # begin underline



# WINDOWS SUBSYSTEM FOR LINUX
# - INSTALL XMING GRAPHICAL DISPLAY SERVER
export DISPLAY=:0
export LIBGL_ALWAYS_INDIRECT=1



# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi



