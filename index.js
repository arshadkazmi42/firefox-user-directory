const os = require('os');
const path = require('path');


module.exports = (platform) => {
  switch (platform || os.platform()) {
    case 'darwin':
      return path.join(process.env.HOME, '/Library/Application Support/Firefox');
    case 'linux':
      return path.join(process.env.HOME, '/.mozilla/firefox');
    case 'win32':      
      return path.join(process.env.APPDATA, '/Mozilla/Firefox');
    default:
      throw new Error('Invalid Platform');
  }
};
