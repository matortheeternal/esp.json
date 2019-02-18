  wbNull := wbByteArray('Unused', -255);
  wbLLCT := wbInteger(LLCT, 'Count', itU8, nil, cpBenign);
  wbCITC := wbInteger(CITC, 'Condition Count', itU32, nil, cpBenign);
  wbCITCReq := wbInteger( CITC, 'Condition Count', itU32, nil, cpBenign, True);
  wbLVLD := wbInteger(LVLD, 'Chance None', itU8, nil, cpNormal, True);

  wbSPCT := wbInteger(SPCT, 'Count', itU32, nil, cpBenign);
  wbSPLO := wbFormIDCk(SPLO, 'Actor Effect', [SPEL, SHOU, LVSP]);
  wbSPLOs := wbRArrayS('Actor Effects', wbSPLO, cpNormal, False, nil, wbSPLOsAfterSet, nil{wbActorTemplateUseActorEffectList});

  wbKSIZ := wbInteger(KSIZ, 'Keyword Count', itU32, nil, cpBenign);
  wbKWDAs := wbArrayS(KWDA, 'Keywords', wbFormIDCk('Keyword', [KYWD, NULL]), 0, cpNormal, False, nil, wbKWDAsAfterSet);
  wbReqKWDAs := wbArrayS(KWDA, 'Keywords', wbFormIDCk('Keyword', [KYWD, NULL]), 0, cpNormal, True, nil, wbKWDAsAfterSet);

  wbKeywords := wbRStruct('Keywords', [
    wbKSIZ,
    wbReqKWDAs
  ], []);

  wbCOED := wbStructExSK(COED, [2], [0, 1], 'Extra Data', [
    {00} wbFormIDCkNoReach('Owner', [NPC_, FACT, NULL]),
    {04} wbUnion('Global Variable / Required Rank', wbCOEDOwnerDecider, [
           wbByteArray('Unused', 4, cpIgnore),
           wbFormIDCk('Global Variable', [GLOB, NULL]),
           wbInteger('Required Rank', itS32)
         ]),
    {08} wbFloat('Item Condition')
  ]);

  wbCNTO :=
    wbRStructExSK([0], [1], 'Item', [
      wbStructExSK(CNTO, [0], [1], 'Item', [
        wbFormIDCk('Item', [ARMO, AMMO, APPA, MISC, WEAP, BOOK, LVLI, KEYM, ALCH, INGR, LIGH, SLGM, SCRL]),
        wbInteger('Count', itS32)
      ]),
      wbCOED
    ], []);
  wbCOCT := wbInteger(COCT, 'Count', itU32, nil, cpBenign);
  wbCNTOs := wbRArrayS('Items', wbCNTO, cpNormal, False, nil, wbCNTOsAfterSet);

  wbArmorTypeEnum := wbEnum([
    'Light Armor',
    'Heavy Armor',
    'Clothing'
  ]);

  {>>> When NAME is user defined these will be incorrect <<<}
  wbBipedObjectEnum := wbEnum([
    '30 - Head',
    '31 - Hair',
    '32 - Body',
    '33 - Hands',
    '34 - Forearms',
    '35 - Amulet',
    '36 - Ring',
    '37 - Feet',
    '38 - Calves',
    '39 - Shield',
    '40 - Tail',
    '41 - LongHair',
    '42 - Circlet',
    '43 - Ears',
    '44 - Unnamed',
    '45 - Unnamed',
    '46 - Unnamed',
    '47 - Unnamed',
    '48 - Unnamed',
    '49 - Unnamed',
    '50 - DecapitateHead',
    '51 - Decapitate',
    '52 - Unnamed',
    '53 - Unnamed',
    '54 - Unnamed',
    '55 - Unnamed',
    '56 - Unnamed',
    '57 - Unnamed',
    '58 - Unnamed',
    '59 - Unnamed',
    '60 - Unnamed',
    '61 - FX01'
  ], [
    -1, 'None'
  ]);

  wbBipedObjectFlags := wbFlags([
    {0x00000001} '30 - Head',
    {0x00000002} '31 - Hair',
    {0x00000004} '32 - Body',
    {0x00000008} '33 - Hands',
    {0x00000010} '34 - Forearms',
    {0x00000020} '35 - Amulet',
    {0x00000040} '36 - Ring',
    {0x00000080} '37 - Feet',
    {0x00000100} '38 - Calves',
    {0x00000200} '39 - Shield',
    {0x00000400} '40 - Tail',
    {0x00000800} '41 - LongHair',
    {0x00001000} '42 - Circlet',
    {0x00002000} '43 - Ears',
    {0x00004000} '44 - Unnamed',
    {0x00008000} '45 - Unnamed',
    {0x00010000} '46 - Unnamed',
    {0x00020000} '47 - Unnamed',
    {0x00040000} '48 - Unnamed',
    {0x00080000} '49 - Unnamed',
    {0x00100000} '50 - DecapitateHead',
    {0x00200000} '51 - Decapitate',
    {0x00400000} '52 - Unnamed',
    {0x00800000} '53 - Unnamed',
    {0x01000000} '54 - Unnamed',
    {0x02000000} '55 - Unnamed',
    {0x04000000} '56 - Unnamed',
    {0x08000000} '57 - Unnamed',
    {0x10000000} '58 - Unnamed',
    {0x20000000} '59 - Unnamed',
    {0x40000000} '60 - Unnamed',
    {0x80000000} '61 - FX01'
  ], True);

  wbFirstPersonFlagsU32 := wbInteger('First Person Flags', itU32, wbBipedObjectFlags);

  wbBODT := wbStruct(BODT, 'Body Template', [
    wbFirstPersonFlagsU32,
    wbInteger('General Flags', itU8, wbFlags([
      {0x00000001}'(ARMA)Modulates Voice', {>>> From ARMA <<<}
      {0x00000002}'Unknown 2',
      {0x00000004}'Unknown 3',
      {0x00000008}'Unknown 4',
      {0x00000010}'(ARMO)Non-Playable', {>>> From ARMO <<<}
      {0x00000020}'Unknown 6',
      {0x00000040}'Unknown 7',
      {0x00000080}'Unknown 8'
    ], True)),
    wbByteArray('Unused', 3, cpIgnore),
    wbInteger('Armor Type', itU32, wbArmorTypeEnum)
  ], cpNormal, False, nil, 3);

  wbBOD2 := wbStruct(BOD2, 'Biped Body Template', [
    wbFirstPersonFlagsU32,
    wbInteger('Armor Type', itU32, wbArmorTypeEnum)
  ], cpNormal, False);

  wbBODTBOD2 :=
    wbRUnion('Biped Body Template', [
      wbStruct(BOD2, 'Biped Body Template', [
        wbFirstPersonFlagsU32,
        wbInteger('General Flags', it0, wbFlags([
          {0x00000001}'(ARMA)Modulates Voice', {>>> From ARMA <<<}
          {0x00000002}'Unknown 2',
          {0x00000004}'Unknown 3',
          {0x00000008}'Unknown 4',
          {0x00000010}'(ARMO)Non-Playable', {>>> From ARMO <<<}
          {0x00000020}'Unknown 6',
          {0x00000040}'Unknown 7',
          {0x00000080}'Unknown 8'
        ], True)),
        wbEmpty('Unused'),
        wbInteger('Armor Type', itU32, wbArmorTypeEnum)
      ], cpNormal, False),
      wbStruct(BODT, 'Body Template', [
        wbFirstPersonFlagsU32,
        wbInteger('General Flags', itU8, wbFlags([
          {0x00000001}'(ARMA)Modulates Voice', {>>> From ARMA <<<}
          {0x00000002}'Unknown 2',
          {0x00000004}'Unknown 3',
          {0x00000008}'Unknown 4',
          {0x00000010}'(ARMO)Non-Playable', {>>> From ARMO <<<}
          {0x00000020}'Unknown 6',
          {0x00000040}'Unknown 7',
          {0x00000080}'Unknown 8'
        ], True)),
        wbByteArray('Unused', 3, cpIgnore),
        wbInteger('Armor Type', itU32, wbArmorTypeEnum)
      ], cpNormal, False, nil, 3)
    ], []);

  wbMDOB := wbFormID(MDOB, 'Menu Display Object', cpNormal, False);
  wbCNAM := wbStruct(CNAM, 'Color', [
    wbInteger('Red', itU8),
    wbInteger('Green', itU8),
    wbInteger('Blue', itU8),
    wbByteArray('Unknown', 1)
  ]);
  wbCNAMReq := wbStruct(CNAM, 'Color', [
    wbInteger('Red', itU8),
    wbInteger('Green', itU8),
    wbInteger('Blue', itU8),
    wbByteArray('Unknown', 1)
  ], cpNormal, True);

  wbDODT := wbStruct(DODT, 'Decal Data', [
    wbFloat('Min Width'),
    wbFloat('Max Width'),
    wbFloat('Min Height'),
    wbFloat('Max Height'),
    wbFloat('Depth'),
    wbFloat('Shininess'),
    wbStruct('Parallax', [
      wbFloat('Scale'),
      wbInteger('Passes', itU8) {>>> This can't be higher than 30 <<<}
    ]),
    wbInteger('Flags', itU8, wbFlags([
      {0x01}'Parallax',
      {0x02}'Alpha - Blending',
      {0x04}'Alpha - Testing',
      {0x08}'No Subtextures'
    ], True)),
    wbByteArray('Unknown', 2),
    wbByteColors('Color')
  ]);

//  wbRecordFlagsFlags := wbFlags([
//    {>>> 0x00000000 ACTI: Collision Geometry (default) <<<}
//    {0x00000001}'ESM',
//    {0x00000002}'Unknown 2',
//    {>>> 0x00000004 ARMO: Not playable <<<}
//    {0x00000004}'NotPlayable',
//    {0x00000008}'Unknown 4',
//    {0x00000010}'Unknown 5',
//    {0x00000020}'Deleted',
//    {>>> 0x00000040 ACTI: Has Tree LOD <<<}
//    {>>> 0x00000040 REGN: Border Region <<<}
//    {>>> 0x00000040 STAT: Has Tree LOD <<<}
//    {>>> 0x00000040 REFR: Hidden From Local Map <<<}
//    {0x00000040}'Constant HiddenFromLocalMap BorderRegion HasTreeLOD',
//    {>>> 0x00000080 TES4: Localized <<<}
//    {>>> 0x00000080 PHZD: Turn Off Fire <<<}
//    {>>> 0x00000080 SHOU: Treat Spells as Powers <<<}
//    {>>> 0x00000080 STAT: Add-on LOD Object <<<}
//    {0x00000080}'Localized IsPerch AddOnLODObject TurnOffFire TreatSpellsAsPowers',
//    {>>> 0x00000100 ACTI: Must Update Anims <<<}
//    {>>> 0x00000100 REFR: Inaccessible <<<}
//    {>>> 0x00000100 REFR for LIGH: Doesn't light water <<<}
//    {0x00000100}'MustUpdateAnims Inaccessible DoesntLightWater',
//    {>>> 0x00000200 ACTI: Local Map - Turns Flag Off, therefore it is Hidden <<<}
//    {>>> 0x00000200 REFR: MotionBlurCastsShadows <<<}
//    {0x00000200}'HiddenFromLocalMap StartsDead MotionBlurCastsShadows',
//    {>>> 0x00000400 LSCR: Displays in Main Menu <<<}
//    {0x00000400}'PersistentReference QuestItem DisplaysInMainMenu',
//    {0x00000800}'InitiallyDisabled',
//    {0x00001000}'Ignored',
//    {0x00002000}'ActorChanged',
//    {0x00004000}'Unknown 15',
//    {>>> 0x00008000 STAT: Has Distant LOD <<<}
//    {0x00008000}'VWD',
//    {>>> 0x00010000 ACTI: Random Animation Start <<<}
//    {>>> 0x00010000 REFR light: Never fades <<<}
//    {0x00010000}'RandomAnimationStart NeverFades',
//    {>>> 0x00020000 ACTI: Dangerous <<<}
//    {>>> 0x00020000 REFR light: Doesn't light landscape <<<}
//    {>>> 0x00020000 SLGM: Can hold NPC's soul <<<}
//    {>>> 0x00020000 STAT: Use High-Detail LOD Texture <<<}
//    {0x00020000}'Dangerous OffLimits DoesntLightLandscape HighDetailLOD CanHoldNPC',
//    {0x00040000}'Compressed',
//    {>>> 0x00080000 STAT: Has Currents <<<}
//    {0x00080000}'CantWait HasCurrents',
//    {>>> 0x00100000 ACTI: Ignore Object Interaction <<<}
//    {0x00100000}'IgnoreObjectInteraction',
//    {0x00200000}'(Used in Memory Changed Form)',
//    {0x00400000}'Unknown 23',
//    {>>> 0x00800000 ACTI: Is Marker <<<}
//    {0x00800000}'IsMarker',
//    {0x01000000}'Unknown 25',
//    {>>> 0x02000000 ACTI: Obstacle <<<}
//    {>>> 0x02000000 REFR: No AI Acquire <<<}
//    {0x02000000}'Obstacle NoAIAcquire',
//    {>>> 0x04000000 ACTI: Filter <<<}
//    {0x04000000}'NavMeshFilter',
//    {>>> 0x08000000 ACTI: Bounding Box <<<}
//    {0x08000000}'NavMeshBoundingBox',
//    {>>> 0x10000000 STAT: Show in World Map <<<}
//    {0x10000000}'MustExitToTalk ShowInWorldMap',
//    {>>> 0x20000000 ACTI: Child Can Use <<<}
//    {>>> 0x20000000 REFR: Don't Havok Settle <<<}
//    {0x20000000}'ChildCanUse DontHavokSettle',
//    {>>> 0x40000000 ACTI: GROUND <<<}
//    {>>> 0x40000000 REFR: NoRespawn <<<}
//    {0x40000000}'NavMeshGround NoRespawn',
//    {>>> 0x80000000 REFR: MultiBound <<<}
//    {0x80000000}'MultiBound'
//  ], [18]);

  wbRecordFlagsFlags := wbFlags(wbRecordFlagsFlags, [
    {0x00000001} { 0} 'Unknown 0',
    {0x00000002} { 1} 'Unknown 1',
    {0x00000004} { 2} 'Unknown 2',
    {0x00000008} { 3} 'Unknown 3',
    {0x00000010} { 4} 'Unknown 4',
    {0x00000020} { 4} 'Unknown 5',
    {0x00000040} { 6} 'Unknown 6',
    {0x00000080} { 7} 'Unknown 7',
    {0x00000100} { 8} 'Unknown 8',
    {0x00000200} { 9} 'Unknown 9',
    {0x00000400} {10} 'Unknown 10',
    {0x00000800} {11} 'Unknown 11',
    {0x00001000} {12} 'Unknown 12',
    {0x00002000} {13} 'Unknown 13',
    {0x00004000} {14} 'Unknown 14',
    {0x00008000} {15} 'Unknown 15',
    {0x00010000} {16} 'Unknown 16',
    {0x00020000} {17} 'Unknown 17',
    {0x00040000} {18} 'Unknown 18',
    {0x00080000} {19} 'Unknown 19',
    {0x00100000} {20} 'Unknown 20',
    {0x00200000} {21} 'Unknown 21',
    {0x00400000} {22} 'Unknown 22',
    {0x00800000} {23} 'Unknown 23',
    {0x01000000} {24} 'Unknown 24',
    {0x02000000} {25} 'Unknown 25',
    {0x04000000} {26} 'Unknown 26',
    {0x08000000} {27} 'Unknown 27',
    {0x10000000} {28} 'Unknown 28',
    {0x20000000} {29} 'Unknown 29',
    {0x40000000} {30} 'Unknown 30',
    {0x80000000} {31} 'Unknown 31'
  ]);

  wbRecordFlags := wbInteger('Record Flags', itU32, wbFlags(wbRecordFlagsFlags, wbFlagsList([])));

  wbMainRecordHeader := wbStruct('Record Header', [
    wbString('Signature', 4, cpCritical),
    wbInteger('Data Size', itU32, nil, cpIgnore),
    wbRecordFlags,
    wbFormID('FormID', cpFormID),
    wbByteArray('Version Control Info 1', 4, cpIgnore),
    wbInteger('Form Version', itU16, nil, cpIgnore),
    wbByteArray('Version Control Info 2', 2, cpIgnore)
  ]);

  wbSizeOfMainRecordStruct := 24;

  wbIgnoreRecords.Add(XXXX);

  wbXRGD := wbByteArray(XRGD, 'Ragdoll Data');
  wbXRGB := wbByteArray(XRGB, 'Ragdoll Biped Data');

  wbMusicEnum := wbEnum(['Default', 'Public', 'Dungeon']);
  wbSoundLevelEnum := wbEnum([
     'Loud',
     'Normal',
     'Silent',
     'Very Loud'
    ]);

  wbEntryPointsEnum := wbEnum([
    { 0} 'Calculate Weapon Damage',
    { 1} 'Calculate My Critical Hit Chance',
    { 2} 'Calculate My Critical Hit Damage',
    { 3} 'Calculate Mine Explode Chance',
    { 4} 'Adjust Limb Damage',
    { 5} 'Adjust Book Skill Points',
    { 6} 'Mod Recovered Health',
    { 7} 'Get Should Attack',
    { 8} 'Mod Buy Prices',
    { 9} 'Add Leveled List On Death',
    {10} 'Get Max Carry Weight',
    {11} 'Mod Addiction Chance',
    {12} 'Mod Addiction Duration',
    {13} 'Mod Positive Chem Duration',
    {14} 'Activate',
    {15} 'Ignore Running During Detection',
    {16} 'Ignore Broken Lock',
    {17} 'Mod Enemy Critical Hit Chance',
    {18} 'Mod Sneak Attack Mult',
    {19} 'Mod Max Placeable Mines',
    {20} 'Mod Bow Zoom',
    {21} 'Mod Recover Arrow Chance',
    {22} 'Mod Skill Use',
    {23} 'Mod Telekinesis Distance',
    {24} 'Mod Telekinesis Damage Mult',
    {25} 'Mod Telekinesis Damage',
    {26} 'Mod Bashing Damage',
    {27} 'Mod Power Attack Stamina',
    {28} 'Mod Power Attack Damage',
    {29} 'Mod Spell Magnitude',
    {30} 'Mod Spell Duration',
    {31} 'Mod Secondary Value Weight',
    {32} 'Mod Armor Weight',
    {33} 'Mod Incoming Stagger',
    {34} 'Mod Target Stagger',
    {35} 'Mod Attack Damage',
    {36} 'Mod Incoming Damage',
    {37} 'Mod Target Damage Resistance',
    {38} 'Mod Spell Cost',
    {39} 'Mod Percent Blocked',
    {40} 'Mod Shield Deflect Arrow Chance',
    {41} 'Mod Incoming Spell Magnitude',
    {42} 'Mod Incoming Spell Duration',
    {43} 'Mod Player Intimidation',
    {44} 'Mod Player Reputation',
    {45} 'Mod Favor Points',
    {46} 'Mod Bribe Amount',
    {47} 'Mod Detection Light',
    {48} 'Mod Detection Movement',
    {49} 'Mod Soul Gem Recharge',
    {50} 'Set Sweep Attack',
    {51} 'Apply Combat Hit Spell',
    {52} 'Apply Bashing Spell',
    {53} 'Apply Reanimate Spell',
    {54} 'Set Boolean Graph Variable',
    {55} 'Mod Spell Casting Sound Event',
    {56} 'Mod Pickpocket Chance',
    {57} 'Mod Detection Sneak Skill',
    {58} 'Mod Falling Damage',
    {59} 'Mod Lockpick Sweet Spot',
    {60} 'Mod Sell Prices',
    {61} 'Can Pickpocket Equipped Item',
    {62} 'Mod Lockpick Level Allowed',
    {63} 'Set Lockpick Starting Arc',
    {64} 'Set Progression Picking',
    {65} 'Make Lockpicks Unbreakable',
    {66} 'Mod Alchemy Effectiveness',
    {67} 'Apply Weapon Swing Spell',
    {68} 'Mod Commanded Actor Limit',
    {69} 'Apply Sneaking Spell',
    {70} 'Mod Player Magic Slowdown',
    {71} 'Mod Ward Magicka Absorption Pct',
    {72} 'Mod Initial Ingredient Effects Learned',
    {73} 'Purify Alchemy Ingredients',
    {74} 'Filter Activation',
    {75} 'Can Dual Cast Spell',
    {76} 'Mod Tempering Health',
    {77} 'Mod Enchantment Power',
    {78} 'Mod Soul Pct Captured to Weapon',
    {79} 'Mod Soul Gem Enchanting',
    {80} 'Mod # Applied Enchantments Allowed',
    {81} 'Set Activate Label',
    {82} 'Mod Shout OK',
    {83} 'Mod Poison Dose Count',
    {84} 'Should Apply Placed Item',
    {85} 'Mod Armor Rating',
    {86} 'Mod Lockpicking Crime Chance',
    {87} 'Mod Ingredients Harvested',
    {88} 'Mod Spell Range (Target Loc.)',
    {89} 'Mod Potions Created',
    {90} 'Mod Lockpicking Key Reward Chance',
    {91} 'Allow Mount Actor'
  ]);

  wbLocationEnum := wbEnum([
    {0} 'Near reference',
    {1} 'In cell',
    {2} 'Near package start location',
    {3} 'Near editor location',
    {4} 'Object ID',
    {5} 'Object Type',
    {6} 'Near linked reference',
    {7} 'At package location',
    {8} 'Alias (reference)',
    {9} 'Alias (location)',
   {10} 'Unknown 10',
   {11} 'Unknown 11',
   {12} 'Near self'
  ]);

  wbEquipType := wbFlags([
    {0x00000001}'Hand To Hand Melee',
    {0x00000002}'One Hand Sword',
    {0x00000004}'One Hand Dagger',
    {0x00000008}'One Hand Axe',
    {0x00000010}'One Hand Mace',
    {0x00000020}'Two Hand Sword',
    {0x00000040}'Two Hand Axe',
    {0x00000080}'Bow',
    {0x00000100}'Staff',
    {0x00000200}'Spell',
    {0x00000400}'Shield',
    {0x00000800}'Torch',
    {0x00001000}'Crossbow'
  ], True);

  wbEmotionTypeEnum := wbEnum([
    {0} 'Neutral',
    {1} 'Anger',
    {2} 'Disgust',
    {3} 'Fear',
    {4} 'Sad',
    {5} 'Happy',
    {6} 'Surprise',
    {7} 'Puzzled'
  ]);

  wbFurnitureAnimTypeEnum := wbEnum([
    {0} '',
    {1} 'Sit',
    {2} 'Lay',
    {3} '',
    {4} 'Lean'
  ]);

  wbFurnitureEntryTypeFlags := wbFlags([
    {0x01} 'Front',
    {0x02} 'Behind',
    {0x04} 'Right',
    {0x08} 'Left',
    {0x10} 'Up'
  ]);

  wbWardStateEnum := wbEnum([
    'None',
    'Absorb',
    'Break'
  ]);

  wbEventFunctionEnum := wbEnum([
    'GetIsID',
    'IsInList',
    'GetValue',
    'HasKeyword',
    'GetItemValue'
  ]);

  // Event member names and availability are different depending on event type
  // Using generic names for the last 3 of them: Form, Value1, Value2
  wbEventMemberEnum := wbEnum([], [
    $0000, 'None',
    $314F, 'CreatedObject',
    $314C, '(Old)Location',
    $324C, '(New)Location',
    $314B, 'Keyword',
    $3146, 'Form',
    $3156, 'Value1',
    $3256, 'Value2'
  ]);

  wbWeaponAnimTypeEnum := wbEnum([
    {0} 'HandToHandMelee',
    {1} 'OneHandSword',
    {2} 'OneHandDagger',
    {3} 'OneHandAxe',
    {4} 'OneHandMace',
    {5} 'TwoHandSword',
    {6} 'TwoHandAxe',
    {7} 'Bow',
    {8} 'Staff',
    {9} 'Crossbow'
  ]);

  wbEDID := wbString(EDID, 'Editor ID', 0, cpNormal); // not cpBenign according to Arthmoor
  wbFULL := wbLStringKC(FULL, 'Name', 0, cpTranslate);
  wbFULLActor := wbLStringKC(FULL, 'Name', 0, cpTranslate, False, nil{wbActorTemplateUseBaseData});
  wbFULLReq := wbLStringKC(FULL, 'Name', 0, cpTranslate, True);
  wbDESC := wbLStringKC(DESC, 'Description', 0, cpTranslate);
  wbDESCReq := wbLStringKC(DESC, 'Description', 0, cpTranslate, True);
  wbXSCL := wbFloat(XSCL, 'Scale');

  wbOBND := wbStruct(OBND, 'Object Bounds', [
    wbInteger('X1', itS16),
    wbInteger('Y1', itS16),
    wbInteger('Z1', itS16),
    wbInteger('X2', itS16),
    wbInteger('Y2', itS16),
    wbInteger('Z2', itS16)
  ]);

  wbOBNDReq := wbStruct(OBND, 'Object Bounds', [
    wbInteger('X1', itS16),
    wbInteger('Y1', itS16),
    wbInteger('Z1', itS16),
    wbInteger('X2', itS16),
    wbInteger('Y2', itS16),
    wbInteger('Z2', itS16)
  ], cpNormal, True);

  wbPropTypeEnum := wbEnum([
    {00} 'None',
    {01} 'Object',
    {02} 'String',
    {03} 'Int32',
    {04} 'Float',
    {05} 'Bool',
    {06} '',
    {07} '',
    {08} '',
    {09} '',
    {10} '',
    {11} 'Array of Object',
    {12} 'Array of String',
    {13} 'Array of Int32',
    {14} 'Array of Float',
    {15} 'Array of Bool'
  ]);

  wbScriptFlags := wbInteger('Flags', itU8, wbEnum([
    {0x00} 'Local',
    {0x01} 'Inherited',
    {0x02} 'Removed',
    {0x03} 'Inherited and Removed'
  ]));

  wbScriptPropertyObject := wbUnion('Object Union', wbScriptObjFormatDecider, [
    wbStructSK([1], 'Object v2', [
      wbInteger('Unused', itU16, nil, cpIgnore),
      wbInteger('Alias', itS16, wbScriptObjectAliasToStr, wbStrToAlias),
      wbFormID('FormID')
    ], [2, 1, 0]),
    wbStructSK([1], 'Object v1', [
      wbFormID('FormID'),
      wbInteger('Alias', itS16, wbScriptObjectAliasToStr, wbStrToAlias),
      wbInteger('Unused', itU16, nil, cpIgnore)
    ])
  ]);

  wbScriptProperties :=
    wbArrayS('Properties', wbStructSK([0], 'Property', [
      wbLenString('propertyName', 2),
      wbInteger('Type', itU8, wbPropTypeEnum, cpNormal, False, nil, wbScriptPropertyTypeAfterSet),
      wbInteger('Flags', itU8, wbEnum([
        {0x00} '',
        {0x01} 'Edited',
        {0x02} '',
        {0x03} 'Removed'
      ])),
      wbUnion('Value', wbScriptPropertyDecider, [
       {00} wbNull,
       {01} wbScriptPropertyObject,
       {02} wbLenString('String', 2),
       {03} wbInteger('Int32', itS32),
       {04} wbFloat('Float'),
       {05} wbInteger('Bool', itU8, wbEnum(['False', 'True'])),
       {11} wbArray('Array of Object', wbScriptPropertyObject, -1),
       {12} wbArray('Array of String', wbLenString('Element', 2), -1),
       {13} wbArray('Array of Int32', wbInteger('Element', itS32), -1),
       {14} wbArray('Array of Float', wbFloat('Element'), -1),
       {15} wbArray('Array of Bool', wbInteger('Element', itU8, wbEnum(['False', 'True'])), -1)
      ])
    ]), -2, cpNormal, False, nil, nil, nil, False);

  wbScriptEntry := wbStructSK([0], 'Script', [
    wbLenString('scriptName', 2),
    wbScriptFlags,
    wbScriptProperties
  ]);

  wbScriptFragmentsInfo := wbStruct('Script Fragments', [
    wbInteger('Unknown', itS8),
    wbInteger('Flags', itU8, wbFlags([
      {1} 'OnBegin',
      {2} 'OnEnd'
    ])),
    wbLenString('fileName', 2),
    wbArray('Fragments',  // Do NOT sort, ordered OnBegin, OnEnd
      wbStruct('Fragment', [
        wbInteger('Unknown', itS8),
        wbLenString('scriptName', 2),
        wbLenString('fragmentName', 2)
      ]), [], wbScriptFragmentsInfoCounter)
  ]);

  wbScriptFragmentsPack := wbStruct('Script Fragments', [
    wbInteger('Unknown', itS8),
    wbInteger('Flags', itU8, wbFlags([
      {1} 'OnBegin',
      {2} 'OnEnd',
      {4} 'OnChange'
    ])),
    wbLenString('fileName', 2),
    wbArray('Fragments',  // Do NOT sort, ordered OnBegin, OnEnd, OnChange
      wbStruct('Fragment', [
        wbInteger('Unknown', itS8),
        wbLenString('scriptName', 2),
        wbLenString('fragmentName', 2)
      ]), [], wbScriptFragmentsPackCounter)
  ]);

  wbScriptFragmentsQuest := wbStruct('Script Fragments', [
    wbInteger('Unknown', itS8),
    wbInteger('fragmentCount', itU16),
    wbLenString('fileName', 2),
    wbArrayS('Fragments',
      wbStructSK([0, 2], 'Fragment', [
        wbInteger('Quest Stage', itU16),
        wbInteger('Unknown', itS16),
        wbInteger('Quest Stage Index', itS32),
        wbInteger('Unknown', itS8),
        wbLenString('scriptName', 2),
        wbLenString('fragmentName', 2)
      ]), wbScriptFragmentsQuestCounter)
  ]);

  wbScriptFragmentsScen := wbStruct('Script Fragments', [
    wbInteger('Unknown', itS8),
    wbInteger('Flags', itU8, wbFlags([
      {1} 'OnBegin',
      {2} 'OnEnd'
    ])),
    wbLenString('fileName', 2),
    wbArray('Fragments',  // Do NOT sort, ordered OnBegin, OnEnd
      wbStruct('Fragment', [
        wbInteger('Unknown', itS8),
        wbLenString('scriptName', 2),
        wbLenString('fragmentName', 2)
      ]), [], wbScriptFragmentsSceneCounter),
    wbArray('Phase Fragments',
      wbStructSK([0, 1], 'Phase Fragment', [
        wbInteger('Phase Flag', itU8, wbFlags([
          {1} 'OnStart',
          {2} 'OnCompletion'
        ])),
        wbInteger('Phase Index', itU8),
        wbInteger('Unknown', itS16),
        wbInteger('Unknown', itS8),
        wbInteger('Unknown', itS8),
        wbLenString('scriptName', 2),
        wbLenString('fragmentName', 2)
      ]), -2)
  ]);

  wbScriptFragments := wbStruct('Script Fragments', [
    wbInteger('Unknown', itS8),
    wbLenString('fileName', 2),
    wbArrayS('Fragments',
      wbStructSK([0], 'Fragment', [
        wbInteger('Fragment Index', itU16),
        wbInteger('Unknown', itS16),
        wbInteger('Unknown', itS8),
        wbLenString('scriptName', 2),
        wbLenString('fragmentName', 2)
      ]), -2)
  ]);

  {>>> http://www.uesp.net/wiki/Tes5Mod:Mod_File_Format/VMAD_Field <<<}

  wbVMAD := wbStruct(VMAD, 'Virtual Machine Adapter', [
    wbInteger('Version', itS16, nil, cpIgnore),
    wbInteger('Object Format', itS16, nil, cpIgnore),
    wbArrayS('Scripts', wbScriptEntry, -2, cpNormal, False, nil, nil, nil, False)
  ]);

  wbVMADFragmentedPERK := wbStruct(VMAD, 'Virtual Machine Adapter', [
    wbInteger('Version', itS16, nil, cpIgnore),
    wbInteger('Object Format', itS16, nil, cpIgnore),
    wbArrayS('Scripts', wbScriptEntry, -2, cpNormal, False, nil, nil, nil, False),
    wbScriptFragments
  ], cpNormal, False, nil, 3);

  wbVMADFragmentedPACK := wbStruct(VMAD, 'Virtual Machine Adapter', [
    wbInteger('Version', itS16, nil, cpIgnore),
    wbInteger('Object Format', itS16, nil, cpIgnore),
    wbArrayS('Scripts', wbScriptEntry, -2, cpNormal, False, nil, nil, nil, False),
    wbScriptFragmentsPack
  ], cpNormal, False, nil, 3);

  wbVMADFragmentedQUST := wbStruct(VMAD, 'Virtual Machine Adapter', [
    wbInteger('Version', itS16, nil, cpIgnore),
    wbInteger('Object Format', itS16, nil, cpIgnore),
    wbArrayS('Scripts', wbScriptEntry, -2, cpNormal, False, nil, nil, nil, False),
    wbScriptFragmentsQuest,
    wbArrayS('Aliases', wbStructSK([0], 'Alias', [
      wbScriptPropertyObject,
      wbInteger('Version', itS16, nil, cpIgnore),
      wbInteger('Object Format', itS16, nil, cpIgnore),
	    wbArrayS('Alias Scripts', wbScriptEntry, -2)
	  ]), -2)
  ], cpNormal, False, nil, 3);

  wbVMADFragmentedSCEN := wbStruct(VMAD, 'Virtual Machine Adapter', [
    wbInteger('Version', itS16, nil, cpIgnore),
    wbInteger('Object Format', itS16, nil, cpIgnore),
    wbArrayS('Scripts', wbScriptEntry, -2, cpNormal, False, nil, nil, nil, False),
    wbScriptFragmentsScen
  ], cpNormal, False, nil, 3);

  wbVMADFragmentedINFO := wbStruct(VMAD, 'Virtual Machine Adapter', [
    wbInteger('Version', itS16, nil, cpIgnore),
    wbInteger('Object Format', itS16, nil, cpIgnore),
    wbArrayS('Scripts', wbScriptEntry, -2, cpNormal, False, nil, nil, nil, False),
    wbScriptFragmentsInfo
  ], cpNormal, False, nil, 3);


  wbAttackData := wbRStructSK([1], 'Attack', [
    wbStruct(ATKD, 'Attack Data', [
      wbFloat('Damage Mult'),
      wbFloat('Attack Chance'),
      wbFormIDCk('Attack Spell', [SPEL, SHOU, NULL]),
      wbInteger('Attack Flags', itU32, wbFlags([
        {0x00000001} 'Ignore Weapon',
        {0x00000002} 'Bash Attack',
        {0x00000004} 'Power Attack',
        {0x00000008} 'Left Attack',
        {0x00000010} 'Rotating Attack',
        {0x00000020} 'Unknown 5',
        {0x00000040} 'Unknown 6',
        {0x00000080} 'Unknown 7',
        {0x00000100} 'Unknown 8',
        {0x00000200} 'Unknown 9',
        {0x00000400} 'Unknown 10',
        {0x00000800} 'Unknown 11',
        {0x00001000} 'Unknown 12',
        {0x00002000} 'Unknown 13',
        {0x00004000} 'Unknown 14',
        {0x00008000} 'Unknown 15',
        {0x00010000} 'Unknown 16',
        {0x00020000} 'Unknown 17',
        {0x00040000} 'Unknown 18',
        {0x00080000} 'Unknown 19',
        {0x00100000} 'Unknown 20',
        {0x00200000} 'Unknown 21',
        {0x00400000} 'Unknown 22',
        {0x00800000} 'Unknown 23',
        {0x01000000} 'Unknown 24',
        {0x02000000} 'Unknown 25',
        {0x04000000} 'Unknown 26',
        {0x08000000} 'Unknown 27',
        {0x10000000} 'Unknown 28',
        {0x20000000} 'Unknown 29',
        {0x40000000} 'Unknown 30',
        {0x80000000} 'Override Data'
      ])),
      wbFloat('Attack Angle'),
      wbFloat('Strike Angle'),
      wbFloat('Stagger'),
      wbFormIDCk('Attack Type', [KYWD, NULL]),
      wbFloat('Knockdown'),
      wbFloat('Recovery Time'),
      wbFloat('Stamina Mult')
    ]),
    wbString(ATKE, 'Attack Event')
  ], []);

  wbPLDT := wbStruct(PLDT, 'Location', [
    wbInteger('Type', itS32, wbLocationEnum),
    wbUnion('Location Value', wbTypeDecider, [
      {0} wbFormIDCkNoReach('Reference', [NULL, DOOR, PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA]),
      {1} wbFormIDCkNoReach('Cell', [NULL, CELL]),
      {2} wbByteArray('Near Package Start Location', 4, cpIgnore),
      {3} wbByteArray('Near Editor Location', 4, cpIgnore),
      {4} wbFormIDCkNoReach('Object ID', [NULL, ACTI, DOOR, STAT, MSTT, FURN, SPEL, SCRL, NPC_, CONT, ARMO, AMMO, MISC, WEAP, BOOK, KEYM, ALCH, LIGH, FACT, FLST, IDLM, SHOU]),
      {5} wbInteger('Object Type', itU32, wbObjectTypeEnum),
      {6} wbFormIDCk('Keyword', [NULL, KYWD]),
      {7} wbByteArray('Unused', 4, cpIgnore),
      {8} wbInteger('Alias', itS32, wbPackageLocationAliasToStr, wbStrToAlias),
      {9} wbInteger('Reference', itS32, wbPackageLocationAliasToStr, wbStrToAlias),
     {10} wbByteArray('Unknown', 4, cpIgnore),
     {11} wbByteArray('Unknown', 4, cpIgnore),
     {12} wbByteArray('Unknown', 4, cpIgnore)
    ]),
    wbInteger('Radius', itS32)
  ]);

  wbPLVD := wbStruct(PLVD, 'Location', [
    wbInteger('Type', itS32, wbLocationEnum),
    wbUnion('Location Value', wbTypeDecider, [
      {0} wbFormIDCkNoReach('Reference', [NULL, DOOR, PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA]),
      {1} wbFormIDCkNoReach('Cell', [NULL, CELL]),
      {2} wbByteArray('Near Package Start Location', 4, cpIgnore),
      {3} wbByteArray('Near Editor Location', 4, cpIgnore),
      {4} wbFormIDCkNoReach('Object ID', [NULL, ACTI, DOOR, STAT, MSTT, FURN, SPEL, SCRL, NPC_, CONT, ARMO, AMMO, MISC, WEAP, BOOK, KEYM, ALCH, INGR, LIGH, FACT, FLST, IDLM, SHOU]),
      {5} wbInteger('Object Type', itU32, wbObjectTypeEnum),
      {6} wbFormIDCk('Keyword', [NULL, KYWD]),
      {7} wbByteArray('Unused', 4, cpIgnore),
      {8} wbInteger('Alias', itS32, wbPackageLocationAliasToStr, wbStrToAlias),
      {9} wbInteger('Reference', itS32, wbPackageLocationAliasToStr, wbStrToAlias),
     {10} wbByteArray('Unknown', 4, cpIgnore),
     {11} wbByteArray('Unknown', 4, cpIgnore),
     {12} wbByteArray('Unknown', 4, cpIgnore)
    ]),
    wbInteger('Radius', itS32)
  ]);

  wbTargetData := wbStruct('Target Data', [
    wbInteger('Type', itS32, wbEnum([
      {0} 'Specific Reference',
      {1} 'Object ID',
      {2} 'Object Type',
      {3} 'Linked Reference',
      {4} 'Ref Alias',
      {5} 'Unknown 5',
      {6} 'Self'
    ]), cpNormal, False, nil, nil, 2),
    wbUnion('Target', wbTypeDecider, [
      {0} wbFormIDCkNoReach('Reference', [NULL, PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA], True),
      {1} wbFormIDCkNoReach('Object ID', [NULL, ACTI, DOOR, STAT, MSTT, FURN, SPEL, SCRL, NPC_, CONT, ARMO, AMMO, MISC, WEAP, BOOK, KEYM, ALCH, INGR, LIGH, FACT, FLST, IDLM, SHOU, SOUN, TXST, PROJ]),
      {2} wbInteger('Object Type', itU32, wbObjectTypeEnum),
      {3} wbFormID('Reference'),
      {4} wbInteger('Alias', itS32, wbPackageLocationAliasToStr, wbStrToAlias),
      {5} wbByteArray('Unknown', 4, cpIgnore),
      {6} wbByteArray('Unknown', 4, cpIgnore)
    ]),
    wbInteger('Count / Distance', itS32)
  ]);

  wbEITM := wbFormIDCk(EITM, 'Object Effect', [ENCH, SPEL]);

  wbPosRot :=
    wbStruct('Position/Rotation', [
      wbStruct('Position', [
        wbFloat('X'),
        wbFloat('Y'),
        wbFloat('Z')
      ]),
      wbStruct('Rotation', [
        wbFloat('X', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize),
        wbFloat('Y', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize),
        wbFloat('Z', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize)
      ])
    ]);

  wbDATAPosRot :=
    wbStruct(DATA, 'Position/Rotation', [
      wbStruct('Position', [
        wbFloat('X'),
        wbFloat('Y'),
        wbFloat('Z')
      ]),
      wbStruct('Rotation', [
        wbFloat('X', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize),
        wbFloat('Y', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize),
        wbFloat('Z', cpNormal, True, wbRotationFactor, wbRotationScale, nil, RadiansNormalize)
      ])
    ], cpNormal, True);

  wbMO2S :=
    wbArrayS(MO2S, 'Alternate Textures',
      wbStructSK([0, 2], 'Alternate Texture', [
        wbLenString('3D Name'),
        wbFormIDCk('New Texture', [TXST]),
        wbInteger('3D Index', itS32)
      ]),
    -1);
  wbMO3S :=
    wbArrayS(MO3S, 'Alternate Textures',
      wbStructSK([0, 2], 'Alternate Texture', [
        wbLenString('3D Name'),
        wbFormIDCk('New Texture', [TXST]),
        wbInteger('3D Index', itS32)
      ]),
    -1);
  wbMO4S :=
    wbArrayS(MO4S, 'Alternate Textures',
      wbStructSK([0, 2], 'Alternate Texture', [
        wbLenString('3D Name'),
        wbFormIDCk('New Texture', [TXST]),
        wbInteger('3D Index', itS32)
      ]),
    -1);
  wbMO5S :=
    wbArrayS(MO5S, 'Alternate Textures',
      wbStructSK([0, 2], 'Alternate Texture', [
        wbLenString('3D Name'),
        wbFormIDCk('New Texture', [TXST]),
        wbInteger('3D Index', itS32)
      ]),
    -1);

  wbMODS :=
    wbArrayS(MODS, 'Alternate Textures',
      wbStructSK([0, 2], 'Alternate Texture', [
        wbLenString('3D Name'),
        wbFormIDCk('New Texture', [TXST]),
        wbInteger('3D Index', itS32)
      ]),
    -1);

  wbMODD :=
    wbInteger(MODD, 'FaceGen Model Flags', itU8, wbFlags([
      'Head',
      'Torso',
      'Right Hand',
      'Left Hand'
    ]));

	wbMODT := wbByteArray(MODT, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow);
	wbDMDT := wbByteArray(DMDT, 'Texture Files Hashes', 0, cpIgnore, false, false, wbNeverShow);

  wbMODL :=
    wbRStructSK([0], 'Model', [
      wbString(MODL, 'Model Filename', 0, cpNormal, True),
      wbMODT,
      wbMODS
    ], [], cpNormal, False, nil, True);

  wbMODLActor :=
    wbRStructSK([0], 'Model', [
      wbString(MODL, 'Model Filename', 0, cpNormal, True),
      wbMODT,
      wbMODS
    ], [], cpNormal, False, nil{wbActorTemplateUseModelAnimation}, True);

  wbMODLReq :=
    wbRStructSK([0], 'Model', [
      wbString(MODL, 'Model Filename', 0, cpNormal, True),
      wbMODT,
      wbMODS
    ], [], cpNormal, True, nil, True);

  wbDMDSs := wbArrayS(DMDS, 'Alternate Textures',
    wbStructSK([0, 2], 'Alternate Texture', [
      wbLenString('3D Name'),
      wbFormIDCk('New Texture', [TXST]),
      wbInteger('3D Index', itS32)
    ]),
  -1);

  wbDEST := wbRStruct('Destructible', [
    wbStruct(DEST, 'Header', [
      wbInteger('Health', itS32),
      wbInteger('DEST Count', itU8),
      wbInteger('VATS Targetable', itU8, wbEnum(['False', 'True'])),
      wbByteArray('Unknown', 2)
    ]),
    wbRArray('Stages',
      wbRStruct('Stage', [
        wbStruct(DSTD, 'Destruction Stage Data', [
          wbInteger('Health %', itU8),
          wbInteger('Index', itU8),
          wbInteger('Model Damage Stage', itU8),
          wbInteger('Flags', itU8, wbFlags([
            'Cap Damage',
            'Disable',
            'Destroy',
            'Ignore External Dmg'
          ])),
          wbInteger('Self Damage per Second', itS32),
          wbFormIDCk('Explosion', [EXPL, NULL]),
          wbFormIDCk('Debris', [DEBR, NULL]),
          wbInteger('Debris Count', itS32)
        ], cpNormal, True),
        wbRStructSK([0], 'Model', [
          wbString(DMDL, 'Model Filename'),
          wbDMDT,
          wbDMDSs
        ], [], cpNormal, False, nil),
        wbEmpty(DSTF, 'End Marker', cpNormal, True)
      ], [], cpNormal, False, nil)
    )
  ], [], cpNormal, False, nil);

  wbDESTActor := wbRStruct('Destructible', [
    wbStruct(DEST, 'Header', [
      wbInteger('Health', itS32),
      wbInteger('Count', itU8),
      wbInteger('VATS Targetable', itU8, wbEnum(['False', 'True'])),
      wbByteArray('Unknown', 2)
    ]),
    wbRArray('Stages',  // Begin Stage Array
      wbRStruct('Stage', [ // Begin Stage RStruct
        wbStruct(DSTD, 'Destruction Stage Data', [ // Begin DSTD
          wbInteger('Health %', itU8),
          wbInteger('Index', itU8),
          wbInteger('Damage Stage', itU8),
          wbInteger('Flags', itU8, wbFlags([
            'Cap Damage',
            'Disable',
            'Destroy'
          ])),
          wbInteger('Self Damage per Second', itS32),
          wbFormIDCk('Explosion', [EXPL, NULL]),
          wbFormIDCk('Debris', [DEBR, NULL]),
          wbInteger('Debris Count', itS32)
        ], cpNormal, True), // End DSTD
        wbRStructSK([0], 'Model', [ // Begin DMDL
          wbString(DMDL, 'Model Filename')
        ], []), // End DMDL
        wbDMDT,
        wbDMDSs,
        wbEmpty(DSTF, 'End Marker', cpNormal, True)
      ], []) // Begin Stage RStruct
    ) // End Stage Array
  ], [], cpNormal, False, nil{wbActorTemplateUseModelAnimation});

  wbXLOD := wbArray(XLOD, 'Distant LOD Data', wbFloat('Unknown'), 3);

  wbXESP := wbStruct(XESP, 'Enable Parent', [
    wbFormIDCk('Reference', [PLYR, ACHR, REFR, PGRE, PHZD, PMIS, PARW, PBAR, PBEA, PCON, PFLA]),
    wbInteger('Flags', itU8, wbFlags([
      'Set Enable State to Opposite of Parent',
      'Pop In'
    ])),
    wbByteArray('Unused', 3, cpIgnore)
  ]);

  wbPDTO :=
    wbStruct(PDTO, 'Topic Data', [
      wbInteger('Type', itU32, wbEnum([
        'Topic Ref',
        'Topic Subtype'
      ])),
      wbUnion('Data', wbTypeDecider, [
        wbFormIDCk('Topic', [DIAL, NULL]),
        wbString('Subtype', 4)
      ])
    ]);

  wbPDTOs := wbRArray('Topic', wbPDTO, cpNormal, False, nil);

  wbXLCM := wbInteger(XLCM, 'Level Modifier', itS32, wbEnum([
    'Easy',
    'Medium',
    'Hard',
    'Very Hard'
  ]));

  wbTVDT := wbByteArray(TVDT, 'Occlusion Data', 0, cpNormal);
//  wbTVDT := wbArray(TVDT, 'Occlusion Data', wbInteger('Unknown', itS32)),

  if wbSimpleRecords then begin
    wbMaxHeightDataCELL := wbByteArray(MHDT, 'Max Height Data', 0, cpNormal);
    wbMaxHeightDataWRLD := wbByteArray(MHDT, 'Max Height Data', 0, cpNormal);
  end
  else begin
    wbMaxHeightDataCELL := wbStruct(MHDT, 'Max Height Data', [
      wbFloat('Offset'),
      wbArray('Rows',
        wbByteArray('Columns', 32)
        // way too verbose for no practical use
        //wbStruct('Row', [ wbArray('Columns', wbInteger('Column', itU8), 32) ])
      , 32)
    ]);
    wbMaxHeightDataWRLD := wbStruct(MHDT, 'Max Height Data', [
      wbStruct('Min', [
        wbInteger('X', itS16),
        wbInteger('Y', itS16)
      ]),
      wbStruct('Max', [
        wbInteger('X', itS16),
        wbInteger('Y', itS16)
      ]),
      wbByteArray('Cell Data', 0)
      // way too verbose for no practical use
      {wbArray('Cell Data', wbStruct('Quad Height', [
        wbInteger('Bottom Left', itU8),
        wbInteger('Bottom Right', itU8),
        wbInteger('Top Left', itU8),
        wbInteger('Top Right', itU8)
      ]))}
    ]);
  end;

  if wbSimpleRecords then
    wbOFST := wbByteArray(OFST, 'Offset Data')
  else
    wbOFST := wbArray(OFST, 'Offset Data', wbArray('Rows', wbInteger('Offset', itU32), wbOffsetDataColsCounter), 0);

  wbOwnership := wbRStruct('Ownership', [
    wbFormIDCkNoReach(XOWN, 'Owner', [FACT, ACHR, NPC_]),
    wbInteger(XRNK, 'Faction rank', itS32)
  ], [XRGD]);

  wbXGLB := wbFormIDCk(XGLB, 'Global variable', [GLOB]);