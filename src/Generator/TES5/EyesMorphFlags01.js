let {
    addDef, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('EyesMorphFlags01', format(uint32('Eye Morph Flags 1'), {
        "0": "EyesType0",
        "1": "EyesType1",
        "2": "EyesType2",
        "3": "EyesType3",
        "4": "EyesType4",
        "5": "EyesType5",
        "6": "EyesType6",
        "7": "EyesType7",
        "8": "EyesType8",
        "9": "EyesType9",
        "10": "EyesType10",
        "11": "EyesType11",
        "12": "EyesType12",
        "13": "EyesType13",
        "14": "EyesType14",
        "15": "EyesType15",
        "16": "EyesType16",
        "17": "EyesType17",
        "18": "EyesType18",
        "19": "EyesType19",
        "20": "EyesType20",
        "21": "EyesType21",
        "22": "EyesType22",
        "23": "EyesType23",
        "24": "EyesType24",
        "25": "EyesType25",
        "26": "EyesType26",
        "27": "EyesType27",
        "28": "EyesType28",
        "29": "EyesType29",
        "30": "EyesType30",
        "31": "EyesType31"
    }));
};