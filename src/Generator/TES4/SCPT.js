let {
    def, bytes, subrecord, string, req, 
    opts, conflictType, sortKey, memberStruct, sorted, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('SCPT', 'Script', {
        members: [
            def('EDID'),
            subrecord('SCHD', bytes('Unknown (Script Header?)')),
            def('SCHR'),
            subrecord('SCDA', bytes('Compiled Script')),
            opts(req(subrecord('SCTX', string('Script Source'))), {
                "transform": "script"
            }),
            sorted(memberArray('Local Variables', 
                sortKey([0], memberStruct('Local Variable', [
                    def('SLSD'),
                    subrecord('SCVR', conflictType('Critical', string('Name')))
                ]))
            )),
            def('SCROs')
        ]
    })
};