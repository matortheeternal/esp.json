let {
    addDef, uint32, ckFormId, union, array, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('RaceRBPC', 
        subrecord('RBPC', array('Biped Object Conditions', 
            union('Slot 30+', 'FormVer78Decider', [
                uint32('Slot 30+'),
                ckFormId('Slot 30+', ['AVIF', 'NULL'])
            ])
        ))
    );
};