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
        ctdaFunction(98, 'GetPlayerControlsDisabled'),
        opts(ctdaFunction(99, 'GetHeadingAngle'), {
            "paramType1": "ptObjectReference"
        }),
        ctdaFunction(101, 'IsWeaponOut'),
        ctdaFunction(102, 'IsTorchOut'),
        ctdaFunction(103, 'IsShieldOut'),
        ctdaFunction(104, 'IsYielding'),
        ctdaFunction(106, 'IsFacingUp'),
        ctdaFunction(107, 'GetKnockedState'),
        ctdaFunction(108, 'GetWeaponAnimType'),
        ctdaFunction(109, 'GetWeaponSkillType'),
        ctdaFunction(110, 'GetCurrentAIPackage'),
        ctdaFunction(111, 'IsWaiting'),
        ctdaFunction(112, 'IsIdlePlaying'),
        ctdaFunction(116, 'GetCrimeGold'),
        opts(ctdaFunction(122, 'GetCrime'), {
            "paramType1": "ptActor",
            "paramType2": "ptCrimeType"
        }),
        ctdaFunction(125, 'IsGuard'),
        ctdaFunction(127, 'CanPayCrimeGold'),
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
        ctdaFunction(171, 'IsPlayerInJail'),
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
        opts(ctdaFunction(193, 'GetPCExpelled'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(195, 'GetPCFactionMurder'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(197, 'GetPCFactionSteal'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(199, 'GetPCFactionAttack'), {
            "paramType1": "ptFaction"
        }),
        opts(ctdaFunction(201, 'GetPCFactionSubmitAuthority'), {
            "paramType1": "ptFaction"
        }),
        ctdaFunction(203, 'GetDestroyed'),
        opts(ctdaFunction(214, 'HasMagicEffect'), {
            "paramType1": "ptMagicEffect"
        }),
        ctdaFunction(215, 'GetDoorDefaultOpen'),
        opts(ctdaFunction(223, 'IsSpellTarget'), {
            "paramType1": "ptMagicItem"
        }),
        opts(ctdaFunction(224, 'GetIsPlayerBirthsign'), {}),
        ctdaFunction(225, 'GetPersuasionNumber'),
        ctdaFunction(227, 'HasVampireFed'),
        opts(ctdaFunction(228, 'GetIsClassDefault'), {
            "paramType1": "ptClass"
        }),
        ctdaFunction(229, 'GetClassDefaultMatch'),
        opts(ctdaFunction(230, 'GetInCellParam'), {
            "paramType1": "ptCell",
            "paramType2": "ptObjectReference"
        }),
        ctdaFunction(237, 'GetIsGhost'),
        ctdaFunction(242, 'GetUnconscious'),
        ctdaFunction(244, 'GetRestrained'),
        opts(ctdaFunction(246, 'GetIsUsedItem'), {
            "paramType1": "ptReferencableObject"
        }),
        opts(ctdaFunction(247, 'GetIsUsedItemType'), {
            "paramType1": "ptFormType"
        }),
        ctdaFunction(249, 'GetPCFame'),
        ctdaFunction(251, 'GetPCInfamy'),
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
        opts(ctdaFunction(278, 'IsOwner'), {}),
        opts(ctdaFunction(280, 'IsCellOwner'), {
            "paramType1": "ptCell"
        }),
        ctdaFunction(282, 'IsHorseStolen'),
        ctdaFunction(285, 'IsLeftUp'),
        ctdaFunction(286, 'IsSneaking'),
        ctdaFunction(287, 'IsRunning'),
        opts(ctdaFunction(288, 'GetFriendHit'), {
            "paramType1": "ptActor"
        }),
        ctdaFunction(289, 'IsInCombat'),
        ctdaFunction(300, 'IsInInterior'),
        ctdaFunction(305, 'GetInvestmentGold'),
        ctdaFunction(306, 'IsActorUsingATorch'),
        ctdaFunction(309, 'IsXBox'),
        opts(ctdaFunction(310, 'GetInWorldspace'), {
            "paramType1": "ptWorldspace"
        }),
        opts(ctdaFunction(312, 'GetPCMiscStat'), {
            "paramType1": "ptInteger"
        }),
        ctdaFunction(313, 'IsActorEvil'),
        ctdaFunction(314, 'IsActorAVictim'),
        ctdaFunction(315, 'GetTotalPersuasionNumber'),
        ctdaFunction(318, 'GetIdleDoneOnce'),
        ctdaFunction(320, 'GetNoRumors'),
        ctdaFunction(323, 'WhichServiceMenu'),
        ctdaFunction(327, 'IsRidingHorse'),
        ctdaFunction(329, 'IsTurnArrest'),
        ctdaFunction(332, 'IsInDangerousWater'),
        ctdaFunction(338, 'GetIgnoreFriendlyHits'),
        ctdaFunction(339, 'IsPlayersLastRiddenHorse'),
        ctdaFunction(353, 'IsActor'),
        ctdaFunction(354, 'IsEssential'),
        ctdaFunction(358, 'IsPlayerMovingIntoNewSpace'),
        ctdaFunction(361, 'GetTimeDead'),
        ctdaFunction(362, 'GetPlayerHasLastRiddenHorse'),
        ctdaFunction(365, 'GetPlayerInSEWorld'),
        opts(ctdaFunction(1107, 'IsAmmo,'), {
            "paramType1": "ptInteger"
        }),
        opts(ctdaFunction(1884, 'GetPCTrainingSessionsUsed'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2213, 'GetPackageOffersServices'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2214, 'GetPackageMustReachLocation'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2215, 'GetPackageMustComplete'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2216, 'GetPackageLockDoorsAtStart'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2217, 'GetPackageLockDoorsAtEnd'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2218, 'GetPackageLockDoorsAtLocation'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2219, 'GetPackageUnlockDoorsAtStart'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2220, 'GetPackageUnlockDoorsAtEnd'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2221, 'GetPackageUnlockDoorsAtLocation'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2222, 'GetPackageContinueIfPCNear'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2223, 'GetPackageOncePerDay'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2224, 'GetPackageSkipFalloutBehavior'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2225, 'GetPackageAlwaysRun'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2226, 'GetPackageAlwaysSneak'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2227, 'GetPackageAllowSwimming'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2228, 'GetPackageAllowFalls'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2229, 'GetPackageArmorUnequipped'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2230, 'GetPackageWeaponsUnequipped'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2231, 'GetPackageDefensiveCombat'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2232, 'GetPackageUseHorse'), {
            "paramType1": "ptPackage"
        }),
        opts(ctdaFunction(2233, 'GetPackageNoIdleAnims'), {
            "paramType1": "ptPackage"
        })
    ]);
};