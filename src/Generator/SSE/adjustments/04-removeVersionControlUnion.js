const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    defs.MainRecordHeader.elements.forEach(element => {
        if (element.name !== 'Version Control Info 1') return;
        element.type = 'bytes';
        element.size = 4;
        delete element.decider;
        delete element.elements;
    });
};
