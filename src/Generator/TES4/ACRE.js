let {
    def, ckFormId, subrecord, req, int32, 
    memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('ACRE', 'Placed Creature', {
        members: [
            def('EDID'),
            req(subrecord('NAME', ckFormId('Base', ['CREA']))),
            memberStruct('Ownership', [
                def('XOWN'),
                subrecord('XRNK', int32('Faction rank')),
                def('XGLB')
            ]),
            def('XESP'),
            def('XRGD'),
            def('XSCL'),
            def('DATAPosRot')
        ]
    })
};