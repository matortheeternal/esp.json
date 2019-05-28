let {
    def, subrecord, ckFormId, uint8, record
} = require('../helpers');

module.exports = () => {
    record('DOOR', 'Door', {
        flags: {
            "15": "Has Distant LOD",
            "16": "Random Anim Start",
            "23": "Is Marker"
        },
        members: [
            def('EDID'),
            def('VMAD'),
            def('OBNDReq'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            subrecord('SNAM', ckFormId('Sound - Open', ['SNDR'])),
            subrecord('ANAM', ckFormId('Sound - Close', ['SNDR'])),
            subrecord('BNAM', ckFormId('Sound - Loop', ['SNDR'])),
            subrecord('FNAM', uint8('Flags', {
                "0": "",
                "1": "Automatic",
                "2": "Hidden",
                "3": "Minimal Use",
                "4": "Sliding",
                "5": "Do Not Open in Combat Search"
            }))
        ]
    })
};