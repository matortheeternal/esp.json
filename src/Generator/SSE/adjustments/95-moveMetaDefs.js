const {getDefs, getMetaDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    let metaDefs = getMetaDefs();
    metaDefs.MainRecordHeader = defs.MainRecordHeader;
    delete defs.MainRecordHeader;
};
