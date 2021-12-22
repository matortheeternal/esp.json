let {
    addDef, uint16, conflictType, def, int16, 
    format, opts, formId, sortKey, struct, 
    elementMap, union
} = require('../helpers');

module.exports = () => {
    addDef('ScriptPropertyObject', 
        union('Object Union', 'ScriptObjFormatDecider', [
            elementMap([2, 1, 0], sortKey([1], struct('Object v2', [
                conflictType('Ignore', uint16('Unused')),
                opts(format(int16('Alias'), def('ScriptObjectAliasToStr')), {
                    "defaultEditValue": "None"
                }),
                formId('FormID')
            ]))),
            sortKey([1], struct('Object v1', [
                formId('FormID'),
                format(int16('Alias'), def('ScriptObjectAliasToStr')),
                conflictType('Ignore', uint16('Unused'))
            ]))
        ])
    );
};