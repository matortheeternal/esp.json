   wbRecord(EXPL, 'Explosion', [
    wbEDID,
    wbVMAD,
    wbOBNDReq,
    wbFULL,
    wbMODL,
    wbEITM,
    wbFormIDCk(MNAM, 'Image Space Modifier', [IMAD]),
    wbStruct(DATA, 'Data', [  // Contradicted by FireStormExplosion02 [EXPL:000877F9]
      wbFormIDCk('Light', [LIGH, NULL]),
      wbFormIDCk('Sound 1', [SNDR, NULL]),
      wbFormIDCk('Sound 2', [SNDR, NULL]),
      wbFormIDCk('Impact Data Set', [IPDS, NULL]),
      wbFormID('Placed Object'),
      wbFormIDCk('Spawn Projectile', [PROJ, NULL]),
      wbFloat('Force'),
      wbFloat('Damage'),
      wbFloat('Radius'),
      wbFloat('IS Radius'),
      wbFloat('Vertical Offset Mult'),
      wbInteger('Flags', itU32, wbFlags([
        'Unknown 0',
        'Always Uses World Orientation',
        'Knock Down - Always',
        'Knock Down - By Formula',
        'Ignore LOS Check',
        'Push Explosion Source Ref Only',
        'Ignore Image Space Swap',
        'Chain',
        'No Controller Vibration'
      ])),
      wbInteger('Sound Level', itU32, wbSoundLevelEnum, cpNormal, True)
    ], cpNormal, True, nil, 10)
  ]);

  wbRecord(DEBR, 'Debris', [
    wbEDID,
    wbRStructs('Models', 'Model', [
      wbStruct(DATA, 'Data', [
        wbInteger('Percentage', itU8),
        wbString('Model Filename'),
        wbInteger('Flags', itU8, wbFlags([
          'Has Collision Data'
        ]))
      ], cpNormal, True),
      wbMODT
    ], [], cpNormal, True)
  ]);

  wbRecord(IMGS, 'Image Space', [
    wbEDID,
    wbUnknown(ENAM, cpIgnore),
    wbStruct(HNAM, 'HDR', [
      wbFloat('Eye Adapt Speed'),
      wbFloat('Bloom Blur Radius'),
      wbFloat('Bloom Threshold'),
      wbFloat('Bloom Scale'),
      wbFloat('Receive Bloom Threshold'),
      wbFloat('White'),
      wbFloat('Sunlight Scale'),
      wbFloat('Sky Scale'),
      wbFloat('Eye Adapt Strength')
    ]),
    wbStruct(CNAM, 'Cinematic', [
      wbFloat('Saturation'),
      wbFloat('Brightness'),
      wbFloat('Contrast')
    ]),
    wbStruct(TNAM, 'Tint', [
      wbFloat('Amount'),
      wbFloatColors('Color')
    ]),
    wbStruct(DNAM, 'Depth of Field', [
      wbFloat('Strength'),
      wbFloat('Distance'),
      wbFloat('Range'),
      wbByteArray('Unknown', 2),
      wbInteger('Sky / Blur Radius', itU16, wbEnum([], [
        16384, 'Radius 0',
        16672, 'Radius 1',
        16784, 'Radius 2',
        16848, 'Radius 3',
        16904, 'Radius 4',
        16936, 'Radius 5',
        16968, 'Radius 6',
        17000, 'Radius 7',
        16576, 'No Sky, Radius 0',
        16736, 'No Sky, Radius 1',
        16816, 'No Sky, Radius 2',
        16880, 'No Sky, Radius 3',
        16920, 'No Sky, Radius 4',
        16952, 'No Sky, Radius 5',
        16984, 'No Sky, Radius 6',
        17016, 'No Sky, Radius 7'
      ]))
    ], cpNormal, False, nil, 3)
  ]);

  wbTimeInterpolator := wbStruct('Data', [
    wbFloat('Time'),
    wbFloat('Value')
  ]);

  wbColorInterpolator := wbStruct('Data', [
    wbFloat('Time'),
    wbFloat('Red', cpNormal, False, 255, 0),
    wbFloat('Green', cpNormal, False, 255, 0),
    wbFloat('Blue', cpNormal, False, 255, 0),
    wbFloat('Alpha', cpNormal, False, 255, 0)
  ]);

  wbRecord(IMAD, 'Image Space Adapter', [
    wbEDID,
    wbStruct(DNAM, 'Data Count', [
      wbInteger('Flags', itU32, wbFlags(['Animatable'])),
      wbFloat('Duration'),
      wbStruct('HDR', [
        wbInteger('Eye Adapt Speed Mult', itU32),
        wbInteger('Eye Adapt Speed Add', itU32),
        wbInteger('Bloom Blur Radius Mult', itU32),
        wbInteger('Bloom Blur Radius Add', itU32),
        wbInteger('Bloom Threshold Mult', itU32),
        wbInteger('Bloom Threshold Add', itU32),
        wbInteger('Bloom Scale Mult', itU32),
        wbInteger('Bloom Scale Add', itU32),
        wbInteger('Target Lum Min Mult', itU32),
        wbInteger('Target Lum Min Add', itU32),
        wbInteger('Target Lum Max Mult', itU32),
        wbInteger('Target Lum Max Add', itU32),
        wbInteger('Sunlight Scale Mult', itU32),
        wbInteger('Sunlight Scale Add', itU32),
        wbInteger('Sky Scale Mult', itU32),
        wbInteger('Sky Scale Add', itU32)
      ]),
      wbInteger('Unknown08 Mult', itU32),
      wbInteger('Unknown48 Add', itU32),
      wbInteger('Unknown09 Mult', itU32),
      wbInteger('Unknown49 Add', itU32),
      wbInteger('Unknown0A Mult', itU32),
      wbInteger('Unknown4A Add', itU32),
      wbInteger('Unknown0B Mult', itU32),
      wbInteger('Unknown4B Add', itU32),
      wbInteger('Unknown0C Mult', itU32),
      wbInteger('Unknown4C Add', itU32),
      wbInteger('Unknown0D Mult', itU32),
      wbInteger('Unknown4D Add', itU32),
      wbInteger('Unknown0E Mult', itU32),
      wbInteger('Unknown4E Add', itU32),
      wbInteger('Unknown0F Mult', itU32),
      wbInteger('Unknown4F Add', itU32),
      wbInteger('Unknown10 Mult', itU32),
      wbInteger('Unknown50 Add', itU32),
      wbStruct('Cinematic', [
        wbInteger('Saturation Mult', itU32),
        wbInteger('Saturation Add', itU32),
        wbInteger('Brightness Mult', itU32),
        wbInteger('Brightness Add', itU32),
        wbInteger('Contrast Mult', itU32),
        wbInteger('Contrast Add', itU32)
      ]),
      wbInteger('Unknown14 Mult', itU32),
      wbInteger('Unknown54 Add', itU32),
      wbInteger('Tint Color', itU32),
      wbInteger('Blur Radius', itU32),
      wbInteger('Double Vision Strength', itU32),
      wbInteger('Radial Blur Strength', itU32),
      wbInteger('Radial Blur Ramp Up', itU32),
      wbInteger('Radial Blur Start', itU32),
      wbInteger('Radial Blur Flags', itU32, wbFlags(['Use Target'])),
      wbFloat('Radial Blur Center X'),
      wbFloat('Radial Blur Center Y'),
      wbInteger('DoF Strength', itU32),
      wbInteger('DoF Distance', itU32),
      wbInteger('DoF Range', itU32),
      wbInteger('DoF Flags', itU32, wbFlags([
        {0x00000001} 'Use Target',
        {0x00000002} 'Unknown 2',
        {0x00000004} 'Unknown 3',
        {0x00000008} 'Unknown 4',
        {0x00000010} 'Unknown 5',
        {0x00000020} 'Unknown 6',
        {0x00000040} 'Unknown 7',
        {0x00000080} 'Unknown 8',
        {0x00000100} 'Mode - Front',
        {0x00000200} 'Mode - Back',
        {0x00000400} 'No Sky',
        {0x00000800} 'Blur Radius Bit 2',
        {0x00001000} 'Blur Radius Bit 1',
        {0x00002000} 'Blur Radius Bit 0'
      ])),
      wbInteger('Radial Blur Ramp Down', itU32),
      wbInteger('Radial Blur Down Start', itU32),
      wbInteger('Fade Color', itU32),
      wbInteger('Motion Blur Strength', itU32)
    ]),
    wbArray(BNAM, 'Blur Radius', wbTimeInterpolator),
    wbArray(VNAM, 'Double Vision Strength', wbTimeInterpolator),
    wbArray(TNAM, 'Tint Color', wbColorInterpolator),
    wbArray(NAM3, 'Fade Color', wbColorInterpolator),
    wbArray(RNAM, 'Radial Blur Strength', wbTimeInterpolator),
    wbArray(SNAM, 'Radial Blur Ramp Up', wbTimeInterpolator),
    wbArray(UNAM, 'Radial Blur Start', wbTimeInterpolator),
    wbArray(NAM1, 'Radial Blur Ramp Down', wbTimeInterpolator),
    wbArray(NAM2, 'Radial Blur Down Start', wbTimeInterpolator),
    wbArray(WNAM, 'DoF Strength', wbTimeInterpolator),
    wbArray(XNAM, 'DoF Distance', wbTimeInterpolator),
    wbArray(YNAM, 'DoF Range', wbTimeInterpolator),
    wbArray(NAM4, 'Motion Blur Strength', wbTimeInterpolator),
    wbRStruct('HDR', [
      wbArray(_00_IAD, 'Eye Adapt Speed Mult', wbTimeInterpolator),
      wbArray(_40_IAD, 'Eye Adapt Speed Add', wbTimeInterpolator),
      wbArray(_01_IAD, 'Bloom Blur Radius Mult', wbTimeInterpolator),
      wbArray(_41_IAD, 'Bloom Blur Radius Add', wbTimeInterpolator),
      wbArray(_02_IAD, 'Bloom Threshold Mult', wbTimeInterpolator),
      wbArray(_42_IAD, 'Bloom Threshold Add', wbTimeInterpolator),
      wbArray(_03_IAD, 'Bloom Scale Mult', wbTimeInterpolator),
      wbArray(_43_IAD, 'Bloom Scale Add', wbTimeInterpolator),
      wbArray(_04_IAD, 'Target Lum Min Mult', wbTimeInterpolator),
      wbArray(_44_IAD, 'Target Lum Min Add', wbTimeInterpolator),
      wbArray(_05_IAD, 'Target Lum Max Mult', wbTimeInterpolator),
      wbArray(_45_IAD, 'Target Lum Max Add', wbTimeInterpolator),
      wbArray(_06_IAD, 'Sunlight Scale Mult', wbTimeInterpolator),
      wbArray(_46_IAD, 'Sunlight Scale Add', wbTimeInterpolator),
      wbArray(_07_IAD, 'Sky Scale Mult', wbTimeInterpolator),
      wbArray(_47_IAD, 'Sky Scale Add', wbTimeInterpolator)
    ], []),
    wbUnknown(_08_IAD),
    wbUnknown(_48_IAD),
    wbUnknown(_09_IAD),
    wbUnknown(_49_IAD),
    wbUnknown(_0A_IAD),
    wbUnknown(_4A_IAD),
    wbUnknown(_0B_IAD),
    wbUnknown(_4B_IAD),
    wbUnknown(_0C_IAD),
    wbUnknown(_4C_IAD),
    wbUnknown(_0D_IAD),
    wbUnknown(_4D_IAD),
    wbUnknown(_0E_IAD),
    wbUnknown(_4E_IAD),
    wbUnknown(_0F_IAD),
    wbUnknown(_4F_IAD),
    wbUnknown(_10_IAD),
    wbUnknown(_50_IAD),
    wbRStruct('Cinematic', [
      wbArray(_11_IAD, 'Saturation Mult', wbTimeInterpolator),
      wbArray(_51_IAD, 'Saturation Add', wbTimeInterpolator),
      wbArray(_12_IAD, 'Brightness Mult', wbTimeInterpolator),
      wbArray(_52_IAD, 'Brightness Add', wbTimeInterpolator),
      wbArray(_13_IAD, 'Contrast Mult', wbTimeInterpolator),
      wbArray(_53_IAD, 'Contrast Add', wbTimeInterpolator)
    ], []),
    wbUnknown(_14_IAD),
    wbUnknown(_54_IAD)
  ]);

  wbRecord(FLST, 'FormID List', [
    wbString(EDID, 'Editor ID', 0, cpBenign, True, nil, wbFLSTEDIDAfterSet),
    wbRArrayS('FormIDs', wbFormID(LNAM, 'FormID'), cpNormal, False, nil, nil, nil, wbFLSTLNAMIsSorted)
  ]);

  wbRecord(PERK, 'Perk',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00000004}  2, 'Non-Playable'
    ])), [
    wbEDID,
    wbVMADFragmentedPERK,
    wbFULL,
    wbDESCReq,
    wbICON,
    wbCTDAs,
    wbStruct(DATA, 'Data', [
      wbInteger('Trait', itU8, wbEnum(['False', 'True'])),
      wbInteger('Level', itU8),
      wbInteger('Num Ranks', itU8),
      wbInteger('Playable', itU8, wbEnum(['False', 'True'])),
      wbInteger('Hidden', itU8, wbEnum(['False', 'True']))
    ], cpNormal, True),
    wbFormIDCK(NNAM, 'Next Perk', [PERK, NULL]),

    wbRStructsSK('Effects', 'Effect', [0, 1], [
      wbStructSK(PRKE, [1, 2, 0], 'Header', [
        wbInteger('Type', itU8, wbEnum([
          'Quest + Stage',
          'Ability',
          'Entry Point'
        ]), cpNormal, False, nil, wbPERKPRKETypeAfterSet),
        wbInteger('Rank', itU8),
        wbInteger('Priority', itU8)
      ]),
      wbUnion(DATA, 'Effect Data', wbPerkDATADecider, [
        wbStructSK([0, 1], 'Quest + Stage', [
          wbFormIDCk('Quest', [QUST]),
          wbInteger('Quest Stage', itU8, wbPerkDATAQuestStageToStr, wbCTDAParam2QuestStageToInt),
          wbByteArray('Unused', 3)
        ]),
        wbFormIDCk('Ability', [SPEL]),
        wbStructSK([0, 1], 'Entry Point', [
          wbInteger('Entry Point', itU8, wbEntryPointsEnum, cpNormal, True, nil{, wbPERKEntryPointAfterSet}),
          wbInteger('Function', itU8, wbEnum([
            {0} 'Unknown 0',
            {1} 'Set Value', // EPFT=1
            {2} 'Add Value', // EPFT=1
            {3} 'Multiply Value', // EPFT=1
            {4} 'Add Range To Value', // EPFT=2
            {5} 'Add Actor Value Mult', // EPFT=2
            {6} 'Absolute Value', // no params
            {7} 'Negative Absolute Value', // no params
            {8} 'Add Leveled List', // EPFT=3
            {9} 'Add Activate Choice', // EPFT=4
           {10} 'Select Spell', // EPFT=5
           {11} 'Select Text', // EPFT=6
           {12} 'Set to Actor Value Mult', // EPFT=2
           {13} 'Multiply Actor Value Mult', // EPFT=2
           {14} 'Multiply 1 + Actor Value Mult', // EPFT=2
           {15} 'Set Text' // EPFT=7
          ])),
          wbInteger('Perk Condition Tab Count', itU8, nil, cpIgnore)
        ])
      ], cpNormal, True),

      wbRStructsSK('Perk Conditions', 'Perk Condition', [0], [
        wbInteger(PRKC, 'Run On (Tab Index)', itS8{, wbPRKCToStr, wbPRKCToInt}),
        wbCTDAsReq
      ], [], cpNormal, False{, nil, nil, wbPERKPRKCDontShow}),

      wbRStruct('Function Parameters', [
        wbInteger(EPFT, 'Type', itU8, wbEnum([
          {0} 'None',
          {1} 'Float',
          {2} 'Float/AV,Float',
          {3} 'LVLI',
          {4} 'SPEL,lstring,flags',
          {5} 'SPEL',
          {6} 'string',
          {7} 'lstring'
        ])),
        // case(EPFT) of
        // 1: EPFD=float
        // 2: EPFD=float,float
        // 3: EPFD=LVLI
        // 4: EPFD=SPEL, EPF2=lstring, EPF3=int32 flags
        // 5: EPFD=SPEL
        // 6: EPFD=string
        // 7: EPFD=lstring
        wbLString(EPF2, 'Button Label', 0, cpTranslate),
        wbStruct(EPF3, 'Script Flags', [
          wbInteger('Script Flags', itU16, wbFlags([
            'Run Immediately',
            'Replace Default'
          ])),
          wbInteger('Fragment Index', itU16)
        ]),
        wbUnion(EPFD, 'Data', wbEPFDDecider, [
          {0} wbByteArray('Unknown'),
          {1} wbFloat('Float'),
          {2} wbStruct('Float, Float', [
                wbFloat('Float 1'),
                wbFloat('Float 2')
              ]),
          {3} wbFormIDCk('Leveled Item', [LVLI]),
          {4} wbFormIDCk('Spell', [SPEL]),
          {5} wbFormIDCk('Spell', [SPEL]),
          {6} wbString('Text', 0, cpTranslate),
          {7} wbLString('Text', 0, cpTranslate),
          {8} wbStruct('Actor Value, Float', [
                wbInteger('Actor Value', itU32, wbEPFDActorValueToStr, wbEPFDActorValueToInt),
                wbFloat('Float')
              ])
        ], cpNormal, False{, wbEPFDDontShow})
      ], [], cpNormal, False{, wbPERKPRKCDontShow}),
      wbEmpty(PRKF, 'End Marker', cpIgnore, True)
    ], [])
  ]);

  wbRecord(BPTD, 'Body Part Data', [
    wbEDID,
    wbMODL,
    wbRStructsSK('Body Parts', 'Body Part', [2], [
      wbLString(BPTN, 'Part Name', 0, cpTranslate, True),
      wbString(PNAM, 'Pose Matching', 0, cpNormal, False),
      wbString(BPNN, 'Part Node', 0, cpNormal, True),
      wbString(BPNT, 'VATS Target', 0, cpNormal, True),
      wbString(BPNI, 'IK Data - Start Node', 0, cpNormal, True),
      wbStruct(BPND, '', [
        {00} wbFloat('Damage Mult'),
        {04} wbInteger('Flags', itU8, wbFlags([
          'Severable',
          'IK Data',
          'IK Data - Biped Data',
          'Explodable',
          'IK Data - Is Head',
          'IK Data - Headtracking',
          'To Hit Chance - Absolute'
        ])),
        {05} wbInteger('Part Type', itU8, wbEnum([
               'Torso',
               'Head',
               'Eye',
               'LookAt',
               'Fly Grab',
               'Saddle'
             ])),
        {06} wbInteger('Health Percent', itU8),
        {07} wbInteger('Actor Value', itS8, wbActorValueEnum),
        {08} wbInteger('To Hit Chance', itU8),
        {09} wbInteger('Explodable - Explosion Chance %', itU8),
        {10} wbInteger('Explodable - Debris Count', itU16),
        {12} wbFormIDCk('Explodable - Debris', [DEBR, NULL]),
        {16} wbFormIDCk('Explodable - Explosion', [EXPL, NULL]),
        {20} wbFloat('Tracking Max Angle'),
        {24} wbFloat('Explodable - Debris Scale'),
        {28} wbInteger('Severable - Debris Count', itS32),
        {32} wbFormIDCk('Severable - Debris', [DEBR, NULL]),
        {36} wbFormIDCk('Severable - Explosion', [EXPL, NULL]),
        {40} wbFloat('Severable - Debris Scale'),
        wbStruct('Gore Effects Positioning', [
          wbStruct('Translate', [
            {44} wbFloat('X'),
            {48} wbFloat('Y'),
            {52} wbFloat('Z')
          ]),
          wbStruct('Rotation', [
            {56} wbFloat('X', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize),
            {60} wbFloat('Y', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize),
            {64} wbFloat('Z', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize)
          ])
        ]),
        {68} wbFormIDCk('Severable - Impact DataSet', [IPDS, NULL]),
        {72} wbFormIDCk('Explodable - Impact DataSet', [IPDS, NULL]),
        {28} wbInteger('Severable - Decal Count', itU8),
        {28} wbInteger('Explodable - Decal Count', itU8),
        {76} wbByteArray('Unknown', 2),
        {80} wbFloat('Limb Replacement Scale')
      ], cpNormal, True),
      wbString(NAM1, 'Limb Replacement Model', 0, cpNormal, True),
      wbString(NAM4, 'Gore Effects - Target Bone', 0, cpNormal, True),
      wbByteArray(NAM5, 'Texture Files Hashes', 0, cpNormal)
    ], [], cpNormal, True)
  ]);

  wbRecord(ADDN, 'Addon Node', [
    wbEDID,
    wbOBNDReq,
    wbMODL,
    wbInteger(DATA, 'Node Index', itS32, nil, cpNormal, True),
    wbFormIDCk(SNAM, 'Sound', [SNDR, NULL]),
    wbStruct(DNAM, 'Data', [
      wbInteger('Master Particle System Cap', itU16),
      wbInteger('Flags', itU16, wbEnum([], [
        {>>> Value Must be 1 or 3 <<<}
        1, 'Unknown 1',    // {0x0001}'Unknown 0', : The Check-Box is Unchecked in the CK
        3, 'Always Loaded' // {0x0002}'Always Loaded' : The Check-Box is Unchecked in the CK
      ]))
    ], cpNormal, True)
  ]);