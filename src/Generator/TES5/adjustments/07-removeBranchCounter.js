const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs(),
        procedureTree = defs.PACK.members.find(m => m.name === 'Procedure Tree');
    delete procedureTree.members[0].member.counter;
};
