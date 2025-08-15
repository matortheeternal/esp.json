const {getDefs, forEachDef} = require('../../helpers');

let getFormatFunctionName = function(name) {
    name = name.replace(/ToStr(?:ing)?/, '');
    if (name.endsWith('F')) name += '_';
    return name + 'Format';
};

module.exports = () => {
    let defs = getDefs(),
        formatTypes = new Set();

    forEachDef(({format}) => {
        if (!format || !format.id) return;
        if (defs.hasOwnProperty(format.id)) return;
        format.type = getFormatFunctionName(format.id);
        formatTypes.add(format.type);
        delete format.id;
    });

    console.log('Special format types:');
    formatTypes.forEach(formatType => {
        console.log(`- ${formatType}`);
    });
};
