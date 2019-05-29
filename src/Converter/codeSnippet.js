let getStartIndex = function(text, position) {
    let minIndex = Math.max(position - 80, 0),
        startIndex = minIndex;
    for (var i = position - 1; i > minIndex; i--) {
        let char = text[i],
            isNewLine = char === '\n';
        if (isNewLine || char === ' ' || char === '\t')
            startIndex = i + 1;
        if (isNewLine) break;
    }
    return i === 0 ? 0 : startIndex;
};

let getEndIndex = function(text, position) {
    let maxIndex = Math.min(position + 80, text.length),
        endIndex = maxIndex;
    for (var i = position; i < maxIndex; i++) {
        let char = text[i],
            isNewLine = char === '\n';
        if (isNewLine || char === ' ' || char === '\t')
            endIndex = i;
        if (isNewLine) break;
    }
    return i === text.length ? text.length : endIndex;
};

let getLineNumber = function(text, position) {
    let lineNumber = 1;
    for (let i = position; i >= 0; i--)
        if (text[i] === '\n') lineNumber++;
    return lineNumber;
};

let codeSnippet = function(filename, text, position) {
    let startIndex = getStartIndex(text, position),
        endIndex = getEndIndex(text, position),
        relativePos = position - startIndex,
        lineNumber = getLineNumber(text, position),
        errorCaret = '\n' + ' '.repeat(relativePos) + '^';
    return `${filename}, line ${lineNumber}:\n` +
        text.slice(startIndex, endIndex)
            .replace(/[\r\n]/, ' ') + errorCaret;
};

module.exports = codeSnippet;