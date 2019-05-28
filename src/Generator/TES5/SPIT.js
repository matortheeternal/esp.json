let {
    addDef, uint32, float, def, ckFormId, 
    subrecord, struct, req
} = require('../helpers');

module.exports = () => {
    addDef('SPIT', req(subrecord('SPIT', struct('Data', [
        uint32('Base Cost'),
        uint32('Flags', {
            "0": "Manual Cost Calc",
            "1": "Unknown 2",
            "2": "Unknown 3",
            "3": "Unknown 4",
            "4": "Unknown 5",
            "5": "Unknown 6",
            "6": "Unknown 7",
            "7": "Unknown 8",
            "8": "Unknown 9",
            "9": "Unknown 10",
            "10": "Unknown 11",
            "11": "Unknown 12",
            "12": "Unknown 13",
            "13": "Unknown 14",
            "14": "Unknown 15",
            "15": "Unknown 16",
            "16": "Unknown 17",
            "17": "PC Start Spell",
            "18": "Unknown 19",
            "19": "Area Effect Ignores LOS",
            "20": "Ignore Resistance",
            "21": "No Absorb/Reflect",
            "22": "Unknown 23",
            "23": "No Dual Cast Modification",
            "24": "Unknown 25",
            "25": "Unknown 26",
            "26": "Unknown 27",
            "27": "Unknown 28",
            "28": "Unknown 29",
            "29": "Unknown 30",
            "30": "Unknown 31",
            "31": "Unknown 32"
        }),
        uint32('Type', {
            "0": "Spell",
            "1": "Disease",
            "2": "Power",
            "3": "Lesser Power",
            "4": "Ability",
            "5": "Poison",
            "6": "Unknown 6",
            "7": "Unknown 7",
            "8": "Unknown 8",
            "9": "Unknown 9",
            "10": "Addiction",
            "11": "Voice"
        }),
        float('Charge Time'),
        uint32('Cast Type', def('CastEnum')),
        uint32('Target Type', def('TargetEnum')),
        float('Cast Duration'),
        float('Range'),
        ckFormId('Half-cost Perk', ['NULL', 'PERK'])
    ]))));
};