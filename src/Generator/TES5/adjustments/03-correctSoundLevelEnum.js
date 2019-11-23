const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();
    defs.WEAP.members.forEach(member => {
        if (!member.format) return;
        if (member.format.id !== 'SoundlevelEnum') return;
        member.format.id = 'SoundLevelEnum';
    });
};
