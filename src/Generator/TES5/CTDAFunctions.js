let {
    ctdaFunctions, ctdaFunction, opts
} = require('../helpers');

module.exports = () => {
    ctdaFunctions([
        ctdaFunction(0, 'GetWantBlocking'),
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
        opts(ctdaFunction(36, 'MenuMode'), {
            "paramType1": "ptInteger"
        }),
        ctdaFunction(39, 'GetDisease'),
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
        ctdaFunction(77, 'GetRandomPercent'),
        opts(ctdaFunction(79, 'GetQuestVariable'), {
            "paramType1": "ptQuest",
            "paramType2": "ptVariableName"
        }),
        ctdaFunction(80, 'GetLevel'),
        ctdaFunction(81, 'IsRotating'),
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
        ctdaFunction(101, 'IsWeaponMagicOut'),
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
        ctdaFunction(116, 'IsIntimidatebyPlayer'),
        opts(ctdaFunction(117, 'IsPlayerInRegion'), {
            "paramType1": "ptRegion"
        }),
        ctdaFunction(118, 'GetActorAggroRadiusViolated'),
        opts(ctdaFunction(122, 'GetCrime'), {
            "paramType1": "ptActor",
            "paramType2": "ptCrimeType"
        }),
        ctdaFunction(123, 'IsGreetingPlayer'),
        ctdaFunction(125, 'IsGuard'),
        ctdaFunction(127, 'HasBeenEaten'),
        ctdaFunction(128, 'GetStaminaPercentage'),
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
        opts(ctdaFunction(152, 'GetIsCrimeFaction'), {
            "paramType1": "ptFaction"
        }),
        ctdaFunction(153, 'CanHaveFlames'),
        ctdaFunction(154, 'HasFlames'),
        ctdaFunction(157, 'GetOpenState'),
        ctdaFunction(159, 'GetSitting'),
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
        opts(ctdaFunction(180, 'HasSameEditorLocAsRef'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(181, 'HasSameEditorLocAsRefAlias'), {
            "paramType1": "ptAlias",
            "paramType2": "ptKeyword"
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
        ctdaFunction(226, 'GetVampireFeed'),
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
        opts(ctdaFunction(248, 'IsScenePlaying'), {
            "paramType1": "ptScene"
        }),
        ctdaFunction(249, 'IsInDialogueWithPlayer'),
        opts(ctdaFunction(250, 'GetLocationCleared'), {
            "paramType1": "ptLocation"
        }),
        ctdaFunction(254, 'GetIsPlayableRace'),
        ctdaFunction(255, 'GetOffersServicesNow'),
        opts(ctdaFunction(258, 'HasAssociationType'), {
            "paramType1": "ptActor",
            "paramType2": "ptAssociationType"
        }),
        opts(ctdaFunction(259, 'HasFamilyRelationship'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(261, 'HasParentRelationship'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(262, 'IsWarningAbout'), {
            "paramType1": "ptFormList"
        }),
        ctdaFunction(263, 'IsWeaponOut'),
        opts(ctdaFunction(264, 'HasSpell'), {
            "paramType1": "ptMagicItem"
        }),
        ctdaFunction(265, 'IsTimePassing'),
        ctdaFunction(266, 'IsPleasant'),
        ctdaFunction(267, 'IsCloudy'),
        ctdaFunction(274, 'IsSmallBump'),
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
        opts(ctdaFunction(289, 'IsInCombat'), {
            "paramType1": "ptInteger"
        }),
        ctdaFunction(300, 'IsInInterior'),
        ctdaFunction(304, 'IsWaterObject'),
        ctdaFunction(305, 'GetPlayerAction'),
        ctdaFunction(306, 'IsActorUsingATorch'),
        ctdaFunction(309, 'IsXBox'),
        opts(ctdaFunction(310, 'GetInWorldspace'), {
            "paramType1": "ptWorldSpace"
        }),
        opts(ctdaFunction(312, 'GetPCMiscStat'), {
            "paramType1": "ptMiscStat"
        }),
        ctdaFunction(313, 'GetPairedAnimation'),
        ctdaFunction(314, 'IsActorAVictim'),
        ctdaFunction(315, 'GetTotalPersuasionNumber'),
        ctdaFunction(318, 'GetIdleDoneOnce'),
        ctdaFunction(320, 'GetNoRumors'),
        ctdaFunction(323, 'GetCombatState'),
        opts(ctdaFunction(325, 'GetWithinPackageLocation'), {
            "paramType1": "ptPackdata"
        }),
        ctdaFunction(327, 'IsRidingMount'),
        ctdaFunction(329, 'IsFleeing'),
        ctdaFunction(332, 'IsInDangerousWater'),
        ctdaFunction(338, 'GetIgnoreFriendlyHits'),
        ctdaFunction(339, 'IsPlayersLastRiddenMount'),
        ctdaFunction(353, 'IsActor'),
        ctdaFunction(354, 'IsEssential'),
        ctdaFunction(358, 'IsPlayerMovingIntoNewSpace'),
        opts(ctdaFunction(359, 'GetInCurrentLoc'), {
            "paramType1": "ptLocation"
        }),
        opts(ctdaFunction(360, 'GetInCurrentLocAlias'), {
            "paramType1": "ptAlias"
        }),
        ctdaFunction(361, 'GetTimeDead'),
        opts(ctdaFunction(362, 'HasLinkedRef'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(365, 'IsChild'),
        opts(ctdaFunction(366, 'GetStolenItemValueNoCrime'), {
            "paramType1": "ptFaction"
        }),
        ctdaFunction(367, 'GetLastPlayerAction'),
        opts(ctdaFunction(368, 'IsPlayerActionActive'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(370, 'IsTalkingActivatorActor'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(372, 'IsInList'), {
            "paramType1": "ptFormList"
        }),
        opts(ctdaFunction(373, 'GetStolenItemValue'), {
            "paramType1": "ptFaction"
        }),
        ctdaFunction(375, 'GetCrimeGoldViolent'),
        ctdaFunction(376, 'GetCrimeGoldNonviolent'),
        opts(ctdaFunction(378, 'HasShout'), {
            "paramType1": "ptShout"
        }),
        opts(ctdaFunction(381, 'GetHasNote'), {
            "paramType1": "ptInteger"
        }),
        ctdaFunction(390, 'GetHitLocation'),
        ctdaFunction(391, 'IsPC1stPerson'),
        ctdaFunction(396, 'GetCauseofDeath'),
        opts(ctdaFunction(397, 'IsLimbGone'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(398, 'IsWeaponInList'), {
            "paramType1": "ptFormList"
        }),
        ctdaFunction(402, 'IsBribedbyPlayer'),
        opts(ctdaFunction(403, 'GetRelationshipRank'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(407, 'GetVATSValue'), {
            "paramType1": "ptVATSValueFunction",
            "paramType2": "ptVATSValueParam"
        }),
        opts(ctdaFunction(408, 'IsKiller'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(409, 'IsKillerObject'), {
            "paramType1": "ptFormList"
        }),
        opts(ctdaFunction(410, 'GetFactionCombatReaction'), {
            "paramType1": "ptFaction",
            "paramType2": "ptFaction"
        }),
        opts(ctdaFunction(414, 'Exists'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(415, 'GetGroupMemberCount'),
        ctdaFunction(416, 'GetGroupTargetCount'),
        opts(ctdaFunction(426, 'GetIsVoiceType'), {
            "paramType1": "ptVoiceType"
        }),
        ctdaFunction(427, 'GetPlantedExplosive'),
        ctdaFunction(429, 'IsScenePackageRunning'),
        ctdaFunction(430, 'GetHealthPercentage'),
        opts(ctdaFunction(432, 'GetIsObjectType'), {
            "paramType1": "ptFormType"
        }),
        ctdaFunction(434, 'GetDialogueEmotion'),
        ctdaFunction(435, 'GetDialogueEmotionValue'),
        opts(ctdaFunction(437, 'GetIsCreatureType'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(444, 'GetInCurrentLocFormList'), {
            "paramType1": "ptFormList"
        }),
        opts(ctdaFunction(445, 'GetInZone'), {
            "paramType1": "ptEncounterZone"
        }),
        opts(ctdaFunction(446, 'GetVelocity'), {
            "paramType1": "ptAxis"
        }),
        opts(ctdaFunction(447, 'GetGraphVariableFloat'), {
            "paramType1": "ptVariableName"
        }),
        opts(ctdaFunction(448, 'HasPerk'), {
            "paramType1": "ptPerk",
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(449, 'GetFactionRelation'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(450, 'IsLastIdlePlayed'), {
            "paramType1": "ptIdleForm"
        }),
        ctdaFunction(453, 'GetPlayerTeammate'),
        ctdaFunction(454, 'GetPlayerTeammateCount'),
        ctdaFunction(458, 'GetActorCrimePlayerEnemy'),
        ctdaFunction(459, 'GetCrimeGold'),
        opts(ctdaFunction(463, 'IsPlayerGrabbedRef'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(465, 'GetKeywordItemCount'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(470, 'GetDestructionStage'),
        opts(ctdaFunction(473, 'GetIsAlignment'), {
            "paramType1": "ptAlignment"
        }),
        ctdaFunction(476, 'IsProtected'),
        opts(ctdaFunction(477, 'GetThreatRatio'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(479, 'GetIsUsedItemEquipType'), {
            "paramType1": "ptEquipType"
        }),
        ctdaFunction(487, 'IsCarryable'),
        ctdaFunction(488, 'GetConcussed'),
        ctdaFunction(491, 'GetMapMarkerVisible'),
        opts(ctdaFunction(493, 'PlayerKnows'), {
            "paramType1": "ptKnowable"
        }),
        opts(ctdaFunction(494, 'GetPermanentActorValue'), {
            "paramType1": "ptActorValue"
        }),
        ctdaFunction(495, 'GetKillingBlowLimb'),
        ctdaFunction(497, 'CanPayCrimeGold'),
        ctdaFunction(499, 'GetDaysInJail'),
        ctdaFunction(500, 'EPAlchemyGetMakingPoison'),
        opts(ctdaFunction(501, 'EPAlchemyEffectHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(503, 'GetAllowWorldInteractions'),
        ctdaFunction(508, 'GetLastHitCritical'),
        opts(ctdaFunction(513, 'IsCombatTarget'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(515, 'GetVATSRightAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(516, 'GetVATSLeftAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(517, 'GetVATSBackAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(518, 'GetVATSFrontAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(519, 'GetLockIsBroken'),
        ctdaFunction(520, 'IsPS3'),
        ctdaFunction(521, 'IsWin32'),
        opts(ctdaFunction(522, 'GetVATSRightTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(523, 'GetVATSLeftTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(524, 'GetVATSBackTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(525, 'GetVATSFrontTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(528, 'IsInCriticalStage'), {
            "paramType1": "ptCriticalStage"
        }),
        ctdaFunction(530, 'GetXPForNextLevel'),
        ctdaFunction(533, 'GetInfamy'),
        ctdaFunction(534, 'GetInfamyViolent'),
        ctdaFunction(535, 'GetInfamyNonViolent'),
        opts(ctdaFunction(543, 'GetQuestCompleted'), {
            "paramType1": "ptQuest"
        }),
        ctdaFunction(547, 'IsGoreDisabled'),
        opts(ctdaFunction(550, 'IsSceneActionComplete'), {
            "paramType1": "ptScene",
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(552, 'GetSpellUsageNum'), {
            "paramType1": "ptMagicItem"
        }),
        ctdaFunction(554, 'GetActorsInHigh'),
        ctdaFunction(555, 'HasLoaded3D'),
        opts(ctdaFunction(560, 'HasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        opts(ctdaFunction(561, 'HasRefType'), {
            "paramType1": "ptRefType"
        }),
        opts(ctdaFunction(562, 'LocationHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        opts(ctdaFunction(563, 'LocationHasRefType'), {
            "paramType1": "ptRefType"
        }),
        opts(ctdaFunction(565, 'GetIsEditorLocation'), {
            "paramType1": "ptLocation"
        }),
        opts(ctdaFunction(566, 'GetIsAliasRef'), {
            "paramType1": "ptAlias"
        }),
        opts(ctdaFunction(567, 'GetIsEditorLocAlias'), {
            "paramType1": "ptAlias"
        }),
        ctdaFunction(568, 'IsSprinting'),
        ctdaFunction(569, 'IsBlocking'),
        opts(ctdaFunction(570, 'HasEquippedSpell'), {
            "paramType1": "ptCastingSource"
        }),
        opts(ctdaFunction(571, 'GetCurrentCastingType'), {
            "paramType1": "ptCastingSource"
        }),
        opts(ctdaFunction(572, 'GetCurrentDeliveryType'), {
            "paramType1": "ptCastingSource"
        }),
        ctdaFunction(574, 'GetAttackState'),
        opts(ctdaFunction(576, 'GetEventData'), {
            "paramType1": "ptEvent",
            "paramType2": "ptEventData",
            "paramType3": "ptNone"
        }),
        opts(ctdaFunction(577, 'IsCloserToAThanB'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptObjectReference"
        }),
        opts(ctdaFunction(579, 'GetEquippedShout'), {
            "paramType1": "ptShout"
        }),
        ctdaFunction(580, 'IsBleedingOut'),
        opts(ctdaFunction(584, 'GetRelativeAngle'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptAxis"
        }),
        ctdaFunction(589, 'GetMovementDirection'),
        ctdaFunction(590, 'IsInScene'),
        opts(ctdaFunction(591, 'GetRefTypeDeadCount'), {
            "paramType1": "ptLocation",
            "paramType2": "ptRefType"
        }),
        opts(ctdaFunction(592, 'GetRefTypeAliveCount'), {
            "paramType1": "ptLocation",
            "paramType2": "ptRefType"
        }),
        ctdaFunction(594, 'GetIsFlying'),
        opts(ctdaFunction(595, 'IsCurrentSpell'), {
            "paramType1": "ptMagicItem",
            "paramType2": "ptCastingSource"
        }),
        opts(ctdaFunction(596, 'SpellHasKeyword'), {
            "paramType1": "ptCastingSource",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(597, 'GetEquippedItemType'), {
            "paramType1": "ptCastingSource"
        }),
        opts(ctdaFunction(598, 'GetLocationAliasCleared'), {
            "paramType1": "ptAlias"
        }),
        opts(ctdaFunction(600, 'GetLocAliasRefTypeDeadCount'), {
            "paramType1": "ptAlias",
            "paramType2": "ptRefType"
        }),
        opts(ctdaFunction(601, 'GetLocAliasRefTypeAliveCount'), {
            "paramType1": "ptAlias",
            "paramType2": "ptRefType"
        }),
        opts(ctdaFunction(602, 'IsWardState'), {
            "paramType1": "ptWardState"
        }),
        opts(ctdaFunction(603, 'IsInSameCurrentLocAsRef'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(604, 'IsInSameCurrentLocAsRefAlias'), {
            "paramType1": "ptAlias",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(605, 'LocAliasIsLocation'), {
            "paramType1": "ptAlias",
            "paramType2": "ptLocation"
        }),
        opts(ctdaFunction(606, 'GetKeywordDataForLocation'), {
            "paramType1": "ptLocation",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(608, 'GetKeywordDataForAlias'), {
            "paramType1": "ptAlias",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(610, 'LocAliasHasKeyword'), {
            "paramType1": "ptAlias",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(611, 'IsNullPackageData'), {
            "paramType1": "ptPackdata"
        }),
        opts(ctdaFunction(612, 'GetNumericPackageData'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(613, 'IsFurnitureAnimType'), {
            "paramType1": "ptFurnitureAnim"
        }),
        opts(ctdaFunction(614, 'IsFurnitureEntryType'), {
            "paramType1": "ptFurnitureEntry"
        }),
        ctdaFunction(615, 'GetHighestRelationshipRank'),
        ctdaFunction(616, 'GetLowestRelationshipRank'),
        opts(ctdaFunction(617, 'HasAssociationTypeAny'), {
            "paramType1": "ptAssociationType"
        }),
        ctdaFunction(618, 'HasFamilyRelationshipAny'),
        opts(ctdaFunction(619, 'GetPathingTargetOffset'), {
            "paramType1": "ptAxis"
        }),
        opts(ctdaFunction(620, 'GetPathingTargetAngleOffset'), {
            "paramType1": "ptAxis"
        }),
        ctdaFunction(621, 'GetPathingTargetSpeed'),
        opts(ctdaFunction(622, 'GetPathingTargetSpeedAngle'), {
            "paramType1": "ptAxis"
        }),
        ctdaFunction(623, 'GetMovementSpeed'),
        opts(ctdaFunction(624, 'GetInContainer'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(625, 'IsLocationLoaded'), {
            "paramType1": "ptLocation"
        }),
        opts(ctdaFunction(626, 'IsLocAliasLoaded'), {
            "paramType1": "ptAlias"
        }),
        ctdaFunction(627, 'IsDualCasting'),
        opts(ctdaFunction(629, 'GetVMQuestVariable'), {
            "paramType1": "ptQuest",
            "paramType2": "ptVariableName"
        }),
        opts(ctdaFunction(630, 'GetVMScriptVariable'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptVariableName"
        }),
        ctdaFunction(631, 'IsEnteringInteractionQuick'),
        ctdaFunction(632, 'IsCasting'),
        ctdaFunction(633, 'GetFlyingState'),
        ctdaFunction(635, 'IsInFavorState'),
        ctdaFunction(636, 'HasTwoHandedWeaponEquipped'),
        ctdaFunction(637, 'IsExitingInstant'),
        ctdaFunction(638, 'IsInFriendStateWithPlayer'),
        opts(ctdaFunction(639, 'GetWithinDistance'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptFloat"
        }),
        opts(ctdaFunction(640, 'GetActorValuePercent'), {
            "paramType1": "ptActorValue"
        }),
        ctdaFunction(641, 'IsUnique'),
        ctdaFunction(642, 'GetLastBumpDirection'),
        opts(ctdaFunction(644, 'IsInFurnitureState'), {
            "paramType1": "ptFurnitureAnim"
        }),
        ctdaFunction(645, 'GetIsInjured'),
        ctdaFunction(646, 'GetIsCrashLandRequest'),
        ctdaFunction(647, 'GetIsHastyLandRequest'),
        opts(ctdaFunction(650, 'IsLinkedTo'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(651, 'GetKeywordDataForCurrentLocation'), {
            "paramType1": "ptKeyword"
        }),
        opts(ctdaFunction(652, 'GetInSharedCrimeFaction'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(654, 'GetBribeSuccess'),
        ctdaFunction(655, 'GetIntimidateSuccess'),
        ctdaFunction(656, 'GetArrestedState'),
        ctdaFunction(657, 'GetArrestingActor'),
        ctdaFunction(659, 'EPTemperingItemIsEnchanted'),
        opts(ctdaFunction(660, 'EPTemperingItemHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        opts(ctdaFunction(664, 'GetReplacedItemType'), {
            "paramType1": "ptCastingSource"
        }),
        ctdaFunction(672, 'IsAttacking'),
        ctdaFunction(673, 'IsPowerAttacking'),
        ctdaFunction(674, 'IsLastHostileActor'),
        opts(ctdaFunction(675, 'GetGraphVariableInt'), {
            "paramType1": "ptVariableName"
        }),
        ctdaFunction(676, 'GetCurrentShoutVariation'),
        opts(ctdaFunction(678, 'ShouldAttackKill'), {
            "paramType1": "ptActor"
        }),
        ctdaFunction(680, 'GetActivatorHeight'),
        opts(ctdaFunction(681, 'EPMagic_IsAdvanceSkill'), {
            "paramType1": "ptActorValue"
        }),
        opts(ctdaFunction(682, 'WornHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(683, 'GetPathingCurrentSpeed'),
        opts(ctdaFunction(684, 'GetPathingCurrentSpeedAngle'), {
            "paramType1": "ptAxis"
        }),
        opts(ctdaFunction(691, 'EPModSkillUsage_AdvanceObjectHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        opts(ctdaFunction(692, 'EPModSkillUsage_IsAdvanceAction'), {
            "paramType1": "ptAdvanceAction"
        }),
        opts(ctdaFunction(693, 'EPMagic_SpellHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(694, 'GetNoBleedoutRecovery'),
        opts(ctdaFunction(696, 'EPMagic_SpellHasSkill'), {
            "paramType1": "ptActorValue"
        }),
        opts(ctdaFunction(697, 'IsAttackType'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(698, 'IsAllowedToFly'),
        opts(ctdaFunction(699, 'HasMagicEffectKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(700, 'IsCommandedActor'),
        ctdaFunction(701, 'IsStaggered'),
        ctdaFunction(702, 'IsRecoiling'),
        ctdaFunction(703, 'IsExitingInteractionQuick'),
        ctdaFunction(704, 'IsPathing'),
        opts(ctdaFunction(705, 'GetShouldHelp'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(706, 'HasBoundWeaponEquipped'), {
            "paramType1": "ptCastingSource"
        }),
        opts(ctdaFunction(707, 'GetCombatTargetHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(709, 'GetCombatGroupMemberCount'),
        ctdaFunction(710, 'IsIgnoringCombat'),
        ctdaFunction(711, 'GetLightLevel'),
        opts(ctdaFunction(713, 'SpellHasCastingPerk'), {
            "paramType1": "ptPerk"
        }),
        ctdaFunction(714, 'IsBeingRidden'),
        ctdaFunction(715, 'IsUndead'),
        ctdaFunction(716, 'GetRealHoursPassed'),
        ctdaFunction(718, 'IsUnlockedDoor'),
        opts(ctdaFunction(719, 'IsHostileToActor'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(720, 'GetTargetHeight'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(721, 'IsPoison'),
        opts(ctdaFunction(722, 'WornApparelHasKeywordCount'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(723, 'GetItemHealthPercent'),
        ctdaFunction(724, 'EffectWasDualCast'),
        ctdaFunction(725, 'GetKnockedStateEnum'),
        ctdaFunction(726, 'DoesNotExist'),
        ctdaFunction(730, 'IsOnFlyingMount'),
        ctdaFunction(731, 'CanFlyHere'),
        ctdaFunction(732, 'IsFlyingMountPatrolQueud'),
        ctdaFunction(733, 'IsFlyingMountFastTravelling'),
        ctdaFunction(734, 'IsOverEncumbered'),
        ctdaFunction(735, 'GetActorWarmth'),
        ctdaFunction(1024, 'GetSKSEVersion'),
        ctdaFunction(1025, 'GetSKSEVersionMinor'),
        ctdaFunction(1026, 'GetSKSEVersionBeta'),
        ctdaFunction(1027, 'GetSKSERelease'),
        ctdaFunction(1028, 'ClearInvalidRegistrations')
    ]);
};