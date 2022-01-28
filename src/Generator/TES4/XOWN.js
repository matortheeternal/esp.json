let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XOWN', 
        subrecord('XOWN', ckFormId('Owner', ['FACT', 'NPC_']))
    );
};