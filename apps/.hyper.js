// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
	config: {


		// # Application Settings

		// `Stable` or `Canary` (beta).
		updateChannel: 'canary',



		// # UI

		// ## UI: Text
		fontSize: 12,

		fontFamily: '"SF Mono (+ FiraCode Ligatures)", "Input Mono", Hack, "Source Code Pro", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

		// Terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk).
		cursorColor: 'hsla(195, 62%, 57%, 1)',

		// `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █.
		cursorShape: 'BEAM',

		cursorBlink: true,


		// ## UI: Default Colors
		// Color of the text.
		foregroundColor: 'hsl(0, 0%, 0%)',

		backgroundColor: 'hsla(0, 100%, 100%, 1)',

		// Border color (window, tabs).
		borderColor: 'hsl(0, 0%, 90%)',

		// The full list. if you're going to provide the full color palette, including the 6 x 6 color cubes and the grayscale map, just provide an array here instead of a color map object.
		colors: {
			black       : 'hsl(0, 0%, 0%)',
			red         : 'hsl(352, 81%, 58%)',
			green       : 'hsl(107, 40%, 56%)',
			yellow      : 'hsl(50, 98%, 38%)',
			blue        : 'hsl(195, 62%, 57%)',
			magenta     : 'hsl(289, 84%, 53%)',
			cyan        : 'hsl(172, 61%, 56%)',
			white       : 'hsl(0, 0%, 73%)',
			lightBlack  : 'hsl(0, 0%, 50%)',
			lightRed    : 'hsl(352, 81%, 58%)',
			lightGreen  : 'hsl(107, 40%, 56%)',
			lightYellow : 'hsl(50, 98%, 38%)',
			lightBlue   : 'hsl(195, 62%, 57%)',
			lightMagenta: 'hsl(289, 84%, 53%)',
			lightCyan   : 'hsl(172, 61%, 56%)',
			lightWhite  : 'hsl(0, 0%, 100%)',
		},


		// ## UI: Window
		// TODO: At some point I may want to convert this to a theme.
		// Custom css to embed in the main window.
		css: `

		.tab_tab, .tabs_borderShim {
			border: none !important;
		}

		header {
			top             : 0px !important;
			left            : 0px !important;
			right           : 0px !important;
			background-color: hsl(0, 0%, 95%);
			border-top      : 1px solid hsl(0, 0%, 90%);
			border-left     : 1px solid hsl(0, 0%, 90%);
			border-right    : 1px solid hsl(0, 0%, 90%);
		}

		.tabs_title {
			background-color: hsl(0, 0%, 100%) !important;
			color           : hsl(0, 0%, 0%) !important;
		}

		.tab_active {
			background-color: hsl(0, 0%, 100%) !important;
			color           : hsl(0, 0%, 0%) !important;
			border-radius   : 2px 2px 0px 0px;
		}

		.tab_tab {
			background-color: hsl(0, 0%, 95%);
			color           : hsla(0, 0%, 0%, 0.5);
		}

		.tab_tab svg {
			opacity: 0.5 !important;
		}

		.tab_active svg {
			opacity: 1 !important;
		}
		`,

		// Custom padding (css format, i.e.: `top right bottom left`).
		padding: '12px 14px',

		// Custom css to embed in the terminal window.
		termCSS: '',


		// ## Linux / Windows Settings
		// Set to `true` (without backticks and without quotes) if you're using a Linux setup that doesn't show native menus default: `false` on Linux, `true` on Windows (ignored on macOS).
		showHamburgerMenu: '',

		// Set to `false` if you want to hide the minimize, maximize and close buttons. Set to `'left'` if you want them on the left, like in Ubuntu.
		// Default: `true` on windows and Linux (ignored on macOS).
		showWindowControls: '',



		// # Shell

		// Shell to run when spawning a new session (i.e. `/usr/local/bin/fish`). Defaults to system's login shell.
		//
		// Windows
		// - Make sure to use a full path if the binary name doesn't work.
		// - Remove `--login` in shellArgs.
		//
		// Bash on Windows
		// - Example: `C:\\Windows\\System32\\bash.exe`
		//
		// Powershell on Windows
		// - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
		shell: '',

		// Shell arguments (i.e. for using interactive shellArgs: ['-i']). Defaults to `['--login']`.
		shellArgs: ['--login'],

		// Environment variables.
		env: {},



		// # Behavior

		// Set to `false` for no bell.
		bell: 'SOUND',

		// URL to custom bell.
		// bellSoundURL: 'http://example.com/bell.mp3',

		copyOnSelect: true,

		// If true, on right click selected text will be copied or pasted if noselection is present (true by default on Windows).
		// quickEdit: true,

		// For advanced config flags please refer to https://hyper.is/#cfg



		// # Plugin Settings

		// ## Plugin Settings: Behavior
		// hyper-pane
		paneNavigation: {
			debug  : false,
			hotkeys: {
				navigation: {
					up   : 'ctrl+alt+up',
					down : 'ctrl+alt+down',
					left : 'ctrl+alt+left',
					right: 'ctrl+alt+right',
				},
				jump_prefix: 'ctrl+alt',   // Completed with 1-9 digits.

				// Jump and navigation hotkeys for pane permutation.
				permutation_modifier: 'shift',

				maximize: 'meta+enter',
			},
			showIndicators : true,   // Show pane number.
			indicatorPrefix: '^⌥',   // Will be completed with pane number.

			// Added to indicator <div>.
			indicatorStyle : {
				position: 'absolute',
				top     : 0,
				left    : 0,
				fontSize: '10px',
			},

			// Set to true and focus will change when mouse cursor enters into an another pane.
			focusOnMouseHover: false,
		},


		// ## Plugin Settings: UI
		// hyper-always-on-top
		alwaysOnTop: {
			debug  : false,
			default: false,   // Enabled on start.
		},

		// hyper-broadcast
		broadcast: {
			debug  : false,
			hotkeys: {
				selectCurrentPane    : 'Command+Alt+Shift+B',
				selectCurrentTabPanes: 'Command+Alt+B',
				selectAllPanes       : 'Command+Shift+B',
				toggleCurrentPane    : 'Command+Alt+Control+Shift+B'
			},
			indicatorStyle: {
				position    : 'absolute',
				top         : 5,
				right       : 10,
				borderRadius: '50%',
				width       : '10px',
				height      : '10px',
				background  : 'red'
			},
		},

		// hyperterm-overlay
		overlay: {
			alwaysOnTop   : false,     // Makes Hyperterm Overlay window stay always on top. default: `true`.
			animate       : false,     // Enable animation when show and hide the window. default: `true`.
			hasShadow     : true,      // Controls the default macOS window shadows. default: `false`.
			hideDock      : false,     // Removes the Hyper dock icon. It works only when the unique option is activated. default: `false`.
			hideOnBlur    : false,     // Hides the Hyperterm Overlay when it loses focus. default: `false`.
			position      : 'right',   // Choose where Hyperterm Overlay will be positioned: top, bottom, left or right. default: `top`.
			primaryDisplay: false,     // Show Hyperterm Overlay only on primary display. default: `false`.
			resizable     : false,     // Allow the Hyperterm Overlay be resizable. default: `false`.
			startAlone    : false,     // Makes HyperTerm Overlay the unique window displayed when started. default: `false`.
			startup       : true,      // Open HyperTerm Overlay on Hyper startup. default: `true`.
			tray          : false,     // Add icon to the system notification area, for access HyperTerm Overlay. default: `true`.
			unique        : false,     // Makes HyperTerm Overlay the unique window of Hyper. any other window will be removed. default: `false`.

			// Specify one or more hotkeys to show and hide the HyperTerm Overlay (see: Accelerator documentation). default: `['Option+Space']`
			hotkeys: {
				open : ['Control+Option+Shift+F6'],
				close: ['Control+Option+Shift+F6'],
			},

			// The size of HyperTerm Overlay when it is showing. The possible values are a `number` or a `float`. If is is a number, it represents the size im pixels. Otherwise, if it is a float, it means the percentage of the screen.
			size: 0.5,
		},

		// hyper-statusline
		hyperStatusLine: {
			dirtyColor       : '#ffff00',   // Change git dirty color.
			aheadColor       : '#0066ff',   // Change git ahead color.
			footerTransparent: true,        // Disable footer transparency.
		},

		// hyper-tab-icons
		tabIcons: {
			activeStyle: {
				display      : 'inline-block',
				marginRight  : '0.25rem',
				transition   : 'opacity 200ms ease-in',
				verticalAlign: 'middle',
				width        : '1rem',
			},
			inactiveStyle: {
				opacity: 0.5,
			},
			// mapIcons: {
			// 	nodejs: ['node'],
			// 	docker: ['docker-compose'],
			// },
			// disableColors: 'false',
			mapColors: {
				bash            : 'hsl(127, 49%, 46%)',
				docker          : 'hsl(194, 88%, 49%)',
				'docker-compose': 'hsl(194, 88%, 49%)',
				fish            : 'hsl(357, 63%, 56%)',
				nodejs          : 'hsl(80, 100%, 37%)',
				node            : 'hsl(80, 100%, 37%)',
				npm             : 'hsl(357, 70%, 44%)',
				rails           : 'hsl(0, 100%, 40%)',
				ruby            : 'hsl(2, 63%, 48%)',
				shell           : 'hsl(0, 0%, 0%)',
				zsh             : 'hsl(66, 100%, 42%)',
				python          : 'hsl(48, 100%, 67%)',
				vim             : 'hsl(120, 100%, 25%)',
				yarn            : 'hsl(198, 61%, 45%)',
			}
		}

	},



	// # Plugins

	// A list of plugins to fetch and install from npm.
	// Format: [@org/]project[#version]
	// Examples:
	//	 `hyperpower`
	//	 `@company/project`
	//	 `project#1.0.1`
	plugins: [

		// ## Plugins: Behavior
		// 'hyper-broadcast',
		// Type across multiple panes and windows.
		// https://www.npmjs.com/package/hyper-broadcast

		// 'hyper-pane',
		// Add keyboard shortcuts to focus on other panes, focus on mouseover and maximize panes.
		// https://www.npmjs.com/package/hyper-pane

		'hyperterm-paste', //
		// Safely paste commands.
		// https://www.npmjs.com/package/hyperterm-paste

		'hyper-search',
		// Search for text within active Terminal pane.
		// https://www.npmjs.com/package/hyper-search

		// 'hyperwakatime',
		// Track Terminal use to Wakatime using the standard .dotfile token.
		// https://www.npmjs.com/package/hyperwakatime

		// "hyper-confirm",
		// Asks for confirmation before quiting Hyper.
		// https://www.npmjs.com/package/hyper-confirm

		// ## Plugins: UI
		// 'hyper-always-on-top',
		// Add a menu item to keep application windows always on top.
		// https://www.npmjs.com/package/hyper-always-on-top

		// "hyper-font-smoothing",
		// Extension for subpixel-antialiased font smoothing in Hyper
		// https://www.npmjs.com/package/hyper-font-smoothing

		'hyper-overlay',
		// A complete and customizable solution for a permanent / dropdown / hotkey / overlay window in your Hyper, accessible via hotkeys and/or toolbar icon (tray).
		// https://www.npmjs.com/package/hyperterm-overlay

		'hyper-statusline',
		// Status line plugin for Hyper. shows clickable & useful information. matches any theme.”
		// https://www.npmjs.com/package/hyper-statusline

		'hyper-tab-icons',
		// Icons in the header tabs for the current running process in Hyper.
		// https://www.npmjs.com/package/hyper-tab-icons

		"hypercwd",
		// Opens new tabs in current directory.
		// https://www.npmjs.com/package/hypercwd
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
