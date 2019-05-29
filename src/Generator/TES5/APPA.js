let {
    def, req, subrecord, int32, format, 
    uint32, float, struct, record
} = require('../helpers');

module.exports = () => {
    record('APPA', 'Alchemical Apparatus', {
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            subrecord('QUAL', format(int32('Quality'), {
                0: 'Novice',
                1: 'Apprentice',
                2: 'Journeyman',
                3: 'Expert',
                4: 'Master'
            })),
            def('DESC'),
            subrecord('DATA', struct('Data', [
                uint32('Value'),
                float('Weight')
            ]))
        ]
    })
};