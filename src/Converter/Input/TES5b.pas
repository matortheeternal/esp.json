  wbRecord(ACHR, 'Placed NPC',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00000200}  9, 'Starts Dead',
      {0x00000400} 10, 'Persistent',
      {0x00000800} 11, 'Initially Disabled',
      {0x02000000} 25, 'No AI Acquire',
      {0x20000000} 29, 'Don''t Havok Settle'
    ], True, True)), [
    wbEDID,
    wbVMAD,
    wbFormIDCk(NAME, 'Base', [NPC_], False, cpNormal, True),
    wbFormIDCk(XEZN, 'Encounter Zone', [ECZN]),

    {--- Ragdoll ---}
    wbXRGD,
    wbXRGB,

    {--- Patrol Data ---}
    wbRStruct('Patrol Data', [
      wbFloat(XPRD, 'Idle Time', cpNormal, True),
      wbEmpty(XPPA, 'Patrol Script Marker', cpNormal, True),
      wbFormIDCk(INAM, 'Idle', [IDLE, NULL], False, cpNormal, True),
      {>>> BEGIN leftover from earlier CK versions <<<}
      wbRStruct('Unused', [
        wbUnknown(SCHR),
        wbUnknown(SCDA),
        wbUnknown(SCTX),
        wbUnknown(QNAM),
        wbUnknown(SCRO)
      ], [], cpIgnore, false, wbNeverShow),
      {>>> END leftover from earlier CK versions <<<}
      wbPDTOs,
      wbFormIDCk(TNAM, 'Topic', [DIAL, NULL], False, cpNormal)
    ], []),

    {--- Leveled Actor ----}
    wbXLCM,

    {--- Merchant Container ----}
    wbFormIDCk(XMRC, 'Merchant Container', [REFR], True),

    {--- Extra ---}
    wbInteger(XCNT, 'Count', itS32),
    wbFloat(XRDS, 'Radius'),
    wbFloat(XHLP, 'Health'),

    wbRArrayS('Linked References', wbStructSK(XLKR, [0], 'Linked Reference', [
      wbFormIDCk('Keyword/Ref', [KYWD, PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA, NULL]),
      wbFormIDCk('Ref', [PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA])
    ], cpNormal, False, nil, 1)),

    {--- Activate Parents ---}
    wbRStruct('Activate Parents', [
      wbInteger(XAPD, 'Flags', itU8, wbFlags([
        'Parent Activate Only'
      ], True)),
      wbRArrayS('Activate Parent Refs',
        wbStructSK(XAPR, [0], 'Activate Parent Ref', [
          wbFormIDCk('Reference', [PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA]),
          wbFloat('Delay')
        ])
      )
    ], []),

    {--- Linked Ref ---}
    wbStruct(XCLP, 'Linked Reference Color', [
      wbByteColors('Link Start Color'),
      wbByteColors('Link End Color')
    ]),

    wbFormIDCk(XLCN, 'Persistent Location', [LCTN]),
    wbFormIDCk(XLRL, 'Location Reference', [LCRT, LCTN, NULL], False, cpBenignIfAdded),
    wbEmpty(XIS2, 'Ignored by Sandbox'),
    wbArray(XLRT, 'Location Ref Type', wbFormIDCk('Ref', [LCRT, NULL])),
	wbFormIDCk(XHOR, 'Horse', [ACHR]),
    wbFloat(XHTW, 'Head-Tracking Weight'),
    wbFloat(XFVC, 'Favor Cost'),

    {--- Enable Parent ---}
    wbXESP,

    {--- Ownership ---}
    wbOwnership,

    {--- Emittance ---}
    wbFormIDCk(XEMI, 'Emittance', [LIGH, REGN]),

    {--- MultiBound ---}
    wbFormIDCk(XMBR, 'MultiBound Reference', [REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA]),

    {--- Flags ---}
    wbEmpty(XIBS, 'Ignored By Sandbox'),

    {--- 3D Data ---}
    wbXSCL,
    wbDATAPosRot
  ], True, wbPlacedAddInfo);

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

  wbICON := wbRStruct('Icon', [
    wbString(ICON, 'Large Icon filename', 0, cpNormal, True),
    wbString(MICO, 'Small Icon filename')
  ], [], cpNormal, False, nil, True);

  wbICONReq := wbRStruct('Icon', [
    wbString(ICON, 'Large Icon filename', 0, cpNormal, True),
    wbString(MICO, 'Small Icon filename')
  ], [], cpNormal, True, nil, True);

  wbICO2 := wbRStruct('Icon 2 (female)', [
    wbString(ICO2, 'Large Icon filename', 0, cpNormal, True),
    wbString(MIC2, 'Small Icon filename')
  ], [], cpNormal, False, nil, True);

  wbVatsValueFunctionEnum :=
    wbEnum([
      { 0} 'Weapon Is',
      { 1} 'Weapon In List',
      { 2} 'Target Is',
      { 3} 'Target In List',
      { 4} 'Target Distance',
      { 5} 'Target Part',
      { 6} 'VATS Action',
      { 7} 'Is Success',
      { 8} 'Is Critical',
      { 9} 'Critical Effect Is',
      {10} 'Critical Effect In List',
      {11} 'Is Fatal',
      {12} 'Explode Part',
      {13} 'Dismember Part',
      {14} 'Cripple Part',
      {15} 'Weapon Type Is',
      {16} 'Is Stranger',
      {17} 'Is Paralyzing Palm',
      {18} 'Projectile Type Is',
      {19} 'Delivery Type Is',
      {20} 'Casting Type Is'
    ]);

  wbActorValueEnum :=
    wbEnum([
    {00} 'Aggresion',
    {01} 'Confidence',
    {02} 'Energy',
    {03} 'Morality',
    {04} 'Mood',
    {05} 'Assistance',
    {06} 'One-Handed',
    {07} 'Two-Handed',
    {08} 'Archery',
    {09} 'Block',
    {10} 'Smithing',
    {11} 'Heavy Armor',
    {12} 'Light Armor',
    {13} 'Pickpocket',
    {14} 'Lockpicking',
    {15} 'Sneak',
    {16} 'Alchemy',
    {17} 'Speech',
    {18} 'Alteration',
    {19} 'Conjuration',
    {20} 'Destruction',
    {21} 'Illusion',
    {22} 'Restoration',
    {23} 'Enchanting',
    {24} 'Health',
    {25} 'Magicka',
    {26} 'Stamina',
    {27} 'Heal Rate',
    {28} 'Magicka Rate',
    {29} 'Stamina Rate',
    {30} 'Speed Mult',
    {31} 'Inventory Weight',
    {32} 'Carry Weight',
    {33} 'Critical Chance',
    {34} 'Melee Damage',
    {35} 'Unarmed Damage',
    {36} 'Mass',
    {37} 'Voice Points',
    {38} 'Voice Rate',
    {39} 'Damage Resist',
    {40} 'Poison Resist',
    {41} 'Resist Fire',
    {42} 'Resist Shock',
    {43} 'Resist Frost',
    {44} 'Resist Magic',
    {45} 'Resist Disease',
    {46} 'Unknown 46',
    {47} 'Unknown 47',
    {48} 'Unknown 48',
    {49} 'Unknown 49',
    {50} 'Unknown 50',
    {51} 'Unknown 51',
    {52} 'Unknown 52',
    {53} 'Paralysis',
    {54} 'Invisibility',
    {55} 'Night Eye',
    {56} 'Detect Life Range',
    {57} 'Water Breathing',
    {58} 'Water Walking',
    {59} 'Unknown 59',
    {60} 'Fame',
    {61} 'Infamy',
    {62} 'Jumping Bonus',
    {63} 'Ward Power',
    {64} 'Right Item Charge',
    {65} 'Armor Perks',
    {66} 'Shield Perks',
    {67} 'Ward Deflection',
    {68} 'Variable01',
    {69} 'Variable02',
    {70} 'Variable03',
    {71} 'Variable04',
    {72} 'Variable05',
    {73} 'Variable06',
    {74} 'Variable07',
    {75} 'Variable08',
    {76} 'Variable09',
    {77} 'Variable10',
    {78} 'Bow Speed Bonus',
    {79} 'Favor Active',
    {80} 'Favors Per Day',
    {81} 'Favors Per Day Timer',
    {82} 'Left Item Charge',
    {83} 'Absorb Chance',
    {84} 'Blindness',
    {85} 'Weapon Speed Mult',
    {86} 'Shout Recovery Mult',
    {87} 'Bow Stagger Bonus',
    {88} 'Telekinesis',
    {89} 'Favor Points Bonus',
    {90} 'Last Bribed Intimidated',
    {91} 'Last Flattered',
    {92} 'Movement Noise Mult',
    {93} 'Bypass Vendor Stolen Check',
    {94} 'Bypass Vendor Keyword Check',
    {95} 'Waiting For Player',
    {96} 'One-Handed Modifier',
    {97} 'Two-Handed Modifier',
    {98} 'Marksman Modifier',
    {99} 'Block Modifier',
   {100} 'Smithing Modifier',
   {101} 'Heavy Armor Modifier',
   {102} 'Light Armor Modifier',
   {103} 'Pickpocket Modifier',
   {104} 'Lockpicking Modifier',
   {105} 'Sneaking Modifier',
   {106} 'Alchemy Modifier',
   {107} 'Speechcraft Modifier',
   {108} 'Alteration Modifier',
   {109} 'Conjuration Modifier',
   {110} 'Destruction Modifier',
   {111} 'Illusion Modifier',
   {112} 'Restoration Modifier',
   {113} 'Enchanting Modifier',
   {114} 'One-Handed Skill Advance',
   {115} 'Two-Handed Skill Advance',
   {116} 'Marksman Skill Advance',
   {117} 'Block Skill Advance',
   {118} 'Smithing Skill Advance',
   {119} 'Heavy Armor Skill Advance',
   {120} 'Light Armor Skill Advance',
   {121} 'Pickpocket Skill Advance',
   {122} 'Lockpicking Skill Advance',
   {123} 'Sneaking Skill Advance',
   {124} 'Alchemy Skill Advance',
   {125} 'Speechcraft Skill Advance',
   {126} 'Alteration Skill Advance',
   {127} 'Conjuration Skill Advance',
   {128} 'Destruction Skill Advance',
   {129} 'Illusion Skill Advance',
   {130} 'Restoration Skill Advance',
   {131} 'Enchanting Skill Advance',
   {132} 'Left Weapon Speed Multiply',
   {133} 'Dragon Souls',
   {134} 'Combat Health Regen Multiply',
   {135} 'One-Handed Power Modifier',
   {136} 'Two-Handed Power Modifier',
   {137} 'Marksman Power Modifier',
   {138} 'Block Power Modifier',
   {139} 'Smithing Power Modifier',
   {140} 'Heavy Armor Power Modifier',
   {141} 'Light Armor Power Modifier',
   {142} 'Pickpocket Power Modifier',
   {143} 'Lockpicking Power Modifier',
   {144} 'Sneaking Power Modifier',
   {145} 'Alchemy Power Modifier',
   {146} 'Speechcraft Power Modifier',
   {147} 'Alteration Power Modifier',
   {148} 'Conjuration Power Modifier',
   {149} 'Destruction Power Modifier',
   {150} 'Illusion Power Modifier',
   {151} 'Restoration Power Modifier',
   {152} 'Enchanting Power Modifier',
   {153} 'Dragon Rend',
   {154} 'Attack Damage Mult',
   {155} 'Heal Rate Mult',
   {156} 'Magicka Rate Mult',
   {157} 'Stamina Rate Mult',
   {158} 'Werewolf Perks',
   {159} 'Vampire Perks',
   {160} 'Grab Actor Offset',
   {161} 'Grabbed',
   {162} 'Unknown 162',
   {163} 'Reflect Damage'
      ], [
        -1, 'None'
      ]);

  wbSkillEnum :=
    wbEnum([
      'Unknown 1',
      'Unknown 2',
      'Unknown 3',
      'Unknown 4',
      'Unknown 5',
      'Unknown 6',
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
    ], [
    -1, 'None'
    ]);

  wbCastEnum := wbEnum([
    {0} 'Constant Effect',
    {1} 'Fire and Forget',
    {2} 'Concentration',
    {3} 'Scroll'
  ]);

  wbTargetEnum := wbEnum([
    {0} 'Self',
    {1} 'Touch',
    {2} 'Aimed',
    {3} 'Target Actor',
    {4} 'Target Location'
  ]);

  wbCastingSourceEnum := wbEnum([
    'Left',
    'Right',
    'Voice',
    'Instant'
  ]);

  wbCrimeTypeEnum :=
    wbEnum([
      'Steal',
      'Pickpocket',
      'Trespass',
      'Attack',
      'Murder',
      'Escape Jail',
      'Werewolf Transformation'
    ], [
      -1, 'None'
    ]);

  wbActorValue := wbInteger('Actor Value', itS32, wbActorValueEnum);

  wbETYP := wbFormIDCk(ETYP, 'Equipment Type', [EQUP, NULL]);
  wbETYPReq := wbFormIDCk(ETYP, 'Equipment Type', [EQUP, NULL], False, cpNormal, True);

  wbFormTypeEnum := wbEnum([], [
     0, 'Activator',
     1, 'Armor',
     2, 'Book',
     3, 'Container',
     4, 'Door',
     5, 'Ingredient',
     6, 'Light',
     7, 'MiscItem',
     8, 'Static',
     9, 'Grass',
    10, 'Tree',
    12, 'Weapon',
    13, 'Actor',
    14, 'LeveledCharacter',
    15, 'Spell',
    16, 'Enchantment',
    17, 'Potion',
    18, 'LeveledItem',
    19, 'Key',
    20, 'Ammo',
    21, 'Flora',
    22, 'Furniture',
    23, 'Sound Marker',
    24, 'LandTexture',
    25, 'CombatStyle',
    26, 'LoadScreen',
    27, 'LeveledSpell',
    28, 'AnimObject',
    29, 'WaterType',
    30, 'IdleMarker',
    31, 'EffectShader',
    32, 'Projectile',
    33, 'TalkingActivator',
    34, 'Explosion',
    35, 'TextureSet',
    36, 'Debris',
    37, 'MenuIcon',
    38, 'FormList',
    39, 'Perk',
    40, 'BodyPartData',
    41, 'AddOnNode',
    42, 'MovableStatic',
    43, 'CameraShot',
    44, 'ImpactData',
    45, 'ImpactDataSet',
    46, 'Quest',
    47, 'Package',
    48, 'VoiceType',
    49, 'Class',
    50, 'Race',
    51, 'Eyes',
    52, 'HeadPart',
    53, 'Faction',
    54, 'Note',
    55, 'Weather',
    56, 'Climate',
    57, 'ArmorAddon',
    58, 'Global',
    59, 'Imagespace',
    60, 'Imagespace Modifier',
    61, 'Encounter Zone',
    62, 'Message',
    63, 'Constructible Object',
    64, 'Acoustic Space',
    65, 'Ragdoll',
    66, 'Script',
    67, 'Magic Effect',
    68, 'Music Type',
    69, 'Static Collection',
    70, 'Keyword',
    71, 'Location',
    72, 'Location Ref Type',
    73, 'Footstep',
    74, 'Footstep Set',
    75, 'Material Type',
    76, 'Actor Action',
    77, 'Music Track',
    78, 'Word of Power',
    79, 'Shout',
    80, 'Relationship',
    81, 'Equip Slot',
    82, 'Association Type',
    83, 'Outfit',
    84, 'Art Object',
    85, 'Material Object',
    87, 'Lighting Template',
    88, 'Shader Particle Geometry',
    89, 'Visual Effect',
    90, 'Apparatus',
    91, 'Movement Type',
    92, 'Hazard',
    93, 'SM Event Node',
    94, 'Sound Descriptor',
    95, 'Dual Cast Data',
    96, 'Sound Category',
    97, 'Soul Gem',
    98, 'Sound Output Model',
    99, 'Collision Layer',
   100, 'Scroll',
   101, 'ColorForm',
   102, 'Reverb Parameters'
  ]);

  wbMiscStatEnum := wbEnum([], [
    Int64($FCDD5011), 'Animals Killed',
    Int64($366D84CF), 'Armor Improved',
    Int64($023497E6), 'Armor Made',
    Int64($8E20D7C9), 'Assaults',
    Int64($579FFA75), 'Automations Killed',
    Int64($B9B50725), 'Backstabs',
    Int64($ED6A0EF2), 'Barters',
    Int64($CCB952CE), 'Books Read',
    Int64($317E8B4C), 'Brawls Won',
    Int64($1D79006B), 'Bribes',
    Int64($3602DE8F), 'Bunnies Slaughtered',
    Int64($53D9E9B5), 'Chests Looted',
    Int64($683C1980), 'Civil War Quests Completed',
    Int64($66CCC50A), 'College of Winterhold Quests Completed',
    Int64($40B11EFE), 'Creatures Killed',
    Int64($22D5BA38), 'Critical Strikes',
    Int64($A930980F), 'Daedra Killed',
    Int64($3558374B), 'Daedric Quests Completed',
    Int64($37A76425), 'Dawnguard Quests Completed',
    Int64($2BDAC36F), 'Days as a Vampire',
    Int64($6E684590), 'Days as a Werewolf',
    Int64($B6F118DB), 'Days Jailed',
    Int64($3C626A90), 'Days Passed',
    Int64($8556AD88), 'Diseases Contracted',
    Int64($46D6FBBC), 'Dragon Souls Collected',
    Int64($AA444695), 'Dungeons Cleared',
    Int64($1A37F336), 'Eastmarch Bounty',
    Int64($5AC3A8ED), 'Falkreath Bounty',
    Int64($87B12ECC), 'Favorite School',
    Int64($518BBC4E), 'Favorite Shout',
    Int64($41DD77A6), 'Favorite Spell',
    Int64($171C5391), 'Favorite Weapon',
    Int64($4F041AA2), 'Fines Paid',
    Int64($9311B22B), 'Food Eaten',
    Int64($57C089F7), 'Gold Found',
    Int64($D20EDA4F), 'Haafingar Bounty',
    Int64($516C486D), 'Hjaalmarch Bounty',
    Int64($B0A1E32E), 'Horses Owned',
    Int64($EBAE35E8), 'Horses Stolen',
    Int64($FA024018), 'Hours Slept',
    Int64($CAD2ECA1), 'Hours Waiting',
    Int64($527DF857), 'Houses Owned',
    Int64($47B4A015), 'Ingredients Eaten',
    Int64($CE842356), 'Ingredients Harvested',
    Int64($7D2E57C0), 'Intimidations',
    Int64($C21702B5), 'Items Pickpocketed',
    Int64($82F190C2), 'Items Stolen',
    Int64($6627464B), 'Jail Escapes',
    Int64($3520E710), 'Largest Bounty',
    Int64($8A24FDE2), 'Locations Discovered',
    Int64($5829CC2E), 'Locks Picked',
    Int64($88089979), 'Magic Items Made',
    Int64($7EA26C2D), 'Main Quests Completed',
    Int64($7187A208), 'Mauls',
    Int64($98EE55DC), 'Misc Objectives Completed',
    Int64($FA06230B), 'Most Gold Carried',
    Int64($D37C6909), 'Murders',
    Int64($22C2CBD0), 'Necks Bitten',
    Int64($BEEBCC87), 'Nirnroots Found',
    Int64($56CCFC54), 'NumVampirePerks',
    Int64($76A1A5C0), 'NumWerewolfPerks',
    Int64($F22A8133), 'People Killed',
    Int64($47A78467), 'Persuasions',
    Int64($F2BAC234), 'Pockets Picked',
    Int64($17C64668), 'Poisons Mixed',
    Int64($7D8F2EA6), 'Poisons Used',
    Int64($4228DE85), 'Potions Mixed',
    Int64($9631EC11), 'Potions Used',
    Int64($DE6C73FE), 'Questlines Completed',
    Int64($0D7B8B16), 'Quests Completed',
    Int64($BB39399E), 'Shouts Learned',
    Int64($731B5333), 'Shouts Mastered',
    Int64($F921D8BA), 'Shouts Unlocked',
    Int64($B1AE4792), 'Side Quests Completed',
    Int64($ACE470D7), 'Skill Books Read',
    Int64($F33130CE), 'Skill Increases',
    Int64($B556CC52), 'Sneak Attacks',
    Int64($A74CBE83), 'Soul Gems Used',
    Int64($C2C9E233), 'Souls Trapped',
    Int64($5EC89F1A), 'Spells Learned',
    Int64($B251A346), 'Standing Stones Found',
    Int64($05D45702), 'Stores Invested In',
    Int64($D0FE7031), 'The Companions Quests Completed',
    Int64($52BA68CB), 'The Dark Brotherhood Quests Completed',
    Int64($3E267D77), 'The Pale Bounty',
    Int64($69B48177), 'The Reach Bounty',
    Int64($50A23F69), 'The Rift Bounty',
    Int64($62B2E95D), 'Thieves'' Guild Quests Completed',
    Int64($944CEA93), 'Times Jailed',
    Int64($50AAB633), 'Times Shouted',
    Int64($99BB86D8), 'Total Lifetime Bounty',
    Int64($4C252391), 'Training Sessions',
    Int64($7AEA9C2B), 'Trespasses',
    Int64($A67626F4), 'Tribal Orcs Bounty',
    Int64($41D4BC0F), 'Undead Killed',
    Int64($F39260A1), 'Vampirism Cures',
    Int64($61A5C5A9), 'Weapons Disarmed',
    Int64($1D3BA844), 'Weapons Improved',
    Int64($25F1EA25), 'Weapons Made',
    Int64($38A2DD66), 'Werewolf Transformations',
    Int64($4231FA4F), 'Whiterun Bounty',
    Int64($92565767), 'Wings Plucked',
    Int64($C7FC518D), 'Winterhold Bounty',
    Int64($949FA7BC), 'Words of Power Learned',
    Int64($2C6E3FC0), 'Words of Power Unlocked'
  ]);

  wbAdvanceActionEnum := wbEnum([
    'Normal Usage',
    'Power Attack',
    'Bash',
    'Lockpick Success',
    'Lockpick Broken'
  ]);

  wbAlignmentEnum :=
    wbEnum([
      'Good',
      'Neutral',
      'Evil',
      'Very Good',
      'Very Evil'
    ]);

  wbAxisEnum :=
    wbEnum([], [
      88, 'X',
      89, 'Y',
      90, 'Z'
    ]);

  wbCriticalStageEnum :=
    wbEnum([
      'None',
      'Goo Start',
      'Goo End',
      'Disintegrate Start',
      'Disintegrate End'
    ]);

  wbSexEnum := wbEnum(['Male','Female']);

  wbEFID := wbFormIDCk(EFID, 'Base Effect', [MGEF]);

  wbEFIT :=
    wbStructSK(EFIT, [3, 4], '', [
      wbFloat('Magnitude', cpNormal, True),
      wbInteger('Area', itU32),
      wbInteger('Duration', itU32)
    ], cpNormal, True, nil, -1, wbEFITAfterLoad);

  wbCTDA := wbRStruct('Condition', [
    wbStruct(CTDA, '', [
      wbInteger('Type', itU8, wbCtdaTypeToStr, wbCtdaTypeToInt, cpNormal, False, nil, wbCtdaTypeAfterSet),
      wbByteArray('Unused', 3, cpIgnore, False, wbNeverShow),
      wbUnion('Comparison Value', wbCTDACompValueDecider, [
        wbFloat('Comparison Value - Float'),
        wbFormIDCk('Comparison Value - Global', [GLOB])
      ]),
      wbInteger('Function', itU16, wbCTDAFunctionToStr, wbCTDAFunctionToInt),
      wbByteArray('Unused', 2, cpIgnore, False, wbNeverShow),
      wbUnion('Parameter #1', wbCTDAParam1Decider, [
        wbByteArray('Unknown', 4),
        wbByteArray('None', 4, cpIgnore),
        wbInteger('Integer', itS32),
        wbFloat('Float'),
        wbByteArray('Variable Name (unused)', 4, cpIgnore),
        wbInteger('Sex', itU32, wbSexEnum),
        wbInteger('Actor Value', itS32, wbActorValueEnum),
        wbInteger('Crime Type', itU32, wbCrimeTypeEnum),
        wbInteger('Axis', itU32, wbAxisEnum),
        wbInteger('Quest Stage (unused)', itS32),
        wbInteger('Misc Stat', itU32, wbMiscStatEnum),
        wbInteger('Alignment', itU32, wbAlignmentEnum),
        wbFormIDCkNoReach('Equip Type', [EQUP]),
        wbInteger('Form Type', itU32, wbFormTypeEnum),
        wbInteger('Critical Stage', itU32, wbCriticalStageEnum),
        wbFormIDCkNoReach('Object Reference', [NULL, PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA]),
        wbFormIDCkNoReach('Inventory Object', [ARMO, BOOK, MISC, WEAP, AMMO, KEYM, ALCH, SCRL, SLGM, INGR, FLST, LIGH, LVLI, COBJ]),
        wbFormIDCkNoReach('Actor', [NULL, PLYR, ACHR, REFR]),
        wbFormIDCkNoReach('Voice Type', [VTYP, FLST]),
        wbFormIDCkNoReach('Idle', [IDLE]),
        wbFormIDCkNoReach('Form List', [FLST]),
        wbFormIDCkNoReach('Quest', [QUST]),
        wbFormIDCkNoReach('Faction', [FACT]),
        wbFormIDCkNoReach('Cell', [CELL]),
        wbFormIDCkNoReach('Class', [CLAS]),
        wbFormIDCkNoReach('Race', [RACE]),
        wbFormIDCkNoReach('Actor Base', [NPC_]),
        wbFormIDCkNoReach('Global', [GLOB]),
        wbFormIDCkNoReach('Weather', [WTHR]),
        wbFormIDCkNoReach('Package', [PACK]),
        wbFormIDCkNoReach('Encounter Zone', [ECZN]),
        wbFormIDCkNoReach('Perk', [PERK]),
        wbFormIDCkNoReach('Owner', [NULL, FACT, NPC_]),
        wbFormIDCkNoReach('Furniture', [FURN, FLST]),
        wbFormIDCkNoReach('Effect Item', [SPEL, ENCH, ALCH, INGR, SCRL]),
        wbFormIDCkNoReach('Base Effect', [MGEF]),
        wbFormIDCkNoReach('Worldspace', [WRLD, FLST]),
        wbInteger('VATS Value Function', itU32, wbVATSValueFunctionEnum),
        wbInteger('VATS Value Param (INVALID)', itU32),
        wbFormIDCkNoReach('Referenceable Object', [NULL, NPC_, PROJ, TREE, SOUN, ACTI, DOOR, STAT, FURN, CONT, ARMO, AMMO, MISC, WEAP, BOOK, KEYM, ALCH, LIGH, GRAS, ASPC, IDLM, ARMA, MSTT, TACT, FLST, LVLI, LVSP, SPEL, SCRL, SHOU, SLGM, ENCH], [NPC_, PROJ, TREE, SOUN, ACTI, DOOR, STAT, FURN, CONT, ARMO, AMMO, MISC, WEAP, BOOK, KEYM, ALCH, LIGH, GRAS, ASPC, IDLM, ARMA, MSTT, TACT, LVLI, LVSP, SPEL, SCRL, SHOU, SLGM, ENCH]),
        wbFormIDCkNoReach('Region', [REGN]),
        wbFormIDCkNoReach('Keyword', [KYWD, NULL]),
        wbInteger('Player Action', itU32, wbAdvanceActionEnum),
        wbInteger('Casting Type', itU32, wbCastingSourceEnum),
        wbFormIDCkNoReach('Shout', [SHOU]),
        wbFormIDCkNoReach('Location', [LCTN]),
        wbFormIDCkNoReach('Location Ref Type', [LCRT]),
        wbInteger('Alias', itS32, wbConditionAliasToStr, wbStrToAlias),
        wbInteger('Packdata ID', itU32),
        wbFormIDCk('Association Type', [ASTP]),
        wbInteger('Furniture Anim', itU32, wbFurnitureAnimTypeEnum),
        wbInteger('Furniture Entry', itU32, wbEnum([], [$010000, 'Front', $020000, 'Behind', $040000, 'Right', $80000, 'Left', $100000, 'Up'])),
        wbFormIDCk('Scene', [NULL, SCEN]),
        wbInteger('Ward State', itU32, wbWardStateEnum),
        wbInteger('Event', itU32, wbEventFunctionAndMemberToStr, wbEventFunctionAndMemberToInt),
        wbFormID('Event Data')
      ]),
      wbUnion('Parameter #2', wbCTDAParam2Decider, [
        wbByteArray('Unknown', 4),
        wbByteArray('None', 4, cpIgnore),
        wbInteger('Integer', itS32),
        wbFloat('Float'),
        wbByteArray('Variable Name (unused)', 4, cpIgnore),
        wbInteger('Sex', itU32, wbSexEnum),
        wbInteger('Actor Value', itS32, wbActorValueEnum),
        wbInteger('Crime Type', itU32, wbCrimeTypeEnum),
        wbInteger('Axis', itU32, wbAxisEnum),
        wbInteger('Quest Stage', itS32, wbCTDAParam2QuestStageToStr, wbCTDAParam2QuestStageToInt),
        wbInteger('Misc Stat', itU32, wbMiscStatEnum),
        wbInteger('Alignment', itU32, wbAlignmentEnum),
        wbFormIDCkNoReach('Equip Type', [EQUP]),
        wbInteger('Form Type', itU32, wbFormTypeEnum),
        wbInteger('Critical Stage', itU32, wbCriticalStageEnum),
        wbFormIDCkNoReach('Object Reference', [NULL, PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA]),
        wbFormIDCkNoReach('Inventory Object', [ARMO, BOOK, MISC, WEAP, AMMO, KEYM, ALCH, SCRL, SLGM, INGR, FLST, LIGH, LVLI, COBJ]),
        wbFormIDCkNoReach('Actor', [NULL, PLYR, ACHR, REFR]),
        wbFormIDCkNoReach('Voice Type', [VTYP, FLST]),
        wbFormIDCkNoReach('Idle', [IDLE]),
        wbFormIDCkNoReach('Form List', [FLST]),
        wbFormIDCkNoReach('Quest', [QUST]),
        wbFormIDCkNoReach('Faction', [FACT]),
        wbFormIDCkNoReach('Cell', [CELL]),
        wbFormIDCkNoReach('Class', [CLAS]),
        wbFormIDCkNoReach('Race', [RACE]),
        wbFormIDCkNoReach('Actor Base', [NPC_]),
        wbFormIDCkNoReach('Global', [GLOB]),
        wbFormIDCkNoReach('Weather', [WTHR]),
        wbFormIDCkNoReach('Package', [PACK]),
        wbFormIDCkNoReach('Encounter Zone', [ECZN]),
        wbFormIDCkNoReach('Perk', [PERK]),
        wbFormIDCkNoReach('Owner', [NULL, FACT, NPC_]),
        wbFormIDCkNoReach('Furniture', [FURN, FLST]),
        wbFormIDCkNoReach('Effect Item', [SPEL, ENCH, ALCH, INGR, SCRL]),
        wbFormIDCkNoReach('Base Effect', [MGEF]),
        wbFormIDCkNoReach('Worldspace', [WRLD, FLST]),
        wbInteger('VATS Value Function', itU32, wbVATSValueFunctionEnum),
        wbUnion('VATS Value Param', wbCTDAParam2VATSValueParamDecider, [
         { 0} wbFormIDCkNoReach('Weapon', [WEAP]),
         { 1} wbFormIDCkNoReach('Weapon List', [FLST], [WEAP]),
         { 2} wbFormIDCkNoReach('Target', [NPC_]),
         { 3} wbFormIDCkNoReach('Target List', [FLST], [NPC_]),
         { 4} wbByteArray('Unknown', 4, cpIgnore),
         { 5} wbInteger('Target Part', itS32, wbActorValueEnum),
         { 6} wbInteger('VATS Action', itU32, wbEnum([
                'Unarmed Attack',
                'One Hand Melee Attack',
                'Two Hand Melee Attack',
                'Magic Attack',
                'Ranged Attack',
                'Reload',
                'Crouch',
                'Stand',
                'Switch Weapon',
                'Toggle Weapon Drawn',
                'Heal',
                'Player Death'
          ])),
         { 7} wbByteArray('Unknown', 4, cpIgnore),
         { 8} wbByteArray('Unknown', 4, cpIgnore),
         { 9} wbFormIDCkNoReach('Critical Effect', [SPEL]),
         {10} wbFormIDCkNoReach('Critical Effect List', [FLST], [SPEL]),
         {11} wbByteArray('Unknown', 4, cpIgnore),
         {12} wbByteArray('Unknown', 4, cpIgnore),
         {13} wbByteArray('Unknown', 4, cpIgnore),
         {14} wbByteArray('Unknown', 4, cpIgnore),
         {15} wbInteger('Weapon Type', itU32, wbWeaponAnimTypeEnum),
         {16} wbByteArray('Unknown', 4, cpIgnore),
         {17} wbByteArray('Unknown', 4, cpIgnore),
         {18} wbInteger('Projectile Type', itU32, wbEnum([
                'Missile',
                'Lobber',
                'Beam',
                'Flame',
                'Cone',
                'Barrier',
                'Arrow'
              ])),
         {19} wbInteger('Delivery Type', itU32, wbTargetEnum),
         {20} wbInteger('Casting Type', itU32, wbCastEnum)
        ]),
        wbFormIDCkNoReach('Referenceable Object', [NULL, NPC_, PROJ, TREE, SOUN, ACTI, DOOR, STAT, FURN, CONT, ARMO, AMMO, MISC, WEAP, BOOK, KEYM, ALCH, LIGH, GRAS, ASPC, IDLM, ARMA, MSTT, TACT, FLST, LVLI, LVSP, SPEL, SCRL, SHOU, SLGM, ENCH], [NPC_, PROJ, TREE, SOUN, ACTI, DOOR, STAT, FURN, CONT, ARMO, AMMO, MISC, WEAP, BOOK, KEYM, ALCH, LIGH, GRAS, ASPC, IDLM, ARMA, MSTT, TACT, LVLI, LVSP, SPEL, SCRL, SHOU, SLGM, ENCH]),
        wbFormIDCkNoReach('Region', [REGN]),
        wbFormIDCkNoReach('Keyword', [KYWD, NULL]),
        wbInteger('Player Action', itU32, wbAdvanceActionEnum),
        wbInteger('Casting Type', itU32, wbCastingSourceEnum),
        wbFormIDCkNoReach('Shout', [SHOU]),
        wbFormIDCkNoReach('Location', [LCTN]),
        wbFormIDCkNoReach('Location Ref Type', [LCRT]),
        wbInteger('Alias', itS32, wbConditionAliasToStr, wbStrToAlias),
        wbInteger('Packdata ID', itU32),
        wbFormIDCk('Association Type', [ASTP]),
        wbInteger('Furniture Anim', itU32, wbFurnitureAnimTypeEnum),
        wbInteger('Furniture Entry', itU32, wbEnum([], [$010000, 'Front', $020000, 'Behind', $040000, 'Right', $80000, 'Left', $100000, 'Up'])),
        wbFormIDCk('Scene', [NULL, SCEN]),
        wbInteger('Ward State', itU32, wbWardStateEnum),
        wbInteger('Event', itU32, wbEventFunctionAndMemberToStr, wbEventFunctionAndMemberToInt),
        wbFormID('Event Data')
      ]),
      wbInteger('Run On', itU32, wbEnum([
        {0} 'Subject',
        {1} 'Target',
        {2} 'Reference',
        {3} 'Combat Target',
        {4} 'Linked Reference',
        {5} 'Quest Alias',
        {6} 'Package Data',
        {7} 'Event Data'
      ]), cpNormal, False, nil, wbCTDARunOnAfterSet),
      wbUnion('Reference', wbCTDAReferenceDecider, [
        wbInteger('Unused', itU32, nil, cpIgnore),
        wbFormIDCkNoReach('Reference', [NULL, PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA], False)
      ]),
      wbInteger('Parameter #3', itS32, nil, cpNormal, False, nil, nil, -1)
    ], cpNormal, False),
    wbString(CIS1, 'Parameter #1'),
    wbString(CIS2, 'Parameter #2')
  ], [], cpNormal);

  wbCTDAs := wbRArray('Conditions', wbCTDA, cpNormal, False);
  wbCTDAsCount := wbRArray('Conditions', wbCTDA, cpNormal, False, nil, wbCTDAsAfterSet);
  wbCTDAsReq := wbRArray('Conditions', wbCTDA, cpNormal, True);
  wbYNAM := wbFormIDCk(YNAM, 'Sound - Pick Up', [SNDR]);
  wbZNAM := wbFormIDCk(ZNAM, 'Sound - Put Down', [SNDR]);

  wbEffectsReq :=
    wbRStructs('Effects', 'Effect', [
      wbEFID,
      wbEFIT,
      wbCTDAs
    ], [], cpNormal, True);

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

  wbRecord(AMMO, 'Ammunition',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00000004}  2, 'Non-Playable'
    ])), [
    wbEDID,
    wbOBNDReq,
    wbFULL,
    wbMODL,
    wbICON,
    wbDEST,
    wbYNAM,
    wbZNAM,
    wbDESC,
    wbKSIZ,
    wbKWDAs,
    IsSSE(
      wbStruct(DATA, 'Data', [
        wbFormIDCk('Projectile', [PROJ, NULL]),
        wbInteger('Flags', itU32, wbFlags([
          'Ignores Normal Weapon Resistance',
          'Non-Playable',
          'Non-Bolt'
        ])),
        wbFloat('Damage'),
        wbInteger('Value', itU32),
        wbFloat('Weight')
      ], cpNormal, True, nil, 4),
      wbStruct(DATA, 'Data', [
        wbFormIDCk('Projectile', [PROJ, NULL]),
        wbInteger('Flags', itU32, wbFlags([
          'Ignores Normal Weapon Resistance',
          'Non-Playable',
          'Non-Bolt'
        ])),
        wbFloat('Damage'),
        wbInteger('Value', itU32)
      ], cpNormal, True)
    ),
    wbString(ONAM, 'Short Name')
  ], False, nil, cpNormal, False, wbRemoveEmptyKWDA, wbKeywordsAfterSet);

  wbRecord(ANIO, 'Animated Object',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00000200}  9, 'Unknown 9' // always present in updated records, not in Skyrim.esm
    ]), [9]), [
    wbEDID,
    wbMODL,
    wbString(BNAM, 'Unload Event')
  ]);

  wbRecord(ARMO, 'Armor',
    wbFlags(wbRecordFlagsFlags, wbFlagsList([
      {0x00000004}  2, 'Non-Playable',
      {0x00000040}  6, 'Shield',
      {0x00000400} 10, 'Unknown 10',
      {0x00008000} 15, 'Unknown 15'
    ])), [
    wbEDID,
    wbVMAD,
    wbOBNDReq,
    wbFULL,
    wbEITM,
    wbInteger(EAMT, 'Enchantment Amount', itU16),
    wbRStruct('Male world model', [
      wbString(MOD2, 'Model Filename'),
      wbByteArray(MO2T, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow),
      wbMO2S
    ], []),
    wbICON,
    wbRStruct('Female world model', [
      wbString(MOD4, 'Model Filename'),
      wbByteArray(MO4T, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow),
      wbMO4S
    ], []),
    wbICO2,
    wbBODTBOD2,
    wbDEST,
    wbYNAM,
    wbZNAM,
    wbString(BMCT, 'Ragdoll Constraint Template'),
    wbETYP,
    wbFormIDCk(BIDS, 'Bash Impact Data Set', [IPDS]),
    wbFormIDCk(BAMT, 'Alternate Block Material', [MATT]),
    wbFormIDCk(RNAM, 'Race', [RACE]),
    wbKSIZ,
    wbKWDAs,
    wbDESC,
    wbRArray('Armature', wbFormIDCK(MODL, 'Model Filename', [ARMA, NULL])),
    wbStruct(DATA, 'Data', [
      wbInteger('Value', itS32),
      wbFloat('Weight')
    ], cpNormal, True),
    wbInteger(DNAM, 'Armor Rating', itS32, wbDiv(100), cpNormal, True),
    wbFormIDCk(TNAM, 'Template Armor', [ARMO])
  ], False, nil, cpNormal, False, wbARMOAfterLoad, wbKeywordsAfterSet);

  wbRecord(ARMA, 'Armor Addon', [
    wbEDID,
    wbBODTBOD2,
    wbFormIDCk(RNAM, 'Race', [RACE]),
    wbStruct(DNAM, 'Data', [
      wbInteger('Male Priority', itU8),
      wbInteger('Female Priority', itU8),
      // essentialy a number of world models for different weights (Enabled = 2 models _0.nif and _1.nif)
      wbInteger('Weight slider - Male', itU8, wbFlags([
        {0x01} 'Unknown 0',
        {0x02} 'Enabled'
      ])),
      wbInteger('Weight slider - Female', itU8, wbFlags([
        {0x01} 'Unknown 0',
        {0x02} 'Enabled'
      ])),
      wbByteArray('Unknown', 2),
      wbInteger('Detection Sound Value', itU8),
      wbByteArray('Unknown', 1),
      wbFloat('Weapon Adjust')
    ], cpNormal, True),
    wbRStruct('Male world model', [
      wbString(MOD2, 'Model Filename'),
      wbByteArray(MO2T, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow),
      wbMO2S
    ], [], cpNormal, False),
    wbRStruct('Female world model', [
      wbString(MOD3, 'Model Filename'),
      wbByteArray(MO3T, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow),
      wbMO3S
    ], []),
    wbRStruct('Male 1st Person', [
      wbString(MOD4, 'Model Filename'),
      wbByteArray(MO4T, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow),
      wbMO4S
    ], []),
    wbRStruct('Female 1st Person', [
      wbString(MOD5, 'Model Filename'),
      wbByteArray(MO5T, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow),
      wbMO5S
    ], []),
    wbFormIDCK(NAM0, 'Male Skin Texture', [TXST, NULL]),
    wbFormIDCK(NAM1, 'Female Skin texture', [TXST, NULL]),
    wbFormIDCK(NAM2, 'Male Skin Texture Swap List', [FLST, NULL]),
    wbFormIDCK(NAM3, 'Female Skin Texture Swap List', [FLST, NULL]),
    wbRArrayS('Additional Races', wbFormIDCK(MODL, 'Race', [RACE, NULL])),
    wbFormIDCk(SNDD, 'Footstep Sound', [FSTS, NULL]),
    wbFormIDCk(ONAM, 'Art Object', [ARTO])
  ], False, nil, cpNormal, False, wbARMAAfterLoad);

  wbRecord(BOOK, 'Book', [
    wbEDID,
    wbVMAD,
    wbOBNDReq,
    wbFULL,
    wbMODL,
    wbICON,
    wbLStringKC(DESC, 'Book Text', 0, cpTranslate, True),
    wbDEST,
    wbYNAM,
    wbZNAM,
    wbKSIZ,
    wbKWDAs,
    wbStruct(DATA, 'Data', [
      wbInteger('Flags', itU8, wbFlags([
       {0x01} 'Teaches Skill',
       {0x02} 'Can''t be Taken',
       {0x04} 'Teaches Spell',
       {0x08} 'Unknown 4',
       {0x10} 'Unknown 5',
       {0x20} 'Unknown 6',
       {0x40} 'Unknown 7',
       {0x80} 'Unknown 8'
      ])),
      wbInteger('Type', itU8, wbEnum([], [
        0, 'Book/Tome', 255, 'Note/Scroll'
      ])),
      wbByteArray('Unused', 2),
      wbUnion('Teaches', wbBOOKTeachesDecider, [
        wbInteger('Skill', itS32, wbSkillEnum),
        wbFormIDCk('Spell', [SPEL, NULL])
      ]),
      wbInteger('Value', itU32),
      wbFloat('Weight')
    ], cpNormal, True),
    wbFormIDCk(INAM, 'Inventory Art', [STAT]),
    wbLString(CNAM, 'Description', 0, cpTranslate)
  ], False, nil, cpNormal, False, nil, wbKeywordsAfterSet);