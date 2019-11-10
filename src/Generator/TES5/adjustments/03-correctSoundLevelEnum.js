const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    defs.WEAP.members.forEach(member => {
        if (!member.element || !member.element.format) return;
        if (member.element.format.id !== 'SoundlevelEnum') return;
        member.element.format.id = 'SoundLevelEnum';
    });
};
