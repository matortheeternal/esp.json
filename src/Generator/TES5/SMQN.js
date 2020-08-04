let {
    def, subrecord, ckFormId, req, uint16, 
    format, flags, struct, uint32, unknown, 
    float, sortKey, memberStruct, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('SMQN', 'Story Manager Quest Node', {
        members: [
            def('EDID'),
            subrecord('PNAM', ckFormId('Parent ', [
                'SMQN', 'SMBN', 'SMEN', 'NULL'
            ])),
            subrecord('SNAM', ckFormId('Previous Sibling ', [
                'SMQN', 'SMBN', 'SMEN', 'NULL'
            ])),
            req(def('CITC')),
            def('CTDAsCount'),
            subrecord('DNAM', struct('Flags', [
                format(uint16('Node Flags'), def('SMNodeFlags')),
                format(uint16('Quest Flags'), flags({
                    0: 'Do all before repeating',
                    1: 'Shares event',
                    2: 'Num quests to run'
                }))
            ])),
            subrecord('XNAM', uint32('Max concurrent quests')),
            subrecord('MNAM', uint32('Num quests to run')),
            subrecord('QNAM', uint32('Quest Count')),
            memberArray('Quests', 
                sortKey([0], memberStruct('Quest', [
                    subrecord('NNAM', ckFormId('Quest', ['QUST'])),
                    subrecord('FNAM', unknown()),
                    req(subrecord('RNAM', req(format(float('Hours until reset'), '1Div24'))))
                ]))
            )
        ]
    })
};