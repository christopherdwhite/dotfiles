// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {

	config: {

		// # Application Settings ==============================================

		// choose either "stable" for receiving highly polished, or "canary" for less polished but more frequent updates
		updateChannel: 'stable',


		// # UI ================================================================

		// ## UI: Text ---------------------------------------------------------

		// default font size in pixels for all tabs
		fontSize: 12,

		// font family with optional fallbacks
		fontFamily: '"Input Mono", Hack, "Source Code Pro", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

		// terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
		cursorColor: 'rgba(248,28,229,0.8)',

		// `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
		cursorShape: 'BEAM',

		// set to true for blinking cursor
		cursorBlink: true,

		// ## UI: Default Colors -----------------------------------------------

		// color of the text
		foregroundColor: '#fff',

		// terminal background color
		backgroundColor: 'rgb(0,0,0)',            // Black
		// backgroundColor: 'rgb(255,255,255)'       // White
		// backgroundColor: 'rgba(0,0,0,0.1)',       // Tranparent Black
		// backgroundColor: 'rgba(255,255,255.0.1)', // Tranparent White

		// border color (window, tabs)
		borderColor: '#333',

		// the full list. if you're going to provide the full color palette, including the 6 x 6 color cubes and the grayscale map, just provide an array here instead of a color map object
		colors: {
			black: '#000000',
			red: '#ff0000',
			green: '#33ff00',
			yellow: '#ffff00',
			blue: '#0066ff',
			magenta: '#cc00ff',
			cyan: '#00ffff',
			white: '#d0d0d0',
			lightBlack: '#808080',
			lightRed: '#ff0000',
			lightGreen: '#33ff00',
			lightYellow: '#ffff00',
			lightBlue: '#0066ff',
			lightMagenta: '#cc00ff',
			lightCyan: '#00ffff',
			lightWhite: '#ffffff'
		},

		// ## UI: Window -------------------------------------------------------

		// custom css to embed in the main window
		css: '',

		// custom css to embed in the terminal window
		termCSS: `
			/* hyperlinks */
			x-row>span a {
				color: rgb(127, 127, 127);
			}

			x-screen a.hover {
				text-decoration: underline;
			}
		`,

		// set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus default: `false` on Linux, `true` on Windows (ignored on macOS)
		showHamburgerMenu: '',

		// set to `false` if you want to hide the minimize, maximize and close buttons additionally, set to `'left'` if you want them on the left, like in Ubuntu
		// default: `true` on windows and Linux (ignored on macOS)
		showWindowControls: '',

		// custom padding (css format, i.e.: `top right bottom left`)
		padding: '12px 14px',


		// # Shell =============================================================

		// the shell to run when spawning a new session (i.e. /usr/local/bin/fish) if left empty, your system's login shell will be used by default
		//
		// Windows
		// - Make sure to use a full path if the binary name doesn't work
		// - Remove `--login` in shellArgs
		//
		// Bash on Windows
		// - Example: `C:\\Windows\\System32\\bash.exe`
		//
		// Powershell on Windows
		// - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
		shell: '',

		// for setting shell arguments (i.e. for using interactive shellArgs: ['-i']) by default ['--login'] will be used
		shellArgs: ['--login'],

		// for environment variables
		env: {},


		// # Behavior ==========================================================

		// set to false for no bell
		bell: 'SOUND',

		// if true, selected text will automatically be copied to the clipboard
		copyOnSelect: true,

		// if true, on right click selected text will be copied or pasted if no selection is present (true by default on Windows)
		// quickEdit: true

		// URL to custom bell
		// bellSoundURL: 'http://example.com/bell.mp3',

		// for advanced config flags please refer to https://hyper.is/#cfg


		// # Theme Settings ====================================================

		// ## Theme Settings: Light Themes -------------------------------------

		// hyper-one-light
		enableVibrancy: true,    // enable the light vibrancy effect:

		// ## Theme Settings: Dark Themes --------------------------------------

		// an-old-hype
		themeSettings: {
			opacity: 1,           // do not make background transparent (default: 0.9)
			style: 'yoda',        // switch from luke's orange uniform to master Yoda
			tabActiveMarker: '⌘', // change the character that mars a tab active
		},

		// # Package Settings ==================================================

		// ## Package Settings: Behavior ---------------------------------------

		// hypercwd
		hypercwd: {
			initialWorkingDirectory: '~/', // the path to open the first terminal session
		},

		// hyperlinks
		hyperlinks: {
			// Sets the location to open a clicked link. Holding the meta key while clicking will use the alternate target.
			// `true` - open links in the default browser
			// `false` - opens link in the current Hyper pane
			defaultBrowser: false,

			// changes the action performed when clicking on a link IF set, holding the meta key while clicking will open the link based on the defaultBrowser value.
			// `open` - opens the link
			// `copy` - pastes the link to your clipboard
			// `ignore` - ignore non-meta clicks on links
			clickAction: 'ignore',
		},

		// hyper-alternatescroll
		alternateScroll: {
			scrollSpeed: 80, // tweak the scroll speed. 1 to 100 is supported
		},

		// hyper-broadcast
		broadcast: {
			debug: false,
			hotkeys: {
				selectCurrentPane: 'Command+Alt+Shift+B',
				selectCurrentTabPanes: 'Command+Alt+B',
				selectAllPanes: 'Command+Shift+B',
				toggleCurrentPane: 'Command+Alt+Control+Shift+B'
			},
			indicatorStyle: {
				position: 'absolute',
				top: 5,
				right: 10,
				borderRadius: '50%',
				width: '10px',
				height: '10px',
				background: 'red'
			},
		},

		// hyper-confirm
		confirmQuit: true, // The quit confirmation dialog is disabled by default.

		// hyper-pane
		paneNavigation: {
			debug: false,
			hotkeys: {
				navigation: {
					up: 'ctrl+alt+up',
					down: 'ctrl+alt+down',
					left: 'ctrl+alt+left',
					right: 'ctrl+alt+right',
				},
				jump_prefix: 'ctrl+alt',       // completed with 1-9 digits

				// added to jump and navigation hotkeys for pane permutation
				permutation_modifier: 'shift',

				maximize: 'meta+enter',
			},
			showIndicators: true,              // show pane number
			indicatorPrefix: '^⌥',             // will be completed with pane number
			indicatorStyle: {                  // added to indicator <div>
				position: 'absolute',
				top: 0,
				left: 0,
				fontSize: '10px',
			},

			// set to true and focus will change when mouse cursor enters into an another pane.
			focusOnMouseHover: false,
		},

		// hyper-startup
		// include bash commands to be executed on startup
		// commands: ['echo first command', 'echo second command']

		// ## Package Settings: UI ---------------------------------------------

		// ### Package Settings: UI: Tabs --------------------------------------

		// hyper-tab-icons
		tabIcons: {
			activeStyle: {
				// this object can be any CSSStyleDeclaration allowed.
				// default: `opacity 200ms ease-in`
				transition: 'opacity 200ms ease-in',
			},
			// this object can be any CSSStyleDeclaration allowed.
			inactiveStyle: {
				color: '#000', // default: `#fff`
				opacity: 0.3,  // default: `0.3`
			},
			// map of icon to array of process names. see repo for possible icons and defaults
			mapIcons: {
				// examples:
				// nodejs: ['node'],
				// docker: ['docker-compose'],
			},
			// map of process name to color string. see repo for defaults
			mapColors: {
				// examples:
				// shell: '#000',
				// bash: 'rgb(34, 44, 47)',
			},
			// toggles icon colors. inherits color from current CSS applied to tab text magically.
			// default: `false`
			disableColors: false,

			// the regex used to capture the process name in the title.
			// default: `/^(.*?) /`
			processNameRegex: '/^(.*?) /',

			// alternatively supply an object with the properties source and flags.
			// processNameRegex: {
			// 	source: '^(.*?) ',
			// 	flags: '',
			// },

			// the index of the match out of the array of matches made by `processNameRegex`
			// an index of 0 is the full match made by the regex.
			// an index of 1 or more is used to get an exact match from one of the matching groups.
			processNameMatch: 1,
		},

		// hyper-tabs-enhanced
		hyperTabs: {
			trafficButtons: true,    // enable traffic buttons. default: `false`
			border: true,            // enable border. default: `false`
			tabIcons: true,          // enable tab icons. default: `true`
			tabIconsColored: true,   // enable colored tab icons. default: `false`
			activityColor: 'salmon', // change activity color
			closeAlign: 'left',      // align close button right. default: `left`
			activityPulse: false,    // enable activity pulse. default: `true`
		},

		// ### Package Settings: UI: Text --------------------------------------



		// ### Package Settings: UI: Visor -------------------------------------

		// hyperterm-overlay
		overlay: {

			alwaysOnTop: true,     // makes Hyperterm Overlay window stay always on top. default: `true`
			animate: true,         // enable animation when show and hide the window. default: `true`
			hasShadow: false,      // controls the default macOS window shadows. default: `false`
			hideDock: false,       // removes the Hyper dock icon. It works only when the unique option is activated. default: `false`
			hideOnBlur: false,     // hides the Hyperterm Overlay when it loses focus. default: `false`
			position: 'top',       // choose where Hyperterm Overlay will be positioned: top, bottom, left or right. default: `top`
			primaryDisplay: false, // show Hyperterm Overlay only on primary display. default: `false`
			resizable: false,      // allow the Hyperterm Overlay be resizable. default: `false`
			startAlone: false,     // makes HyperTerm Overlay the unique window displayed when started. default: `false`
			startup: false,        // open HyperTerm Overlay on Hyper startup. default: `true`
			tray: true,            // add icon to the system notification area, for access HyperTerm Overlay. default: `true`
			unique: false,         // makes HyperTerm Overlay the unique window of Hyper. any other window will be removed. default: false

			// specify one or more hotkeys to show and hide the HyperTerm Overlay (see: Accelerator documentation)
			// default: `['Option+Space']`
			hotkeys: ['Shift+Control+Option+Command+Space'],

			// the size of HyperTerm Overlay when it is showing.
			// the possible values are a `number` or a `float`.
			// if is is a number, it represents the size um pixels.
			// else, if it is a float, it means the percentage of the screen.
			size: 0.5,
		},

		// hyperterm-summon
		summon: {
			hideDock: false,                        // hide the Hyper icon in the dock and app switcher. default: `false`
			hideOnBlur: false,                      // hide the Hyper when window loses focus. default: `true`
			hotkey: 'Control+Option+Command+Space', // shortcut to toggle Hyper window visibility. default: `Ctrl+;`
		},

		// ### Package Settings: UI: Window ------------------------------------

		// hyper-always-on-top
		alwaysOnTop: {
			debug: false,
			default: false, // enabled on application start
		},

		// hyper-statusline
		hyperStatusLine: {
			dirtyColor: '#ffff00',   // change git dirty color
			aheadColor: '#0066ff',   // change git ahead color
			footerTransparent: true, // disable footer transparency
		},

		// hyper-vsplit-fix
		vsplit_fix: {
			vHeight: 34, // in pixels
		},
	},


	// # Plugins ===============================================================

	// a list of plugins to fetch and install from npm
	// format: [@org/]project[#version]
	// examples:
	//	`hyperpower`
	//	`@company/project`
	//	`project#1.0.1`

	plugins: [

		// ## Plugins: Themes --------------------------------------------------

		// ### Plugins: Themes: Light Themes -----------------------------------

		// 'hyperterm-candy',
		// delicious light theme with candy colors for Hyper.
		//
		// notes:
		// don't love this theme overall but the color scheme is extremely bright while still being readable and matches well with Brackets color schemes.
		//
		// https://www.npmjs.com/package/hyperterm-candy

		// 'hyper-apex',
		// monochrome Hyper theme based on the Apex Atom theme
		//
		// notes:
		// gorgeous theme for very specefic situations
		//
		// https://www.npmjs.com/package/hyper-apex

		// 'hyper-native',
		// this theme will make your instance of Hyper look like macOS' native Terminal app
		//
		// notes:
		// don't love this theme for day-to-day use but it may be nice for special occasions
		//
		// https://www.npmjs.com/package/hyper-native

		'hyper-one-light',
		// Atom One Light theme for Hyper
		//
		// notes:
		// my default light theme, colors are mildly muted but nice, theme is great and it support an option to enable and disable vibrancy.
		//
		// https://www.npmjs.com/package/hyper-one-light

		// ### Plugins: Themes: Dark Themes ------------------------------------

		// 'an-old-hype',
		// “Hyper theme inspired by a galaxy far far away... based on An Old Hope - a splendid atom syntax theme by Jesse Leite”
		//
		// notes:
		// for some reason I don't love this as much as I love the atom syntax theme but I just don't.
		// it is useful for matchings though.
		//
		// https://www.npmjs.com/package/an-old-hype

		// 'hyper-monochrome',
		// dark, transparent monochrome theme
		//
		// notes:
		// gorgeous theme for very specefic situations
		//
		// https://www.npmjs.com/package/hyper-monochrome

		// 'hyper-atom-dark-transparent',
		// Hyper theme based on the Atom One Dark theme.
		//
		// notes:
		// this is a nice, muted dark theme with easily readable text. transparency however is not currently working for me.
		//
		// https://www.npmjs.com/package/hyper-atom-dark-transparent

		// 'hyper-firenokai',
		// a theme for Hyper that combines the best of Evan Sims' hyper-firewatch theme with the best of Nikolay Kostyurin's hyper-monokai-vibrancy theme.
		//
		// notes:
		// wonderful colors, easily readable against a dark background and it includes working vibrancy
		//
		// https://www.npmjs.com/package/hyper-firenokai

		// ## Plugins: Behavior ------------------------------------------------

		'hypercwd',
		// opens new tabs with the same directory as the current tab in Hyper for OS X, Linux and Windows.
		//
		// notes:
		// uses configurable path for first session, then uses the path of the active session for subsequent sessions.
		//
		// https://www.npmjs.com/package/hypercwd

		'hyperlayout',
		// layout presets for Hyper
		//
		// notes:
		// hyperlayout is a somewhat complicated plugin because it can be set on a project basis through a .hyperlayout or package.json file or globally.
		// there is also more than one way to configure layouts, see documentation for details.
		//
		// https://www.npmjs.com/package/hyperlayout

		'hyperlinks',
		// extension for Hyper that automatically links URLs.
		//
		// notes:
		// display options are in the termCSS section below, not in the config.
		//
		// https://www.npmjs.com/package/hyperlinks

		'hyperterm-1password',
		// extension for HyperTerm that adds 1Password integration.
		//
		// notes:
		// AgileBits recently removed the setting preventing users from allowing access by unsinged browsers that was required for the plugin to work.
		// hopefullly, there will be another way to implement 1Password access with this plugin in a rewritten version.
		//
		// https://www.npmjs.com/package/hyperterm-1password

		'hyperterm-alternatescroll',
		// mousewheel/trackpad scrolling for alternate screen. (less, git log, nano, etc...)
		// https://www.npmjs.com/package/hyperterm-alternatescroll

		'hyperterm-safepaste',
		// makes pasting into hyperterm safe
		//
		// notes:
		// removes whitespace and dollar sign prompt characters at the beginning of a single line paste and trims any newline characters.
		// if the paste is multiple lines it pops up a text entry window allowing you to edit the text before sending to the prompt and executing any commands.
		//
		// https://www.npmjs.com/package/hyperterm-safepaste

		'hyper-broadcast',
		// extension for Hyper.app to broadcast user inputs to multiple terms.
		//
		// notes:
		// you can enable broadcast individually or across all sessions simultaneously.
		//
		// https://www.npmjs.com/package/hyper-broadcast

		// 'hyper-confirm',
		// hyper-confirm is a plugin for Hyper (formerly HyperTerm) that shows a confirmation dialog before quitting Hyper.
		//
		// notes:
		// this extension is buggy, when changing Hyper configuration it can pop up dozens of confirmation dialogs but seems to work fine under normal use.
		//
		// https://www.npmjs.com/package/hyper-confirm

		'hyper-pane',
		// extension for Hyper to enhance pane navigation.
		// navigate through panes with arrows, jump directly to a specific pane with digit, change focus on mouse hover or temporarily maximize a pane.
		// https://www.npmjs.com/package/hyper-pane

		'hyper-search',
		// extension for Hyper that allows you to search text in your terminal.
		// https://www.npmjs.com/package/hyper-search

		'hyper-startup',
		// this is an extension for Hyper, which executes commands when Hyper launches.
		// https://www.npmjs.com/package/hyper-startup

		'hyper-log-actions',
		// log all actions from hyperterm in the dev console
		// https://www.npmjs.com/package/hyper-log-actions

		// ## Plugins: Files ---------------------------------------------------

		'hyper-markdown-preview',
		// a plugin to preview markdown files in your Hyper term.
		// https://www.npmjs.com/package/hyper-markdown-preview

		// ## Plugins: Integrations --------------------------------------------

		'hyperwakatime',
		// hyperterm plugin for Wakatime
		//
		// notes:
		// this plugin uses the standard Wakatime dotfiles most other editors use.
		//
		// https://www.npmjs.com/package/hyperwakatime

		// ## Plugins: UI ------------------------------------------------------

		// ### Plugins: UI: Background -----------------------------------------

		// 'hyper-transparent',
		// Hyper plugin to easily set window transparency and vibrancy.
		//
		// notes:
		// in general, theme-level implementation usually seems to work better but this can be used for dark themes that don't support transparency and vibracy. this plugin works very poorly with light themes.
		//
		// https://www.npmjs.com/package/hyper-transparent

		// 'hyper-transparent-dynamic',
		// dynamically set the backgroundColor with transparency and apply vibrancy. compatible with any theme, pulls in existing value and adds alpha.
		//
		// notes:
		// this does not include any options but may be more stable than hyper-transparent where more customization isn't needed.
		//
		// https://www.npmjs.com/package/hyper-transparent-dynamic

		// ### Plugins: UI: Menus ----------------------------------------------

		'hyper-always-on-top',
		// extension for Hyper.app to add a menu item to keep application windows always on top.
		// https://www.npmjs.com/package/hyper-always-on-top

		// ### Plguins: UI: Tabs -----------------------------------------------

		// 'hyperterm-close-on-left',
		// places the close button on the left of the tabs for themes that don't default to it
		// https://www.npmjs.com/package/hyperterm-close-on-left

		// 'hyperterm-mactabs',
		// tab style enhancements for Hyper inspired by macOS
		// this plugin is intended to be compatible with other themes and will attempt to override any tab styles implemented by other plugins.
		// https://www.npmjs.com/package/hyperterm-mactabs

		// 'hyper-tabs-enhanced',
		// enhanced tabs plugin for Hyper. matches any theme.
		// https://www.npmjs.com/package/hyper-tabs-enhanced

		// 'hyper-tab-icons',
		// icons in the header tabs for the current running process in Hyper.
		// https://www.npmjs.com/package/hyper-tab-icons

		// ### Plugins: UI: Text -----------------------------------------------

		'hyper-font-smoothing',
		// extension for subpixel-antialiased font smoothing in hyper
		// https://www.npmjs.com/package/hyper-font-smoothing

		// 'hyper-nobold',
		// this is just a simple addon for Hyper to remove bold text from terminal output.
		// https://www.npmjs.com/package/hyper-nobold

		// ### Plugins: UI: Visor ----------------------------------------------

		// visor notes:
		// These two packages conflict with each other and should not be used simultaneously.
		// hyperterm overlay is a much more mature solution with a few issues like window position and size but hyperterm-summon seems to be under active development and may improve.

		'hyperterm-overlay',
		// a complete and customizable solution for a permanent / dropdown / hotkey / overlay window in your Hyper, accessible via hotkeys and/or toolbar icon (tray).
		// https://www.npmjs.com/package/hyperterm-overlay

		// 'hyperterm-summon',
		// summon your hyper windows with a system-wide hotkey.
		// https://www.npmjs.com/package/hyperterm-summon

		// ### Plugins: UI: Window ---------------------------------------------

		// 'hyper-simple-highlight-active-session',
		// dims panes not currently in focus
		//
		// notes:
		// does not work with transparency/vibrancy because it sets opts.transparent to faults and sets opasity on `.term_fit` and `.term_active`.
		//
		// https://www.npmjs.com/package/hyper-simple-highlight-active-session

		'hyper-statusline',
		// status line plugin for Hyper. shows clickable & useful information. matches any theme.”
		// https://www.npmjs.com/package/hyper-statusline

		'hyper-vsplit-fix',
		// fixes the vertical split border in hyper
		//
		// notes:
		// this generall improves the look of most themes but looks weird with most tabs.
		//
		// https://www.npmjs.com/package/hyper-vsplit-fix

		// ## Plugins: Overrides -----------------------------------------------

	],

	// # Local Plugins ===========================================================

	// in development, you can create a directory under `~/.hyper_plugins/local/` and include it here to load it and avoid it being `npm install`ed
	localPlugins: [],

	// # Keymaps =================================================================

	keymaps: {
		// Example
		// 'window:devtools': 'cmd+alt+o',
	}
};
