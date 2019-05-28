let {
    addDef, bytes
} = require('../helpers');

module.exports = () => {
    addDef('Null', bytes('Unused', -255));
};