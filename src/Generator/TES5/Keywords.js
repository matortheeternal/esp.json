let {
    addDef, def, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('Keywords', multiStruct(Keywords, [
        def('KSIZ'),
        def('ReqKWDAs')
    ]));
};