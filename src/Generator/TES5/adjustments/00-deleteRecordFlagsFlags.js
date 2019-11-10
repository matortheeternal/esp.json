const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    delete defs.RecordFlagsFlags;
};
