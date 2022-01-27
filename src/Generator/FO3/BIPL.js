let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('BIPL', 
        subrecord('BIPL', ckFormId('Biped Model List', ['FLST']))
    );
};