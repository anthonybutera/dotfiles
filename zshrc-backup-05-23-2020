
# Customize to your needs...
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$HOME/.local.bin:/mnt/c/Windows/System32/

# PromptInit themes
autoload -Uz compinit promptinit colors && colors
compinit
promptinit


# =====================================================
# This will set the default prompt to the Walters theme
# User = green
# Root = red

THEMES_DIR=/home/anthony/dotfiles

if ! [ $(id -u) = 0 ]; then
     prompt fade green 
#     source $THEMES_DIR/themes/mortalscumbag.zsh-theme       # Green 2-lined prompt
#     source $THEMES_DIR/themes/terminalparty.zsh-theme       # Minimal 1-lined prompt, time on right
else
     prompt fade red
#     source $THEMES_DIR/themes/mrtazz.zsh-theme              # Red standard prompt

fi
# =====================================================


# Comment this out to disable weekly auto-update checks
DISABLE_AUTO_UPDATE="true"


# Sets terminal type to Xterm 256-color
export TERM=xterm-256color


# Sets BROWSER variable to Vivaldi
export BROWSER='/usr/bin/vivaldi-stable':'/mnt/c/Users/buterant/AppData/Local/Vivaldi/Application/vivaldi.exe'


# ZSH-specific aliases
alias history='fc -flt "%A  %b/%d/%Y  %r"'


# ZSH-specific options
setopt autocd
setopt autopushd
setopt nobeep
setopt extendedhistory
setopt noflowcontrol 
setopt histignoredups
setopt histignorespace
setopt histverify
setopt incappendhistory
setopt interactive
setopt menucomplete
setopt monitor
setopt promptsubst
setopt pushdignoredups
setopt sharehistory
setopt zle


# Fix CTRL + Arrow Keys issue
bindkey "^[[1;5C" forward-word
bindkey "^[[1;5D" backward-word


# History settings
HISTSIZE=100000
SAVEHIST=$HISTSIZE
HISTFILE=$HOME/.zsh_history
setopt histappend
export PROMPT_COMMAND="history -a; history -c; history -r; $PROMPT_COMMAND"


# Add blank line after each command
precmd() { print "" }


# Local syntax highlighting ( sudo apt install zsh-syntax-highlighting )
source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh


# ZSH Tab Completion - Case Insensitivity
zstyle ':completion*' menu select
zstyle ':completion:*' matcher-list '' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=*' 'l:|=* r:|=*'





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



