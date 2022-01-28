let {
    flags, def, req, ckFormId, subrecord, 
    uint8, format, localized, string, conflictType, 
    opts, record
} = require('../helpers');

module.exports = () => {
    record('DOOR', 'Door', {
        flags: flags({
            4: 'Non Occluder',
            12: 'Ignored',
            15: 'Has Distant LOD',
            16: 'Random Anim Start',
            23: 'Is Marker'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('PTRN'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            def('NTRM'),
            subrecord('SNAM', ckFormId('Sound - Open', ['SNDR'])),
            subrecord('ANAM', ckFormId('Sound - Close', ['SNDR'])),
            subrecord('BNAM', ckFormId('Sound - Loop', ['SNDR'])),
            req(subrecord('FNAM', format(uint8('Flags'), flags({
                0: '',
                1: 'Automatic',
                2: 'Hidden',
                3: 'Minimal Use',
                4: 'Sliding',
                5: 'Do Not Open in Combat Search',
                6: 'No "To" Text'
            })))),
            opts(subrecord('ONAM', conflictType('Translate', localized(string('Alternate Text - Open')))), {
                "keepCase": true
            }),
            opts(subrecord('CNAM', conflictType('Translate', localized(string('Alternate Text - Close')))), {
                "keepCase": true
            })
        ]
    })
};