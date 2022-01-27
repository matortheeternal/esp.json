let {
    addDef, def, uint8, format, bytes, 
    size, uint32, int8, int32, struct, 
    subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('AIDT', 
        req(subrecord('AIDT', struct('AI Data', [
            format(uint8('Aggression'), def('AgressionEnum')),
            format(uint8('Confidence'), def('ConfidenceEnum')),
            uint8('Energy Level'),
            uint8('Responsibility'),
            format(uint8('Mood'), def('MoodEnum')),
            size(3, bytes('Unused')),
            format(uint32('Buys/Sells and Services'), def('ServiceFlags')),
            format(int8('Teaches'), def('SkillEnum')),
            uint8('Maximum training level'),
            format(int8('Assistance'), def('AssistanceEnum')),
            format(uint8('Aggro Radius Behavior'), def('AggroRadiusFlags')),
            int32('Aggro Radius')
        ])))
    );
};