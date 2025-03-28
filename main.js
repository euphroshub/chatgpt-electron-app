const { app, BrowserWindow } = require('electron');
const path = require('path');
const iconPath = path.join(__dirname, 'icon.png');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: iconPath,
        webPreferences: {
            nodeIntegration: false, // needed for security
            contextIsolation: true
        }
    });

    // Loading the chatGPT website
    mainWindow.loadURL('https://chat.openai.com/');

    // Open the devTools for debugging - optional might delete later
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});