let {
    addDef, subrecord, int8, string, flags, 
    uint32, format, memberStruct, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('UNAMs', 
        memberArray('Data Inputs', 
            memberStruct('Data Input', [
                subrecord('UNAM', int8('Index')),
                subrecord('BNAM', string('Name')),
                subrecord('PNAM', format(uint32('Flags'), flags({
                    0: 'Public'
                })))
            ])
        )
    );
};