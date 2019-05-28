let {
    addDef, uint16, def, int16, formId, 
    sortKey, struct, union
} = require('../helpers');

module.exports = () => {
    addDef('ScriptPropertyObject', union('Object Union', [
        sortKey([1], struct('Object v2', [
            uint16('Unused', null),
            int16('Alias', def('ScriptObjectAliasToStr')),
            formId('FormID')
        ])),
        sortKey([1], struct('Object v1', [
            formId('FormID'),
            int16('Alias', def('ScriptObjectAliasToStr')),
            uint16('Unused', null)
        ]))
    ]));
};