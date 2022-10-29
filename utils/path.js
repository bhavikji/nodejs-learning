const path = require("path");
// old
// module.exports = path.dirname(process.mainModule.filename);

// new

module.exports = path.dirname(require.main.filename);