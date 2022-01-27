let {
    req, def, bytes, subrecord, unknown, 
    float, uint32, format, ckFormId, sorted, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('ALOC', 'Media Location Controller', {
        members: [
            req(def('EDID')),
            def('FULL'),
            subrecord('NAM1', bytes('Flags and Enums, messily combined')),
            subrecord('NAM2', unknown()),
            subrecord('NAM3', unknown()),
            subrecord('NAM4', float('Location Delay')),
            subrecord('NAM5', format(uint32('Day Start'), def('AlocTime'))),
            subrecord('NAM6', format(uint32('Night Start'), def('AlocTime'))),
            subrecord('NAM7', float('Retrigger Delay')),
            sorted(memberArray('Neutral Sets', 
                subrecord('HNAM', ckFormId('Media Set', ['MSET']))
            )),
            sorted(memberArray('Ally Sets', 
                subrecord('ZNAM', ckFormId('Media Set', ['MSET']))
            )),
            sorted(memberArray('Friend Sets', 
                subrecord('XNAM', ckFormId('Media Set', ['MSET']))
            )),
            sorted(memberArray('Enemy Sets', 
                subrecord('YNAM', ckFormId('Media Set', ['MSET']))
            )),
            sorted(memberArray('Location Sets', 
                subrecord('LNAM', ckFormId('Media Set', ['MSET']))
            )),
            sorted(memberArray('Battle Sets', 
                subrecord('GNAM', ckFormId('Media Set', ['MSET']))
            )),
            subrecord('RNAM', ckFormId('Conditional Faction', ['FACT'])),
            subrecord('FNAM', unknown())
        ]
    })
};