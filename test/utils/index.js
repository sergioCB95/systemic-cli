const fs = require('fs');
const { join } = require('path');

const deleteDir = (dir) => {
  if (fs.existsSync(dir)) {
    const list = fs.readdirSync(dir);
    for (let i = 0; i < list.length; i += 1) {
      const filename = join(dir, list[i]);
      const stat = fs.statSync(filename);

      if (filename === '.' || filename === '..') {
        // pass these files
      } else if (stat.isDirectory()) {
        // rmdir recursively
        deleteDir(filename);
      } else {
        // rm fiilename
        fs.unlinkSync(filename);
      }
    }
    fs.rmdirSync(dir);
  }
};

module.exports = {
  deleteDir,
};
