  wbRecord(LCRT, 'Location Reference Type', [
    wbEDID,
    wbCNAM
  ]);

  wbRecord(AACT, 'Action', [
    wbEDID,
    wbCNAM
  ]);

  wbRecord(TXST, 'Texture Set', [
    wbEDID,
    wbOBNDReq,
    wbRStruct('Textures (RGB/A)', [
      wbString(TX00,'Difuse'),
      wbString(TX01,'Normal/Gloss'),
      wbString(TX02,'Environment Mask/Subsurface Tint'),
      wbString(TX03,'Glow/Detail Map'),
      wbString(TX04,'Height'),
      wbString(TX05,'Environment'),
      wbString(TX06,'Multilayer'),
      wbString(TX07,'Backlight Mask/Specular')
    ], []),
    wbDODT,
    wbInteger(DNAM, 'Flags', itU16, wbFlags([
      {0x0001}'No Specular Map',
      {0x0002}'Facegen Textures',
      {0x0004}'Has Model Space Normal Map'
    ]), cpNormal, False)
  ]);

  wbRecord(HDPT, 'Head Part',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00000004}  2, 'Non-Playable'
    ])), [
    wbEDID,
    wbFULL,
    wbMODL,
    wbInteger(DATA, 'Flags', itU8, wbFlags([
      {0x01} 'Playable',
      {0x02} 'Male',
      {0x04} 'Female',
      {0x10} 'Is Extra Part',
      {0x20} 'Use Solid Tint'
    ]), cpNormal, True),
    wbInteger(PNAM, 'Type', itU32, wbEnum([
      'Misc',
      'Face',
      'Eyes',
      'Hair',
      'Facial Hair',
      'Scar',
      'Eyebrows'
    ])),
    wbRArrayS('Extra Parts',
      wbFormIDCk(HNAM, 'Part', [HDPT])
    ),
    wbRStructs('Parts', 'Part', [
      wbInteger(NAM0, 'Part Type', itU32, wbEnum([
        'Race Morph',
        'Tri',
        'Chargen Morph'
      ])),
      wbString(NAM1, 'Filename', 0, cpTranslate, True)
    ], []),
    wbFormIDCk(TNAM, 'Texture Set', [TXST, NULL]),
    wbFormIDCk(CNAM, 'Color', [CLFM, NULL]),
    wbFormIDCk(RNAM, 'Valid Races', [FLST, NULL])
  ]);

  wbRecord(ASPC, 'Acoustic Space', [
    wbEDID,
    wbOBNDReq,
    wbFormIDCk(SNAM, 'Ambient Sound', [SNDR]),
    wbFormIDCk(RDAT, 'Use Sound from Region (Interiors Only)', [REGN]),
    wbFormIDCk(BNAM, 'Environment Type (reverb)', [REVB])
  ]);

  wbRecord(MSTT, 'Moveable Static',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00000100}  8, 'Must Update Anims',
      {0x00000200}  9, 'Hidden From Local Map',
      {0x00008000} 15, 'Has Distant LOD',
      {0x00010000} 16, 'Random Anim Start',
      {0x00080000} 19, 'Has Currents',
      {0x02000000} 25, 'Obstacle',
      {0x04000000} 26, 'NavMesh Generation - Filter',
      {0x08000000} 27, 'NavMesh Generation - Bounding Box',
      {0x40000000} 30, 'NavMesh Generation - Ground'
    ])), [
    wbEDID,
    wbOBNDReq,
    wbFULL,
    wbMODL,
    wbDEST,
    wbInteger(DATA, 'Flags', itU8, wbFlags([
      'On Local Map',
      'Unknown 1',
      'Unknown 2'
    ]), cpNormal, True),
    wbFormIDCk(SNAM, 'Looping Sound', [SNDR])
  ]);