#################
# General Aliases
#################

alias ..='cd ../'
alias ...='cd ../../'
alias ....='cd ../../../'
alias .....='cd ../../../../'
alias ......='cd ../../../../../'
alias .......='cd ../../../../../../'
alias ........='cd ../../../../../../../'
alias .........='cd ../../../../../../../../'
alias ..........='cd ../../../../../../../../../'
alias ...........='cd ../../../../../../../../../../'
alias ............='cd ../../../../../../../../../../../'
alias .............='cd ../../../../../../../../../../../../'



alias ..='cd ../'
alias 2..='cd ../../'
alias 3..='cd ../../../'
alias 4..='cd ../../../../'
alias 5..='cd ../../../../../'
alias 6..='cd ../../../../../../'
alias 7..='cd ../../../../../../../'
alias 8..='cd ../../../../../../../../'
alias 9..='cd ../../../../../../../../../'
alias 10..='cd ../../../../../../../../../../'
alias 11..='cd ../../../../../../../../../../../'
alias 12..='cd ../../../../../../../../../../../../'




alias cmd='/mnt/c/Windows/System32/cmd.exe'
alias dmesg='dmesg --color'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias fuck='sudo !!'
alias grep='grep --color=auto'
alias History='history -t %c'
alias l='ls -CF'
alias la='ls -A'
alias ll='ls -alF'
alias ls='ls --color=auto'
alias motd='clear && cat /etc/motd'
alias mule-password-svc_mule='/mnt/c/Windows/System32/OpenSSH/ssh.exe -l svc_nsoc 10.240.29.43'
alias nano='nano -m'
alias open='xdg-open'         # Install xdg-utils
alias Ping='ping -OA -c 10'
alias powershell='/mnt/c/Program\ Files/PowerShell/7/pwsh.exe'
alias sl='ls'
alias smotd='clear && neofetch'       # Install neofetch
alias start='cmd.exe /C start $*'
alias w='w -fus'
alias watch='watch -c'
alias weather='curl http://wttr.in/tampa'   # Install curl
alias who='who | column -t'
alias whois='whois -H'          # Install whois
alias zhistory='fc -fl'

alias caps='setxkbmap -option caps:super && setxkbmap -option shift:both_capslock'

#############
# Apt Aliases
#############

alias clean='sudo apt clean'
alias autoclean='sudo apt autoclean'
alias autoremove='sudo apt autoremove'
alias install='sudo apt install --no-install-recommends'
alias localinstall='sudo dpkg -i'
alias purge='sudo apt purge'
alias remove='sudo apt remove'
alias Update='sudo -- sh -c "apt update && apt full-upgrade && apt autoremove"'
alias update='sudo apt update'
alias upgrade='sudo apt full-upgrade'
alias search='sudo aptitude search'
alias cache='sudo apt-cache search'
alias show='sudo apt show'


####################
# Networking Aliases
####################

alias sdig='dig +noall +answer +multiline'
alias smtr='sudo mtr -wr -c 1'
alias wncat='"/mnt/c/Program Files (x86)/Nmap/ncat.exe"'
alias wmtr='/mnt/c/Windows/System32/winmtr.exe'
alias wnslookup='/mnt/c/Windows/System32/nslookup.exe'
alias wnmap='"/mnt/c/Program Files (x86)/Nmap/nmap.exe"'
alias wping='/mnt/c/Windows/System32/ping.exe'
alias wssh='/mnt/c/Windows/System32/OpenSSH/ssh.exe'
alias wtelnet='/mnt/c/Windows/System32/telnet.exe'
alias wtraceroute='/mnt/c/Windows/System32/tracert.exe'


###################
# SSH / RDP Aliases
###################

alias srdesktop='rdesktop -N -a 16 -g 1280x768 -r clipboard:PRIMARYCLIPBOARD $1 '
alias xrdesktop='xfreerdp -g 1280x768 /v:$1 '
alias sssh='ssh -l root'
alias rdp='/mnt/c/Windows/System32/mstsc.exe /v:$1 '
alias mstsc='/mnt/c/Windows/System32/mstsc.exe /v:$1 '
