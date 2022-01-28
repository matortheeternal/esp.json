let {
    def, float, struct, array, subrecord, 
    req, record
} = require('../helpers');

module.exports = () => {
    record('ROAD', 'Road', {
        members: [
            def('PGRP'),
            req(subrecord('PGRR', array('Point-to-Point Connections (complex structure can\'t be represented, see source)', 
                struct('Point', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ])
            )))
        ]
    })
};