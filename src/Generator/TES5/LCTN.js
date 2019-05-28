let {
    def, ckFormId, int16, struct, subrecord, 
    array, arrayOfSubrecord, float, record
} = require('../helpers');

module.exports = () => {
    record('LCTN', 'Location', {
        members: [
            def('EDID'),
            subrecord('ACPR', array('Actor Cell Persistent Reference', struct('', [
                ckFormId('Actor', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                ckFormId('Location', ['WRLD', 'CELL']),
                int16('Grid Y', null),
                int16('Grid X', null)
            ]), 0)),
            subrecord('LCPR', array('Location Cell Persistent Reference', struct('', [
                ckFormId('Actor', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                ckFormId('Location', ['WRLD', 'CELL']),
                int16('Grid Y', null),
                int16('Grid X', null)
            ]), 0)),
            subrecord('RCPR', array('Reference Cell Persistent Reference', ckFormId('Ref', ['ACHR', 'REFR']), undefined)),
            subrecord('ACUN', array('Actor Cell Unique', struct('', [
                ckFormId('Actor', ['NPC_']),
                ckFormId('Ref', ['ACHR']),
                ckFormId('Location', ['LCTN', 'NULL'])
            ]), 0)),
            subrecord('LCUN', array('Location Cell Unique', struct('', [
                ckFormId('Actor', ['NPC_']),
                ckFormId('Ref', ['ACHR']),
                ckFormId('Location', ['LCTN', 'NULL'])
            ]), 0)),
            subrecord('RCUN', array('Reference Cell Unique', ckFormId('Actor', ['NPC_']), undefined)),
            subrecord('ACSR', array('Actor Cell Static Reference', struct('', [
                ckFormId('Loc Ref Type', ['LCRT']),
                ckFormId('Marker', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                ckFormId('Location', ['WRLD', 'CELL']),
                int16('Grid Y', null),
                int16('Grid X', null)
            ]), 0)),
            subrecord('LCSR', array('Location Cell Static Reference', struct('', [
                ckFormId('Loc Ref Type', ['LCRT']),
                ckFormId('Marker', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                ckFormId('Location', ['WRLD', 'CELL']),
                int16('Grid Y', null),
                int16('Grid X', null)
            ]), 0)),
            subrecord('RCSR', array('Reference Cell Static Reference', ckFormId('Ref', ['ACHR', 'REFR']), undefined)),
            arrayOfSubrecord('Actor Cell Encounter Cell', undefined),
            arrayOfSubrecord('Location Cell Encounter Cell', undefined),
            arrayOfSubrecord('Reference Cell Encounter Cell', undefined),
            subrecord('ACID', array('Actor Cell Marker Reference', ckFormId('Ref', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']), undefined)),
            subrecord('LCID', array('Location Cell Marker Reference', ckFormId('Ref', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']), undefined)),
            subrecord('ACEP', array('Actor Cell Enable Point', struct('', [
                ckFormId('Actor', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                ckFormId('Ref', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                int16('Grid Y', null),
                int16('Grid X', null)
            ]), undefined)),
            subrecord('LCEP', array('Location Cell Enable Point', struct('', [
                ckFormId('Actor', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                ckFormId('Ref', ['PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA']),
                int16('Grid Y', null),
                int16('Grid X', null)
            ]), undefined)),
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