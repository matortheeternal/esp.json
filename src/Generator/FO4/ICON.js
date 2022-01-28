let {
    addDef, string, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('ICON', 
        subrecord('ICON', string('Inventory Image'))
    );
};