let {
    addDef, def, sorted, memberArray, req
} = require('../helpers');

module.exports = () => {
    addDef('CSDTs', 
        req(sorted(memberArray('Sound Types', 
            def('CSDT')
        )))
    );
};