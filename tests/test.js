const { expect } = require('chai');

const firefoxUserDirectory = require('../index');

const DATA = {
  'darwin': '/Library/Application Support/Firefox',
  'linux': '/.mozilla/firefox',
  'win32': '/Mozilla/Firefox'
};


describe('tests firefox user directory path', () => {
  it('should return firefox user directory crossplatform', () => {
    expect(firefoxUserDirectory(process.platform).endsWith(DATA[process.platform])).to.equal(true);
    expect(firefoxUserDirectory().endsWith(DATA[process.platform])).to.equal(true);
  });
});
