let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('STCP', 
        subrecord('STCP', ckFormId('Animation Sound', ['STAG']))
    );
};