let {
    def, ckFormId, uint32, sortKey, struct, 
    sorted, array, subrecord, bytes, size, 
    conflictType, uint16, record
} = require('../helpers');

module.exports = () => {
    record('COBJ', 'Constructible Object', {
        members: [
            def('EDID'),
            def('YNAM'),
            def('ZNAM'),
            subrecord('FVPA', sorted(array('Components', 
                sortKey([0], struct('Component', [
                    ckFormId('Component', def('sigBaseObjects')),
                    uint32('Count')
                ]))
            ))),
            def('DESC'),
            def('CTDAs'),
            subrecord('CNAM', ckFormId('Created Object', def('sigBaseObjects'))),
            subrecord('BNAM', ckFormId('Workbench Keyword', ['KYWD'])),
            subrecord('NAM1', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM2', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM3', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('ANAM', ckFormId('Menu Art Object', ['ARTO'])),
            subrecord('FNAM', sorted(array('Category', 
                ckFormId('Keyword', ['KYWD'])
            ))),
            subrecord('INTV', struct('Data', [
                uint16('Created Object Count'),
                uint16('Priority')
            ]))
        ]
    })
};