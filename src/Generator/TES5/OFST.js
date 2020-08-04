let {
    addDef, uint32, array, getCount, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('OFST', 
        subrecord('OFST', array('Offset Data', 
            getCount('OffsetDataColsCounter', array('Rows', 
                uint32('Offset')
            ))
        ))
    );
};