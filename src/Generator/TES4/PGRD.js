let {
    uint16, subrecord, req, def, bytes, 
    int16, sorted, array, customCounter, size, 
    float, sortKey, struct, ckFormId, uint32, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('PGRD', 'Path Grid', {
        members: [
            req(subrecord('DATA', uint16('Point Count'))),
            def('PGRP'),
            subrecord('PGAG', bytes('Unknown')),
            subrecord('PGRR', array('Point-to-Point Connections', 
                customCounter('CalcPGRRSize', 
                    sorted(array('Point', 
                        int16('Point')
                    ))
                )
            )),
            subrecord('PGRI', sorted(array('Inter-Cell Connections', 
                sortKey([0, 2, 3, 4], struct('Inter-Cell Connection', [
                    uint16('Point'),
                    size(2, bytes('Unused')),
                    float('X'),
                    float('Y'),
                    float('Z')
                ]))
            ))),
            sorted(memberArray('Point-to-Reference Mappings', 
                subrecord('PGRL', sortKey([0], struct('Point-to-Reference Mapping', [
                    ckFormId('Reference', ['REFR']),
                    sorted(array('Points', 
                        uint32('Point')
                    ))
                ])))
            ))
        ]
    })
};