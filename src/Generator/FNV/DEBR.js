let {
    req, def, uint8, string, flags, 
    format, struct, subrecord, bytes, size, 
    conflictType, memberArray, memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('DEBR', 'Debris', {
        members: [
            req(def('EDID')),
            req(memberArray('Models', 
                memberStruct('Model', [
                    req(subrecord('DATA', struct('Data', [
                        uint8('Percentage'),
                        string('Model FileName'),
                        format(uint8('Flags'), flags({
                            0: 'Has Collission Data'
                        }))
                    ]))),
                    subrecord('MODT', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
                ])
            ))
        ]
    })
};