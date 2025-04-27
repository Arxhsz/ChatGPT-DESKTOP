ChatGPT Desktop

# ChatGPT Desktop

Electron wrapper for the ChatGPT web interface with a frameless, draggable title bar and persistent session storage.

----------

## Features

-   **Invisible draggable title bar**: Click-drag anywhere in the top 40px to move the window.
-   **Session persistence**: Cookies, localStorage, IndexedDB, and service workers saved under a `persist:chatgpt` partition in `%APPDATA%`.
-   **Fresh start on launch**: Clears saved session data (cookies, localStorage, IndexedDB, service workers) before every startup.
-   **Windows installer**: Packaged using NSIS via `electron-builder` with customizable install directory.

----------

## Table of Contents

1.  [Prerequisites](#prerequisites)
2.  [Installation](#installation)
3.  [Development](#development)
4.  [Packaging & Distribution](#packaging--distribution)
5.  [Clearing Dev Cookies Manually](#clearing-dev-cookies-manually)
6.  [Folder Structure](#folder-structure)

----------

## Prerequisites

-   **Node.js** (v16+)
-   **npm** (v8+)

Ensure you have these installed and available in your `PATH`.

----------

## Installation

1.  **Clone the repo**
    
    ```
    git clone https://github.com/Arxhsz/ChatGPT-DESKTOP.git
    cd ChatGPT-DESKTOP
    ```
    
2.  **Install dependencies**
    
    ```
    npm install
    ```
    
3.  **Place your icon**: Drop your `chatgpt.ico` into the `icons/` folder.

----------

## Development

**Run in development mode**

```
npm start
```

This will launch the Electron app with the frameless window and a fresh session each time.

----------

## Packaging & Distribution

The Windows installer is built with **electron-builder** and NSIS.

**Build installer**

```
npm run dist
```

This generates an NSIS installer in the `dist/` directory.

**Installer options**:

-   One-click install: **Disabled**
-   Per-machine install: **Disabled**
-   User can change install directory
-   UAC elevation allowed

----------

## Clearing Dev Cookies Manually

By default, the app clears old session data on startup. If you need to wipe out your development sign-in manually before packaging:

1.  **Close the app** if running.
2.  **Delete the session folder**:
    
    ```
    rm -rf "%APPDATA%\\ChatGPTApp"
    ```
    
3.  **Rebuild**:
    
    ```
    npm run dist
    ```
    

----------

## Folder Structure

```
chatgpt-desktop/
├── icons/
│   └── chatgpt.ico        # App icon for output
├── dist/                  # Packaged installer
├── node_modules/
├── main.js                # Electron main process
├── preload.js             # ContextBridge (no-op)
├── index.html             # Loader page with invisible titlebar
├── renderer.js            # Webview focus logic
├── package.json
└── README.md
```

----------

Enjoy your native-like ChatGPT desktop app! If you run into issues, open an issue on GitHub.
