let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbCounterContainerAfterSet', [
    args.path,
    args.arrayPath,
    args.identifier // discard
], ({path, arrayPath}, converter) => {
    let storage = converter.getData(converter.regionName);
    if (!storage) {
        console.log(`Storing ${converter.regionName}`);
        storage = { counters: [] };
        converter.storeData(converter.regionName, storage);
    }
    console.log('Found counter', path, arrayPath);
    storage.counters.push({path, arrayPath});
});