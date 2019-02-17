wbRecord(TACT, 'Talking Activator',
  wbFlags(wbRecordFlagsFlags, wbFlagsList([
    {0x00000200}  9, 'Hidden From Local Map',
    {0x00010000} 16, 'Random Anim Start',
    {0x00020000} 17, 'Radio Station'
  ]), [17]), [
  wbEDID,
  wbVMAD,
  wbOBNDReq,
  wbFULL,
  wbMODL,
  wbDEST,
  wbKSIZ,
  wbKWDAs,
  wbUnknown(PNAM, cpIgnore, True),
  wbFormIDCk(SNAM, 'Looping Sound', [SNDR]),
  wbUnknown(FNAM, cpIgnore, True),
  wbFormIDCk(VNAM, 'Voice Type', [VTYP])
], False, nil, cpNormal, False, nil, wbKeywordsAfterSet);