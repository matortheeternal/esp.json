let {
    def, ckFormId, conflict, int16, struct, 
    array, subrecord, memberArray, float, record
} = require('../helpers');

module.exports = () => {
    record('LCTN', 'Location', {
        members: [
            def('EDID'),
            subrecord('ACPR', conflict('Benign', array('Actor Cell Persistent Reference', 
                conflict('Benign', struct('', [
                    conflict('Benign', ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflict('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflict('Benign', int16('Grid Y')),
                    conflict('Benign', int16('Grid X'))
                ]))
            ))),
            subrecord('LCPR', conflict('Benign', array('Location Cell Persistent Reference', 
                conflict('Benign', struct('', [
                    conflict('Benign', ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflict('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflict('Benign', int16('Grid Y')),
                    conflict('Benign', int16('Grid X'))
                ]))
            ))),
            subrecord('RCPR', array('Reference Cell Persistent Reference', 
                conflict('Benign', ckFormId('Ref', ['ACHR', 'REFR']))
            )),
            subrecord('ACUN', conflict('Benign', array('Actor Cell Unique', 
                conflict('Benign', struct('', [
                    conflict('Benign', ckFormId('Actor', ['NPC_'])),
                    conflict('Benign', ckFormId('Ref', ['ACHR'])),
                    conflict('Benign', ckFormId('Location', ['LCTN', 'NULL']))
                ]))
            ))),
            subrecord('LCUN', conflict('Benign', array('Location Cell Unique', 
                conflict('Benign', struct('', [
                    conflict('Benign', ckFormId('Actor', ['NPC_'])),
                    conflict('Benign', ckFormId('Ref', ['ACHR'])),
                    conflict('Benign', ckFormId('Location', ['LCTN', 'NULL']))
                ]))
            ))),
            subrecord('RCUN', array('Reference Cell Unique', 
                conflict('Benign', ckFormId('Actor', ['NPC_']))
            )),
            subrecord('ACSR', conflict('Benign', array('Actor Cell Static Reference', 
                conflict('Benign', struct('', [
                    conflict('Benign', ckFormId('Loc Ref Type', ['LCRT'])),
                    conflict('Benign', ckFormId('Marker', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflict('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflict('Benign', int16('Grid Y')),
                    conflict('Benign', int16('Grid X'))
                ]))
            ))),
            subrecord('LCSR', conflict('Benign', array('Location Cell Static Reference', 
                conflict('Benign', struct('', [
                    conflict('Benign', ckFormId('Loc Ref Type', ['LCRT'])),
                    conflict('Benign', ckFormId('Marker', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflict('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    conflict('Benign', int16('Grid Y')),
                    conflict('Benign', int16('Grid X'))
                ]))
            ))),
            subrecord('RCSR', conflict('Benign', array('Reference Cell Static Reference', 
                conflict('Benign', ckFormId('Ref', ['ACHR', 'REFR']))
            ))),
            conflict('Benign', memberArray('Actor Cell Encounter Cell', 
                subrecord('ACEC', conflict('Benign', struct('Unknown', [
                    conflict('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflict('Benign', int16('Grid Y')),
                            conflict('Benign', int16('Grid X'))
                        ])
                    )
                ])))
            )),
            conflict('Benign', memberArray('Location Cell Encounter Cell', 
                subrecord('LCEC', struct('Unknown', [
                    conflict('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflict('Benign', int16('Grid Y')),
                            conflict('Benign', int16('Grid X'))
                        ])
                    )
                ]))
            )),
            conflict('Benign', memberArray('Reference Cell Encounter Cell', 
                subrecord('RCEC', struct('Unknown', [
                    conflict('Benign', ckFormId('Location', ['WRLD', 'CELL'])),
                    array('Coordinates', 
                        struct('', [
                            conflict('Benign', int16('Grid Y')),
                            conflict('Benign', int16('Grid X'))
                        ])
                    )
                ]))
            )),
            subrecord('ACID', conflict('Benign', array('Actor Cell Marker Reference', 
                conflict('Benign', ckFormId('Ref', [
                    'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                    'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                    'PFLA'
                ]))
            ))),
            subrecord('LCID', conflict('Benign', array('Location Cell Marker Reference', 
                conflict('Benign', ckFormId('Ref', [
                    'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                    'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                    'PFLA'
                ]))
            ))),
            subrecord('ACEP', conflict('Benign', array('Actor Cell Enable Point', 
                struct('', [
                    conflict('Benign', ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflict('Benign', ckFormId('Ref', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflict('Benign', int16('Grid Y')),
                    conflict('Benign', int16('Grid X'))
                ])
            ))),
            subrecord('LCEP', conflict('Benign', array('Location Cell Enable Point', 
                struct('', [
                    conflict('Benign', ckFormId('Actor', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflict('Benign', ckFormId('Ref', [
                        'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
                        'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON',
                        'PFLA'
                    ])),
                    conflict('Benign', int16('Grid Y')),
                    conflict('Benign', int16('Grid X'))
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