const {getDefs, subrecord, bytes} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    defs.OFST = subrecord("OFST", bytes('Offset Data'));
};
