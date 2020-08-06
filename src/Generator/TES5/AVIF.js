let {
    def, req, string, subrecord, unknown, 
    float, struct, ckFormId, uint32, memberArray, 
    memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('AVIF', 'Actor Value Information', {
        members: [
            def('EDID'),
            def('FULL'),
            req(def('DESC')),
            subrecord('ANAM', string('Abbreviation')),
            subrecord('CNAM', unknown()),
            subrecord('AVSK', struct('Skill', [
                float('Skill Use Mult'),
                float('Skill Offset Mult'),
                float('Skill Improve Mult'),
                float('Skill Improve Offset')
            ])),
            memberArray('Perk Tree', 
                memberStruct('Node', [
                    subrecord('PNAM', ckFormId('Perk', ['PERK', 'NULL'])),
                    subrecord('FNAM', unknown()),
                    subrecord('XNAM', uint32('Perk-Grid X')),
                    subrecord('YNAM', uint32('Perk-Grid Y')),
                    subrecord('HNAM', float('Horizontal Position')),
                    subrecord('VNAM', float('Vertical Position')),
                    subrecord('SNAM', ckFormId('Associated Skill', ['AVIF', 'NULL'])),
                    memberArray('Connections', 
                        subrecord('CNAM', uint32('Line to Index'))
                    ),
                    subrecord('INAM', uint32('Index'))
                ])
            )
        ]
    })
};