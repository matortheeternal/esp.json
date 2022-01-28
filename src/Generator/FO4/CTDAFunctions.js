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
        opts(ctdaFunction(14, 'GetValue'), {
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
            "paramType1": "ptReferencableObject"
        }),
        ctdaFunction(48, 'GetGold'),
        ctdaFunction(49, 'GetSleeping'),
        ctdaFunction(50, 'GetTalkedToPC'),
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
        opts(ctdaFunction(79, 'WouldBeStealing'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(80, 'GetLevel'),
        ctdaFunction(81, 'IsRotating'),
        opts(ctdaFunction(84, 'GetDeadCount'), {
            "paramType1": "ptActorBase"
        }),
        ctdaFunction(91, 'GetIsAlerted'),
        opts(ctdaFunction(98, 'GetPlayerControlsDisabled'), {
            "paramType1": "ptInteger",
            "paramType2": "ptInteger",
            "paramType3": "ptInteger"
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
        ctdaFunction(116, 'IsIntimidatedbyPlayer'),
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
        ctdaFunction(129, 'HasBeenRead'),
        ctdaFunction(130, 'GetDying'),
        opts(ctdaFunction(131, 'GetSceneActionPercent'), {
            "paramType1": "ptScene",
            "paramType2": "ptInteger"
        }),
        opts(ctdaFunction(132, 'WouldRefuseCommand'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(133, 'SameFactionAsPC'),
        ctdaFunction(134, 'SameRaceAsPC'),
        ctdaFunction(135, 'SameSexAsPC'),
        opts(ctdaFunction(136, 'GetIsReference'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(141, 'IsTalking'),
        opts(ctdaFunction(142, 'GetComponentCount'), {
            "paramType1": "ptReferencableObject"
        }),
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
        opts(ctdaFunction(180, 'HasSameEditorLocationAsRef'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(181, 'HasSameEditorLocationAsRefAlias'), {
            "paramType1": "ptAlias",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(182, 'GetEquipped'), {
            "paramType1": "ptReferencableObject"
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
        ctdaFunction(231, 'GetPlayerDialogueInput'),
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
        opts(ctdaFunction(277, 'GetBaseValue'), {
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
            "paramType1": "ptWorldspace"
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
        opts(ctdaFunction(359, 'GetInCurrentLocation'), {
            "paramType1": "ptLocation"
        }),
        opts(ctdaFunction(360, 'GetInCurrentLocationAlias'), {
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
        opts(ctdaFunction(375, 'GetCrimeGoldViolent'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(376, 'GetCrimeGoldNonviolent'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(378, 'IsOwnedBy'), {
            "paramType1": "ptActor"
        }),
        ctdaFunction(380, 'GetCommandDistance'),
        ctdaFunction(381, 'GetCommandLocationDistance'),
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
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(407, 'GetVATSValue'), {
            "paramType1": "ptInteger",
            "paramType2": "ptInteger"
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
        ctdaFunction(434, 'PlayerVisualDetection'),
        ctdaFunction(435, 'PlayerAudioDetection'),
        opts(ctdaFunction(437, 'GetIsCreatureType'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(438, 'HasKey'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(439, 'IsFurnitureEntryType'), {
            "paramType1": "ptReferencableObject"
        }),
        opts(ctdaFunction(444, 'GetInCurrentLocationFormList'), {
            "paramType1": "ptFormList"
        }),
        opts(ctdaFunction(445, 'GetInZone'), {
            "paramType1": "ptEncounterZone"
        }),
        opts(ctdaFunction(446, 'GetVelocity'), {
            "paramType1": "ptAxis"
        }),
        opts(ctdaFunction(447, 'GetGraphVariableFloat'), {}),
        opts(ctdaFunction(448, 'HasPerk'), {
            "paramType1": "ptPerk"
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
        opts(ctdaFunction(459, 'GetCrimeGold'), {
            "paramType1": "ptFaction"
        }),
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
        ctdaFunction(483, 'GetPlayerActivated'),
        ctdaFunction(485, 'GetFullyEnabledActorsInHigh'),
        ctdaFunction(487, 'IsCarryable'),
        ctdaFunction(488, 'GetConcussed'),
        ctdaFunction(491, 'GetMapMarkerVisible'),
        opts(ctdaFunction(493, 'PlayerKnows'), {
            "paramType1": "ptReferencableObject"
        }),
        opts(ctdaFunction(494, 'GetPermanentValue'), {
            "paramType1": "ptActorValue"
        }),
        ctdaFunction(495, 'GetKillingBlowLimb'),
        opts(ctdaFunction(497, 'CanPayCrimeGold'), {
            "paramType1": "ptFaction"
        }),
        ctdaFunction(499, 'GetDaysInJail'),
        ctdaFunction(500, 'EPAlchemyGetMakingPoison'),
        opts(ctdaFunction(501, 'EPAlchemyEffectHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(503, 'GetAllowWorldInteractions'),
        opts(ctdaFunction(506, 'DialogueGetAv'), {
            "paramType1": "ptActorValue"
        }),
        opts(ctdaFunction(507, 'DialogueHasPerk'), {
            "paramType1": "ptPerk"
        }),
        ctdaFunction(508, 'GetLastHitCritical'),
        opts(ctdaFunction(510, 'DialogueGetItemCount'), {
            "paramType1": "ptReferencableObject"
        }),
        opts(ctdaFunction(511, 'LastCrippledCondition'), {
            "paramType1": "ptActorValue"
        }),
        opts(ctdaFunction(512, 'HasSharedPowerGrid'), {
            "paramType1": "ptObjectReference"
        }),
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
        ctdaFunction(519, 'GetIsLockBroken'),
        ctdaFunction(520, 'IsPS3'),
        ctdaFunction(521, 'IsWindowsPC'),
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
        opts(ctdaFunction(533, 'GetInfamy'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(534, 'GetInfamyViolent'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(535, 'GetInfamyNonViolent'), {
            "paramType1": "ptFaction"
        }),
        ctdaFunction(536, 'GetTypeCommandPerforming'),
        opts(ctdaFunction(543, 'GetQuestCompleted'), {
            "paramType1": "ptQuest"
        }),
        ctdaFunction(544, 'GetSpeechChallengeSuccessLevel'),
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
        opts(ctdaFunction(567, 'GetIsEditorLocationAlias'), {
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
            "paramType2": "ptEventData"
        }),
        opts(ctdaFunction(577, 'IsCloserToAThanB'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptObjectReference"
        }),
        ctdaFunction(578, 'LevelMinusPCLevel'),
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
        opts(ctdaFunction(600, 'GetLocationAliasRefTypeDeadCount'), {
            "paramType1": "ptAlias",
            "paramType2": "ptRefType"
        }),
        opts(ctdaFunction(601, 'GetLocationAliasRefTypeAliveCount'), {
            "paramType1": "ptAlias",
            "paramType2": "ptRefType"
        }),
        opts(ctdaFunction(602, 'IsWardState'), {
            "paramType1": "ptWardState"
        }),
        opts(ctdaFunction(603, 'IsInSameCurrentLocationAsRef'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(604, 'IsInSameCurrentLocationAsRefAlias'), {
            "paramType1": "ptAlias",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(605, 'LocationAliasIsLocation'), {
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
        opts(ctdaFunction(610, 'LocationAliasHasKeyword'), {
            "paramType1": "ptAlias",
            "paramType2": "ptKeyword"
        }),
        opts(ctdaFunction(611, 'IsNullPackageData'), {
            "paramType1": "ptPackdata"
        }),
        opts(ctdaFunction(612, 'GetNumericPackageData'), {
            "paramType1": "ptPackdata"
        }),
        ctdaFunction(613, 'IsPlayerRadioOn'),
        ctdaFunction(614, 'GetPlayerRadioFrequency'),
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
        opts(ctdaFunction(626, 'IsLocationAliasLoaded'), {
            "paramType1": "ptAlias"
        }),
        ctdaFunction(627, 'IsDualCasting'),
        opts(ctdaFunction(629, 'GetVMQuestVariable'), {
            "paramType1": "ptQuest"
        }),
        ctdaFunction(630, 'GetCombatAudioDetection'),
        ctdaFunction(631, 'GetCombatVisualDetection'),
        ctdaFunction(632, 'IsCasting'),
        ctdaFunction(633, 'GetFlyingState'),
        ctdaFunction(635, 'IsInFavorState'),
        ctdaFunction(636, 'HasTwoHandedWeaponEquipped'),
        opts(ctdaFunction(637, 'IsFurnitureExitType'), {
            "paramType1": "ptReferencableObject"
        }),
        ctdaFunction(638, 'IsInFriendStatewithPlayer'),
        opts(ctdaFunction(639, 'GetWithinDistance'), {
            "paramType1": "ptObjectReference",
            "paramType2": "ptFloat"
        }),
        opts(ctdaFunction(640, 'GetValuePercent'), {
            "paramType1": "ptActorValue"
        }),
        ctdaFunction(641, 'IsUnique'),
        ctdaFunction(642, 'GetLastBumpDirection'),
        ctdaFunction(644, 'GetInfoChallangeSuccess'),
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
        opts(ctdaFunction(659, 'HasVMScript'), {}),
        opts(ctdaFunction(660, 'GetVMScriptVariable'), {}),
        opts(ctdaFunction(661, 'GetWorkshopResourceDamage'), {
            "paramType1": "ptActorValue"
        }),
        opts(ctdaFunction(664, 'HasValidRumorTopic'), {
            "paramType1": "ptQuest"
        }),
        ctdaFunction(672, 'IsAttacking'),
        ctdaFunction(673, 'IsPowerAttacking'),
        ctdaFunction(674, 'IsLastHostileActor'),
        opts(ctdaFunction(675, 'GetGraphVariableInt'), {}),
        opts(ctdaFunction(678, 'ShouldAttackKill'), {
            "paramType1": "ptActor"
        }),
        ctdaFunction(680, 'GetActivationHeight'),
        opts(ctdaFunction(682, 'WornHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(683, 'GetPathingCurrentSpeed'),
        opts(ctdaFunction(684, 'GetPathingCurrentSpeedAngle'), {
            "paramType1": "ptAxis"
        }),
        opts(ctdaFunction(691, 'GetWorkshopObjectCount'), {
            "paramType1": "ptReferencableObject"
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
        ctdaFunction(703, 'HasScopeWeaponEquipped'),
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
        ctdaFunction(725, 'GetKnockStateEnum'),
        ctdaFunction(726, 'DoesNotExist'),
        ctdaFunction(728, 'GetPlayerWalkAwayFromDialogueScene'),
        ctdaFunction(729, 'GetActorStance'),
        ctdaFunction(734, 'CanProduceForWorkshop'),
        ctdaFunction(735, 'CanFlyHere'),
        opts(ctdaFunction(736, 'EPIsDamageType'), {}),
        ctdaFunction(738, 'GetActorGunState'),
        ctdaFunction(739, 'GetVoiceLineLength'),
        opts(ctdaFunction(741, 'ObjectTemplateItem_HasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        opts(ctdaFunction(742, 'ObjectTemplateItem_HasUniqueKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(743, 'ObjectTemplateItem_GetLevel'),
        opts(ctdaFunction(744, 'MovementIdleMatches'), {
            "paramType1": "ptInteger",
            "paramType2": "ptInteger"
        }),
        ctdaFunction(745, 'GetActionData'),
        opts(ctdaFunction(746, 'GetActionDataShort'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(747, 'GetActionDataByte'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(748, 'GetActionDataFlag'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(749, 'ModdedItemHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(750, 'GetAngryWithPlayer'),
        ctdaFunction(751, 'IsCameraUnderWater'),
        opts(ctdaFunction(753, 'IsActorRefOwner'), {
            "paramType1": "ptActor"
        }),
        opts(ctdaFunction(754, 'HasActorRefOwner'), {
            "paramType1": "ptActor"
        }),
        ctdaFunction(756, 'GetLoadedAmmoCount'),
        ctdaFunction(757, 'IsTimeSpanSunrise'),
        ctdaFunction(758, 'IsTimeSpanMorning'),
        ctdaFunction(759, 'IsTimeSpanAfternoon'),
        ctdaFunction(760, 'IsTimeSpanEvening'),
        ctdaFunction(761, 'IsTimeSpanSunset'),
        ctdaFunction(762, 'IsTimeSpanNight'),
        ctdaFunction(763, 'IsTimeSpanMidnight'),
        ctdaFunction(764, 'IsTimeSpanAnyDay'),
        ctdaFunction(765, 'IsTimeSpanAnyNight'),
        opts(ctdaFunction(766, 'CurrentFurnitureHasKeyword'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(767, 'GetWeaponEquipIndex'),
        ctdaFunction(769, 'IsOverEncumbered'),
        ctdaFunction(770, 'IsPackageRequestingBlockedIdles'),
        ctdaFunction(771, 'GetActionDataInt'),
        opts(ctdaFunction(772, 'GetVATSRightMinusLeftAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(773, 'GetInIronSights'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(774, 'GetActorStaggerDirection'),
        ctdaFunction(775, 'GetActorStaggerMagnitude'),
        opts(ctdaFunction(776, 'WornCoversBipedSlot'), {
            "paramType1": "ptInteger"
        }),
        ctdaFunction(777, 'GetInventoryValue'),
        ctdaFunction(778, 'IsPlayerInConversation'),
        ctdaFunction(779, 'IsInDialogueCamera'),
        ctdaFunction(780, 'IsMyDialogueTargetPlayer'),
        ctdaFunction(781, 'IsMyDialogueTargetActor'),
        ctdaFunction(782, 'GetMyDialogueTargetDistance'),
        opts(ctdaFunction(783, 'IsSeatOccupied'), {
            "paramType1": "ptKeyword"
        }),
        ctdaFunction(784, 'IsPlayerRiding'),
        ctdaFunction(785, 'IsTryingEventCamera'),
        ctdaFunction(786, 'UseLeftSideCamera'),
        ctdaFunction(787, 'GetNoteType'),
        ctdaFunction(788, 'LocationHasPlayerOwnedWorkshop'),
        ctdaFunction(789, 'IsStartingAction'),
        ctdaFunction(790, 'IsMidAction'),
        ctdaFunction(791, 'IsWeaponChargeAttack'),
        ctdaFunction(792, 'IsInWorkshopMode'),
        ctdaFunction(793, 'IsWeaponChargingHoldAttack'),
        ctdaFunction(794, 'IsEncounterAbovePlayerLevel'),
        ctdaFunction(795, 'IsMeleeAttacking'),
        ctdaFunction(796, 'GetVATSQueuedTargetsUnique'),
        ctdaFunction(797, 'GetCurrentLocationCleared'),
        ctdaFunction(798, 'IsPowered'),
        ctdaFunction(799, 'GetTransmitterDistance'),
        ctdaFunction(800, 'GetCameraPlaybackTime'),
        ctdaFunction(801, 'IsInWater'),
        opts(ctdaFunction(802, 'GetWithinActivateDistance'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(803, 'IsUnderWater'),
        opts(ctdaFunction(804, 'IsInSameSpace'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(805, 'LocationAllowsReset'),
        opts(ctdaFunction(806, 'GetVATSBackRightAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(807, 'GetVATSBackLeftAreaFree'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(808, 'GetVATSBackRightTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(809, 'GetVATSBackLeftTargetVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(810, 'GetVATSTargetLimbVisible'), {
            "paramType1": "ptObjectReference"
        }),
        opts(ctdaFunction(811, 'IsPlayerListening'), {
            "paramType1": "ptFloat"
        }),
        ctdaFunction(812, 'GetPathingRequestedQuickTurn'),
        ctdaFunction(813, 'EPIsCalculatingBaseDamage'),
        ctdaFunction(814, 'GetReanimating'),
        ctdaFunction(817, 'IsInRobotWorkbench')
    ]);
};