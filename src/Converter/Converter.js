let path = require('path'),
    fs = require('fs'),
    Parser = require('./Parser'),
    {indent, lineBreak, tab} = require('./helpers'),
    {convertStatement} = require('./converters');

class Converter extends Parser {
    constructor(filePath, game) {
        super(filePath);
        this._store = {};
        this.outputFiles = [];
        this.globalOutputs = {};
        this._gameMode = `gm${game}`;
    }

    newOutput(filename) {
        console.log(`Creating ${filename}`);
        this.output = {
            filename: filename,
            requires: [],
            text: ''
        };
    }

    registerGlobalOutput(filename, output) {
        this.globalOutputs[filename] = output;
    }

    saveGlobalOutputs() {
        Object.keys(this.globalOutputs).forEach(filename => {
            this.newOutput(filename);
            let globalOutput = this.globalOutputs[filename];
            globalOutput.beforeSave(this, globalOutput);
            this.saveOutput();
        });
    }

    get gameMode() {
        return this._gameMode;
    }

    setOutputFolder(outputFolder) {
        this.outputFolder = outputFolder;
    }

    write(text) {
        this.output.text += text;
    }

    addRequires() {
        if (!this.output) throw new Error('Output not initialized.');
        for (let i = 0; i < arguments.length; i++) {
            let req = arguments[i];
            if (this.output.requires.includes(req)) continue;
            this.output.requires.push(req);
        }
    }

    getExportArgs() {
        return this.output.requires.includes('IsSSE') ? 'game' : '()';
    }

    getRequiresText() {
        let {requires} = this.output;
        return requires.reduce((s, r, n) => {
            if (n % 5 === 0) s += n > 0 ? lineBreak + tab : tab;
            s += r;
            if (n < requires.length - 1) s += ', ';
            return s;
        }, '');
    }

    getOutputText() {
        return [
            `let {`,
            this.getRequiresText(),
            `} = require('../helpers');`,
            ``,
            `module.exports = ${this.getExportArgs()} => {`,
            indent(this.output.text),
            `};`
        ].join(lineBreak);
    }

    repeatOutput() {
        return this.outputFiles.includes(this.output.filename);
    }

    saveOutput(noOverwrite = false) {
        if (this.skipping) return;
        if (noOverwrite && this.repeatOutput()) return;
        this.outputFiles.push(this.output.filename);
        let text = this.getOutputText(),
            filePath = path.resolve(this.outputFolder, this.output.filename);
        fs.writeFileSync(filePath, text);
    }

    storeData(name, data) {
        if (this.skipping) return;
        this._store[name] = data;
    }

    getData(name) {
        return this._store[name];
    }

    convertRegions({start, end}) {
        let match = this.match(/^implementation/m);
        this.advance(match.index + match[0].length);
        while (match = this.match(start)) {
            this.regionName = match[1]
            this.advance(match.index + match[0].length);
            this.next();
            while (!this.match(end))
                convertStatement(this);
        }
    }

    convertStatement(start) {
        this.reset();
        let match = this.match(start);
        if (!match) throw new Error('Could not find statement ' + start);
        this.advance(match.index);
        convertStatement(this);
    }
}

module.exports = Converter;
