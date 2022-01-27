let {
    addDef, enumeration, uint32, format, subrecord, 
    ckFormId, req, uint8, sortKey, memberStruct, 
    sorted, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('CSDT', 
        sortKey([0], memberStruct('Sound Type', [
            subrecord('CSDT', format(uint32('Type'), enumeration({
                0: 'Left Foot',
                1: 'Right Foot',
                2: 'Left Back Foot',
                3: 'Right Back Foot',
                4: 'Idle',
                5: 'Aware',
                6: 'Attack',
                7: 'Hit',
                8: 'Death',
                9: 'Weapon',
                10: 'Movement',
                11: 'Conscious'
            }))),
            req(sorted(memberArray('Sounds', 
                sortKey([0], memberStruct('Sound', [
                    req(subrecord('CSDI', ckFormId('Sound', ['SOUN']))),
                    req(subrecord('CSDC', uint8('Sound Chance')))
                ]))
            )))
        ]))
    );
};