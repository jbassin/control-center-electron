module.exports = {
  rewriteFileSync: (filepath, fileobject) => {
    const fs = require('fs-extra');
    fs.unlinkSync(filepath);
    fs.writeFileSync(filepath, JSON.stringify(fileobject));
  },
};
