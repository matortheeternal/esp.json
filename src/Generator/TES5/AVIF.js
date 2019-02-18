let {
    addDef, record, def, req, subrecord, 
    zstring, unknown, struct, float, arrayOfStruct, 
    multiStruct, ckFormId, uint32
} = require('../helpers');

module.exports = game => {
    addDef(record('AVIF', 'Actor Value Information', {
        elements: [
            def('EDID'),
            def('FULL'),
            req(def('DESC')),
            subrecord('ANAM', zstring('Abbreviation')),
            subrecord('CNAM', unknown()),
            subrecord('AVSK', struct('Skill', [
                float('Skill Use Mult'),
                float('Skill Offset Mult'),
                float('Skill Improve Mult'),
                float('Skill Improve Offset'),
            ])),
            arrayOfStruct('Perk Tree',
                multiStruct('Node', [
                    subrecord('PNAM', ckFormId('Perk', ['PERK', 'NULL'])),
                    subrecord('FNAM', unknown()),
                    subrecord('XNAM', uint32('Perk-Grid X')),
                    subrecord('YNAM', uint32('Perk-Grid Y')),
                    subrecord('HNAM', float('Horizontal Position')),
                    subrecord('VNAM', float('Vertical Position')),
                    subrecord('SNAM', ckFormId('Associated Skill', ['AVIF', 'NULL'])),
                    arrayOfStruct('Connections',
                        subrecord('CNAM', uint32('Line to Index')),
                    ),
                    subrecord('INAM', uint32('Index')),
                ]),
            ),
        ]
    }));
};