let {getDefs} = require('../../helpers');

let last = a => a[a.length - 1];

module.exports = () => {
    let defs = getDefs();

    // using showUnknown instead
    delete defs.RecordFlagsFlags;

    // case sensitivity issues
    // DATAPosRot -> DataPosRot
    defs.DataPosRot = defs.DATAPosRot;
    delete defs.DATAPosRot;
    last(defs.ACHR.members).id = 'DataPosRot';
};
