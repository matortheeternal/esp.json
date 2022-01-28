let {
    def, req, localized, string, conflictType, 
    subrecord, float, flags, uint32, format, 
    enumeration, record
} = require('../helpers');

module.exports = () => {
    record('AVIF', 'Actor Value Information', {
        members: [
            def('EDID'),
            def('FULL'),
            req(def('DESC')),
            subrecord('ANAM', conflictType('Translate', localized(string('Abbreviation')))),
            subrecord('NAM0', float('Default Value')),
            subrecord('AVFL', format(uint32('Flags'), flags({
                0: 'Unknown 1',
                1: 'Unknown 2',
                2: 'Unknown 3',
                3: 'Unknown 4',
                4: 'Unknown 5',
                5: 'Unknown 6',
                6: 'Unknown 7',
                7: 'Unknown 8',
                8: 'Unknown 9',
                9: 'Unknown 10',
                10: 'Unknown 11',
                11: 'Unknown 12',
                12: 'Unknown 13',
                13: 'Unknown 14',
                14: 'Unknown 15',
                15: 'Unknown 16',
                16: 'Unknown 17',
                17: 'Unknown 18',
                18: 'Unknown 19',
                19: 'Unknown 20',
                20: 'Minimum 1',
                21: 'Maximum 10',
                22: 'Maximum 100',
                23: 'Multiply By 100',
                24: 'Percentage',
                25: 'Unknown 26',
                26: 'Damage Is Positive',
                27: 'God Mode Immune',
                28: 'Unknown 29',
                29: 'Unknown 30',
                30: 'Unknown 31',
                31: 'Hardcoded'
            }))),
            subrecord('NAM1', format(uint32('Type'), enumeration({
                0: 'Derived Attribute',
                1: 'Special (Attribute)',
                2: 'Skill',
                3: 'AI Attribute',
                4: 'Resistance',
                5: 'Condition',
                6: 'Charge',
                7: 'Int Value',
                8: 'Variable',
                9: 'Resource'
            })))
        ]
    })
};