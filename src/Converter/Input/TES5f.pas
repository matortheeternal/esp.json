  wbRecord(IDLM, 'Idle Marker',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x20000000} 29, 'Child Can Use'
    ])), [
    wbEDID,
    wbOBNDReq,
    wbInteger(IDLF, 'Flags', itU8, wbFlags([
      'Run in Sequence',
      'Unknown 1',
      'Do Once',
      'Unknown 3',
      'Ignored by Sandbox'
    ]), cpNormal, False),
    wbInteger(IDLC, 'Animation Count', itU8, nil, cpBenign),
    wbFloat(IDLT, 'Idle Timer Setting', cpNormal, False),
    wbArray(IDLA, 'Animations', wbFormIDCk('Animation', [IDLE]), 0, nil, wbIDLAsAfterSet, cpNormal, False),
    wbMODL
  ], False, nil, cpNormal, False, nil, wbAnimationsAfterSet);

  wbRecord(PROJ, 'Projectile', [
    wbEDID,
    wbOBNDReq,
    wbFULL,
    wbMODL,
    wbDEST,
    wbStruct(DATA, 'Data', [
      {00} wbInteger('Flags', itU16, wbFlags([
        'Hitscan',
        'Explosion',
        'Alt. Trigger',
        'Muzzle Flash',
        '',
        'Can Be Disabled',
        'Can Be Picked Up',
        'Supersonic',
        'Pins Limbs',
        'Pass Through Small Transparent',
        'Disable Combat Aim Correction',
        'Rotation'
      ])),
      {02} wbInteger('Type', itU16, wbEnum([], [
        $01, 'Missile',
        $02, 'Lobber',
        $04, 'Beam',
        $08, 'Flame',
        $10, 'Cone',
        $20, 'Barrier',
        $40, 'Arrow'
      ])),
      {04} wbFloat('Gravity'),
      {08} wbFloat('Speed'),
      {12} wbFloat('Range'),
      {16} wbFormIDCk('Light', [LIGH, NULL]),
      {20} wbFormIDCk('Muzzle Flash - Light', [LIGH, NULL]),
      {24} wbFloat('Tracer Chance'),
      {28} wbFloat('Explosion - Alt. Trigger - Proximity'),
      {32} wbFloat('Explosion - Alt. Trigger - Timer'),
      {36} wbFormIDCk('Explosion', [EXPL, NULL]),
      {40} wbFormIDCk('Sound', [SNDR, NULL]),
      {44} wbFloat('Muzzle Flash - Duration'),
      {48} wbFloat('Fade Duration'),
      {52} wbFloat('Impact Force'),
      {56} wbFormIDCk('Sound - Countdown', [SNDR, NULL]),
      {60} wbFormIDCk('Sound - Disable', [SNDR, NULL]),
      {64} wbFormIDCk('Default Weapon Source', [WEAP, NULL]),
      {68} wbFloat('Cone Spread'),
      {72} wbFloat('Collision Radius'),
      {76} wbFloat('Lifetime'),
      {80} wbFloat('Relaunch Interval'),
           wbFormIDCk('Decal Data', [TXST, NULL]),
           wbFormIDCk('Collision Layer', [COLL, NULL])
    ], cpNormal, True, nil, 22),
    wbRStructSK([0], 'Muzzle Flash Model', [
      wbString(NAM1, 'Model Filename'),
      wbByteArray(NAM2, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow)
    ], [], cpNormal, True),
    wbInteger(VNAM, 'Sound Level', itU32, wbSoundLevelEnum, cpNormal, True)
  ]);

  wbRecord(HAZD, 'Hazard', [
    wbEDID,
    wbOBNDReq,
    wbFULL,
    wbMODL,
    wbFormIDCk(MNAM, 'Image Space Modifier', [IMAD, NULL]),
    wbStruct(DATA, 'Data', [
      wbInteger('Limit', itU32),
      wbFloat('Radius'),
      wbFloat('Lifetime'),
      wbFloat('Image Space Radius'),
      wbFloat('Target Interval'),
      wbInteger('Flags', itU32, wbFlags([
        {0x01} 'Affects Player Only',
        {0x02} 'Inherit Duration from Spawn Spell',
        {0x04} 'Align to Impact Normal',
        {0x08} 'Inherit Radius from Spawn Spell',
        {0x10} 'Drop to Ground'
      ])),
      wbFormIDCk('Spell', [SPEL, ENCH, NULL]),
      wbFormIDCk('Light', [LIGH, NULL]),
      wbFormIDCk('Impact Data Set', [IPDS, NULL]),
      wbFormIDCk('Sound', [SNDR, NULL])
    ])
  ]);

  wbSoulGemEnum := wbEnum([
    {0} 'None',
    {1} 'Petty',
    {2} 'Lesser',
    {3} 'Common',
    {4} 'Greater',
    {5} 'Grand'
  ]);

  wbRecord(SLGM, 'Soul Gem',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00020000} 17, 'Can Hold NPC Soul'
    ])), [
    wbEDID,
    wbOBND,
    wbFULL,
    wbMODL,
    wbICON,
    wbDEST,
    wbYNAM,
    wbZNAM,
    wbKSIZ,
    wbKWDAs,
    wbStruct(DATA, '', [
      wbInteger('Value', itU32),
      wbFloat('Weight')
    ], cpNormal, True),
    wbInteger(SOUL, 'Contained Soul', itU8, wbSoulGemEnum, cpNormal, True),
    wbInteger(SLCP, 'Maximum Capacity', itU8, wbSoulGemEnum, cpNormal, True),
    wbFormIDCk(NAM0, 'Linked To', [SLGM])
  ], False, nil, cpNormal, False, nil, wbKeywordsAfterSet);


  if wbSimpleRecords then
    wbNVNM :=
      wbStruct(NVNM, 'Geometry', [
        wbByteArray('Unknown', 8),
        wbFormIDCk('Parent Worldspace', [WRLD, NULL]),
        wbUnion('Parent', wbNVNMParentDecider, [
          wbStruct('Coordinates', [
            wbInteger('Grid Y', itS16),
            wbInteger('Grid X', itS16)
          ]),
          wbFormIDCk('Parent Cell', [CELL])
        ]),
        wbArray('Vertices', wbByteArray('Vertex', 12), -1),
        wbArray('Triangles', wbByteArray('Triangle', 16), -1),
        wbArray('External Connections',
          wbStruct('Connection', [
            wbByteArray('Unknown', 4),
            wbFormIDCk('Mesh', [NAVM]),
            wbInteger('Triangle', itS16)
          ])
        , -1),
        wbArray('Door Triangles',
          wbStruct('Door Triangle', [
            wbInteger('Triangle before door', itS16),
            wbByteArray('Unknown', 4),
            wbFormIDCk('Door', [REFR])
          ])
        , -1),
        wbUnknown
      ])
  else
    wbNVNM :=
      wbStruct(NVNM, 'Geometry', [
        wbInteger('Unknown', itU32),
        wbByteArray('Unknown', 4),
        wbFormIDCk('Parent Worldspace', [WRLD, NULL]),
        wbUnion('Parent', wbNVNMParentDecider, [
          wbStruct('Coordinates', [
            wbInteger('Grid Y', itS16),
            wbInteger('Grid X', itS16)
          ]),
          wbFormIDCk('Parent Cell', [CELL])
        ]),
        wbArray('Vertices', wbStruct('Vertex', [
          wbFloat('X'),
          wbFloat('Y'),
          wbFloat('Z')
        ]), -1),
        wbArray('Triangles',
          wbStruct('Triangle', [
            wbInteger('Vertex 0', itS16),
            wbInteger('Vertex 1', itS16),
            wbInteger('Vertex 2', itS16),
            wbInteger('Edge 0-1', itS16),
            wbInteger('Edge 1-2', itS16),
            wbInteger('Edge 2-0', itS16),
            wbInteger('Flags', itU16, wbFlags([
              'Edge 0-1 link',
              'Edge 1-2 link',
              'Edge 2-0 link',
              'Unknown 4',
              'Unknown 5',
              'Unknown 6',
              'Preferred',
              'Unknown 8',
              'Unknown 9',
              'Water',
              'Door',
              'Found',
              'Unknown 13',
              'Unknown 14',
              'Unknown 15',
              'Unknown 16'
            ])),
            wbInteger('Cover Flags', itU16, wbFlags([
              'Edge 0-1 wall',
              'Edge 0-1 ledge cover',
              'Unknown 3',
              'Unknown 4',
              'Edge 0-1 left',
              'Edge 0-1 right',
              'Edge 1-2 wall',
              'Edge 1-2 ledge cover',
              'Unknown 9',
              'Unknown 10',
              'Edge 1-2 left',
              'Edge 1-2 right',
              'Unknown 13',
              'Unknown 14',
              'Unknown 15',
              'Unknown 16'
            ]))
            //wbInteger('Cover Edge #1 Flags', itU8),
            //wbInteger('Cover Edge #2 Flags', itU8)
          ])
        , -1),
        wbArray('Edge Links',
          wbStruct('Edge Link', [
            wbByteArray('Unknown', 4),
            wbFormIDCk('Mesh', [NAVM]),
            wbInteger('Triangle', itS16)
          ])
        , -1),
        wbArray('Door Triangles',
          wbStruct('Door Triangle', [
            wbInteger('Triangle before door', itS16),
            wbByteArray('Unknown', 4),
            wbFormIDCk('Door', [REFR])
          ])
        , -1),
        wbArray('Cover Triangles', wbInteger('Triangle', itS16), -1),
        wbInteger('NavMeshGrid Divisor', itU32),
        wbFloat('Max X Distance'),
        wbFloat('Max Y Distance'),
        wbFloat('Min X'),
        wbFloat('Min Y'),
        wbFloat('Min Z'),
        wbFloat('Max X'),
        wbFloat('Max Y'),
        wbFloat('Max Z'),
        wbArray('NavMeshGrid', wbArray('NavMeshGridCell', wbInteger('Triangle', itS16), -1))
      ]);

  wbRecord(NAVM, 'Navigation Mesh',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00040000} 18, 'Compressed',
      {0x04000000} 26, 'AutoGen',
      {0x80000000} 31, 'NavmeshGenCell'
    ]), [18]), [
    wbEDID,
    wbNVNM,
    wbUnknown(ONAM),
    wbUnknown(PNAM),
    wbUnknown(NNAM)
  ], False, wbNAVMAddInfo);


  if wbSimpleRecords then
    wbNAVIslandData :=
      wbStruct('Island Data', [
        wbByteArray('Unknown', 24),
        wbArray('Triangles', wbByteArray('Triangle', 6), -1),
        wbArray('Vertices', wbByteArray('Vertex', 12), -1)
      ])
  else
    wbNAVIslandData :=
      wbStruct('Island Data', [
        wbFloat('Min X'),
        wbFloat('Min Y'),
        wbFloat('Min Z'),
        wbFloat('Max X'),
        wbFloat('Max Y'),
        wbFloat('Max Z'),
        wbArray('Triangles',
          wbStruct('Triangle', [
            wbArray('Vertices', wbInteger('Vertex', itS16), 3)
          ])
        , -1),
        wbArray('Vertices', wbStruct('Vertex', [
          wbFloat('X'),
          wbFloat('Y'),
          wbFloat('Z')
        ]), -1)
      ]);

  wbRecord(NAVI, 'Navigation Mesh Info Map', [
    wbEDID,
    wbInteger(NVER, 'Version', itU32),
    wbRArray('Navigation Map Infos',
      wbStruct(NVMI, 'Navigation Map Info', [
        wbFormIDCk('Navigation Mesh', [NAVM]),
        wbByteArray('Unknown', 4),
        wbFloat('X'),
        wbFloat('Y'),
        wbFloat('Z'),
        wbInteger('Preferred Merges Flag', itU32),
        wbArray('Merged To', wbFormIDCk('Mesh', [NAVM]), -1),
        wbArray('Preferred Merges', wbFormIDCk('Mesh', [NAVM]), -1),
        wbArray('Linked Doors', wbStruct('Door', [
          wbByteArray('Unknown', 4),
          wbFormIDCk('Door Ref', [REFR])
        ]), -1),
        wbInteger('Is Island', itU8, wbEnum(['False', 'True'])),
        wbUnion('Island', wbNAVIIslandDataDecider, [
          wbNull,
          wbNAVIslandData
        ]),
        wbByteArray('Unknown', 4),
        wbFormIDCk('Parent Worldspace', [WRLD, NULL]),
        wbUnion('Parent', wbNAVIParentDecider, [
          wbStruct('Coordinates', [
            wbInteger('Grid Y', itS16),
            wbInteger('Grid X', itS16)
          ]),
          wbFormIDCk('Parent Cell', [CELL])
        ])
      ])
    ),
    wbStruct(NVPP, 'Preferred Pathing', [
      wbArray('NavMeshes', wbArray('Set', wbFormIDCk('', [NAVM]), -1), -1),
      wbArray('NavMesh Tree?', wbStruct('', [
        wbFormIDCk('NavMesh', [NAVM]),
        wbInteger('Index/Node', itU32)
      ]), -1)
    ]),
    wbArray(NVSI, 'Unknown', wbFormIDCk('Navigation Mesh', [NAVM]))
  ]);
