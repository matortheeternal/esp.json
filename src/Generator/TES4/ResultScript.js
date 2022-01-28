let {
    addDef, def, bytes, subrecord, string, 
    opts, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('ResultScript', 
        memberStruct('Result Script', [
            def('SCHR'),
            subrecord('SCDA', bytes('Compiled result script')),
            opts(subrecord('SCTX', string('Result script source')), {
                "transform": "script"
            }),
            def('SCROs')
        ])
    );
};