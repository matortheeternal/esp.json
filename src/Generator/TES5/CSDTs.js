let {
    addDef, def, sorted, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('CSDTs', 
        sorted(memberArray('Sound Types', 
            def('CSDT')
        ))
    );
};