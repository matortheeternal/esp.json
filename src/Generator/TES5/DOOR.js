let {
    def, req, subrecord, ckFormId, uint8, 
    format, record
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
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            subrecord('SNAM', ckFormId('Sound - Open', ['SNDR'])),
            subrecord('ANAM', ckFormId('Sound - Close', ['SNDR'])),
            subrecord('BNAM', ckFormId('Sound - Loop', ['SNDR'])),
            subrecord('FNAM', format(uint8('Flags'), {
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