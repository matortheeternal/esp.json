let {
    def, uint8, string, format, subrecord, 
    struct, req, arrayOfStruct, multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('DEBR', 'Debris', {
        members: [
            def('EDID'),
            req(arrayOfStruct('Models', 
                multiStruct('Model', [
                    req(subrecord('DATA', struct('Data', [
                        uint8('Percentage'),
                        string('Model FileName'),
                        format(uint8('Flags'), {
                            0: 'Has Collision Data'
                        })
                    ]))),
                    def('MODT')
                ])
            ))
        ]
    })
};