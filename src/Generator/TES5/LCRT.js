let {
    addDef, record, def
} = require('../helpers');

module.exports = game => {
    addDef(record('LCRT', 'Location Reference Type', {
        elements: [
            def('EDID'),
            def('CNAM'),
        ]
    }));
};