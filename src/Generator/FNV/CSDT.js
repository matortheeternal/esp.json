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
                10: 'Movement Loop',
                11: 'Conscious Loop',
                12: 'Auxiliary 1',
                13: 'Auxiliary 2',
                14: 'Auxiliary 3',
                15: 'Auxiliary 4',
                16: 'Auxiliary 5',
                17: 'Auxiliary 6',
                18: 'Auxiliary 7',
                19: 'Auxiliary 8',
                20: 'Auxiliary 8',
                21: 'Jump',
                22: 'PlayRandom/Loop'
            }))),
            req(sorted(memberArray('Sounds', 
                sortKey([0], memberStruct('Sound', [
                    req(subrecord('CSDI', ckFormId('Sound', ['SOUN', 'NULL']))),
                    req(subrecord('CSDC', uint8('Sound Chance')))
                ]))
            )))
        ]))
    );
};