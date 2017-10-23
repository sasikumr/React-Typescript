var context = require.context('./JsUnitTests/Tests', true, /.spect\.(ts|tsx|js)?$/);
context.keys().forEach(context);
module.exports = context;