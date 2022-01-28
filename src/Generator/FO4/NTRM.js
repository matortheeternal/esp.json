let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('NTRM', 
        subrecord('NTRM', ckFormId('Native Terminal', ['TERM']))
    );
};