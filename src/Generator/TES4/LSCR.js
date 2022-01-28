let {
    def, ckFormId, int16, sortKey, struct, 
    subrecord, sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('LSCR', 'Load Screen', {
        members: [
            def('EDID'),
            def('ICON'),
            def('DESC'),
            sorted(memberArray('Locations', 
                subrecord('LNAM', sortKey([0, 1], struct('Location', [
                    ckFormId('Direct', [
                        'CELL', 'WRLD', 'NULL'
                    ]),
                    sortKey([0, 1], struct('Indirect', [
                        ckFormId('World', ['NULL', 'WRLD']),
                        sortKey([0, 1], struct('Grid', [
                            int16('Y'),
                            int16('X')
                        ]))
                    ]))
                ])))
            ))
        ]
    })
};