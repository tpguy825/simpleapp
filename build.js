var electronInstaller = require('electron-winstaller');
// In this case, we can use relative paths
var settings = {
// Specify the folder where the built app is located
appDirectory: './SimpleApp-win32-x64',
// Specify the existing folder where
outputDirectory: './SimpleApp-installer',
// The name of the Author of the app (the name of your company)
authors: 'Toby Payne (tpguy825)',
// The name of the executable of your built
exe: './SimpleApp.exe',
description: 'App made with SimpleApp - https://github.com/tpguy825/simpleapp'
};
resultPromise = electronInstaller.createWindowsInstaller(settings);
resultPromise.then(() => {
console.log("Installer made!");
}, (e) => {
console.log(`fatal error while creating installer: ${e.message}`)
});
