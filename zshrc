# Path to your oh-my-zsh configuration.
ZSH=$HOME/oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/

# ZSH_THEME="mrtazz"
# ZSH_THEME="terminalparty"		# 1-lined, % symbol and right-side full working directory 
# ZSH_THEME="clean"			# 1-lined,white username:blue working directory and right-side HH:MM:SS
# ZSH_THEME="eastwood"			# 1-lined, no time displayed, aqua color prompt, prints full working directory
 ZSH_THEME="fox"			# 2-lined, time on left, prints full working directory
# ZSH_THEME="geoffgarside"		# 1-lined, aqua color, time on left, prints short directory
# ZSH_THEME="jonathan"			# 2-lined with bright colors and a turquiose bar across the command line
# ZSH_THEME="mortalscumbag"		# 2-lined, green prompt, no time display, *** CARRIAGE RETURN AFTER COMMAND RESULT OUTPUT! ***
# ZSH_THEME="pmcgee"			# 2-lined, green prompt, right-side time display, carriage return after command result output


# Comment this out to disable weekly auto-update checks
# DISABLE_AUTO_UPDATE="true"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
plugins=(zsh-syntax-highlighting command-not-found)

source $ZSH/oh-my-zsh.sh

# Customize to your needs...
export PATH=/usr/lib/lightdm/lightdm:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
export MANPAGER="/usr/bin/most -s"             # color using most
export TERM=xterm-256color
export BROWSER=google-chrome
export EDITOR=nano

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
