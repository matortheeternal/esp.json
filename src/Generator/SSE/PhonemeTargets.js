let {
    addDef, float, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('PhonemeTargets', 
        subrecord('PHWT', struct('Phoneme Target Weight', [
            float('Aah / LipBigAah'),
            float('BigAah / LipDST'),
            float('BMP / LipEee'),
            float('ChJsh / LipFV'),
            float('DST / LipK'),
            float('Eee / LipL'),
            float('Eh / LipR'),
            float('FV / LipTh'),
            float('I'),
            float('K'),
            float('N'),
            float('Oh'),
            float('OohQ'),
            float('R'),
            float('TH'),
            float('W')
        ]))
    );
};