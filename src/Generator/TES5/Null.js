let {
    addDef, bytes
} = require('../helpers');

module.exports = game => {
    addDef('Null', 
        bytes('Unused', -255),
    );
};