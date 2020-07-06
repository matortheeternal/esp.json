let {
    addDef, def, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('Keywords', 
        memberStruct('Keywords', [
            def('KSIZ'),
            def('ReqKWDAs')
        ])
    );
};