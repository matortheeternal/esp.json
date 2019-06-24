let {
    addDef, uint32, format, ckFormId, string, 
    size, union, subrecord, struct
} = require('../helpers');

module.exports = () => {
    addDef('PDTO', 
        subrecord('PDTO', struct('Topic Data', [
            format(uint32('Type'), {
                0: 'Topic Ref',
                1: 'Topic Subtype'
            }),
            union('Data', [
                ckFormId('Topic', ['DIAL', 'NULL']),
                size(4, string('Subtype'))
            ])
        ]))
    );
};