let {
    req, def, bytes, subrecord, string, 
    opts, conflictType, sortKey, memberStruct, sorted, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('SCPT', 'Script', {
        members: [
            req(def('EDID')),
            req(def('SCHR')),
            subrecord('SCDA', bytes('Compiled Script')),
            opts(subrecord('SCTX', string('Script Source')), {
                "transform": "script"
            }),
            sorted(memberArray('Local Variables', 
                sortKey([0], memberStruct('Local Variable', [
                    def('SLSD'),
                    req(subrecord('SCVR', conflictType('Critical', string('Name'))))
                ]))
            )),
            def('SCROs')
        ]
    })
};