const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    defs.MainRecordHeader.elements.forEach(member => {
        if (member.name !== "Version Control Info 1") return;
        member.type = "bytes";
        member.size = 4;
        delete member.decider;
        delete member.elements;
    });
};
