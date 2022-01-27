let {
    addDef, def, memberArray, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('Effects', 
        memberArray('Effects', 
            memberStruct('Effect', [
                def('EFID'),
                def('EFIT'),
                def('CTDAs')
            ])
        )
    );
};