const {getDefs} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();

    defs.PluginFile = {
        type: 'pluginFile',
        children: [
            {  id: 'TES4' }
        ]
    };
};
