let {
    addDef, subrecord, int32
} = require('../helpers');

module.exports = () => {
    addDef('XLCM', subrecord('XLCM', int32('Level Modifier', {
        "0": "Easy",
        "1": "Medium",
        "2": "Hard",
        "3": "Very Hard"
    })));
};