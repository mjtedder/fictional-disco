
# Extensions - VSCode 
  ## Super Awesome Stuff Everyone Should Have
  * [Code Runner - Run C, C++, Java, JS, PHP, Python, Perl, Ruby, Go, and more](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
  * [ESLint - Checks your code for common issues and problems](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [Path Intellisense - autocompletes filenames](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
  * [npm Intellisense - autocompletes npm modules in import statements](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
  * [jshint - Integrates JSHint into VS Code. JSHint is a linter for JavaScript](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)
  * [Project Manager - Easily switch between projects](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)


  ## Definitely Useful, But You Could Do Fine Without It
  * [Auto Rename Tag - Auto rename paired HTML/XML tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
  * [Debugger for Chrome - Debug your JavaScript code in the Chrome browser](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
  * [Debugger for Firefox - Debug your web application or browser extension in Firefox](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug)
  * [Git History - View git log, file history, compare branches or commits](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
  * [GitLens — Git supercharged - Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  * [Guides - An extension for more guide lines](https://marketplace.visualstudio.com/items?itemName=spywhere.guides)
  * [Lorem ipsum - Generates and inserts lorem ipsum text](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum)
  * [Markdown All in One - All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

  ## Make Yourself More Organized and Productive
  * [To Do Tasks - A To Do tasks extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=sandy081.todotasks)
  * [VSNotes - for plain text note taking.](https://marketplace.visualstudio.com/items?itemName=patricklee.vsnotes)

  ## Make Stuff Prettier or Easier to Read
  * [Output Colorizer - Syntax highlighting for log files](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)
  * [Trailing Spaces - Highlight trailing spaces and delete them in a flash!](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)
# Settings - VSCode
  ## Auto Saving
  <!-- // Controls auto save of dirty files. Accepted values:  'off', 'afterDelay', 'onFocusChange' (editor loses focus), 'onWindowChange' (window loses focus). If set to 'afterDelay', you can configure the delay in 'files.autoSaveDelay'. -->
  ```json
  "files.autoSave": "onFocusChange",
  ```
  ## Colors and appearance - All just my personal preference so play around with it...
  ```json
  "workbench.colorCustomizations": {
    "terminal.background": "#1c1c1d",
    "terminal.ansiYellow": "#ceb631",
    "terminal.ansiBrightYellow": "#e0b835",
    "terminal.ansiGreen": "#1e7a30",
    "terminal.ansiBrightGreen": "#18ad33",
    "activityBarBadge.background": "#64FFDA",
    "list.activeSelectionForeground": "#64FFDA",
    "list.inactiveSelectionForeground": "#64FFDA",
    "list.highlightForeground": "#64FFDA",
    "scrollbarSlider.activeBackground": "#64FFDA50",
    "editorSuggestWidget.highlightForeground": "#64FFDA",
    "textLink.foreground": "#64FFDA",
    "progressBar.background": "#64FFDA",
    "pickerGroup.foreground": "#64FFDA",
    "tab.activeBorder": "#64FFDA",
    "panel.background": "#1c1c1d",
  },
  "terminal.integrated.fontFamily": "fira code",
  "editor.occurrencesHighlight": false,
  "editor.tabSize": 2,

  "workbench.colorTheme": "Monokai Pro (Filter Spectrum)",
  "workbench.iconTheme": "Monokai Pro (Filter Spectrum) Icons",

  "editor.fontFamily": "'Fira Code'",
  "editor.fontLigatures": true,
  "window.zoomLevel": -1,
  ```
  ## Extension Settings
  ### Auto update extensions - off/on
  ```json
  // I prefer to update extensions on my own... Up to you
  "extensions.autoUpdate": false,
  ```
  ### Guides
  ```json
  // To avoid conflict with Guides extension

  "editor.renderIndentGuides": false,
  ```
  ### VS Notes
  ```json
  // Path to directory to save notes.

  "vsnotes.defaultNotePath": "/Users/zkw35wb/Documents/Notes and Information",

  // Tokens used to replace text in file name.
  "vsnotes.tokens": [
    {
      "type": "datetime",
      "token": "{dt}",
      "format": "YYYY-MM-DD_HH-mm",
      "description": "Insert formatted datetime"
    },
    {
      "type": "title",
      "token": "{title}",
      "description": "Insert note title from input box",
      "format": "Untitled"
    },
    {
      "type": "extension",
      "token": "{ext}",
      "description": "Insert file extension",
      "format": "md"
    }
  ],

  // Default note title. Utilizes tokens set in vsnotes.tokens
  "vsnotes.defaultNoteTitle": "{title}.{ext}",

  // Number of recent files to show when running command `List Notes`
  "vsnotes.listRecentLimit": 15,

  // Automatically convert blank spaces in title to character. To disable set to `null`
  "vsnotes.noteTitleConvertSpaces": "_",

  // Default vscode snippet to execute after creating a note. Set both langId and name to null to disable
  "vsnotes.defaultSnippet": {
    "langId": "markdown",
    "name": "vsnotes"
  },

  // Regular expressions for file names to ignore when parsing documents in note folder
  "vsnotes.ignorePatterns": [
    "^\\."
  ],

  // Shell command to execute in the note directory when the Commit and Push command is executed. The {msg} token will be replaced with the contents of an input box shown or, if empty, the default commit message.
  "vsnotes.commitPushShellCommand": "git add -A && git commit -m '{msg}' && git push",

  // The default commit message used if none is provided with the Commit and Push command
  "vsnotes.commitPushDefaultCommitMessage": "VS Notes Commit and Push",
  ```
  ### Markdown All in One
  ```json
  "markdown.extension.toc.updateOnSave": true,
  "markdown.extension.preview.autoShowPreviewToSide": false,
  ```
# Customization of VS Code Documentation
  * [Customize VS Code](https://code.visualstudio.com/docs/introvideos/configure)
  * [Key Bindings for Visual Studio Code](https://code.visualstudio.com/docs/getstarted/keybindings)
  * [Visual Studio Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
  * [Color Themes](https://code.visualstudio.com/docs/getstarted/themes)
  * [Emmet 2.0 in Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet)
  * [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)