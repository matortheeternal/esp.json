let {
    addDef, formId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MDOB', 
        subrecord('MDOB', formId('Menu Display Object'))
    );
};