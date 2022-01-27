let {
    def, uint32, subrecord, bytes, size, 
    ckFormId, int16, struct, unknown, memberArray, 
    array, prefix, record
} = require('../helpers');

module.exports = () => {
    record('NAVI', 'Navigation Mesh Info Map', {
        members: [
            def('EDID'),
            subrecord('NVER', uint32('Version')),
            memberArray('Navigation Map Infos', 
                subrecord('NVMI', struct('Navigation Map Info', [
                    size(4, bytes('Unknown')),
                    ckFormId('Navigation Mesh', ['NAVM']),
                    ckFormId('Location', ['CELL', 'WRLD']),
                    struct('Grid', [
                        int16('X'),
                        int16('Y')
                    ]),
                    unknown()
                ]))
            ),
            memberArray('Navigation Connection Infos', 
                subrecord('NVCI', struct('Navigation Connection Info', [
                    ckFormId('Unknown', ['NAVM']),
                    prefix(4, array('Unknown', 
                        ckFormId('Unknown', ['NAVM'])
                    )),
                    prefix(4, array('Unknown', 
                        ckFormId('Unknown', ['NAVM'])
                    )),
                    prefix(4, array('Doors', 
                        ckFormId('Door', ['REFR'])
                    ))
                ]))
            )
        ]
    })
};