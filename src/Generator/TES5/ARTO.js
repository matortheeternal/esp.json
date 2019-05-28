let {
    def, subrecord, uint32, record
} = require('../helpers');

module.exports = () => {
    record('ARTO', 'Art Object', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('MODL'),
            subrecord('DNAM', uint32('Art Type', {
                "0": "Magic Casting",
                "1": "Magic Hit Effect",
                "2": "Enchantment Effect"
            }))
        ]
    })
};