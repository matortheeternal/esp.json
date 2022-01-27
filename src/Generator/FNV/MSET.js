let {
    req, def, enumeration, uint32, format, 
    subrecord, string, float, flags, uint8, 
    ckFormId, unknown, record
} = require('../helpers');

module.exports = () => {
    record('MSET', 'Media Set', {
        members: [
            req(def('EDID')),
            def('FULL'),
            subrecord('NAM1', format(uint32('Type'), enumeration({
                0: 'Battle Set',
                1: 'Location Set',
                2: 'Dungeon Set',
                3: 'Incidental Set',
                "-1": 'No Set'
            }))),
            subrecord('NAM2', string('Loop (B) / Battle (D) / Day Outer (L)')),
            subrecord('NAM3', string('Explore (D) / Day Middle (L)')),
            subrecord('NAM4', string('Suspense (D) / Day Inner (L)')),
            subrecord('NAM5', string('Night Outer (L)')),
            subrecord('NAM6', string('Night Middle (L)')),
            subrecord('NAM7', string('Night Inner (L)')),
            subrecord('NAM8', float('Loop dB (B) / Battle dB (D) / Day Outer dB (L)')),
            subrecord('NAM9', float('Explore dB (D) / Day Middle dB (L)')),
            subrecord('NAM0', float('Suspense dB (D) / Day Inner dB (L)')),
            subrecord('ANAM', float('Night Outer dB (L)')),
            subrecord('BNAM', float('Night Middle dB (L)')),
            subrecord('CNAM', float('Night Inner dB (L)')),
            subrecord('JNAM', float('Day Outer Boundary % (L)')),
            subrecord('KNAM', float('Day Middle Boundary % (L)')),
            subrecord('LNAM', float('Day Inner Boundary % (L)')),
            subrecord('MNAM', float('Night Outer Boundary % (L)')),
            subrecord('NNAM', float('Night Middle Boundary % (L)')),
            subrecord('ONAM', float('Night Inner Boundary % (L)')),
            subrecord('PNAM', format(uint8('Enable Flags'), flags({
                0: 'Day Outer',
                1: 'Day Middle',
                2: 'Day Inner',
                3: 'Night Outer',
                4: 'Night Middle',
                5: 'Night Inner'
            }))),
            subrecord('DNAM', float('Wait Time (B) / Minimum Time On (D,L) / Daytime Min (I)')),
            subrecord('ENAM', float('Loop Fade Out (B) / Looping/Random Crossfade Overlap (D,L) / Nighttime Min (I)')),
            subrecord('FNAM', float('Recovery Time (B) / Layer Crossfade Time (D,L) / Daytime Max (I)')),
            subrecord('GNAM', float('Nighttime Max (I)')),
            subrecord('HNAM', ckFormId('Intro (B,D) / Daytime (I)', ['SOUN'])),
            subrecord('INAM', ckFormId('Outro (B,D) / Nighttime (I)', ['SOUN'])),
            subrecord('DATA', unknown())
        ]
    })
};