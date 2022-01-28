let {
    flags, def, ckFormId, conflictType, int16, 
    struct, array, subrecord, memberArray, float, 
    record
} = require('../helpers');

module.exports = () => {
    record('LCTN', 'Location', {
        flags: flags({
            11: 'Unknown 11',
            12: 'Ignored',
            14: 'Partial Form'
        }),
        members: [
            def('EDID'),
            subrecord('ACPR', array('Actor Cell Persistent Reference', 
                struct('', [
                    conflictType('Benign', ckFormId('Actor', def('sigReferences'))),
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ])
            )),
            subrecord('LCPR', array('Location Cell Persistent Reference', 
                struct('', [
                    conflictType('Benign', ckFormId('Actor', def('sigReferences'))),
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ])
            )),
            subrecord('RCPR', array('Reference Cell Persistent Reference', 
                conflictType('Benign', ckFormId('Ref', ['ACHR', 'REFR']))
            )),
            subrecord('ACUN', array('Actor Cell Unique', 
                struct('', [
                    conflictType('Benign', ckFormId('Actor', ['NPC_'])),
                    conflictType('Benign', ckFormId('Ref', ['ACHR'])),
                    conflictType('Benign', ckFormId('Location', ['LCTN', 'NULL']))
                ])
            )),
            subrecord('LCUN', array('Location Cell Unique', 
                struct('', [
                    conflictType('Benign', ckFormId('Actor', ['NPC_'])),
                    conflictType('Benign', ckFormId('Ref', ['ACHR'])),
                    conflictType('Benign', ckFormId('Location', ['LCTN', 'NULL']))
                ])
            )),
            subrecord('RCUN', array('Reference Cell Unique', 
                conflictType('Benign', ckFormId('Actor', ['NPC_']))
            )),
            subrecord('ACSR', array('Actor Cell Static Reference', 
                struct('', [
                    conflictType('Benign', ckFormId('Loc Ref Type', ['LCRT'])),
                    conflictType('Benign', ckFormId('Marker', def('sigReferences'))),
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ])
            )),
            subrecord('LCSR', array('Location Cell Static Reference', 
                struct('', [
                    conflictType('Benign', ckFormId('Loc Ref Type', ['LCRT'])),
                    conflictType('Benign', ckFormId('Marker', def('sigReferences'))),
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ])
            )),
            subrecord('RCSR', array('Reference Cell Static Reference', 
                conflictType('Benign', ckFormId('Ref', ['ACHR', 'REFR']))
            )),
            memberArray('Actor Cell Encounter Cell', 
                subrecord('ACEC', struct('Unknown', [
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflictType('Benign', int16('Grid Y')),
                            conflictType('Benign', int16('Grid X'))
                        ])
                    )
                ]))
            ),
            memberArray('Location Cell Encounter Cell', 
                subrecord('LCEC', struct('Unknown', [
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflictType('Benign', int16('Grid Y')),
                            conflictType('Benign', int16('Grid X'))
                        ])
                    )
                ]))
            ),
            memberArray('Reference Cell Encounter Cell', 
                subrecord('RCEC', struct('Unknown', [
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflictType('Benign', int16('Grid Y')),
                            conflictType('Benign', int16('Grid X'))
                        ])
                    )
                ]))
            ),
            subrecord('ACID', array('Actor Cell Marker Reference', 
                conflictType('Benign', ckFormId('Ref', def('sigReferences')))
            )),
            subrecord('LCID', array('Location Cell Marker Reference', 
                conflictType('Benign', ckFormId('Ref', def('sigReferences')))
            )),
            subrecord('ACEP', array('Actor Cell Enable Point', 
                struct('', [
                    conflictType('Benign', ckFormId('Actor', def('sigReferences'))),
                    conflictType('Benign', ckFormId('Ref', def('sigReferences'))),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ])
            )),
            subrecord('LCEP', array('Location Cell Enable Point', 
                struct('', [
                    conflictType('Benign', ckFormId('Actor', def('sigReferences'))),
                    conflictType('Benign', ckFormId('Ref', def('sigReferences'))),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ])
            )),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            subrecord('PNAM', ckFormId('Parent Location', ['LCTN', 'NULL'])),
            subrecord('NAM1', ckFormId('Music', ['MUSC', 'NULL'])),
            subrecord('FNAM', ckFormId('Unreported Crime Faction', ['FACT'])),
            subrecord('MNAM', ckFormId('World Location Marker Ref', ['REFR', 'ACHR'])),
            subrecord('RNAM', float('World Location Radius')),
            subrecord('ANAM', float('Actor Fade Mult')),
            def('CNAM')
        ]
    })
};