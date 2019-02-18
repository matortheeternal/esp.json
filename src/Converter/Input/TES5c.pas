  ReferenceRecord(PARW, 'Placed Arrow');
  ReferenceRecord(PBAR, 'Placed Barrier');
  ReferenceRecord(PBEA, 'Placed Beam');
  ReferenceRecord(PCON, 'Placed Cone/Voice');
  ReferenceRecord(PFLA, 'Placed Flame');
  ReferenceRecord(PGRE, 'Placed Projectile');
  ReferenceRecord(PHZD, 'Placed Hazard');
  ReferenceRecord(PMIS, 'Placed Missile');

  wbRecord(CELL, 'Cell',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00000400} 10, 'Persistent',
      {0x00020000} 17, 'Off Limits',
      {0x00040000} 18, 'Compressed',
      {0x00080000} 19, 'Can''t Wait'
    ]), [18]), [
    wbEDID,
    wbFULL,
    {>>>
    Flags can be itU8, but CELL\DATA has a critical role in various wbImplementation.pas routines
    and replacing it with wbUnion generates error when setting for example persistent flag in REFR.
    So let it always be an integer
    <<<}
    wbInteger(DATA, 'Flags', itU16, wbFlags([
      {0x0001} 'Is Interior Cell',
      {0x0002} 'Has Water',
      {0x0004} 'Can''t Travel From Here',
      {0x0008} 'No LOD Water',
      {0x0010} 'Unknown 5',
      {0x0020} 'Public Area',
      {0x0040} 'Hand Changed',
      {0x0080} 'Show Sky',
      {0x0100} 'Use Sky Lighting'
    ]), cpNormal, True, False, nil, wbCELLDATAAfterSet),
    wbStruct(XCLC, 'Grid', [
      wbInteger('X', itS32),
      wbInteger('Y', itS32),
      wbInteger('Force Hide Land', itU32, wbFlags([
        'Quad 1',
        'Quad 2',
        'Quad 3',
        'Quad 4'
      ], True))
    ], cpNormal, False, nil, 2),
    wbStruct(XCLL, 'Lighting', [
      wbByteColors('Ambient Color'),
      wbByteColors('Directional Color'),
      wbByteColors('Fog Color Near'),
      wbFloat('Fog Near'),
      wbFloat('Fog Far'),
      wbInteger('Directional Rotation XY', itS32),
      wbInteger('Directional Rotation Z', itS32),
      wbFloat('Directional Fade'),
      wbFloat('Fog Clip Distance'),
      wbFloat('Fog Power'),
      wbAmbientColors('Ambient Colors'),
      wbByteColors('Fog Color Far'),
      wbFloat('Fog Max'),
      wbFloat('Light Fade Begin'),
      wbFloat('Light Fade End'),
      wbInteger('Inherits', itU32, wbFlags([
        {0x00000001}'Ambient Color',
        {0x00000002}'Directional Color',
        {0x00000004}'Fog Color',
        {0x00000008}'Fog Near',
        {0x00000010}'Fog Far',
        {0x00000020}'Directional Rotation',
        {0x00000040}'Directional Fade',
        {0x00000080}'Clip Distance',
        {0x00000100}'Fog Power',
        {0x00000200}'Fog Max',
        {0x00000400}'Light Fade Distances'
      ]))
    ], cpNormal, False, nil, 11),

    wbTVDT,
    wbMaxHeightDataCELL,
    wbFormIDCk(LTMP, 'Lighting Template', [LGTM, NULL], False, cpNormal, True),
    wbByteArray(LNAM, 'Unknown', 0, cpIgnore), // leftover flags, they are now in XCLC

    {>>> XCLW sometimes has $FF7FFFFF and causes invalid floation point <<<}
    wbFloat(XCLW, 'Water Height', cpNormal, False, 1, -1, nil, nil, 0, wbCELLXCLWGetConflictPriority),
    //wbByteArray(XCLW, 'Water Height', 4),
    wbString(XNAM, 'Water Noise Texture'),
    wbArrayS(XCLR, 'Regions', wbFormIDCk('Region', [REGN])),
    wbFormIDCk(XLCN, 'Location', [LCTN]),
    wbByteArray(XWCN, 'Unknown', 0, cpIgnore), // leftover
    wbByteArray(XWCS, 'Unknown', 0, cpIgnore), // leftover
    wbStruct(XWCU, 'Water Velocity', [
      wbFloat('X Offset'),
      wbFloat('Y Offset'),
      wbFloat('Z Offset'),
      wbByteArray('Unknown', 4),
      wbFloat('X Angle'),
      wbFloat('Y Angle'),
      wbFloat('Z Angle'),
      wbByteArray('Unknown', 0)
    ]),
    wbFormIDCk(XCWT, 'Water', [WATR]),
    wbOwnership,
    wbFormIDCk(XILL, 'Lock List', [FLST, NPC_]),
    wbString(XWEM, 'Water Environment Map'),
    wbFormIDCk(XCCM, 'Sky/Weather from Region', [REGN]),
    wbFormIDCk(XCAS, 'Acoustic Space', [ASPC]),
    wbFormIDCk(XEZN, 'Encounter Zone', [ECZN]),
    wbFormIDCk(XCMO, 'Music Type', [MUSC]),
    wbFormIDCk(XCIM, 'Image Space', [IMGS])
  ], True, wbCellAddInfo, cpNormal, False, wbCELLAfterLoad);


  wbRecord(CLAS, 'Class', [
    wbEDID,
    wbFULLReq,
    wbDESCReq,
    wbICON,
    wbStruct(DATA, '', [
      wbByteArray('Unknown', 4),
      wbInteger('Teaches', itS8, wbEnum([
        'One Handed',
        'Two Handed',
        'Archery',
        'Block',
        'Smithing',
        'Heavy Armor',
        'Light Armor',
        'Pickpocket',
        'Lockpicking',
        'Sneak',
        'Alchemy',
        'Speech',
        'Alteration',
        'Conjuration',
        'Destruction',
        'Illusion',
        'Restoration',
        'Enchanting'
      ])),
      wbInteger('Maximum training level', itU8),
      wbArray('Skill Weights', wbInteger('Weight', itU8), [
        'One Handed',
        'Two Handed',
        'Archery',
        'Block',
        'Smithing',
        'Heavy Armor',
        'Light Armor',
        'Pickpocket',
        'Lockpicking',
        'Sneak',
        'Alchemy',
        'Speech',
        'Alteration',
        'Conjuration',
        'Destruction',
        'Illusion',
        'Restoration',
        'Enchanting'
      ]),
      wbFloat('Bleedout Default'),
      wbInteger('Voice Points', itU32),
      wbArray('Attribute Weights', wbInteger('Weight', itU8), [
        'Health',
        'Magicka',
        'Stamina',
        'Unknown'
      ])
    ], cpNormal, True)
  ]);

  wbRecord(CLMT, 'Climate', [
    wbEDID,
    wbArrayS(WLST, 'Weather Types', wbStructSK([0], 'Weather Type', [
      wbFormIDCk('Weather', [WTHR, NULL]),
      wbInteger('Chance', itS32),
      wbFormIDCk('Global', [GLOB, NULL])
    ])),
    wbString(FNAM, 'Sun Texture'),
    wbString(GNAM, 'Sun Glare Texture'),
    wbMODL,
    wbStruct(TNAM, 'Timing', [
      wbStruct('Sunrise', [
        wbInteger('Begin', itU8, wbClmtTime),
        wbInteger('End', itU8, wbClmtTime)
      ]),
      wbStruct('Sunset', [
        wbInteger('Begin', itU8, wbClmtTime),
        wbInteger('End', itU8, wbClmtTime)
      ]),
      wbInteger('Volatility', itU8),
      wbInteger('Moons / Phase Length', itU8, wbClmtMoonsPhaseLength)
    ], cpNormal, True)
  ]);

  wbRecord(SPGD, 'Shader Particle Geometry', [
    wbEDID,
    wbStruct(DATA, 'Data', [
      wbFloat('Gravity Velocity'),
      wbFloat('Rotation Velocity'),
      wbFloat('Particle Size X'),
      wbFloat('Particle Size Y'),
      wbFloat('Center Offset Min'),
      wbFloat('Center Offset Max'),
      wbFloat('Initial Rotation Range'),
      wbInteger('# of Subtextures X', itU32),
      wbInteger('# of Subtextures Y', itU32),
      wbInteger('Type', itU32, wbEnum([
        'Rain',
        'Snow'
      ])),
      wbInteger('Box Size', itU32),
      wbFloat('Particle Density')
    ], cpNormal, True, nil, 10),
    wbString(ICON, 'Particle Texture')
  ]);

  wbRecord(RFCT, 'Visual Effect', [
    wbEDID,
    wbStruct(DATA, 'Effect Data', [
			wbFormIDCK('Effect Art', [ARTO, NULL]),
      wbFormIDCK('Shader', [EFSH, NULL]),
      wbInteger('Flags', itU32, wbFlags([
        {0x00000001}'Rotate to Face Target',
        {0x00000002}'Attach to Camera',
        {0x00000004}'Inherit Rotation'
      ]))
    ], cpNormal, True)
  ]);

  wbRecord(CONT, 'Container',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00008000} 15, 'Has Distant LOD',
      {0x00010000} 16, 'Random Anim Start',
      {0x02000000} 25, 'Obstacle',
      {0x04000000} 26, 'NavMesh Generation - Filter',
      {0x08000000} 27, 'NavMesh Generation - Bounding Box',
      {0x40000000} 30, 'NavMesh Generation - Ground'
    ])), [
    wbEDID,
    wbVMAD,
    wbOBNDReq,
    wbFULL,
    wbMODL,
    wbCOCT,
    wbCNTOs,
    wbDEST,
    wbStruct(DATA, '', [
      wbInteger('Flags', itU8, wbFlags([
        {0x01} 'Allow Sounds When Animation',
        {0x02} 'Respawns',
        {0x04} 'Show Owner'
      ])),
      wbFloat('Weight')
    ], cpNormal, True),
    wbFormIDCk(SNAM, 'Sound - Open', [SNDR]),
    wbFormIDCk(QNAM, 'Sound - Close', [SNDR])
  ], True, nil, cpNormal, False, nil, wbContainerAfterSet);

  wbCSDT := wbRStructSK([0], 'Sound Type', [
    wbInteger(CSDT, 'Type', itU32,wbEnum([
      {00} 'Left Foot',
      {01} 'Right Foot',
      {02} 'Left Back Foot',
      {03} 'Right Back Foot',
      {04} 'Idle',
      {05} 'Aware',
      {06} 'Attack',
      {07} 'Hit',
      {08} 'Death',
      {09} 'Weapon',
      {10} 'Movement Loop',
      {11} 'Conscious Loop',
      {12} 'Auxiliary 1',
      {13} 'Auxiliary 2',
      {14} 'Auxiliary 3',
      {15} 'Auxiliary 4',
      {16} 'Auxiliary 5',
      {17} 'Auxiliary 6',
      {18} 'Auxiliary 7',
      {19} 'Auxiliary 8',
      {19} 'Auxiliary 8',
      {20} 'Jump',
      {21} 'PlayRandom/Loop'
    ])),
    wbRArrayS('Sounds', wbRStructSK([0], 'Sound', [
      wbFormIDCk(CSDI, 'Sound', [SNDR, NULL], False, cpNormal, True),
      wbInteger(CSDC, 'Sound Chance', itU8, nil, cpNormal, True)
    ], []), cpNormal, True)
  ], []);

  wbCSDTs := wbRArrayS('Sound Types', wbCSDT, cpNormal, False, nil, nil, nil{wbActorTemplateUseModelAnimation});

  wbAIDT :=
    wbStruct(AIDT, 'AI Data', [
     {00} wbInteger('Aggression', itU8, wbEnum([
            'Unaggressive',
            'Aggressive',
            'Very Aggressive',
            'Frenzied'
          ])),
     {01} wbInteger('Confidence', itU8, wbEnum([
            'Cowardly',
            'Cautious',
            'Average',
            'Brave',
            'Foolhardy'
          ])),
     {02} wbInteger('Energy Level', itU8),
     {03} wbInteger('Responsibility', itU8, wbEnum([
            'Any crime',
            'Violence against enemies',
            'Property crime only',
            'No crime'
          ])),
     {04} wbInteger('Mood', itU8, wbEnum([
            'Neutral',
            'Angry',
            'Fear',
            'Happy',
            'Sad',
            'Surprised',
            'Puzzled',
            'Disgusted'
          ])),
          wbInteger('Assistance', itU8, wbEnum([
            'Helps Nobody',
            'Helps Allies',
            'Helps Friends and Allies'
          ])),
          wbStruct('Aggro', [
            wbInteger('Aggro Radius Behavior', itU8, wbEnum(['False', 'True'])),
            wbInteger('Unknown', itU8),
            wbInteger('Warn', itU32),
            wbInteger('Warn/Attack', itU32),
            wbInteger('Attack', itU32)
          ])
    ], cpNormal, True, nil{wbActorTemplateUseAIData});

  wbAttackAnimationEnum := wbEnum([], [
     26, 'AttackLeft',
     32, 'AttackRight',
     38, 'Attack3',
     44, 'Attack4',
     50, 'Attack5',
     56, 'Attack6',
     62, 'Attack7',
     68, 'Attack8',
     74, 'AttackLoop',
     80, 'AttackSpin',
     86, 'AttackSpin2',
     97, 'PlaceMine',
    103, 'PlaceMine2',
    109, 'AttackThrow',
    115, 'AttackThrow2',
    121, 'AttackThrow3',
    127, 'AttackThrow4',
    133, 'AttackThrow5',
    255, ' DEFAULT'
  ]);

  wbRecord(CSTY, 'Combat Style',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00080000} 19, 'Allow Dual Wielding'
    ])), [
    wbEDID,
    wbStruct(CSGD, 'General', [
      wbFloat('Offensive Mult'),
      wbFloat('Defensive Mult'),
      wbFloat('Group Offensive Mult'),
      // keep as separate floats, some elements can be omitted
      wbFloat('Equipment Score Mult - Melee'),
      wbFloat('Equipment Score Mult - Magic'),
      wbFloat('Equipment Score Mult - Ranged'),
      wbFloat('Equipment Score Mult - Shout'),
      wbFloat('Equipment Score Mult - Unarmed'),
      wbFloat('Equipment Score Mult - Staff'),
      wbFloat('Avoid Threat Chance')
    ], cpNormal, True, nil, 0),
    wbUnknown(CSMD, cpIgnore),
    wbStruct(CSME, 'Melee', [
      wbFloat('Attack Staggered Mult'),
      wbFloat('Power Attack Staggered Mult'),
      wbFloat('Power Attack Blocking Mult'),
      wbFloat('Bash Mult'),
      wbFloat('Bash Recoil Mult'),
      wbFloat('Bash Attack Mult'),
      wbFloat('Bash Power Attack Mult'),
      wbFloat('Special Attack Mult')
    ], cpNormal, False, nil, 0),
    wbStruct(CSCR, 'Close Range', [
      wbFloat('Circle Mult'),
      wbFloat('Fallback Mult'),
      wbFloat('Flank Distance'),
      wbFloat('Stalk Time')
    ], cpNormal, False, nil, 0),
    wbStruct(CSLR, 'Long Range', [
      wbFloat('Strafe Mult')
    ], cpNormal, False),
    wbStruct(CSFL, 'Flight', [
      wbFloat('Hover Chance'),
      wbFloat('Dive Bomb Chance'),
      wbFloat('Ground Attack Chance'),
      wbFloat('Hover Time'),
      wbFloat('Ground Attack Time'),
      wbFloat('Perch Attack Chance'),
      wbFloat('Perch Attack Time'),
      wbFloat('Flying Attack Chance')
    ], cpNormal, False, nil, 0),
    wbInteger(DATA, 'Flags', itU32, wbFlags([
      {0x01} 'Dueling',
      {0x02} 'Flanking',
      {0x04} 'Allow Dual Wielding'
    ]), cpNormal, False)
  ]);