let {
    def, ckFormId, subrecord, conflictType, req, 
    uint16, format, flags, struct, uint32, 
    unknown, float, div, sortKey, memberStruct, 
    memberArray, elementCounter, record
} = require('../helpers');

module.exports = () => {
    record('SMQN', 'Story Manager Quest Node', {
        members: [
            def('EDID'),
            subrecord('PNAM', ckFormId('Parent ', [
                'SMQN', 'SMBN', 'SMEN', 'NULL'
            ])),
            subrecord('SNAM', conflictType('Benign', ckFormId('Previous Sibling ', [
                'SMQN', 'SMBN', 'SMEN', 'NULL'
            ]))),
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
            req(subrecord('QNAM', conflictType('Benign', uint32('Quest Count')))),
            elementCounter('QNAM - Quest Count', 
                conflictType('Benign', memberArray('Quests', 
                    sortKey([0], memberStruct('Quest', [
                        subrecord('NNAM', conflictType('Benign', ckFormId('Quest', ['QUST']))),
                        subrecord('FNAM', conflictType('Benign', unknown())),
                        subrecord('RNAM', format(conflictType('Benign', float('Hours until reset')), div(24)))
                    ]))
                ))
            )
        ]
    })
};