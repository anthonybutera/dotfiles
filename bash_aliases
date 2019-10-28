#################
# General Aliases
#################

alias chw='feh -z --bg-fill ~/Pictures/1080p/*'
alias dmesg='dmesg --color'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l='ls -CF'
alias la='ls -A'
alias ll='ls -alF'
alias ls='ls --color=auto'
alias els='exa'

alias motd='clear && cat /etc/motd'
alias nano='nano -Sm'
alias open='xdg-open'					# Install xdg-utils
alias smotd='clear && neofetch'				# Install neofetch
alias w='w -fus'
alias watch='watch -c'
alias weather='curl http://wttr.in/tampa'		# Install curl
alias who='who | column -t'
alias whois='whois -H'					# Install whois

alias caps='setxkbmap -option caps:super && setxkbmap -option shift:both_capslock'

#################
# Apt-get Aliases
#################

alias clean='sudo apt clean'
alias autoclean='sudo apt autoclean'
alias autoremove='sudo apt autoremove'
alias install='sudo apt install --no-install-recommends'
alias localinstall='sudo dpkg -i'
alias purge='sudo apt purge'
alias remove='sudo apt remove'
alias update='sudo apt update'
alias upgrade='sudo apt full-upgrade'
alias search='sudo aptitude search'
alias cache='sudo apt-cache search'
alias show='sudo apt show'


##############
# PING Aliases
##############

alias cping='ping -c 4'
alias hping='sudo hping3 --icmp -c 10 --fast'		# Install hping3
alias sping='sudo ping -f'


####################
# Networking Aliases
####################

alias sdig='dig +noall +answer +multiline'
alias smtr='sudo mtr -wr -c 1'
alias wmtr='/mnt/c/Windows/System32/winmtr.exe'
alias wnslookup='/mnt/c/Windows/System32/nslookup.exe'
alias wnmap='"/mnt/c/Program Files (x86)/Nmap/nmap.exe"'
alias wping='/mnt/c/Windows/System32/ping.exe'
alias wtraceroute='/mnt/c/Windows/System32/tracert.exe'


###################
# SSH / RDP Aliases
###################

alias srdesktop='rdesktop -N -a 16 -g 1280x768 -r clipboard:PRIMARYCLIPBOARD $1 '
alias xrdesktop='xfreerdp -g 1280x768 -sec-nla /v:$1 '
alias sssh='ssh -l root'
alias rdp='/mnt/c/Windows/System32/mstsc.exe /v: '
alias mstsc='/mnt/c/Windows/System32/mstsc.exe /v: '


