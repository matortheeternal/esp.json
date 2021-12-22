module.exports = {
    type: 'conflictPriority',
    name: 'conflictType',
    priority: 0,
    handle: (value, line, converter) => {
        if (value === 'Normal') return line;
        converter.addRequires('conflictType');
        return `conflictType('${value}', ${line})`;
    }
};
