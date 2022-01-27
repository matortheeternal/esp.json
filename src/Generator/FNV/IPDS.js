let {
    req, def, ckFormId, struct, subrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('IPDS', 'Impact DataSet', {
        members: [
            req(def('EDID')),
            req(subrecord('DATA', struct('Impacts', [
                ckFormId('Stone', ['IPCT', 'NULL']),
                ckFormId('Dirt', ['IPCT', 'NULL']),
                ckFormId('Grass', ['IPCT', 'NULL']),
                ckFormId('Glass', ['IPCT', 'NULL']),
                ckFormId('Metal', ['IPCT', 'NULL']),
                ckFormId('Wood', ['IPCT', 'NULL']),
                ckFormId('Organic', ['IPCT', 'NULL']),
                ckFormId('Cloth', ['IPCT', 'NULL']),
                ckFormId('Water', ['IPCT', 'NULL']),
                ckFormId('Hollow Metal', ['IPCT', 'NULL']),
                ckFormId('Organic Bug', ['IPCT', 'NULL']),
                ckFormId('Organic Glow', ['IPCT', 'NULL'])
            ])))
        ]
    })
};