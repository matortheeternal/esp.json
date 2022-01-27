let {
    def, ckFormId, conflictType, subrecord, int32, 
    memberStruct, memberArray, sortKey, sorted, unknown, 
    float, req, string, opts, enumeration, 
    uint8, format, flags, struct, record
} = require('../helpers');

module.exports = () => {
    record('DIAL', 'Dialog Topic', {
        members: [
            def('EDIDReqKC'),
            sorted(memberArray('Added Quests', 
                sortKey([0], memberStruct('Added Quest', [
                    subrecord('QSTI', conflictType('Benign', ckFormId('Quest', ['QUST']))),
                    memberArray('Shared Infos', 
                        memberStruct('Shared Info', [
                            subrecord('INFC', conflictType('Benign', ckFormId('Info Connection', ['INFO']))),
                            subrecord('INFX', conflictType('Benign', int32('Info Index')))
                        ])
                    )
                ]))
            )),
            sorted(memberArray('Removed Quests', 
                sortKey([0], memberStruct('Removed Quest', [
                    subrecord('QSTR', conflictType('Benign', ckFormId('Quest', ['QUST'])))
                ]))
            )),
            conflictType('Ignore', memberArray('Unused', 
                memberStruct('Unused', [
                    subrecord('INFC', conflictType('Ignore', unknown())),
                    subrecord('INFX', conflictType('Ignore', unknown()))
                ])
            )),
            def('FULL'),
            req(subrecord('PNAM', float('Priority'))),
            opts(subrecord('TDUM', string('Dumb Response')), {
                "transform": "keepcase"
            }),
            req(subrecord('DATA', struct('', [
                format(uint8('Type'), enumeration({
                    0: 'Topic',
                    1: 'Conversation',
                    2: 'Combat',
                    3: 'Persuasion',
                    4: 'Detection',
                    5: 'Service',
                    6: 'Miscellaneous',
                    7: 'Radio'
                })),
                format(uint8('Flags'), flags({
                    0: 'Rumors',
                    1: 'Top-level'
                }))
            ])))
        ]
    })
};