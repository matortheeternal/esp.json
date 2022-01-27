let {
    req, def, ckFormId, subrecord, sorted, 
    memberArray, uint32, record
} = require('../helpers');

module.exports = () => {
    record('CDCK', 'Caravan Deck', {
        members: [
            req(def('EDID')),
            def('FULL'),
            sorted(memberArray('Cards', 
                subrecord('CARD', ckFormId('Card', ['CCRD']))
            )),
            subrecord('DATA', uint32('Count (broken)'))
        ]
    })
};