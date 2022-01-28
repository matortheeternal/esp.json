const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    defs.DataPosRot = defs.DATAPosRot;
    delete defs.DATAPosRot;
    let {members} = defs.ACHR;
    members[members.length - 2].id = 'DataPosRot';
};
