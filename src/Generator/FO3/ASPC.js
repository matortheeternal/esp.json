let {
    req, def, ckFormId, subrecord, enumeration, 
    uint32, format, record
} = require('../helpers');

module.exports = () => {
    record('ASPC', 'Acoustic Space', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            subrecord('SNAM', ckFormId('Sound - Looping', ['SOUN'])),
            subrecord('RDAT', ckFormId('Use Sound from Region (Interiors Only)', ['REGN'])),
            req(subrecord('ANAM', format(uint32('Environment Type'), enumeration({
                0: 'None',
                1: 'Default',
                2: 'Generic',
                3: 'Padded Cell',
                4: 'Room',
                5: 'Bathroom',
                6: 'Livingroom',
                7: 'Stone Room',
                8: 'Auditorium',
                9: 'Concerthall',
                10: 'Cave',
                11: 'Arena',
                12: 'Hangar',
                13: 'Carpeted Hallway',
                14: 'Hallway',
                15: 'Stone Corridor',
                16: 'Alley',
                17: 'Forest',
                18: 'City',
                19: 'Mountains',
                20: 'Quarry',
                21: 'Plain',
                22: 'Parkinglot',
                23: 'Sewerpipe',
                24: 'Underwater',
                25: 'Small Room',
                26: 'Medium Room',
                27: 'Large Room',
                28: 'Medium Hall',
                29: 'Large Hall',
                30: 'Plate'
            }))))
        ]
    })
};