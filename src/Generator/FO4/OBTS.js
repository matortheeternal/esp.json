let {
    addDef, uint32, uint8, bytes, size, 
    int16, def, format, ckFormId, array, 
    prefix, struct, customCounter, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('OBTS', 
        req(subrecord('OBTS', struct('Object Mod Template Item', [
            uint32('Include Count'),
            uint32('Property Count'),
            uint8('Level Min'),
            size(1, bytes('Unused')),
            uint8('Level Max'),
            size(1, bytes('Unused')),
            int16('Addon Index'),
            format(uint8('Default'), def('BoolEnum')),
            prefix(1, array('Keywords', 
                ckFormId('Keyword', ['KYWD', 'NULL'])
            )),
            uint8('Min Level For Ranks'),
            uint8('Alt Levels Per Tier'),
            customCounter('OMODDataIncludeCounter', 
                array('Includes', 
                    struct('Include', [
                        ckFormId('Mod', ['OMOD']),
                        uint8('Attach Point Index'),
                        format(uint8('Optional'), def('BoolEnum')),
                        format(uint8('Don\'t Use All'), def('BoolEnum'))
                    ])
                )
            ),
            def('ObjectModProperties')
        ])))
    );
};