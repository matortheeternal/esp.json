let {
    ctdaFunctions, ctdaFunction, opts
} = require('../helpers');

module.exports = () => {
    ctdaFunctions([
        opts(ctdaFunction(1, 'GetDistance'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(5, 'GetLocked'),
        opts(ctdaFunction(6, 'GetPos'), {
            "paramType1": "ptAxis"
        }),
        opts(ctdaFunction(8, 'GetAngle'), {
            "paramType1": "ptAxis"
        }),
        opts(ctdaFunction(10, 'GetStartingPos'), {
            "paramType1": "ptAxis"
        }),
        opts(ctdaFunction(11, 'GetStartingAngle'), {
            "paramType1": "ptAxis"
        }),
        ctdaFunction(12, 'GetSecondsPassed'),
        opts(ctdaFunction(14, 'GetActorValue'), {
            "paramType1": "ptActorValue"
        }),
        ctdaFunction(18, 'GetCurrentTime'),
        ctdaFunction(24, 'GetScale'),
        ctdaFunction(25, 'IsMoving'),
        ctdaFunction(26, 'IsTurning'),
        opts(ctdaFunction(27, 'GetLineOfSight'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(32, 'GetInSameCell'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(35, 'GetDisabled'),
        opts(ctdaFunction(36, 'MenuMode'), {}),
        ctdaFunction(39, 'GetDisease'),
        ctdaFunction(40, 'GetVampire'),
        ctdaFunction(41, 'GetClothingValue'),
        opts(ctdaFunction(42, 'SameFaction'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(43, 'SameRace'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(44, 'SameSex'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(45, 'GetDetected'), {
            "paramType1": "ptActor"
        }),
        ctdaFunction(46, 'GetDead'),
        opts(ctdaFunction(47, 'GetItemCount'), {
            "paramType1": "ptInventoryObject"
        }),
        ctdaFunction(48, 'GetGold'),
        ctdaFunction(49, 'GetSleeping'),
        ctdaFunction(50, 'GetTalkedToPC'),
        opts(ctdaFunction(53, 'GetScriptVariable'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptVariableName"
        }),
        opts(ctdaFunction(56, 'GetQuestRunning'), {
            "paramType1": "ptQuest"
        }),
        opts(ctdaFunction(58, 'GetStage'), {
            "paramType1": "ptQuest"
        }),
        opts(ctdaFunction(59, 'GetStageDone'), {
            "paramType1": "ptQuest",
            "paramType2": "ptQuestStage"
        }),
        opts(ctdaFunction(60, 'GetFactionRankDifference'), {
            "paramType1": "ptFaction",
            "paramType2": "ptActor"
        }),
        ctdaFunction(61, 'GetAlarmed'),
        ctdaFunction(62, 'IsRaining'),
        ctdaFunction(63, 'GetAttacked'),
        ctdaFunction(64, 'GetIsCreature'),
        ctdaFunction(65, 'GetLockLevel'),
        opts(ctdaFunction(66, 'GetShouldAttack'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(67, 'GetInCell'), {
            "paramType1": "ptCell"
        }),
        opts(ctdaFunction(68, 'GetIsClass'), {
            "paramType1": "ptClass"
        }),
        opts(ctdaFunction(69, 'GetIsRace'), {
            "paramType1": "ptRace"
        }),
        opts(ctdaFunction(70, 'GetIsSex'), {
            "paramType1": "ptSex"
        }),
        opts(ctdaFunction(71, 'GetInFaction'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(72, 'GetIsID'), {
            "paramType1": "ptReferencableObject"
        }),
        opts(ctdaFunction(73, 'GetFactionRank'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(74, 'GetGlobalValue'), {
            "paramType1": "ptGlobal"
        }),
        ctdaFunction(75, 'IsSnowing'),
        opts(ctdaFunction(76, 'GetDisposition'), {
            "paramType1": "ptActor"
        }),
        ctdaFunction(77, 'GetRandomPercent'),
        opts(ctdaFunction(79, 'GetQuestVariable'), {
            "paramType1": "ptQuest",
            "paramType2": "ptVariableName"
        }),
        ctdaFunction(80, 'GetLevel'),
        ctdaFunction(81, 'GetArmorRating'),
        opts(ctdaFunction(84, 'GetDeadCount'), {
            "paramType1": "ptActorBase"
        }),
        ctdaFunction(91, 'GetIsAlerted'),
        opts(ctdaFunction(98, 'GetPlayerControlsDisabled'), {
            "paramType1": "ptInteger",
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(99, 'GetHeadingAngle'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(101, 'IsWeaponOut'),
        ctdaFunction(102, 'IsTorchOut'),
        ctdaFunction(103, 'IsShieldOut'),
        ctdaFunction(106, 'IsFacingUp'),
        ctdaFunction(107, 'GetKnockedState'),
        ctdaFunction(108, 'GetWeaponAnimType'),
        opts(ctdaFunction(109, 'IsWeaponSkillType'), {
            "paramType1": "ptActorValue"
        }),
        ctdaFunction(110, 'GetCurrentAIPackage'),
        ctdaFunction(111, 'IsWaiting'),
        ctdaFunction(112, 'IsIdlePlaying'),
        ctdaFunction(116, 'GetMinorCrimeCount'),
        ctdaFunction(117, 'GetMajorCrimeCount'),
        ctdaFunction(118, 'GetActorAggroRadiusViolated'),
        opts(ctdaFunction(122, 'GetCrime'), {
            "paramType1": "ptActor",
            "paramType2": "ptCrimeType"
        }),
        ctdaFunction(123, 'IsGreetingPlayer'),
        ctdaFunction(125, 'IsGuard'),
        ctdaFunction(127, 'HasBeenEaten'),
        ctdaFunction(128, 'GetFatiguePercentage'),
        opts(ctdaFunction(129, 'GetPCIsClass'), {
            "paramType1": "ptClass"
        }),
        opts(ctdaFunction(130, 'GetPCIsRace'), {
            "paramType1": "ptRace"
        }),
        opts(ctdaFunction(131, 'GetPCIsSex'), {
            "paramType1": "ptSex"
        }),
        opts(ctdaFunction(132, 'GetPCInFaction'), {
            "paramType1": "ptFaction"
        }),
        ctdaFunction(133, 'SameFactionAsPC'),
        ctdaFunction(134, 'SameRaceAsPC'),
        ctdaFunction(135, 'SameSexAsPC'),
        opts(ctdaFunction(136, 'GetIsReference'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(141, 'IsTalking'),
        ctdaFunction(142, 'GetWalkSpeed'),
        ctdaFunction(143, 'GetCurrentAIProcedure'),
        ctdaFunction(144, 'GetTrespassWarningLevel'),
        ctdaFunction(145, 'IsTrespassing'),
        ctdaFunction(146, 'IsInMyOwnedCell'),
        ctdaFunction(147, 'GetWindSpeed'),
        ctdaFunction(148, 'GetCurrentWeatherPercent'),
        opts(ctdaFunction(149, 'GetIsCurrentWeather'), {
            "paramType1": "ptWeather"
        }),
        ctdaFunction(150, 'IsContinuingPackagePCNear'),
        ctdaFunction(153, 'CanHaveFlames'),
        ctdaFunction(154, 'HasFlames'),
        ctdaFunction(157, 'GetOpenState'),
        ctdaFunction(159, 'GetSitting'),
        ctdaFunction(160, 'GetFurnitureMarkerID'),
        opts(ctdaFunction(161, 'GetIsCurrentPackage'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(162, 'IsCurrentFurnitureRef'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(163, 'IsCurrentFurnitureObj'), {
            "paramType1": "ptFurniture"
        }),
        ctdaFunction(170, 'GetDayOfWeek'),
        opts(ctdaFunction(172, 'GetTalkedToPCParam'), {
            "paramType1": "ptActor"
        }),
        ctdaFunction(175, 'IsPCSleeping'),
        ctdaFunction(176, 'IsPCAMurderer'),
        opts(ctdaFunction(180, 'GetDetectionLevel'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(182, 'GetEquipped'), {
            "paramType1": "ptInventoryObject"
        }),
        ctdaFunction(185, 'IsSwimming'),
        ctdaFunction(190, 'GetAmountSoldStolen'),
        ctdaFunction(192, 'GetIgnoreCrime'),
        opts(ctdaFunction(193, 'GetPCExpelled'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(195, 'GetPCFactionMurder'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(197, 'GetPCEnemyofFaction'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(199, 'GetPCFactionAttack'), {
            "paramType1": "ptFaction"
        }),
        ctdaFunction(203, 'GetDestroyed'),
        opts(ctdaFunction(214, 'HasMagicEffect'), {
            "paramType1": "ptMagicEffect"
        }),
        ctdaFunction(215, 'GetDefaultOpen'),
        ctdaFunction(219, 'GetAnimAction'),
        opts(ctdaFunction(223, 'IsSpellTarget'), {
            "paramType1": "ptMagicItem"
        }),
        ctdaFunction(224, 'GetVATSMode'),
        ctdaFunction(225, 'GetPersuasionNumber'),
        ctdaFunction(226, 'GetSandman'),
        ctdaFunction(227, 'GetCannibal'),
        opts(ctdaFunction(228, 'GetIsClassDefault'), {
            "paramType1": "ptClass"
        }),
        ctdaFunction(229, 'GetClassDefaultMatch'),
        opts(ctdaFunction(230, 'GetInCellParam'), {
            "paramType1": "ptCell",
            "paramType2": "ptObjectReference"
        }),
        ctdaFunction(235, 'GetVatsTargetHeight'),
        ctdaFunction(237, 'GetIsGhost'),
        ctdaFunction(242, 'GetUnconscious'),
        ctdaFunction(244, 'GetRestrained'),
        opts(ctdaFunction(246, 'GetIsUsedItem'), {
            "paramType1": "ptReferencableObject"
        }),
        opts(ctdaFunction(247, 'GetIsUsedItemType'), {
            "paramType1": "ptFormType"
        }),
        ctdaFunction(254, 'GetIsPlayableRace'),
        ctdaFunction(255, 'GetOffersServicesNow'),
        ctdaFunction(258, 'GetUsedItemLevel'),
        ctdaFunction(259, 'GetUsedItemActivate'),
        ctdaFunction(264, 'GetBarterGold'),
        ctdaFunction(265, 'IsTimePassing'),
        ctdaFunction(266, 'IsPleasant'),
        ctdaFunction(267, 'IsCloudy'),
        ctdaFunction(274, 'GetArmorRatingUpperBody'),
        opts(ctdaFunction(277, 'GetBaseActorValue'), {
            "paramType1": "ptActorValue"
        }),
        opts(ctdaFunction(278, 'IsOwner'), {
            "paramType1": "ptOwner"
        }),
        opts(ctdaFunction(280, 'IsCellOwner'), {
            "paramType1": "ptCell",
            "paramType2": "ptOwner"
        }),
        ctdaFunction(282, 'IsHorseStolen'),
        ctdaFunction(285, 'IsLeftUp'),
        ctdaFunction(286, 'IsSneaking'),
        ctdaFunction(287, 'IsRunning'),
        ctdaFunction(288, 'GetFriendHit'),
        ctdaFunction(289, 'IsInCombat'),
        ctdaFunction(300, 'IsInInterior'),
        ctdaFunction(304, 'IsWaterObject'),
        ctdaFunction(306, 'IsActorUsingATorch'),
        ctdaFunction(309, 'IsXBox'),
        opts(ctdaFunction(310, 'GetInWorldspace'), {
            "paramType1": "ptWorldspace"
        }),
        opts(ctdaFunction(312, 'GetPCMiscStat'), {
            "paramType1": "ptMiscStat"
        }),
        ctdaFunction(313, 'IsActorEvil'),
        ctdaFunction(314, 'IsActorAVictim'),
        ctdaFunction(315, 'GetTotalPersuasionNumber'),
        ctdaFunction(318, 'GetIdleDoneOnce'),
        ctdaFunction(320, 'GetNoRumors'),
        ctdaFunction(323, 'WhichServiceMenu'),
        ctdaFunction(327, 'IsRidingHorse'),
        ctdaFunction(332, 'IsInDangerousWater'),
        ctdaFunction(338, 'GetIgnoreFriendlyHits'),
        ctdaFunction(339, 'IsPlayersLastRiddenHorse'),
        ctdaFunction(353, 'IsActor'),
        ctdaFunction(354, 'IsEssential'),
        ctdaFunction(358, 'IsPlayerMovingIntoNewSpace'),
        ctdaFunction(361, 'GetTimeDead'),
        ctdaFunction(362, 'GetPlayerHasLastRiddenHorse'),
        ctdaFunction(365, 'IsChild'),
        ctdaFunction(367, 'GetLastPlayerAction'),
        opts(ctdaFunction(368, 'IsPlayerActionActive'), {}),
        opts(ctdaFunction(370, 'IsTalkingActivatorActor'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(372, 'IsInList'), {
            "paramType1": "ptFormList"
        }),
        opts(ctdaFunction(382, 'GetHasNote'), {}),
        ctdaFunction(391, 'GetHitLocation'),
        ctdaFunction(392, 'IsPC1stPerson'),
        ctdaFunction(397, 'GetCauseofDeath'),
        opts(ctdaFunction(398, 'IsLimbGone'), {}),
        opts(ctdaFunction(399, 'IsWeaponInList'), {
            "paramType1": "ptFormList"
        }),
        ctdaFunction(403, 'HasFriendDisposition'),
        opts(ctdaFunction(408, 'GetVATSValue'), {
            "paramType1": "ptVATSValueFunction",
            "paramType2": "ptVATSValueParam"
        }),
        opts(ctdaFunction(409, 'IsKiller'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(410, 'IsKillerObject'), {
            "paramType1": "ptFormList"
        }),
        opts(ctdaFunction(411, 'GetFactionCombatReaction'), {
            "paramType1": "ptFaction",
            "paramType2": "ptFaction"
        }),
        opts(ctdaFunction(415, 'Exists'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(416, 'GetGroupMemberCount'),
        ctdaFunction(417, 'GetGroupTargetCount'),
        opts(ctdaFunction(420, 'GetObjectiveCompleted'), {
            "paramType1": "ptQuest"
        }),
        opts(ctdaFunction(421, 'GetObjectiveDisplayed'), {
            "paramType1": "ptQuest"
        }),
        opts(ctdaFunction(427, 'GetIsVoiceType'), {
            "paramType1": "ptVoiceType"
        }),
        ctdaFunction(428, 'GetPlantedExplosive'),
        ctdaFunction(430, 'IsActorTalkingThroughActivator'),
        ctdaFunction(431, 'GetHealthPercentage'),
        opts(ctdaFunction(433, 'GetIsObjectType'), {
            "paramType1": "ptFormType"
        }),
        ctdaFunction(435, 'GetDialogueEmotion'),
        ctdaFunction(436, 'GetDialogueEmotionValue'),
        opts(ctdaFunction(438, 'GetIsCreatureType'), {}),
        opts(ctdaFunction(446, 'GetInZone'), {
            "paramType1": "ptEncounterZone"
        }),
        opts(ctdaFunction(449, 'HasPerk'), {
            "paramType1": "ptPerk",
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(450, 'GetFactionRelation'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(451, 'IsLastIdlePlayed'), {
            "paramType1": "ptIdleForm"
        }),
        ctdaFunction(454, 'GetPlayerTeammate'),
        ctdaFunction(455, 'GetPlayerTeammateCount'),
        ctdaFunction(459, 'GetActorCrimePlayerEnemy'),
        ctdaFunction(460, 'GetActorFactionPlayerEnemy'),
        opts(ctdaFunction(462, 'IsPlayerTagSkill'), {
            "paramType1": "ptActorValue"
        }),
        opts(ctdaFunction(464, 'IsPlayerGrabbedRef'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(471, 'GetDestructionStage'),
        opts(ctdaFunction(474, 'GetIsAlignment'), {
            "paramType1": "ptAlignment"
        }),
        opts(ctdaFunction(478, 'GetThreatRatio'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(480, 'GetIsUsedItemEquipType'), {
            "paramType1": "ptEquipType"
        }),
        ctdaFunction(489, 'GetConcussed'),
        ctdaFunction(492, 'GetMapMarkerVisible'),
        opts(ctdaFunction(495, 'GetPermanentActorValue'), {
            "paramType1": "ptActorValue"
        }),
        ctdaFunction(496, 'GetKillingBlowLimb'),
        ctdaFunction(500, 'GetWeaponHealthPerc'),
        ctdaFunction(503, 'GetRadiationLevel'),
        ctdaFunction(510, 'GetLastHitCritical'),
        opts(ctdaFunction(515, 'IsCombatTarget'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(518, 'GetVATSRightAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(519, 'GetVATSLeftAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(520, 'GetVATSBackAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(521, 'GetVATSFrontAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(522, 'GetIsLockBroken'),
        ctdaFunction(523, 'IsPS3'),
        ctdaFunction(524, 'IsWin32'),
        opts(ctdaFunction(525, 'GetVATSRightTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(526, 'GetVATSLeftTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(527, 'GetVATSBackTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(528, 'GetVATSFrontTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(531, 'IsInCriticalStage'), {
            "paramType1": "ptCriticalStage"
        }),
        ctdaFunction(533, 'GetXPForNextLevel'),
        opts(ctdaFunction(546, 'GetQuestCompleted'), {
            "paramType1": "ptQuest"
        }),
        ctdaFunction(550, 'IsGoreDisabled'),
        opts(ctdaFunction(555, 'GetSpellUsageNum'), {
            "paramType1": "ptMagicItem"
        }),
        ctdaFunction(557, 'GetActorsInHigh'),
        ctdaFunction(558, 'HasLoaded3D'),
        opts(ctdaFunction(573, 'GetReputation'), {
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(574, 'GetReputationPct'), {
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(575, 'GetReputationThreshold'), {
            "paramType2": "ptInteger"
        }),
        ctdaFunction(586, 'IsHardcore'),
        ctdaFunction(601, 'GetForceHitReaction'),
        opts(ctdaFunction(607, 'ChallengeLocked'), {}),
        opts(ctdaFunction(610, 'GetCasinoWinningStage'), {}),
        opts(ctdaFunction(612, 'PlayerInRegion'), {
            "paramType1": "ptRegion"
        }),
        opts(ctdaFunction(614, 'GetChallengeCompleted'), {}),
        ctdaFunction(619, 'IsAlwaysHardcore'),
        ctdaFunction(1024, 'GetNVSEVersion'),
        ctdaFunction(1025, 'GetNVSERevision'),
        ctdaFunction(1026, 'GetNVSEBeta'),
        opts(ctdaFunction(1028, 'GetWeight'), {
            "paramType1": "ptInventoryObject"
        }),
        opts(ctdaFunction(1076, 'GetWeaponHasScope'), {
            "paramType1": "ptInventoryObject"
        }),
        opts(ctdaFunction(1089, 'ListGetFormIndex'), {
            "paramType1": "ptFormList",
            "paramType2": "ptFormType"
        }),
        opts(ctdaFunction(1107, 'IsKeyPressed'), {
            "paramType1": "ptInteger",
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(1131, 'IsControlPressed'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(1271, 'HasOwnership'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(1272, 'IsOwned'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(1274, 'GetDialogueTarget'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(1275, 'GetDialogueSubject'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(1276, 'GetDialogueSpeaker'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(1278, 'GetAgeClass'), {
            "paramType1": "ptActorBase"
        }),
        opts(ctdaFunction(1286, 'GetTokenValue'), {
            "paramType1": "ptFormType"
        }),
        opts(ctdaFunction(1288, 'GetTokenRef'), {
            "paramType1": "ptFormType"
        }),
        opts(ctdaFunction(1291, 'GetPaired'), {
            "paramType1": "ptInventoryObject",
            "paramType2": "ptActorBase"
        }),
        opts(ctdaFunction(1292, 'GetRespawn'), {
            "paramType1": "ptActorBase"
        }),
        opts(ctdaFunction(1294, 'GetPermanent'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(1297, 'IsRefInList'), {
            "paramType1": "ptFormList",
            "paramType2": "ptFormType"
        }),
        opts(ctdaFunction(1301, 'GetPackageCount'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(1440, 'IsPlayerSwimming'),
        ctdaFunction(1441, 'GetTFC'),
        opts(ctdaFunction(1475, 'GetPerkRank'), {
            "paramType1": "ptPerk",
            "paramType2": "ptActor"
        }),
        opts(ctdaFunction(1476, 'GetAltPerkRank'), {
            "paramType1": "ptPerk",
            "paramType2": "ptActor"
        }),
        ctdaFunction(1541, 'GetActorFIKstatus'),
        opts(ctdaFunction(4352, 'GetExtendedActorVariable'), {
            "paramType1": "ptInventoryObject"
        }),
        opts(ctdaFunction(4353, 'GetBaseExtendedActorVariable'), {
            "paramType1": "ptInventoryObject"
        }),
        opts(ctdaFunction(4355, 'GetModExtendedActorVariable'), {
            "paramType1": "ptInventoryObject"
        }),
        opts(ctdaFunction(4420, 'NX_GetEVFl'), {
            "paramType1": "ptNone"
        }),
        opts(ctdaFunction(4426, 'NX_GetQVEVFl'), {
            "paramType1": "ptQuest",
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(4612, 'IsButtonPressed'), {
            "paramType1": "ptInteger"
        }),
        ctdaFunction(4613, 'GetLeftStickX'),
        ctdaFunction(4614, 'GetLeftStickY'),
        ctdaFunction(4615, 'GetRightStickX'),
        ctdaFunction(4616, 'GetRightStickY'),
        ctdaFunction(4617, 'GetLeftTrigger'),
        ctdaFunction(4618, 'GetRightTrigger'),
        opts(ctdaFunction(4708, 'GetArmorClass'), {}),
        opts(ctdaFunction(4709, 'IsRaceInList'), {
            "paramType1": "ptFormList"
        }),
        opts(ctdaFunction(4758, 'IsButtonDisabled'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(4761, 'IsButtonHeld'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(4774, 'IsTriggerDisabled'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(4777, 'IsTriggerHeld'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(4822, 'GetReferenceFlag'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(4832, 'GetDistance2D'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(4833, 'GetDistance3D'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(4843, 'PlayerHasKey'),
        opts(ctdaFunction(4897, 'ActorHasEffect'), {
            "paramType1": "ptMagicEffect"
        }),
        ctdaFunction(5637, 'GetIsPoisoned'),
        ctdaFunction(5708, 'IsEquippedWeaponSilenced'),
        ctdaFunction(5709, 'IsEquippedWeaponScoped'),
        ctdaFunction(5947, 'GetActorLightAmount'),
        ctdaFunction(5951, 'GetGameDifficulty'),
        ctdaFunction(5962, 'GetPCDetectionState'),
        ctdaFunction(5993, 'IsAttacking'),
        ctdaFunction(5994, 'GetPCUsingScope'),
        ctdaFunction(6010, 'GetPCUsingIronSights'),
        ctdaFunction(6012, 'GetRadiationLevelAlt'),
        ctdaFunction(6013, 'IsInWater'),
        ctdaFunction(6058, 'GetAlwaysRun'),
        ctdaFunction(6059, 'GetAutoMove'),
        ctdaFunction(6061, 'GetIsRagdolled'),
        opts(ctdaFunction(6065, 'AuxVarGetFltCond'), {
            "paramType1": "ptQuest",
            "paramType2": "ptInteger"
        }),
        ctdaFunction(6069, 'IsInAir'),
        opts(ctdaFunction(6070, 'GetHasContact'), {}),
        opts(ctdaFunction(6072, 'GetHasContactBase'), {}),
        opts(ctdaFunction(6073, 'GetHasContactType'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(6124, 'IsSpellTargetAlt'), {
            "paramType1": "ptMagicItem"
        }),
        opts(ctdaFunction(6167, 'IsIdlePlayingEx'), {}),
        ctdaFunction(6186, 'IsInCharGen'),
        ctdaFunction(6192, 'GetWaterImmersionPerc'),
        ctdaFunction(6204, 'IsFleeing'),
        ctdaFunction(6217, 'GetTargetUnreachable'),
        ctdaFunction(6268, 'IsInKillCam'),
        ctdaFunction(10247, 'TTW_GetEquippedWeaponSkill')
    ]);
};