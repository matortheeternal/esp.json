let {
    setGroupOrder
} = require('../helpers');

module.exports = () => {
    setGroupOrder([
        'GMST', 'GLOB', 'CLAS', 'FACT', 'HAIR', 'EYES', 'RACE', 'SOUN',
        'SKIL', 'MGEF', 'SCPT', 'LTEX', 'ENCH', 'SPEL', 'BSGN', 'ACTI',
        'APPA', 'ARMO', 'BOOK', 'CLOT', 'CONT', 'DOOR', 'INGR', 'LIGH',
        'MISC', 'STAT', 'GRAS', 'TREE', 'FLOR', 'FURN', 'WEAP', 'AMMO',
        'NPC_', 'PLYR', 'CREA', 'LVLC', 'SLGM', 'KEYM', 'ALCH', 'SBSP',
        'SGST', 'LVLI', 'WTHR', 'CLMT', 'REGN', 'CELL', 'WRLD', 'DIAL',
        'QUST', 'IDLE', 'PACK', 'CSTY', 'LSCR', 'LVSP', 'ANIO', 'WATR',
        'EFSH'
    ]);
};