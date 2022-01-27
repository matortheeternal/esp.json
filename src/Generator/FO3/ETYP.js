let {
    addDef, def, int32, format, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('ETYP', 
        subrecord('ETYP', format(int32('Equipment Type'), def('EquipTypeEnum')))
    );
};