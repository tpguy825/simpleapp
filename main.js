// Required stuff
const {app, BrowserWindow} = require('electron')
const path = require('path')

//   _____ _                 _                             _             _______                       ___ ___  _____ 
//  / ____(_)               | |        /\                 | |           |__   __|                     / _ \__ \| ____|
// | (___  _ _ __ ___  _ __ | | ___   /  \   _ __  _ __   | |__  _   _     | |_ __   __ _ _   _ _   _| (_) | ) | |__  
//  \___ \| | '_ ` _ \| '_ \| |/ _ \ / /\ \ | '_ \| '_ \  | '_ \| | | |    | | '_ \ / _` | | | | | | |> _ < / /|___ \ 
//  ____) | | | | | | | |_) | |  __// ____ \| |_) | |_) | | |_) | |_| |    | | |_) | (_| | |_| | |_| | (_) / /_ ___) |
// |_____/|_|_| |_| |_| .__/|_|\___/_/    \_\ .__/| .__/  |_.__/ \__, |    |_| .__/ \__, |\__,_|\__, |\___/____|____/ 
//                    | |                   | |   | |             __/ |      | |     __/ |       __/ |                
//                    |_|                   |_|   |_|            |___/       |_|    |___/       |___/           
//
// |----------------------------------|
// | This part is the important part! |
// | Here is where you set the URL of |
// | the website you want to load!    |
// |----------------------------------|

const windowURL = 'https://mywebsite.com'

// Just replace "https://mywebsite.com" with your website (e.g. https://example.com) to set the website to be loaded and add an icon.png to the folder this code is in to set an icon.

// |------------------------------------------|
// | DO NOT TOUCH WHAT IS BELOW THIS SENTENCE.|
// |------------------------------------------|

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // icon
  if (process.platform !== 'darwin') {
    mainWindow.icon = path.join(__dirname, '/icon.png')
  }

  // url
  mainWindow.loadURL(windowURL)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


