# # Source Primary Files

# Load the shell dotfiles, and then some:
# * ~/.path can be used to extend `$PATH`.
# * ~/.extra can be used for other settings you don’t want to commit.
for file in ~/.{path,bash_prompt,exports,aliases,functions,extra}; do
	[ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;





# # Globbing & Autocomplete

# Case-insensitive globbing (used in pathname expansion)
shopt -s nocaseglob;

# Append to the Bash history file, rather than overwriting it
shopt -s histappend;

# Autocorrect typos in path names when using `cd`
shopt -s cdspell;

# Enable some Bash 4 features when possible:
# * `autocd`, e.g. `**/qux` will enter `./foo/bar/baz/qux`
# * Recursive globbing, e.g. `echo **/*.txt`
for option in autocd globstar; do
	shopt -s "$option" 2> /dev/null;
done;

# Add tab completion for many Bash commands
if which brew &> /dev/null && [ -f "$(brew --prefix)/share/bash-completion/bash_completion" ]; then
	source "$(brew --prefix)/share/bash-completion/bash_completion";
elif [ -f /etc/bash_completion ]; then
	source /etc/bash_completion;
fi;

# Enable tab completion for `g` by marking it as an alias for `git`
if type _git &> /dev/null && [ -f /usr/local/etc/bash_completion.d/git-completion.bash ]; then
	complete -o default -o nospace -F _git g;
fi;

# Add tab completion for SSH hostnames based on ~/.ssh/config, ignoring wildcards
[ -e "$HOME/.ssh/config" ] && complete -o "default" -o "nospace" -W "$(grep "^Host" ~/.ssh/config | grep -v "[?*]" | cut -d " " -f2- | tr ' ' '\n')" scp sftp ssh;

# Add tab completion for `defaults read|w~~rite NSGlobalDomain`
# You could just use `-g` instead, but I like being explicit
complete -W "NSGlobalDomain" defaults;

# Add `killall` tab completion for many of my apps
complete -o "nospace" -W "1Password 'Affinity Designer' 'Affinity Photo' Airmail Alfred Amphetamine 'App Store' Atom 'Atom Beta' 'Bartender 3' BBEdit Bear BetterTouchTool BitBar Blender Calendar Coda CodeRunner Contacts ControlPlane Copied Dash 'Data Rescue 4' 'DEVONthink Pro' Discord Dock Docker 'Dropzone 3' duet Fantastical Finder Firefox FirefoxDeveloperEdition Flume FoldingText Forklift Franz Gitter 'Google Chrome' 'Google Chrome Canary' Hyper 'iA Writer' iMazing iTunes Kaleidoscope Karabiner-Elements 'Keyboard Maestro Engine' Mail 'Marked 2' 'Memory Clean' Messeges MindNode Monosnap 'Parallels Desktop' Pixave PopClip Safari Readkit Reeder 'Safari Technology Preview' Sketch Skype Slack SnippetsLab 'Sublime Text' SystemUIServer Terminal TextExpander Textual Things Tower Trello Tweetbot Typora Ulysses VirtualBox Xcode Yoink" killall;





# # Utility Helpers

# Color LS
# https://github.com/athityakumar/colorls
source $(dirname $(gem which colorls))/tab_complete.sh

# Basher
# https://github.com/basherpm/basher
eval "$(basher init -)"
~
# fasd
# https://github.com/clvv/fasd
eval "$(fasd --init auto)"

# The Fuck
# https://github.com/nvbn/thefuck#manual-installation
eval $(thefuck --alias)

# swiftenv
if which swiftenv > /dev/null; then eval "$(swiftenv init -)"; fi
