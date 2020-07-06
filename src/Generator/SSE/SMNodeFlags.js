let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('SMNodeFlags', 
        flags({
            0: 'Random',
            1: 'Warn if no child quest started'
        })
    );
};