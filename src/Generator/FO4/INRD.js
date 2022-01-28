let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('INRD', 
        subrecord('INRD', ckFormId('Instance Naming', ['INNR']))
    );
};