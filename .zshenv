export PATH="$PATH:$HOME/.scripts"
export EDITOR="vim"
export TERMINAL="st"
export BROWSER="chromium"
export READER="zathura"
export BIB="$HOME/Documents/LaTeX/uni.bib"

 ~/.scripts/shortcuts.sh 2>/dev/null

## Start graphical server if i3 not already running.
if [[ "$(tty)" = "/dev/tty1" ]]; then
	pgrep -x i3 || exec startx
fi
