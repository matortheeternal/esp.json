let {
    flags, req, def, ckFormId, bytes, 
    size, sortKey, struct, subrecord, sorted, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('LSCR', 'Load Screen', {
        flags: flags({
            10: 'Displays In Main Menu',
            12: 'Ignored'
        }),
        members: [
            req(def('EDID')),
            req(def('ICON')),
            req(def('DESC')),
            sorted(memberArray('Locations', 
                subrecord('LNAM', sortKey([0, 1], struct('Location', [
                    ckFormId('Cell', ['CELL', 'WRLD']),
                    size(8, bytes('Unused'))
                ])))
            ))
        ]
    })
};