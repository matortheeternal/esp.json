const {getDefs, req, ckFormId} = require('../../helpers');

module.exports = () => {
    let defs = getDefs();

    defs.CELL.containedInElement = req(
        ckFormId('Cell', ['CELL'])
    );

    defs.WRLD.containedInElement = req(
        ckFormId('Worldspace', ['WRLD'])
    );

    defs.DIAL.containedInElement = req(
        ckFormId('Topic', ['DIAL'])
    );

    defs.QUST.containedInElement = req(
        ckFormId('Quest', ['QUST'])
    );
};
