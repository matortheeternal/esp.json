module.exports = {
    type: 'boolean',
    name: 'persistent',
    priority: -1,
    handle: (value, line, converter, opts) => {
        if (!value) return line;
        opts.persistent = true;
        return line;
    }
};
