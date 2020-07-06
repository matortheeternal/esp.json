let {
    def, ckFormId, int16, struct, subrecord, 
    array, memberArray, float, record
} = require('../helpers');

module.exports = () => {
    record('LCTN', 'Location', {
        members: [
            def('EDID'),
            subrecord('ACPR', array('Actor Cell Persistent Reference', 
                struct('', [
                    ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ]),
                    ckFormId('Location', ['WRLD', 'CELL']),
                    int16('Grid Y'),
                    int16('Grid X')
                ])
            )),
            subrecord('LCPR', array('Location Cell Persistent Reference', 
                struct('', [
                    ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ]),
                    ckFormId('Location', ['WRLD', 'CELL']),
                    int16('Grid Y'),
                    int16('Grid X')
                ])
            )),
            subrecord('RCPR', array('Reference Cell Persistent Reference', 
                ckFormId('Ref', ['ACHR', 'REFR'])
            )),
            subrecord('ACUN', array('Actor Cell Unique', 
                struct('', [
                    ckFormId('Actor', ['NPC_']),
                    ckFormId('Ref', ['ACHR']),
                    ckFormId('Location', ['LCTN', 'NULL'])
                ])
            )),
            subrecord('LCUN', array('Location Cell Unique', 
                struct('', [
                    ckFormId('Actor', ['NPC_']),
                    ckFormId('Ref', ['ACHR']),
                    ckFormId('Location', ['LCTN', 'NULL'])
                ])
            )),
            subrecord('RCUN', array('Reference Cell Unique', 
                ckFormId('Actor', ['NPC_'])
            )),
            subrecord('ACSR', array('Actor Cell Static Reference', 
                struct('', [
                    ckFormId('Loc Ref Type', ['LCRT']),
                    ckFormId('Marker', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ]),
                    ckFormId('Location', ['WRLD', 'CELL']),
                    int16('Grid Y'),
                    int16('Grid X')
                ])
            )),
            subrecord('LCSR', array('Location Cell Static Reference', 
                struct('', [
                    ckFormId('Loc Ref Type', ['LCRT']),
                    ckFormId('Marker', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ]),
                    ckFormId('Location', ['WRLD', 'CELL']),
                    int16('Grid Y'),
                    int16('Grid X')
                ])
            )),
            subrecord('RCSR', array('Reference Cell Static Reference', 
                ckFormId('Ref', ['ACHR', 'REFR'])
            )),
            memberArray('Actor Cell Encounter Cell', 
                subrecord('ACEC', struct('Unknown', [
                    ckFormId('Location', ['WRLD', 'CELL']),
                    array('Coordinates', 
                        struct('', [
                            int16('Grid Y'),
                            int16('Grid X')
                        ])
                    )
                ]))
            ),
            memberArray('Location Cell Encounter Cell', 
                subrecord('LCEC', struct('Unknown', [
                    ckFormId('Location', ['WRLD', 'CELL']),
                    array('Coordinates', 
                        struct('', [
                            int16('Grid Y'),
                            int16('Grid X')
                        ])
                    )
                ]))
            ),
            memberArray('Reference Cell Encounter Cell', 
                subrecord('RCEC', struct('Unknown', [
                    ckFormId('Location', ['WRLD', 'CELL']),
                    array('Coordinates', 
                        struct('', [
                            int16('Grid Y'),
                            int16('Grid X')
                        ])
                    )
                ]))
            ),
            subrecord('ACID', array('Actor Cell Marker Reference', 
                ckFormId('Ref', [
                    'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                    'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                    'PFLA'
                ])
            )),
            subrecord('LCID', array('Location Cell Marker Reference', 
                ckFormId('Ref', [
                    'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                    'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                    'PFLA'
                ])
            )),
            subrecord('ACEP', array('Actor Cell Enable Point', 
                struct('', [
                    ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ]),
                    ckFormId('Ref', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ]),
                    int16('Grid Y'),
                    int16('Grid X')
                ])
            )),
            subrecord('LCEP', array('Location Cell Enable Point', 
                struct('', [
                    ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ]),
                    ckFormId('Ref', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ]),
                    int16('Grid Y'),
                    int16('Grid X')
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
            subrecord('NAM0', ckFormId('Horse Marker Ref', ['REFR'])),
            def('CNAM')
        ]
    })
};