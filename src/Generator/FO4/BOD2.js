let {
    addDef, def, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('BOD2', 
        subrecord('BOD2', struct('Biped Body Template', [
            def('FirstPersonFlagsU32')
        ]))
    );
};