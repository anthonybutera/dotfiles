# Customize to your needs...
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$HOME/.local.bin:/mnt/c/Windows/System32/

# Comment this out to disable weekly auto-update checks
DISABLE_AUTO_UPDATE="true"

# PromptInit Themes
autoload -Uz compinit promptinit colors && colors
compinit
promptinit

# This will set the default prompt to the green Walters theme
prompt fade green

# Local syntax highlighting ( sudo apt install zsh-syntax-highlighting )
source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# ZSH Themes
# source /path/to/zsh/theme/mrtazz.zsh-theme
# source /path/to/zsh/theme/terminalparty.zsh-theme
# source /path/to/zsh/theme/mortalscumbag.zsh-theme



#-------- Color Manpages
export LESS_TERMCAP_mb=$'\E[01;31m'             # begin blinking
export LESS_TERMCAP_md=$'\E[01;31m'             # begin bold
export LESS_TERMCAP_me=$'\E[0m'                 # end mode
export LESS_TERMCAP_se=$'\E[0m'                 # end standout-mode
export LESS_TERMCAP_so=$'\E[01;44;33m'          # begin standout-mode - info box
export LESS_TERMCAP_ue=$'\E[0m'                 # end underline
export LESS_TERMCAP_us=$'\E[01;32m'             # begin underline



# Sets terminal type to Xterm 256-color
export TERM=xterm-256color

# Sets BROWSER variable to Vivaldi
export BROWSER='/usr/bin/vivaldi-stable':'/mnt/c/Users/buterant/AppData/Local/Vivaldi/Application/vivaldi.exe'


# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi




# for setting history length see HISTSIZE and HISTFILESIZE in bash(1) 
HISTSIZE=100000
HISTFILESIZE=200000
export HISTTIMEFORMAT=" %F  %T  "   #ORIGINAL
# export HISTTIMEFORMAT="%A  %b/%d/%y  %r  "
setopt histappend                      # append to history, don't overwrite it
export PROMPT_COMMAND="history -a; history -c; history -r; $PROMPT_COMMAND"


# WINDOWS SUBSYSTEM FOR LINUX
# - INSTALL XMING GRAPHICAL DISPLAY SERVER
export DISPLAY=:0
export LIBGL_ALWAYS_INDIRECT=1



# ======================================
# ======================================
# ======================================



# Path to your oh-my-zsh configuration.
ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/

# ZSH_THEME="mrtazz"
# ZSH_THEME="terminalparty"		# 1-lined, % symbol and right-side full working directory 
# ZSH_THEME="clean"			# 1-lined,white username:blue working directory and right-side HH:MM:SS
# ZSH_THEME="eastwood"			# 1-lined, no time displayed, aqua color prompt, prints full working directory
### ZSH_THEME="fox"				# 2-lined, time on left, prints full working directory
# ZSH_THEME="geoffgarside"		# 1-lined, aqua color, time on left, prints short directory
# ZSH_THEME="jonathan"			# 2-lined with bright colors and a turquiose bar across the command line
# ZSH_THEME="mortalscumbag"		# 2-lined, green prompt, no time display, *** CARRIAGE RETURN AFTER COMMAND RESULT OUTPUT! ***
# ZSH_THEME="pmcgee"			# 2-lined, green prompt, right-side time display, carriage return after command result output



# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
###  plugins=(zsh-syntax-highlighting command-not-found)

###  source $ZSH/oh-my-zsh.sh

