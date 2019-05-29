let {
    addDef, int16, subrecord, struct
} = require('../helpers');

module.exports = () => {
    addDef('OBND', 
        subrecord('OBND', struct('Object Bounds', [
            int16('X1'),
            int16('Y1'),
            int16('Z1'),
            int16('X2'),
            int16('Y2'),
            int16('Z2')
        ]))
    );
};