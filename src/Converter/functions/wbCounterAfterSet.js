let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbCounterAfterSet', [
    { type: 'string', name: 'path' },
    args.identifier
], ({path}, converter) => {
    let storage = converter.getData(converter.regionName);
    if (!storage) {
        console.log(`Storing ${converter.regionName}`);
        storage = { counters: [] };
        converter.storeData(converter.regionName, storage);
    }
    console.log('Found counter', path);
    storage.counters.push({path});
});