let {
    addDef, uint32, array, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('OFST', 
        subrecord('OFST', array('Offset Data', 
            array('Rows', 
                uint32('Offset')
            )
        ))
    );
};