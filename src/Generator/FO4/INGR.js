let {
    def, req, int32, float, struct, 
    subrecord, flags, uint32, format, record
} = require('../helpers');

module.exports = () => {
    record('INGR', 'Ingredient', {
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            def('MODL'),
            def('ICON'),
            def('MICO'),
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
                format(uint32('Flags'), flags({
                    0: 'No auto-calculation',
                    1: 'Food item',
                    2: 'Unknown 3',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Unknown 8',
                    8: 'References Persist'
                }))
            ]))),
            req(def('Effects'))
        ]
    })
};