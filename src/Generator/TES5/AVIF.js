let {
    def, req, subrecord, cstring, unknown, 
    float, struct, ckFormId, uint32, arrayOfSubrecord, 
    multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('AVIF', 'Actor Value Information', {
        members: [
            def('EDID'),
            def('FULL'),
            req(def('DESC')),
            subrecord('ANAM', cstring('Abbreviation')),
            subrecord('CNAM', unknown()),
            subrecord('AVSK', struct('Skill', [
                float('Skill Use Mult'),
                float('Skill Offset Mult'),
                float('Skill Improve Mult'),
                float('Skill Improve Offset')
            ])),
            arrayOfSubrecord('Perk Tree', multiStruct('Node', [
                subrecord('PNAM', ckFormId('Perk', ['PERK', 'NULL'])),
                subrecord('FNAM', unknown()),
                subrecord('XNAM', uint32('Perk-Grid X')),
                subrecord('YNAM', uint32('Perk-Grid Y')),
                subrecord('HNAM', float('Horizontal Position')),
                subrecord('VNAM', float('Vertical Position')),
                subrecord('SNAM', ckFormId('Associated Skill', ['AVIF', 'NULL'])),
                arrayOfSubrecord('Connections', subrecord('CNAM', uint32('Line to Index'))),
                subrecord('INAM', uint32('Index'))
            ]))
        ]
    })
};