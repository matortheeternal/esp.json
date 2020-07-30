let {
    addDef, bytes, size
} = require('../helpers');

module.exports = () => {
    addDef('Null', 
        size(0, bytes('Unused'))
    );
};