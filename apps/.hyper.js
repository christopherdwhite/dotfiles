// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
	config: {





		// # Application Settings

		// Choose either "stable" for receiving highly polished, or "canary" for less polished but more frequent updates
		updateChannel: 'canary',






		// # UI

		// ## UI: Text

		// default font size in pixels for all tabs
		fontSize: 12,

		// font family with optional fallbacks
		fontFamily: '"Input Mono", Hack, "Source Code Pro", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

		// terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
		cursorColor: 'rgba(0, 0, 0, 0.15)',

		// `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
		cursorShape: 'BEAM',

		// set to true for blinking cursor
		cursorBlink: false,



		// ## UI: Default Colors

		// color of the text
		foregroundColor: 'hsl(0, 0%, 0%)',

		// terminal background color
		backgroundColor: 'hsl(0, 0%, 100%)',         // White
		// backgroundColor: 'hsl(0, 0%, 0%)',           // black
		// backgroundColor: 'hsla(0, 0%, 0%, 0.1)',     // Tranparent Black
		// backgroundColor: 'hsla(0, 100%, 100%, 0.1)', // Tranparent White

		// border color (window, tabs)
		borderColor: 'rgba(111, 12, 197, 1)',

		// the full list. if you're going to provide the full color palette, including the 6 x 6 color cubes and the grayscale map, just provide an array here instead of a color map object
		colors: {
			black: 'hsl(0, 0%, 0%)',
			red: 'hsl(0, 100%, 25%)',
			green: 'hsl(120, 100%, 25%)',
			yellow: 'hsl(60, 100%, 25%)',
			blue: 'hsl(240, 100%, 25%)',
			magenta: 'hsl(300, 100%, 25%)',
			cyan: 'hsl(180, 100%, 25%)',
			white: 'hsl(0, 0%, 73%)',
			lightBlack: 'hsl(0, 0%, 50%)',
			lightRed: 'hsl(0, 100%, 50%)',
			lightGreen: 'hsl(120, 100%, 50%)',
			lightYellow: 'hsl(60, 100%, 50%)',
			lightBlue: 'hsl(217, 100%, 50%)',
			lightMagenta: 'hsl(300, 100%, 50%)',
			lightCyan: 'hsl(180, 100%, 42%)',
			lightWhite: 'hsl(0, 0%, 100%)',
		},



		// ## UI: Window

		// custom css to embed in the main window
		css: `
		.hyper_main, .tab_tab, .tabs_borderShim {
			border: none !important;
		}

		header {
			top: 0px !important;
			left: 0px !important;
			right: 0px !important;
			background-color: hsl(0, 0%, 95%);
		}

		.tabs_title {
			background-color: hsl(0, 0%, 100%) !important;
			color: hsl(0, 0%, 0%) !important;
		}

		.tab_active {
			background-color: hsl(0, 0%, 100%) !important;
			color: hsl(0, 0%, 0%) !important;
			border-radius: 2px 2px 0px 0px;
		}

		.tab_tab {
			background-color: hsl(0, 0%, 95%);
			color: hsla(0, 0%, 0%, 0.5);
		}

		.tab_tab svg {
			opacity: 0.5 !important;
		}

		.tab_active svg {
			opacity: 1 !important;
		}
		`,

		// custom css to embed in the terminal window
		termCSS: '',

		// set to `true` (without backticks and without quotes) if you're using a Linux setup that doesn't show native menus default: `false` on Linux, `true` on Windows (ignored on macOS)
		showHamburgerMenu: '',

		// set to `false` if you want to hide the minimize, maximize and close buttons
		// additionally, set to `'left'` if you want them on the left, like in Ubuntu
		// default: `true` on windows and Linux (ignored on macOS)
		showWindowControls: '',

		// custom padding (css format, i.e.: `top right bottom left`)
		padding: '12px 14px',





		// # Shell

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

		// for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
		// by default ['--login'] will be used
		shellArgs: ['--login'],

		// for environment variables
		env: {},





		// # Behavior

		// set to false for no bell
		bell: 'SOUND',

		// if true, selected text will automatically be copied to the clipboard
		copyOnSelect: true,

		// if true, on right click selected text will be copied or pasted if noselection is present (true by default on Windows)
		// quickEdit: true,

		// URL to custom bell
		// bellSoundURL: 'http://example.com/bell.mp3',

		// for advanced config flags please refer to https://hyper.is/#cfg





		// # Plugin Settings

		// ## Plugin Settings: Behavior

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
			indicatorPrefix: '^⌥',            // will be completed with pane number
			indicatorStyle: {                  // added to indicator <div>
				position: 'absolute',
				top: 0,
				left: 0,
				fontSize: '10px',
			},

			// set to true and focus will change when mouse cursor enters into an another pane.
			focusOnMouseHover: false,
		},



		// ## Plugin Settings: UI

		// hyper-always-on-top
		alwaysOnTop: {
			debug: false,
			default: false, // enabled on application start
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
			hotkeys: ['Control+Command+h'],

			// the size of HyperTerm Overlay when it is showing.
			// the possible values are a `number` or a `float`.
			// if is is a number, it represents the size um pixels.
			// else, if it is a float, it means the percentage of the screen.
			size: 0.5,
		},

		// hyper-statusline
		hyperStatusLine: {
			dirtyColor: '#ffff00',   // change git dirty color
			aheadColor: '#0066ff',   // change git ahead color
			footerTransparent: true, // disable footer transparency
		},

		// hyper-tab-icons
		tabIcons: {
			activeStyle: {
				display: 'inline-block',
				marginRight: '0.25rem',
				transition: 'opacity 200ms ease-in',
				verticalAlign: 'middle',
				width: '1rem',
			},
			inactiveStyle: {
				opacity: 0.3,
			},
			// mapIcons: {
			// 	nodejs: ['node'],
			// 	docker: ['docker-compose'],
			// },
			// disableColors: 'false',
			mapColors: {
				bash: 'hsl(127, 49%, 46%)',
				docker: 'hsl(194, 88%, 49%)',
				'docker-compose': 'hsl(194, 88%, 49%)',
				fish: 'hsl(357, 63%, 56%)',
				nodejs: 'hsl(80, 100%, 37%)',
				node: 'hsl(80, 100%, 37%)',
				npm: 'hsl(357, 70%, 44%)',
				rails: 'hsl(0, 100%, 40%)',
				ruby: 'hsl(2, 63%, 48%)',
				shell: 'hsl(0, 0%, 0%)',
				zsh: 'hsl(66, 100%, 42%)',
				python: 'hsl(48, 100%, 67%)',
				vim: 'hsl(120, 100%, 25%)',
				yarn: 'hsl(198, 61%, 45%)',
			}
		}

	},





	// # Plugins

	// a list of plugins to fetch and install from npm
	// format: [@org/]project[#version]
	// examples:
	//	 `hyperpower`
	//	 `@company/project`
	//	 `project#1.0.1`
	plugins: [

		// ## Plugins: Behavior

		'hyper-broadcast',
		// extension for Hyper.app to broadcast user inputs to multiple terms.
		//
		// notes:
		// you can enable broadcast individually or across all sessions simultaneously.
		//
		// https://www.npmjs.com/package/hyper-broadcast

		'hyper-pane',
		// extension for Hyper to enhance pane navigation.
		// navigate through panes with arrows, jump directly to a specific pane with digit, change focus on mouse hover or temporarily maximize a pane.
		// https://www.npmjs.com/package/hyper-pane

		'hyperterm-paste',
		// Makes pasting into hyperterm safe and easy
		//
		// https://www.npmjs.com/package/hyperterm-paste

		'hyper-search',
		// extension for Hyper that allows you to search text in your terminal.
		// https://www.npmjs.com/package/hyper-search

		'hyperwakatime',
				// hyperterm plugin for Wakatime
				//
				// notes:
				// this plugin uses the standard Wakatime dotfiles most other editors use.
				//
				// https://www.npmjs.com/package/hyperwakatime



		// ## Plugins: UI

		'hyper-always-on-top',
		// extension for Hyper.app to add a menu item to keep application windows always on top.
		// https://www.npmjs.com/package/hyper-always-on-top

		// 'hyper-tabs-enhanced',
		// enhanced tabs plugin for Hyper. matches any theme.
		// https://www.npmjs.com/package/hyper-tabs-enhanced

		'hyperterm-overlay',
		// a complete and customizable solution for a permanent / dropdown / hotkey / overlay window in your Hyper, accessible via hotkeys and/or toolbar icon (tray).
		// https://www.npmjs.com/package/hyperterm-overlay

		'hyper-statusline',
		// status line plugin for Hyper. shows clickable & useful information. matches any theme.”
		// https://www.npmjs.com/package/hyper-statusline

		// 'hyper-tabs-enhanced',
		// enhanced tabs plugin for Hyper. matches any theme.
		// https://www.npmjs.com/package/hyper-tabs-enhanced

		'hyper-tab-icons',
		// icons in the header tabs for the current running process in Hyper.
		// https://www.npmjs.com/package/hyper-tab-icons

	],





	// # Local Plugins

	// in development, you can create a directory under
	// `~/.hyper_plugins/local/` and include it here
	// to load it and avoid it being `npm install`ed
	localPlugins: [],





	// # Keymaps

	keymaps: {
	// Example
	// 'window:devtools': 'cmd+alt+o',
	},
};
