# esp.json
JSON definitions for parsing Bethesda Plugin Files.

## usage

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
- `npm run convert -- TES5`
- `npm run convert -- SSE TES5`
- `npm run build -- TES5`
- `npm run build -- SSE`
