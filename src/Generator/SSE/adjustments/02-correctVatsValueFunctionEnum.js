const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    defs.CTDA.members[0].elements.forEach(element => {
        if (!element.name.startsWith('Parameter')) return;
        if (!element.elements) return;
        element.elements.forEach(element => {
            if (!element.format) return;
            if (element.format.id !== 'VATSValueFunctionEnum') return;
            element.format.id = 'VatsValueFunctionEnum';
        });
    });
};
