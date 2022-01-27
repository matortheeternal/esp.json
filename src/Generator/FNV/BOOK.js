let {
    req, def, flags, uint8, format, 
    int8, int32, float, struct, subrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('BOOK', 'Book', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            req(def('DESC')),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DATA', struct('Data', [
                format(uint8('Flags'), flags({
                    0: '',
                    1: 'Can\'t be Taken'
                })),
                format(int8('Skill'), def('SkillEnum')),
                int32('Value'),
                float('Weight')
            ])))
        ]
    })
};