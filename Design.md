# Design

## Output

The output will be minified JSON files named after game modes:

- `TES5.json`
- `SSE.json`
- `FO4.json`
- `FO3.json`
- `FNV.json`

Each of these files will have within it a collection of definitions which can be interpretted by a program to parse Bethesda Plugin Files.

We want to reduce repetition in the file to reduce parsing - we can always process the file to generate a more verbose variant.