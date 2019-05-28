let {
    def, subrecord, unknown, uint16, ckFormId, 
    uint32, uint8, int8, struct, bytes, 
    multiStruct, arrayOfSubrecord, string, record
} = require('../helpers');

module.exports = () => {
    record('FURN', 'Furniture', {
        flags: {
            "7": "Is Perch",
            "15": "Has Distant LOD",
            "16": "Random Anim Start",
            "23": "Is Marker",
            "28": "Must Exit To Talk",
            "29": "Child Can Use"
        },
        members: [
            def('EDID'),
            def('VMAD'),
            def('OBNDReq'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            def('KSIZ'),
            def('KWDAs'),
            subrecord('PNAM', unknown()),
            subrecord('FNAM', uint16('Flags', {
                "0": "Unknown 0",
                "1": "Ignored By Sandbox"
            })),
            subrecord('KNAM', ckFormId('Interaction Keyword', ['KYWD', 'NULL'])),
            subrecord('MNAM', uint32('Active Markers / Flags', {
                "0": "Sit 0",
                "1": "Sit 1",
                "2": "Sit 2",
                "3": "Sit 3",
                "4": "Sit 4",
                "5": "Sit 5",
                "6": "Sit 6",
                "7": "Sit 7",
                "8": "Sit 8",
                "9": "Sit 9",
                "10": "Sit 10",
                "11": "Sit 11",
                "12": "Sit 12",
                "13": "Sit 13",
                "14": "Sit 14",
                "15": "Sit 15",
                "16": "Sit 16",
                "17": "Sit 17",
                "18": "Sit 18",
                "19": "Sit 19",
                "20": "Sit 20",
                "21": "Sit 21",
                "22": "Sit 22",
                "23": "Sit 23",
                "24": "Unknown 25",
                "25": "Disables Activation",
                "26": "Is Perch",
                "27": "Must Exit to Talk",
                "28": "Unknown 29",
                "29": "Unknown 30",
                "30": "Unknown 31",
                "31": "Unknown 32"
            })),
            subrecord('WBDT', struct('Workbench Data', [
                uint8('Bench Type', {
                    "0": "None",
                    "1": "Create object",
                    "2": "Smithing Weapon",
                    "3": "Enchanting",
                    "4": "Enchanting Experiment",
                    "5": "Alchemy",
                    "6": "Alchemy Experiment",
                    "7": "Smithing Armor"
                }),
                int8('Uses Skill', def('SkillEnum'))
            ])),
            subrecord('NAM1', ckFormId('Associated Spell', ['SPEL'])),
            arrayOfSubrecord('Markers', undefined),
            arrayOfSubrecord('Marker Entry Points', undefined),
            subrecord('XMRK', string('Model FileName'))
        ]
    })
};