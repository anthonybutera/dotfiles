#################
# General Aliases
#################

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


alias cat='batcat'
alias cargo='cargo --color=always'
alias cmd='"$(where.exe cmd.exe)"'
alias dmesg='dmesg --color'
alias egrep='grep -e --color=auto'
alias fgrep='grep -f --color=auto'
alias Firefox='firefox 2>/dev/null &'
alias gc='git commit -a --allow-empty-message'         #See Bitwarden for Git Access Token
alias gp='git push'
alias gs='git status'
alias grep='grep --color=auto'
alias gmail='neomutt'
alias helix='hx'
alias History='fc -flt "%A  %b/%d/%Y  %r" 1 | fzf --tac --height=20'
alias Less='less -N'                        # Displays line numbers
alias l='ls -CF'
alias la='ls -A'
alias ll='ls -alF'
alias ls='eza --color=always --group-directories-first "${@}"'
alias lsa='eza -ld .* || ls -ld .*'
alias lsh='eza -lh .* || ls -lh .*'
alias lsd='eza -ld */ || ls -ld */'
alias lsl='eza -lh `find . -maxdepth 1 -type l -print` || ls -lh . `-maxdepth 1 -type l -print`'
alias metasploit='msfconsole'
alias motd='clear && cat /etc/motd'
alias nano='nano || micro'
alias open='xdg-open 2>&1'                        # Install xdg-utils
alias Ping='ping -OA -c 10'
alias sl='ls'
alias smotd='clear && fastfetch'             # Install fastfetch
alias start='"$(where.exe cmd.exe)" /C start $*'
alias Updatedb='sudo updatedb --prunepaths="/mnt"'
alias vim='nvim || vim'
alias w='w -fus'
alias watch='watch -c'
alias weather='curl "http://wttr.in/lake_magdalene?u"'   # Install curl
alias who='who | column -t'
alias whois='whois -H'                      # Install whois
alias Vivaldi='vivaldi-stable 2> /dev/null &'

# alias caps='setxkbmap -option caps:super'
# alias shift='setxkbmap -option shift:both_capslock'

#############
# Apt Aliases
#############

alias clean='sudo apt clean'
alias autoclean='sudo apt autoclean'
alias autoremove='sudo apt autoremove'
alias hold='sudo apt-mark hold'
alias install='sudo apt install --no-install-recommends'
alias localinstall='sudo dpkg -i'
alias purge='sudo apt purge'
alias remove='sudo apt remove'
alias unhold='sudo apt-mark unhold'
alias Update='sudo -- sh -c "apt update && apt upgrade && apt autoremove"'
alias update='sudo apt update'
alias upgrade='sudo apt upgrade'
alias search='sudo aptitude search'
alias cache='sudo apt-cache search'
alias show='sudo apt show'


####################
# Networking Aliases
####################

alias sdig='dig +noall +answer +multiline'
alias smtr='sudo mtr -wr -c 1'
alias wncat='"$(where.exe ncat.exe)" || "/mnt/c/Program Files (x86)/Nmap/ncat.exe"'
alias wmtr='"$(where.exe winmtr.exe)" || "mnt/c/Windows/System32/winmtr.exe'
alias wnslookup='"$(where.exe nslookup.exe)" || "mnt/c/Windows/System32/nslookup.exe'
alias wnmap='"$(where.exe nmap.exe)" || "/mnt/c/Program Files (x86)/Nmap/nmap.exe"'
alias wping='"$(where.exe ping.exe)" || "/mnt/c/Windows/System32/ping.exe'
alias wssh='"$(where.exe ssh.exe)" || "/mnt/c/Windows/System32/OpenSSH/ssh.exe'
alias wtelnet='"$(where.exe telnet.exe)" || "/mnt/c/Windows/System32/telnet.exe'
alias wtraceroute='"$(where.exe tracert.exe)" || "/mnt/c/Windows/System32/tracert.exe'


###################
# SSH / RDP Aliases
###################

alias srdesktop='rdesktop -E -a 16 -g 1280x768 -r clipboard:PRIMARYCLIPBOARD $1 '
alias xrdesktop='xfreerdp -g 1280x768 /v:$1 '
alias sssh='ssh -l root'
alias rdp='/mnt/c/Windows/System32/mstsc.exe /v:$1 '
alias mstsc='/mnt/c/Windows/System32/mstsc.exe /v:$1 '


########################
# TMUX Background Colors
########################

alias tmux-black='tmux select-pane -P "bg=black, fg=white"'
alias tmux-white='tmux select-pane -P "bg=white, fg=black"'
alias tmux-blue='tmux select-pane -P "bg=colour19, fg=white"'
alias tmux-cyan='tmux select-pane -P "bg=colour24, fg=white"'
alias tmux-red='tmux select-pane -P "bg=colour52, fg=white"'
alias tmux-gold='tmux select-pane -P "bg=colour94, fg=white"'
alias tmux-green='tmux select-pane -P "bg=colour22, fg=white"'
alias tmux-gray='tmux select-pane -P "bg=colour237, fg=white"'
