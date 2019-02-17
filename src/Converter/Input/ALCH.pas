wbRecord(ALCH, 'Ingestible',
  wbFlags(wbRecordFlagsFlags, wbFlagsList([
    {0x20000000} 29, 'Medicine'
  ])), [
  wbEDID,
  wbOBNDReq,
  wbFULL,
  wbKSIZ,
  wbKWDAs,
  wbDESC,
  wbMODL,
  wbDEST,
  wbICON,
  wbYNAM,
  wbZNAM,
  wbETYP,
  wbFloat(DATA, 'Weight', cpNormal, True),
  wbStruct(ENIT, 'Effect Data', [
    wbInteger('Value', itS32),
    wbInteger('Flags', itU32, wbFlags([
      {0x00000001} 'No Auto-Calc',
      {0x00000002} 'Food Item',
      {0x00000004} 'Unknown 3',
      {0x00000008} 'Unknown 4',
      {0x00000010} 'Unknown 5',
      {0x00000020} 'Unknown 6',
      {0x00000040} 'Unknown 7',
      {0x00000080} 'Unknown 8',
      {0x00000100} 'Unknown 9',
      {0x00000200} 'Unknown 10',
      {0x00000400} 'Unknown 11',
      {0x00000800} 'Unknown 12',
      {0x00001000} 'Unknown 13',
      {0x00002000} 'Unknown 14',
      {0x00004000} 'Unknown 15',
      {0x00008000} 'Unknown 16',
      {0x00010000} 'Medicine',
      {0x00020000} 'Poison'
    ])),
    wbFormID('Addiction'),
    wbFloat('Addiction Chance'),
    wbFormIDCk('Sound - Consume', [SNDR, NULL])
  ], cpNormal, True),
  wbEffectsReq
], False, nil, cpNormal, False, wbRemoveEmptyKWDA, wbKeywordsAfterSet);