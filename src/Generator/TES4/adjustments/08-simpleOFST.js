const {getDefs, subrecord, bytes} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    let lastIndex = defs.WRLD.members.length - 1;
    defs.WRLD.members[lastIndex] = subrecord("OFST", bytes('Offset Data'));
};
