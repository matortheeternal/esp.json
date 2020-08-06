let {
    def, uint8, string, flags, format, 
    struct, subrecord, req, memberArray, memberStruct, 
    record
} = require('../helpers');

module.exports = () => {
    record('DEBR', 'Debris', {
        members: [
            def('EDID'),
            req(memberArray('Models', 
                memberStruct('Model', [
                    req(subrecord('DATA', struct('Data', [
                        uint8('Percentage'),
                        string('Model FileName'),
                        format(uint8('Flags'), flags({
                            0: 'Has Collision Data'
                        }))
                    ]))),
                    def('MODT')
                ])
            ))
        ]
    })
};