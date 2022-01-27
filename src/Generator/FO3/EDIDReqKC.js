let {
    addDef, string, subrecord, req, opts
} = require('../helpers');

module.exports = () => {
    addDef('EDIDReqKC', 
        opts(req(subrecord('EDID', string('Editor ID'))), {
            "transform": "keepcase"
        })
    );
};