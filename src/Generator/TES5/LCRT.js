let {
    addDef, record, def
} = require('../helpers');

module.exports = game => {
    addDef('LCRT', record('LCRT', 'Location Reference Type', {
        elements: [
            def('EDID'),
            def('CNAM'),
        ]
    }));
};