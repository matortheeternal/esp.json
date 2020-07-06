let {
    addDef, def, memberArray, memberStruct, req
} = require('../helpers');

module.exports = () => {
    addDef('Effects', 
        req(memberArray('Effects', 
            memberStruct('Effect', [
                def('EFID'),
                def('EFIT'),
                def('CTDAs')
            ])
        ))
    );
};