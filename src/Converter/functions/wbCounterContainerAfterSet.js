let {functionConverter} = require('../converters'),
    {args} = require('../helpers');

functionConverter('wbCounterContainerAfterSet', [
    { type: 'string', name: 'path' },
    { type: 'string', name: 'arrayPath' },
    args.identifier
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