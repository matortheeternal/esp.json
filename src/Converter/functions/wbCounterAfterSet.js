let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbCounterAfterSet', [
    args.path,
    args.identifier // discard
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