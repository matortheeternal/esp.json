let {
    addDef, record, def
} = require('../helpers');

module.exports = game => {
    addDef(record('AACT', 'Action', {
        elements: [
            def('EDID'),
            def('CNAM'),
        ]
    }));
};