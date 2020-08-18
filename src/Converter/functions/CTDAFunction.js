let {functionConverter} = require('../converters');

let paramTypes = [
    'ptNone',
    'ptInteger',
    'ptFloat',
    'ptVariableName',       //Integer
    'ptSex',                //Enum: Male, Female
    'ptActorValue',         //Enum: wbActorValue
    'ptCrimeType',          //?? Enum
    'ptAxis',               //?? Char
    'ptQuestStage',         //?? Integer
    'ptMiscStat',           //?? Enum
    'ptAlignment',          //?? Enum
    'ptEquipType',          //?? Enum
    'ptFormType',           //?? Enum
    'ptCriticalStage',      //?? Enum
    'ptObjectReference',    //REFR, ACHR
    'ptInventoryObject',    //ARMO, BOOK, MISC, WEAP, AMMO, KEYM, ALCH, ARMA, LIGH, LVLI, COBJ
    'ptActor',              //ACHR
    'ptVoiceType',          //VTYP
    'ptIdleForm',           //IDLE
    'ptFormList',           //FLST
    'ptQuest',              //QUST
    'ptFaction',            //FACT
    'ptCell',               //CELL
    'ptClass',              //CLAS
    'ptRace',               //RACE
    'ptActorBase',          //NPC_
    'ptGlobal',             //GLOB
    'ptWeather',            //WTHR
    'ptPackage',            //PACK
    'ptEncounterZone',      //ECZN
    'ptPerk',               //PERK
    'ptOwner',              //FACT, NPC_
    'ptFurniture',          //FURN
    'ptMagicItem',          //SPEL
    'ptMagicEffect',        //MGEF
    'ptWorldspace',         //WRLD
    'ptVATSValueFunction',
    'ptVATSValueParam',
    'ptReferencableObject',
    'ptRegion',             //REGN
    'ptKeyword',            //KYWD
    'ptAdvanceAction',      // ?? Enum
    'ptCastingSource',      // ?? Enum
    'ptShout',              //SHOU
    'ptLocation',           //LCTN
    'ptRefType',            //LCRT
    'ptAlias',              // index into QUST quest aliases
    'ptPackdata',           // index into PACK package data inputs
    'ptAssociationType',    // ASTP
    'ptFurnitureAnim',      // enum
    'ptFurnitureEntry',     // flags
    'ptScene',              // SCEN
    'ptWardState',          // enum
    'ptEvent',              // Struct
    'ptEventData',          // LCTN, KYWD or FLST
    'ptKnowable'            // MGEF, WOOP
];

let setParamType = function(args, opts, index) {
    let argKey = `pt${index}`;
    if (!args[argKey]) return;
    let targetValue = args[argKey].toLowerCase();
    opts[`paramType${index}`] = paramTypes.find(pt => {
        return pt.toLowerCase() === targetValue;
    });
}

functionConverter('CTDAFunction', [
    { type: 'keyValuePair', key: 'Index', valueType: 'number', name: 'index' },
    { type: 'keyValuePair', key: 'Name', valueType: 'string', name: 'name' },
    { type: 'keyValuePair', key: 'ParamType1', valueType: 'identifier', name: 'pt1' },
    { type: 'keyValuePair', key: 'ParamType2', valueType: 'identifier', name: 'pt2' },
    { type: 'keyValuePair', key: 'ParamType3', valueType: 'identifier', name: 'pt3' },
], (args, converter, opts) => {
    converter.addRequires('ctdaFunction');
    setParamType(args, opts, 1);
    setParamType(args, opts, 2);
    setParamType(args, opts, 3);
    return `ctdaFunction(${args.index}, ${args.name})`;
});
