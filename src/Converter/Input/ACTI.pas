wbRecord(ACTI, 'Activator',
  wbFlags(wbRecordFlagsFlags, wbFlagsList([
    {0x00000040}  6, 'Has Tree LOD',
    {0x00000100}  8, 'Must Update Anims',
    {0x00000200}  9, 'Hidden From Local Map',
    {0x00008000} 15, 'Has Distant LOD',
    {0x00010000} 16, 'Random Anim Start',
    {0x00020000} 17, 'Dangerous',
    {0x00100000} 20, 'Ignore Object Interaction',
    {0x00800000} 23, 'Is Marker',
    {0x02000000} 25, 'Obstacle',
    {0x04000000} 26, 'NavMesh Generation - Filter',
    {0x08000000} 27, 'NavMesh Generation - Bounding Box',
    {0x20000000} 29, 'Child Can Use',
    {0x40000000} 30, 'NavMesh Generation - Ground'
  ])), [
  wbEDID,
  wbVMAD,
  wbOBNDReq,
  wbFULL,
  wbMODL,
  wbDEST,
  wbKSIZ,
  wbKWDAs,
  wbStruct(PNAM, 'Marker Color', [
    wbInteger('Red', itU8),
    wbInteger('Green', itU8),
    wbInteger('Blue', itU8),
    wbInteger('Unused', itU8)
  ]),
  wbFormIDCk(SNAM, 'Sound - Looping', [SNDR]),
  wbFormIDCk(VNAM, 'Sound - Activation', [SNDR]),
  wbFormIDCk(WNAM, 'Water Type', [WATR]),
  wbLString(RNAM, 'Activate Text Override', 0, cpTranslate),
  wbInteger(FNAM, 'Flags', itU16, wbFlags([
    'No Displacement',
    'Ignored by Sandbox'
  ])),
  wbFormIDCk(KNAM, 'Interaction Keyword', [KYWD])
], False, nil, cpNormal, False, nil, wbKeywordsAfterSet);