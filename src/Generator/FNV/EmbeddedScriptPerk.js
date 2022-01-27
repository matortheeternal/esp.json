let {
    addDef, req, def, bytes, size, 
    subrecord, string, opts, conflictType, sortKey, 
    memberStruct, sorted, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('EmbeddedScriptPerk', 
        memberStruct('Embedded Script', [
            req(def('SCHR')),
            req(subrecord('SCDA', size(0, bytes('Compiled Embedded Script')))),
            opts(req(subrecord('SCTX', string('Embedded Script Source'))), {
                "transform": "script"
            }),
            sorted(memberArray('Local Variables', 
                sortKey([0], memberStruct('Local Variable', [
                    def('SLSD'),
                    req(subrecord('SCVR', conflictType('Critical', string('Name'))))
                ]))
            )),
            def('SCROs')
        ])
    );
};