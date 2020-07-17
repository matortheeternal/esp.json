let {
    addDef, enumeration, subrecord, int32, format
} = require('../helpers');

module.exports = () => {
    addDef('XLCM', 
        subrecord('XLCM', format(int32('Level Modifier'), enumeration({
            0: 'Easy',
            1: 'Medium',
            2: 'Hard',
            3: 'Very Hard'
        })))
    );
};