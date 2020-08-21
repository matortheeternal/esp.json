let {
    def, ckFormId, subrecord, sorted, memberArray, 
    opts, enumeration, uint32, format, struct, 
    array, localized, string, record
} = require('../helpers');

module.exports = () => {
    record('MGEF', 'Magic Effect', {
        members: [
            def('EDID'),
            def('VMAD'),
            def('FULL'),
            def('MDOB'),
            def('KSIZ'),
            def('KWDAs'),
            def('MGEFData'),
            opts(sorted(memberArray('Counter Effects', 
                subrecord('ESCE', ckFormId('Effect', ['MGEF']))
            )), {
                "afterSet": "CounterEffectsAfterSet"
            }),
            subrecord('SNDD', array('Sounds', 
                struct('', [
                    format(uint32('Type'), enumeration({
                        0: 'Sheathe/Draw',
                        1: 'Charge',
                        2: 'Ready',
                        3: 'Release',
                        4: 'Concentration Cast Loop',
                        5: 'On Hit'
                    })),
                    ckFormId('Sound', ['SNDR'])
                ])
            )),
            opts(subrecord('DNAM', localized(string('Magic Item Description'))), {
                "keepCase": true
            }),
            def('CTDAs')
        ]
    })
};