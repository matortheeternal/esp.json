let {
    def, ckFormId, subrecord, req, string, 
    memberStruct, opts, record
} = require('../helpers');

module.exports = () => {
    record('ACHR', 'Placed NPC', {
        members: [
            def('EDID'),
            req(subrecord('NAME', ckFormId('Base', ['NPC_']))),
            memberStruct('Unused', [
                subrecord('XPCI', ckFormId('Unused', ['CELL'])),
                subrecord('FULL', string('Unused'))
            ]),
            def('XLOD'),
            def('XESP'),
            opts(subrecord('XMRC', ckFormId('Merchant container', ['REFR'])), {
                "persistent": true
            }),
            opts(subrecord('XHRS', ckFormId('Horse', ['ACRE'])), {
                "persistent": true
            }),
            def('XRGD'),
            def('XSCL'),
            def('DATAPosRot')
        ]
    })
};