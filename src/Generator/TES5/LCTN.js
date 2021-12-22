let {
    def, ckFormId, conflictType, int16, struct, 
    array, subrecord, memberArray, float, record
} = require('../helpers');

module.exports = () => {
    record('LCTN', 'Location', {
        members: [
            def('EDID'),
            subrecord('ACPR', conflictType('Benign', array('Actor Cell Persistent Reference', 
                conflictType('Benign', struct('', [
                    conflictType('Benign', ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ]))
            ))),
            subrecord('LCPR', conflictType('Benign', array('Location Cell Persistent Reference', 
                conflictType('Benign', struct('', [
                    conflictType('Benign', ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ]))
            ))),
            subrecord('RCPR', array('Reference Cell Persistent Reference', 
                conflictType('Benign', ckFormId('Ref', ['ACHR', 'REFR']))
            )),
            subrecord('ACUN', conflictType('Benign', array('Actor Cell Unique', 
                conflictType('Benign', struct('', [
                    conflictType('Benign', ckFormId('Actor', ['NPC_'])),
                    conflictType('Benign', ckFormId('Ref', ['ACHR'])),
                    conflictType('Benign', ckFormId('Location', ['LCTN', 'NULL']))
                ]))
            ))),
            subrecord('LCUN', conflictType('Benign', array('Location Cell Unique', 
                conflictType('Benign', struct('', [
                    conflictType('Benign', ckFormId('Actor', ['NPC_'])),
                    conflictType('Benign', ckFormId('Ref', ['ACHR'])),
                    conflictType('Benign', ckFormId('Location', ['LCTN', 'NULL']))
                ]))
            ))),
            subrecord('RCUN', array('Reference Cell Unique', 
                conflictType('Benign', ckFormId('Actor', ['NPC_']))
            )),
            subrecord('ACSR', conflictType('Benign', array('Actor Cell Static Reference', 
                conflictType('Benign', struct('', [
                    conflictType('Benign', ckFormId('Loc Ref Type', ['LCRT'])),
                    conflictType('Benign', ckFormId('Marker', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ]))
            ))),
            subrecord('LCSR', conflictType('Benign', array('Location Cell Static Reference', 
                conflictType('Benign', struct('', [
                    conflictType('Benign', ckFormId('Loc Ref Type', ['LCRT'])),
                    conflictType('Benign', ckFormId('Marker', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ]))
            ))),
            subrecord('RCSR', conflictType('Benign', array('Reference Cell Static Reference', 
                conflictType('Benign', ckFormId('Ref', ['ACHR', 'REFR']))
            ))),
            conflictType('Benign', memberArray('Actor Cell Encounter Cell', 
                subrecord('ACEC', conflictType('Benign', struct('Unknown', [
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflictType('Benign', int16('Grid Y')),
                            conflictType('Benign', int16('Grid X'))
                        ])
                    )
                ])))
            )),
            conflictType('Benign', memberArray('Location Cell Encounter Cell', 
                subrecord('LCEC', struct('Unknown', [
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflictType('Benign', int16('Grid Y')),
                            conflictType('Benign', int16('Grid X'))
                        ])
                    )
                ]))
            )),
            conflictType('Benign', memberArray('Reference Cell Encounter Cell', 
                subrecord('RCEC', struct('Unknown', [
                    conflictType('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflictType('Benign', int16('Grid Y')),
                            conflictType('Benign', int16('Grid X'))
                        ])
                    )
                ]))
            )),
            subrecord('ACID', conflictType('Benign', array('Actor Cell Marker Reference', 
                conflictType('Benign', ckFormId('Ref', [
                    'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                    'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                    'PFLA'
                ]))
            ))),
            subrecord('LCID', conflictType('Benign', array('Location Cell Marker Reference', 
                conflictType('Benign', ckFormId('Ref', [
                    'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                    'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                    'PFLA'
                ]))
            ))),
            subrecord('ACEP', conflictType('Benign', array('Actor Cell Enable Point', 
                struct('', [
                    conflictType('Benign', ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflictType('Benign', ckFormId('Ref', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ])
            ))),
            subrecord('LCEP', conflictType('Benign', array('Location Cell Enable Point', 
                struct('', [
                    conflictType('Benign', ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflictType('Benign', ckFormId('Ref', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflictType('Benign', int16('Grid Y')),
                    conflictType('Benign', int16('Grid X'))
                ])
            ))),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            subrecord('PNAM', ckFormId('Parent Location', ['LCTN', 'NULL'])),
            subrecord('NAM1', ckFormId('Music', ['MUSC', 'NULL'])),
            subrecord('FNAM', ckFormId('Unreported Crime Faction', ['FACT'])),
            subrecord('MNAM', ckFormId('World Location Marker Ref', ['REFR', 'ACHR'])),
            subrecord('RNAM', float('World Location Radius')),
            subrecord('NAM0', ckFormId('Horse Marker Ref', ['REFR'])),
            def('CNAM')
        ]
    })
};