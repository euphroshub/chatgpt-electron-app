const { app, BrowserWindow } = require('electron');
const path = require('path');
const iconPath = path.join(__dirname, 'icon.png');

let mainWindow;

async function logout() {
    try {
        await mainWindow.webContents.executeJavaScript(`
            const logoutButton = document.querySelector('button[data-testid="logout-button"]');
            if (logoutButton) {
                logoutButton.click();
            }
        `);
    } catch (error) {
        console.error('Error during logout:', error);
    }
}

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

    mainWindow.on('closed', async () => {
        await logout();
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});