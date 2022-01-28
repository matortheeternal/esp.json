let {
    addDef, string, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MICO', 
        subrecord('MICO', string('Message Icon'))
    );
};