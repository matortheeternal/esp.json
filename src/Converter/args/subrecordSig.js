module.exports = {
    type: 'signature',
    name: 'subrecord',
    priority: -5,
    handle: (value, line, converter) => {
        converter.addRequires('subrecord');
        return `subrecord('${value}', ${line})`;
    }
};
