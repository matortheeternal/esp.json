let {
    addDef, uint32, array, customCounter, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('OFST', 
        subrecord('OFST', array('Offset Data', 
            customCounter('OffsetDataColsCounter', 
                array('Rows', 
                    uint32('Offset')
                )
            )
        ))
    );
};