let {
    addDef, float, uint8, bytes, size, 
    struct, array, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('PGRP', 
        req(subrecord('PGRP', array('Points', 
            struct('Point', [
                float('X'),
                float('Y'),
                float('Z (Even = Red/Orange, Odd = Blue)'),
                uint8('Connections'),
                size(3, bytes('Unused'))
            ])
        )))
    );
};