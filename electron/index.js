const electron = require('electron')
const Menubar = require('menubar')

const app = electron.app

const ROOT = require('path').resolve(__dirname, '../')

// adds debug features like hotkeys for triggering dev tools and reload
// require('electron-debug')()

// prevent window being garbage collected
let mainWindow

// Menubar app
const mb = Menubar({
  index: `file://${ROOT}/public/index.html`,
  preloadWindow: true,
  width: 320,
  height: 480
})

// function onClosed () {
//   // dereference the window
//   // for multiple windows store them in an array
//   mainWindow = null
// }

function createMainWindow () {
  const win = new electron.BrowserWindow({
    width: 320,
    height: 480
  })

  win.loadURL(`file://${ROOT}/public/index.html`)
  win.on('closed', onClosed)

  return win
}

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('activate', () => {
//   if (!mainWindow) {
//     mainWindow = createMainWindow()
//   }
// })

// app.on('ready', () => {
//   mainWindow = createMainWindow()
// })
