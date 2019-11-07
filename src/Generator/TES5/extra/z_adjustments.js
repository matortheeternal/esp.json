const {getDefs, forEachDef} = require('../../helpers');

let last = a => a[a.length - 1];

// DATAPosRot -> DataPosRot
let correctDataPosRot = function(defs) {
    defs.DataPosRot = defs.DATAPosRot;
    delete defs.DATAPosRot;
    last(defs.ACHR.members).id = 'DataPosRot';
};

// VATSValueFunctionEnum -> VatsValueFunctionEnum
let correctVatsValueFunctionEnum = function(defs) {
    defs.CTDA.members[0].element.elements.forEach(element => {
        if (!element.name.startsWith('Parameter')) return;
        if (!element.elements) return;
        element.elements.forEach(element => {
            if (!element.format) return;
            if (element.format.id !== 'VATSValueFunctionEnum') return;
            element.format.id = 'VatsValueFunctionEnum';
        });
    });
};

// SoundlevelEnum -> SoundLevelEnum
let correctSoundLevelEnum = function(defs) {
    defs.WEAP.members.forEach(member => {
        if (!member.element || !member.element.format) return;
        if (member.element.format.id !== 'SoundlevelEnum') return;
        member.element.format.id = 'SoundLevelEnum';
    });
};

let getFormatFunctionName = function(name) {
    name = name.replace(/ToStr(?:ing)?/, '');
    if (name.endsWith('F')) name += '_';
    return name + 'Format';
};

// correct unresolved formats to be format functions
let correctUnresolvedFormats = function(defs) {
    forEachDef(({format}) => {
        if (!format || !format.id) return;
        if (defs.hasOwnProperty(format.id)) return;
        format.type = 'function';
        format.function = getFormatFunctionName(format.id);
        delete format.id;
    });
};

let reportUnresolvedDefs = function(defs) {
    forEachDef(def => {
        if (!def.id || defs.hasOwnProperty(def.id)) return;
        console.error('Unresolved def:', def.id);
    });
};

module.exports = () => {
    let defs = getDefs();
    delete defs.RecordFlagsFlags;
    correctDataPosRot(defs);
    correctVatsValueFunctionEnum(defs);
    correctSoundLevelEnum(defs);
    correctUnresolvedFormats(defs);
    reportUnresolvedDefs(defs);
};
