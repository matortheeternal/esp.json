const {getDefs, forEachDef} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    forEachDef(def => {
        if (!def.id || defs.hasOwnProperty(def.id)) return;
        console.error('Unresolved def:', def.id);
    });
};
