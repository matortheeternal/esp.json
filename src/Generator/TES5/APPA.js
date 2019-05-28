let {
    def, subrecord, int32, uint32, float, 
    struct, record
} = require('../helpers');

module.exports = () => {
    record('APPA', 'Alchemical Apparatus', {
        members: [
            def('EDID'),
            def('VMAD'),
            def('OBNDReq'),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            subrecord('QUAL', int32('Quality', {
                "0": "Novice",
                "1": "Apprentice",
                "2": "Journeyman",
                "3": "Expert",
                "4": "Master"
            })),
            def('DESC'),
            subrecord('DATA', struct('Data', [
                uint32('Value'),
                float('Weight')
            ]))
        ]
    })
};