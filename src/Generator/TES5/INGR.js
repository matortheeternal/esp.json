let {
    def, int32, float, subrecord, struct, 
    req, uint32, record
} = require('../helpers');

module.exports = () => {
    record('INGR', 'Ingredient', {
        members: [
            def('EDID'),
            def('VMAD'),
            def('OBNDReq'),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('ETYP'),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DATA', struct('', [
                int32('Value'),
                float('Weight')
            ]))),
            req(subrecord('ENIT', struct('Effect Data', [
                int32('Ingredient Value'),
                uint32('Flags', {
                    "0": "No auto-calculation",
                    "1": "Food item",
                    "2": "Unknown 3",
                    "3": "Unknown 4",
                    "4": "Unknown 5",
                    "5": "Unknown 6",
                    "6": "Unknown 7",
                    "7": "Unknown 8",
                    "8": "References Persist"
                })
            ]))),
            def('EffectsReq')
        ]
    })
};