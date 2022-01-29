# esp.json
JSON definitions for parsing Bethesda Plugin Files.

## schema
The definition schema is described in `schema.json` with a [JSON Schema](https://json-schema.org/).

You can use WebStorm or another tool which supports draft-07 JSON schema to validate definition file schema.

## usage
You can download built definition files from the `data` folder, the compiled definitions are the `<game>.json` files.  The subfolders with individual definition entries are present for human viewing, and should not be consumed by applications.

## building

Clone the repo and its submodules, e.g.
 
```
git clone --recursive https://github.com/matortheeternal/esp.json
```

### Commands

To convert the xEdit definitions to `src/Generator/{game}` run: 

```
npm run convert -- {game} {source?}
```

To build definition data files run:

```
npm run build -- {game}
```

Examples:
- `npm run convert -- FO4`
- `npm run build -- FO4`
- `npm run convert -- SSE TES5`
- `npm run build -- SSE`
- `npm run convert -- TES5`
- `npm run build -- TES5`
- `npm run convert -- TES4`
- `npm run build -- TES4`
- `npm run convert -- FO3`
- `npm run build -- FO3`
- `npm run convert -- FNV`
- `npm run build -- FNV`
