let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('REPL', 
        subrecord('REPL', ckFormId('Repair List', ['FLST']))
    );
};