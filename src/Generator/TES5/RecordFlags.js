let {
    addDef, flags, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('RecordFlags', 
        format(uint32('Record Flags'), flags({
            12: 'Ignored'
        }))
    );
};