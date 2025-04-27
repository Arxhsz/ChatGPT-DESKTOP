// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Persist session data
app.setPath('userData', path.join(app.getPath('appData'), 'ChatGPTApp'));

function createWindow() {
  const win = new BrowserWindow({
    // Set application icon from icons folder
    icon: path.join(__dirname, 'icons', 'chatgpt.ico'),
    width: 1024,
    height: 768,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      webviewTag: true
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
