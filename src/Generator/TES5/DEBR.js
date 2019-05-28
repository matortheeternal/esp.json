let {
    def, uint8, string, subrecord, struct, 
    req, arrayOfMultiStruct, sortKey, multiStruct, record
} = require('../helpers');

module.exports = () => {
    record('DEBR', 'Debris', {
        members: [
            def('EDID'),
            req(arrayOfMultiStruct('Models', multiStruct(Model, [
                req(subrecord('DATA', struct('Data', [
                    uint8('Percentage'),
                    string('Model FileName'),
                    uint8('Flags', {
                        "0": "Has Collision Data"
                    })
                ]))),
                def('MODT')
            ])))
        ]
    })
};