let {
    addDef, def, req
} = require('../helpers');

module.exports = () => {
    addDef('EffectsReq', 
        req(arrayOfStruct('Effects', struct('Effect', [
            def('EFID'),
            def('EFIT'),
            def('CTDAs'),
        ]))),
    );
};