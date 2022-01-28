let {
    addDef, enumeration, uint32, format, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('BodyDataIndex', 
        subrecord('INDX', format(uint32('Index'), enumeration({
            0: 'Upper Body',
            1: 'Lower Body',
            2: 'Hand',
            3: 'Foot',
            4: 'Tail'
        })))
    );
};