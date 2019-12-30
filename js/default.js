$(document).ready(function() {
    NumberOfTurnsAtOnce = 1;
    (function($) {
        $.rand = function(arg) {
            if ($.isArray(arg)) {
                return arg[$.rand(arg.length)];
            } else if (typeof arg === "number") {
                return Math.floor(Math.random() * arg);
            } else {
                return 4; // chosen by fair dice roll
            }
        };
    })(jQuery);
    //Hide Fishing
    $('.Fishing').hide()

    function ShowItemsGained(ItemImgDirVar, AmountOfItem) {
        ww = $(window).width()
        wh = $(window).height()
        fl = getRandomArbitrary(0, ww - 50)
        ft = getRandomArbitrary(0, wh - 50)
        console.log('ShowItemsGained is Running')
        $('<img class="GainedItem" src="' + ItemImgDirVar + '">').appendTo('body').css({
            top: ft,
            left: fl
        }).animate({
            opacity: 0,
            top: "-=50",

        }, 3000, function() {
            $(this).remove()
        });
        $('<div class="ShowNumberOfItems">' + shortenNumber(AmountOfItem) + '</div>').appendTo('body').css({
            top: ft,
            left: fl + 50
        }).animate({
            opacity: 0,
            top: "-=50",

        }, 3000, function() {
            $(this).remove()
        });
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    RunningGatheringForest = false;
    RunningMiningUndgroundCity = false;
    RunningInitInterval = false;
    RunningBattleFarm = false;
    CurrentlyFighting = false;
    BuyIn = 50
    IntervalTimePoker = 1000;
    GainedItemFishingOcean9 = "none"
    GainedItemFishingOcean8 = "none"
    GainedItemFishingOcean7 = "none"
    GainedItemFishingOcean6 = "none"
    GainedItemFishingOcean5 = "none"
    GainedItemFishingOcean4 = "none"
    GainedItemFishingOcean3 = "none"
    GainedItemFishingOcean2 = "none"
    GainedItemFishingOcean1 = "none"

    function RotateFishingOcean(Fish) {
        //***RotateItemsGainedFarming(ItemGained)
        GainedItemFishingOcean9 = GainedItemFishingOcean8;
        GainedItemFishingOcean8 = GainedItemFishingOcean7;
        GainedItemFishingOcean7 = GainedItemFishingOcean6;
        GainedItemFishingOcean6 = GainedItemFishingOcean5;
        GainedItemFishingOcean5 = GainedItemFishingOcean4;
        GainedItemFishingOcean4 = GainedItemFishingOcean3;
        GainedItemFishingOcean3 = GainedItemFishingOcean2;
        GainedItemFishingOcean2 = GainedItemFishingOcean1;
        GainedItemFishingOcean1 = Fish;


    }
    VarFishing_RedMullet = 0;
    VarFishing_RedSnapper = 0;
    VarFishing_Salmon = 0;
    VarFishing_Sandfish = 0;
    VarFishing_Sardine = 0;
    VarFishing_ScorpionCarp = 0;
    VarFishing_SeaCucumber = 0;
    VarFishing_Seaweed = 0;
    VarFishing_Shad = 0;
    VarFishing_Shrimp = 0;
    VarFishing_Slimejack = 0;
    VarFishing_SmallmouthBass = 0;
    VarFishing_Snail = 0;
    VarFishing_SpookFish = 0;
    VarFishing_Squid = 0;
    VarFishing_Stonefish = 0;
    VarFishing_Sturgeon = 0;
    VarFishing_Sunfish = 0;
    VarFishing_SuperCucumber = 0;
    VarFishing_TigerTrout = 0;
    VarFishing_Tilapia = 0;
    VarFishing_Tuna = 0;
    VarFishing_VoidSalmon = 0;
    VarFishing_Walleye = 0;
    VarFishing_WhiteAlgae = 0;
    VarFishing_Woodskip = 0;
    VarFishing_Albacore = 0;
    VarFishing_Anchovy = 0;
    VarFishing_Angler = 0;
    VarFishing_Blobfish = 0;
    VarFishing_Bream = 0;
    VarFishing_Bullhead = 0;
    VarFishing_Carp = 0;
    VarFishing_Catfish = 0;
    VarFishing_Chub = 0;
    VarFishing_Clam = 0;
    VarFishing_Cockle = 0;
    VarFishing_Crab = 0;
    VarFishing_Crayfish = 0;
    VarFishing_Crimsonfish = 0;
    VarFishing_Dorado = 0;
    VarFishing_Eel = 0;
    VarFishing_Flounder = 0;
    VarFishing_Ghostfish = 0;
    VarFishing_Glacierfish = 0;
    VarFishing_GreenAlgae = 0;
    VarFishing_Halibut = 0;
    VarFishing_Herring = 0;
    VarFishing_IcePip = 0;
    VarFishing_LargemouthBass = 0;
    VarFishing_LavaEel = 0;
    VarFishing_Legend = 0;
    VarFishing_Lingcod = 0;
    VarFishing_Lobster = 0;
    VarFishing_MidnightCarp = 0;
    VarFishing_MidnightSquid = 0;
    VarFishing_Mussel = 0;
    VarFishing_MutantCarp = 0;
    VarFishing_Octopus = 0;
    VarFishing_Oyster = 0;
    VarFishing_Perch = 0;
    VarFishing_Periwinkle = 0;
    VarFishing_Pike = 0;
    VarFishing_Pufferfish = 0;
    VarFishing_Rain = 0;
    VarFishing_RainbowTrout = 0;
    VarFishingName_RedMullet = "Red Mullet"
    VarFishingName_RedSnapper = "Red Snapper"
    VarFishingName_Salmon = "Salmon"
    VarFishingName_Sandfish = "Sandfish"
    VarFishingName_Sardine = "Sardine"
    VarFishingName_ScorpionCarp = "Scorpion Carp"
    VarFishingName_SeaCucumber = "Sea Cucumber"
    VarFishingName_Seaweed = "Seaweed"
    VarFishingName_Shad = "Shad"
    VarFishingName_Shrimp = "Shrimp"
    VarFishingName_Slimejack = "Slimejack"
    VarFishingName_SmallmouthBass = "Smallmouth Bass"
    VarFishingName_Snail = "Snail"
    VarFishingName_SpookFish = "Spook Fish"
    VarFishingName_Squid = "Squid"
    VarFishingName_Stonefish = "Stonefish"
    VarFishingName_Sturgeon = "Sturgeon"
    VarFishingName_Sunfish = "Sunfish"
    VarFishingName_SuperCucumber = "Super Cucumber"
    VarFishingName_TigerTrout = "Tiger Trout"
    VarFishingName_Tilapia = "Tilapia"
    VarFishingName_Tuna = "Tuna"
    VarFishingName_VoidSalmon = "Void Salmon"
    VarFishingName_Walleye = "Walleye"
    VarFishingName_WhiteAlgae = "White Algae"
    VarFishingName_Woodskip = "Woodskip"
    VarFishingName_Albacore = "Albacore"
    VarFishingName_Anchovy = "Anchovy"
    VarFishingName_Angler = "Angler"
    VarFishingName_Blobfish = "Blobfish"
    VarFishingName_Bream = "Bream"
    VarFishingName_Bullhead = "Bullhead"
    VarFishingName_Carp = "Carp"
    VarFishingName_Catfish = "Catfish"
    VarFishingName_Chub = "Chub"
    VarFishingName_Clam = "Clam"
    VarFishingName_Cockle = "Cockle"
    VarFishingName_Crab = "Crab"
    VarFishingName_Crayfish = "Crayfish"
    VarFishingName_Crimsonfish = "Crimsonfish"
    VarFishingName_Dorado = "Dorado"
    VarFishingName_Eel = "Eel"
    VarFishingName_Flounder = "Flounder"
    VarFishingName_Ghostfish = "Ghostfish"
    VarFishingName_Glacierfish = "Glacierfish"
    VarFishingName_GreenAlgae = "Green Algae"
    VarFishingName_Halibut = "Halibut"
    VarFishingName_Herring = "Herring"
    VarFishingName_IcePip = "Ice Pip"
    VarFishingName_LargemouthBass = "Largemouth Bass"
    VarFishingName_LavaEel = "Lava Eel"
    VarFishingName_Legend = "Legend"
    VarFishingName_Lingcod = "Lingcod"
    VarFishingName_Lobster = "Lobster"
    VarFishingName_MidnightCarp = "Midnight Carp"
    VarFishingName_MidnightSquid = "Midnight Squid"
    VarFishingName_Mussel = "Mussel"
    VarFishingName_MutantCarp = "Mutant Carp"
    VarFishingName_Octopus = "Octopus"
    VarFishingName_Oyster = "Oyster"
    VarFishingName_Perch = "Perch"
    VarFishingName_Periwinkle = "Periwinkle"
    VarFishingName_Pike = "Pike"
    VarFishingName_Pufferfish = "Pufferfish"
    VarFishingName_Rain = "Rain"
    VarFishingName_RainbowTrout = "Rainbow Trout"
    VarFishingImg_RedMullet = "img/Fishing/Red_Mullet.png"
    VarFishingImg_RedSnapper = "img/Fishing/Red_Snapper.png"
    VarFishingImg_Salmon = "img/Fishing/Salmon.png"
    VarFishingImg_Sandfish = "img/Fishing/Sandfish.png"
    VarFishingImg_Sardine = "img/Fishing/Sardine.png"
    VarFishingImg_ScorpionCarp = "img/Fishing/Scorpion_Carp.png"
    VarFishingImg_SeaCucumber = "img/Fishing/Sea_Cucumber.png"
    VarFishingImg_Seaweed = "img/Fishing/Seaweed.png"
    VarFishingImg_Shad = "img/Fishing/Shad.png"
    VarFishingImg_Shrimp = "img/Fishing/Shrimp.png"
    VarFishingImg_Slimejack = "img/Fishing/Slimejack.png"
    VarFishingImg_SmallmouthBass = "img/Fishing/Smallmouth_Bass.png"
    VarFishingImg_Snail = "img/Fishing/Snail.png"
    VarFishingImg_SpookFish = "img/Fishing/Spook_Fish.png"
    VarFishingImg_Squid = "img/Fishing/Squid.png"
    VarFishingImg_Stonefish = "img/Fishing/Stonefish.png"
    VarFishingImg_Sturgeon = "img/Fishing/Sturgeon.png"
    VarFishingImg_Sunfish = "img/Fishing/Sunfish.png"
    VarFishingImg_SuperCucumber = "img/Fishing/Super_Cucumber.png"
    VarFishingImg_TigerTrout = "img/Fishing/Tiger_Trout.png"
    VarFishingImg_Tilapia = "img/Fishing/Tilapia.png"
    VarFishingImg_Tuna = "img/Fishing/Tuna.png"
    VarFishingImg_VoidSalmon = "img/Fishing/Void_Salmon.png"
    VarFishingImg_Walleye = "img/Fishing/Walleye.png"
    VarFishingImg_WhiteAlgae = "img/Fishing/White_Algae.png"
    VarFishingImg_Woodskip = "img/Fishing/Woodskip.png"
    VarFishingImg_Albacore = "img/Fishing/Albacore.png"
    VarFishingImg_Anchovy = "img/Fishing/Anchovy.png"
    VarFishingImg_Angler = "img/Fishing/Angler.png"
    VarFishingImg_Blobfish = "img/Fishing/Blobfish.png"
    VarFishingImg_Bream = "img/Fishing/Bream.png"
    VarFishingImg_Bullhead = "img/Fishing/Bullhead.png"
    VarFishingImg_Carp = "img/Fishing/Carp.png"
    VarFishingImg_Catfish = "img/Fishing/Catfish.png"
    VarFishingImg_Chub = "img/Fishing/Chub.png"
    VarFishingImg_Clam = "img/Fishing/Clam.png"
    VarFishingImg_Cockle = "img/Fishing/Cockle.png"
    VarFishingImg_Crab = "img/Fishing/Crab.png"
    VarFishingImg_Crayfish = "img/Fishing/Crayfish.png"
    VarFishingImg_Crimsonfish = "img/Fishing/Crimsonfish.png"
    VarFishingImg_Dorado = "img/Fishing/Dorado.png"
    VarFishingImg_Eel = "img/Fishing/Eel.png"
    VarFishingImg_Flounder = "img/Fishing/Flounder.png"
    VarFishingImg_Ghostfish = "img/Fishing/Ghostfish.png"
    VarFishingImg_Glacierfish = "img/Fishing/Glacierfish.png"
    VarFishingImg_GreenAlgae = "img/Fishing/Green_Algae.png"
    VarFishingImg_Halibut = "img/Fishing/Halibut.png"
    VarFishingImg_Herring = "img/Fishing/Herring.png"
    VarFishingImg_IcePip = "img/Fishing/Ice_Pip.png"
    VarFishingImg_LargemouthBass = "img/Fishing/Largemouth_Bass.png"
    VarFishingImg_LavaEel = "img/Fishing/Lava_Eel.png"
    VarFishingImg_Legend = "img/Fishing/Legend.png"
    VarFishingImg_Lingcod = "img/Fishing/Lingcod.png"
    VarFishingImg_Lobster = "img/Fishing/Lobster.png"
    VarFishingImg_MidnightCarp = "img/Fishing/Midnight_Carp.png"
    VarFishingImg_MidnightSquid = "img/Fishing/Midnight_Squid.png"
    VarFishingImg_Mussel = "img/Fishing/Mussel.png"
    VarFishingImg_MutantCarp = "img/Fishing/Mutant_Carp.png"
    VarFishingImg_Octopus = "img/Fishing/Octopus.png"
    VarFishingImg_Oyster = "img/Fishing/Oyster.png"
    VarFishingImg_Perch = "img/Fishing/Perch.png"
    VarFishingImg_Periwinkle = "img/Fishing/Periwinkle.png"
    VarFishingImg_Pike = "img/Fishing/Pike.png"
    VarFishingImg_Pufferfish = "img/Fishing/Pufferfish.png"
    VarFishingImg_Rain = "img/Fishing/Rain.png"
    VarFishingImg_RainbowTrout = "img/Fishing/Rainbow_Trout.png"
    VarFishingVariableArray_RedMullet = ["VarFishingName_RedMullet", "VarFishingImg_RedMullet"]
    VarFishingVariableArray_RedSnapper = ["VarFishingName_RedSnapper", "VarFishingImg_RedSnapper"]
    VarFishingVariableArray_Salmon = ["VarFishingName_Salmon", "VarFishingImg_Salmon"]
    VarFishingVariableArray_Sandfish = ["VarFishingName_Sandfish", "VarFishingImg_Sandfish"]
    VarFishingVariableArray_Sardine = ["VarFishingName_Sardine", "VarFishingImg_Sardine"]
    VarFishingVariableArray_ScorpionCarp = ["VarFishingName_ScorpionCarp", "VarFishingImg_ScorpionCarp"]
    VarFishingVariableArray_SeaCucumber = ["VarFishingName_SeaCucumber", "VarFishingImg_SeaCucumber"]
    VarFishingVariableArray_Seaweed = ["VarFishingName_Seaweed", "VarFishingImg_Seaweed"]
    VarFishingVariableArray_Shad = ["VarFishingName_Shad", "VarFishingImg_Shad"]
    VarFishingVariableArray_Shrimp = ["VarFishingName_Shrimp", "VarFishingImg_Shrimp"]
    VarFishingVariableArray_Slimejack = ["VarFishingName_Slimejack", "VarFishingImg_Slimejack"]
    VarFishingVariableArray_SmallmouthBass = ["VarFishingName_SmallmouthBass", "VarFishingImg_SmallmouthBass"]
    VarFishingVariableArray_Snail = ["VarFishingName_Snail", "VarFishingImg_Snail"]
    VarFishingVariableArray_SpookFish = ["VarFishingName_SpookFish", "VarFishingImg_SpookFish"]
    VarFishingVariableArray_Squid = ["VarFishingName_Squid", "VarFishingImg_Squid"]
    VarFishingVariableArray_Stonefish = ["VarFishingName_Stonefish", "VarFishingImg_Stonefish"]
    VarFishingVariableArray_Sturgeon = ["VarFishingName_Sturgeon", "VarFishingImg_Sturgeon"]
    VarFishingVariableArray_Sunfish = ["VarFishingName_Sunfish", "VarFishingImg_Sunfish"]
    VarFishingVariableArray_SuperCucumber = ["VarFishingName_SuperCucumber", "VarFishingImg_SuperCucumber"]
    VarFishingVariableArray_TigerTrout = ["VarFishingName_TigerTrout", "VarFishingImg_TigerTrout"]
    VarFishingVariableArray_Tilapia = ["VarFishingName_Tilapia", "VarFishingImg_Tilapia"]
    VarFishingVariableArray_Tuna = ["VarFishingName_Tuna", "VarFishingImg_Tuna"]
    VarFishingVariableArray_VoidSalmon = ["VarFishingName_VoidSalmon", "VarFishingImg_VoidSalmon"]
    VarFishingVariableArray_Walleye = ["VarFishingName_Walleye", "VarFishingImg_Walleye"]
    VarFishingVariableArray_WhiteAlgae = ["VarFishingName_WhiteAlgae", "VarFishingImg_WhiteAlgae"]
    VarFishingVariableArray_Woodskip = ["VarFishingName_Woodskip", "VarFishingImg_Woodskip"]
    VarFishingVariableArray_Albacore = ["VarFishingName_Albacore", "VarFishingImg_Albacore"]
    VarFishingVariableArray_Anchovy = ["VarFishingName_Anchovy", "VarFishingImg_Anchovy"]
    VarFishingVariableArray_Angler = ["VarFishingName_Angler", "VarFishingImg_Angler"]
    VarFishingVariableArray_Blobfish = ["VarFishingName_Blobfish", "VarFishingImg_Blobfish"]
    VarFishingVariableArray_Bream = ["VarFishingName_Bream", "VarFishingImg_Bream"]
    VarFishingVariableArray_Bullhead = ["VarFishingName_Bullhead", "VarFishingImg_Bullhead"]
    VarFishingVariableArray_Carp = ["VarFishingName_Carp", "VarFishingImg_Carp"]
    VarFishingVariableArray_Catfish = ["VarFishingName_Catfish", "VarFishingImg_Catfish"]
    VarFishingVariableArray_Chub = ["VarFishingName_Chub", "VarFishingImg_Chub"]
    VarFishingVariableArray_Clam = ["VarFishingName_Clam", "VarFishingImg_Clam"]
    VarFishingVariableArray_Cockle = ["VarFishingName_Cockle", "VarFishingImg_Cockle"]
    VarFishingVariableArray_Crab = ["VarFishingName_Crab", "VarFishingImg_Crab"]
    VarFishingVariableArray_Crayfish = ["VarFishingName_Crayfish", "VarFishingImg_Crayfish"]
    VarFishingVariableArray_Crimsonfish = ["VarFishingName_Crimsonfish", "VarFishingImg_Crimsonfish"]
    VarFishingVariableArray_Dorado = ["VarFishingName_Dorado", "VarFishingImg_Dorado"]
    VarFishingVariableArray_Eel = ["VarFishingName_Eel", "VarFishingImg_Eel"]
    VarFishingVariableArray_Flounder = ["VarFishingName_Flounder", "VarFishingImg_Flounder"]
    VarFishingVariableArray_Ghostfish = ["VarFishingName_Ghostfish", "VarFishingImg_Ghostfish"]
    VarFishingVariableArray_Glacierfish = ["VarFishingName_Glacierfish", "VarFishingImg_Glacierfish"]
    VarFishingVariableArray_GreenAlgae = ["VarFishingName_GreenAlgae", "VarFishingImg_GreenAlgae"]
    VarFishingVariableArray_Halibut = ["VarFishingName_Halibut", "VarFishingImg_Halibut"]
    VarFishingVariableArray_Herring = ["VarFishingName_Herring", "VarFishingImg_Herring"]
    VarFishingVariableArray_IcePip = ["VarFishingName_IcePip", "VarFishingImg_IcePip"]
    VarFishingVariableArray_LargemouthBass = ["VarFishingName_LargemouthBass", "VarFishingImg_LargemouthBass"]
    VarFishingVariableArray_LavaEel = ["VarFishingName_LavaEel", "VarFishingImg_LavaEel"]
    VarFishingVariableArray_Legend = ["VarFishingName_Legend", "VarFishingImg_Legend"]
    VarFishingVariableArray_Lingcod = ["VarFishingName_Lingcod", "VarFishingImg_Lingcod"]
    VarFishingVariableArray_Lobster = ["VarFishingName_Lobster", "VarFishingImg_Lobster"]
    VarFishingVariableArray_MidnightCarp = ["VarFishingName_MidnightCarp", "VarFishingImg_MidnightCarp"]
    VarFishingVariableArray_MidnightSquid = ["VarFishingName_MidnightSquid", "VarFishingImg_MidnightSquid"]
    VarFishingVariableArray_Mussel = ["VarFishingName_Mussel", "VarFishingImg_Mussel"]
    VarFishingVariableArray_MutantCarp = ["VarFishingName_MutantCarp", "VarFishingImg_MutantCarp"]
    VarFishingVariableArray_Octopus = ["VarFishingName_Octopus", "VarFishingImg_Octopus"]
    VarFishingVariableArray_Oyster = ["VarFishingName_Oyster", "VarFishingImg_Oyster"]
    VarFishingVariableArray_Perch = ["VarFishingName_Perch", "VarFishingImg_Perch"]
    VarFishingVariableArray_Periwinkle = ["VarFishingName_Periwinkle", "VarFishingImg_Periwinkle"]
    VarFishingVariableArray_Pike = ["VarFishingName_Pike", "VarFishingImg_Pike"]
    VarFishingVariableArray_Pufferfish = ["VarFishingName_Pufferfish", "VarFishingImg_Pufferfish"]
    VarFishingVariableArray_Rain = ["VarFishingName_Rain", "VarFishingImg_Rain"]
    VarFishingVariableArray_RainbowTrout = ["VarFishingName_RainbowTrout", "VarFishingImg_RainbowTrout"]
    FishingArray = [VarFishingVariableArray_RedMullet, VarFishingVariableArray_RedSnapper, VarFishingVariableArray_Salmon, VarFishingVariableArray_Sandfish, VarFishingVariableArray_Sardine, VarFishingVariableArray_ScorpionCarp, VarFishingVariableArray_SeaCucumber, VarFishingVariableArray_Seaweed, VarFishingVariableArray_Shad, VarFishingVariableArray_Shrimp, VarFishingVariableArray_Slimejack, VarFishingVariableArray_SmallmouthBass, VarFishingVariableArray_Snail, VarFishingVariableArray_SpookFish, VarFishingVariableArray_Squid, VarFishingVariableArray_Stonefish, VarFishingVariableArray_Sturgeon, VarFishingVariableArray_Sunfish, VarFishingVariableArray_SuperCucumber, VarFishingVariableArray_TigerTrout, VarFishingVariableArray_Tilapia, VarFishingVariableArray_Tuna, VarFishingVariableArray_VoidSalmon, VarFishingVariableArray_Walleye, VarFishingVariableArray_WhiteAlgae, VarFishingVariableArray_Woodskip, VarFishingVariableArray_Albacore, VarFishingVariableArray_Anchovy, VarFishingVariableArray_Angler, VarFishingVariableArray_Blobfish, VarFishingVariableArray_Bream, VarFishingVariableArray_Bullhead, VarFishingVariableArray_Carp, VarFishingVariableArray_Catfish, VarFishingVariableArray_Chub, VarFishingVariableArray_Clam, VarFishingVariableArray_Cockle, VarFishingVariableArray_Crab, VarFishingVariableArray_Crayfish, VarFishingVariableArray_Crimsonfish, VarFishingVariableArray_Dorado, VarFishingVariableArray_Eel, VarFishingVariableArray_Flounder, VarFishingVariableArray_Ghostfish, VarFishingVariableArray_Glacierfish, VarFishingVariableArray_GreenAlgae, VarFishingVariableArray_Halibut, VarFishingVariableArray_Herring, VarFishingVariableArray_IcePip, VarFishingVariableArray_LargemouthBass, VarFishingVariableArray_LavaEel, VarFishingVariableArray_Legend, VarFishingVariableArray_Lingcod, VarFishingVariableArray_Lobster, VarFishingVariableArray_MidnightCarp, VarFishingVariableArray_MidnightSquid, VarFishingVariableArray_Mussel, VarFishingVariableArray_MutantCarp, VarFishingVariableArray_Octopus, VarFishingVariableArray_Oyster, VarFishingVariableArray_Perch, VarFishingVariableArray_Periwinkle, VarFishingVariableArray_Pike, VarFishingVariableArray_Pufferfish, VarFishingVariableArray_Rain, VarFishingVariableArray_RainbowTrout]
    console.log(jQuery.rand(FishingArray))
    $('.Water').attr('src', 'img/Fishing/Ocean.png')
    IntervalTimeFishingOcean = 100;
    setInterval(function() {
        WaterPos = $('.WaterHolder').offset()
        CaughtFish = jQuery.rand(FishingArray)
        WaterW = $('.WaterHolder').width();
        WaterH = $('.WaterHolder').height();
        fl = getRandomArbitrary(WaterPos.left, WaterPos.left + WaterW - 50)
        ft = getRandomArbitrary(WaterPos.top, WaterPos.top + WaterH - 50)
        RotateFishingOcean('<img class="FishImg" src="' + window[CaughtFish[1]] + '">' + window[CaughtFish[0]])
        $('.Fish_1').html(GainedItemFishingOcean1)
        $('.Fish_2').html(GainedItemFishingOcean2)
        $('.Fish_3').html(GainedItemFishingOcean3)
        $('.Fish_4').html(GainedItemFishingOcean4)
        $('.Fish_5').html(GainedItemFishingOcean5)
        $('.Fish_6').html(GainedItemFishingOcean6)
        $('.Fish_7').html(GainedItemFishingOcean7)
        $('.Fish_8').html(GainedItemFishingOcean8)
        $('.Fish_9').html(GainedItemFishingOcean9)

        $('<img class="Fish Caught" src="' + window[CaughtFish[1]] + '">').appendTo('.WaterHolder').css({
            top: ft,
            left: fl
        }).animate({
            opacity: 0,
            top: "-=50",

        }, 3000, function() {
            $(this).remove()
        });
        $()
    }, IntervalTimeFishingOcean)


    function Poker() {
        EarnAmount_9 = 0;
        EarnAmount_8 = 0;
        EarnAmount_7 = 0;
        EarnAmount_6 = 0;
        EarnAmount_5 = 0;
        EarnAmount_4 = 0;
        EarnAmount_3 = 0;
        EarnAmount_2 = 0;
        EarnAmount_1 = 0;

        GamblingCard1_9 = 'NoCardaaa'
        GamblingCard2_9 = 'NoCardaaa'
        GamblingCard1_8 = 'NoCardaaa'
        GamblingCard2_8 = 'NoCardaaa'
        GamblingCard1_7 = 'NoCardaaa'
        GamblingCard2_7 = 'NoCardaaa'
        GamblingCard1_6 = 'NoCardaaa'
        GamblingCard2_6 = 'NoCardaaa'
        GamblingCard1_5 = 'NoCardaaa'
        GamblingCard2_5 = 'NoCardaaa'
        GamblingCard1_4 = 'NoCardaaa'
        GamblingCard2_4 = 'NoCardaaa'
        GamblingCard1_3 = 'NoCardaaa'
        GamblingCard2_3 = 'NoCardaaa'
        GamblingCard1_2 = 'NoCardaaa'
        GamblingCard2_2 = 'NoCardaaa'
        GamblingCard1_1 = 'NoCardaaa'
        GamblingCard2_1 = 'NoCardaaa'

        function RotateGamblingPokerCards(Card1, Card2, EarnAmount) {
            //***RotateItemsGainedFarming(ItemGained)
            GamblingCard1_9 = GamblingCard1_8;
            GamblingCard1_8 = GamblingCard1_7;
            GamblingCard1_7 = GamblingCard1_6;
            GamblingCard1_6 = GamblingCard1_5;
            GamblingCard1_5 = GamblingCard1_4;
            GamblingCard1_4 = GamblingCard1_3;
            GamblingCard1_3 = GamblingCard1_2;
            GamblingCard1_2 = GamblingCard1_1;
            GamblingCard1_1 = Card1;

            GamblingCard2_9 = GamblingCard2_8;
            GamblingCard2_8 = GamblingCard2_7;
            GamblingCard2_7 = GamblingCard2_6;
            GamblingCard2_6 = GamblingCard2_5;
            GamblingCard2_5 = GamblingCard2_4;
            GamblingCard2_4 = GamblingCard2_3;
            GamblingCard2_3 = GamblingCard2_2;
            GamblingCard2_2 = GamblingCard2_1;
            GamblingCard2_1 = Card2;

            EarnAmount_9 = EarnAmount_8;
            EarnAmount_8 = EarnAmount_7;
            EarnAmount_7 = EarnAmount_6;
            EarnAmount_6 = EarnAmount_5;
            EarnAmount_5 = EarnAmount_4;
            EarnAmount_4 = EarnAmount_3;
            EarnAmount_3 = EarnAmount_2;
            EarnAmount_2 = EarnAmount_1;
            EarnAmount_1 = EarnAmount;
        }
        CurrencyZenny = 5000;
        setInterval(function() {
            PairOfa = 0;
            PairOfk = 0;
            PairOfq = 0;
            PairOfj = 0;
            PairOf10 = 0;
            PairOf9 = 0;
            PairOf8 = 0;
            PairOf7 = 0;
            PairOf6 = 0;
            PairOf5 = 0;
            PairOf4 = 0;
            PairOf3 = 0;
            PairOf2 = 0;
            AK = 0;
            AQ = 0;
            EarnAmount = 0;
            Deck = ["asaaa", "acaaa", "adaaa", "ahaaa",
                "ksaaa", "kcaaa", "kdaaa", "khaaa",
                "qsaaa", "qcaaa", "qdaaa", "qhaaa",
                "jsaaa", "jcaaa", "jdaaa", "jhaaa",
                "10saaa", "10caaa", "10daaa", "10haaa",
                "9saaa", "9caaa", "9daaa", "9haaa",
                "8saaa", "8caaa", "8daaa", "8haaa",
                "7saaa", "7caaa", "7daaa", "7haaa",
                "6saaa", "6caaa", "6daaa", "6haaa",
                "5saaa", "5caaa", "5daaa", "5haaa",
                "4saaa", "4caaa", "4daaa", "4haaa",
                "3saaa", "3caaa", "3daaa", "3haaa",
                "2saaa", "2caaa", "2daaa", "2haaa"
            ]
            var Card1 = jQuery.rand(Deck);
            var Card2 = jQuery.rand(Deck);
            if (Card1 == Card2) {
                var Card2 = jQuery.rand(Deck);
            }
            if (Card1 == Card2) {
                var Card2 = jQuery.rand(Deck);
            }
            if (Card1 == Card2) {
                var Card2 = jQuery.rand(Deck);
            }
            if (Card1 == Card2) {
                var Card2 = jQuery.rand(Deck);
            }


            Card1N = Card1.slice(0, -4);
            Card2N = Card2.slice(0, -4);
            console.log(Card1N)
            PairOfa = 50 * BuyIn;
            PairOfk = 42 * BuyIn;
            PairOfq = 35 * BuyIn;
            PairOfj = 20 * BuyIn;
            PairOf10 = 15 * BuyIn;
            PairOf9 = 12 * BuyIn;
            PairOf8 = 9 * BuyIn;
            PairOf7 = 7 * BuyIn;
            PairOf6 = 6 * BuyIn;
            PairOf5 = 5 * BuyIn;
            PairOf4 = 4 * BuyIn;
            PairOf3 = 3 * BuyIn;
            PairOf2 = 2 * BuyIn;
            AK = 30 * BuyIn;
            AQ = 23 * BuyIn;
            if (Card1N == "a" && Card2N == "k") {
                EarnAmount = AK;
            }
            if (Card1N == "k" && Card2N == "a") {
                EarnAmount = AK;
            }
            if (Card1N == "a" && Card2N == "q") {
                EarnAmount = AQ;
            }
            if (Card1N == "q" && Card2N == "a") {
                EarnAmount = AQ;
            }
            if (Card1N == "a" && Card2N == "a") {
                EarnAmount = PairOfa;
            }
            if (Card1N == "k" && Card2N == "k") {
                EarnAmount = PairOfk;
            }
            if (Card1N == "q" && Card2N == "q") {
                EarnAmount = PairOfq;
            }
            if (Card1N == "j" && Card2N == "j") {
                EarnAmount = PairOfj;
            }
            if (Card1N == "10" && Card2N == "10") {
                EarnAmount = PairOf10;
            }
            if (Card1N == "9" && Card2N == "9") {
                EarnAmount = PairOf9;
            }
            if (Card1N == "8" && Card2N == "8") {
                EarnAmount = PairOf8;
            }
            if (Card1N == "7" && Card2N == "7") {
                EarnAmount = PairOf7;
            }
            if (Card1N == "6" && Card2N == "6") {
                EarnAmount = PairOf6;
            }
            if (Card1N == "5" && Card2N == "5") {
                EarnAmount = PairOf5;
            }
            if (Card1N == "4" && Card2N == "4") {
                EarnAmount = PairOf4;
            }
            if (Card1N == "3" && Card2N == "3") {
                EarnAmount = PairOf3;
            }
            if (Card1N == "2" && Card2N == "2") {
                EarnAmount = PairOf2;
            }
            CurrencyZenny -= BuyIn;
            CurrencyZenny += EarnAmount
            $(".ZennyTotal").html(CurrencyZenny + ' Zenny')
            RotateGamblingPokerCards(Card1, Card2, EarnAmount)
            $('.Hand9').find(".Card1").attr("src", "img/" + GamblingCard1_9 + ".jpg")
            $('.Hand9').find(".Card2").attr("src", "img/" + GamblingCard2_9 + ".jpg")
            $('.HandStats.Hand9').html(EarnAmount_9)
            $('.Hand8').find(".Card1").attr("src", "img/" + GamblingCard1_8 + ".jpg")
            $('.Hand8').find(".Card2").attr("src", "img/" + GamblingCard2_8 + ".jpg")
            $('.HandStats.Hand8').html(EarnAmount_8)
            $('.Hand7').find(".Card1").attr("src", "img/" + GamblingCard1_7 + ".jpg")
            $('.Hand7').find(".Card2").attr("src", "img/" + GamblingCard2_7 + ".jpg")
            $('.HandStats.Hand7').html(EarnAmount_7)
            $('.Hand6').find(".Card1").attr("src", "img/" + GamblingCard1_6 + ".jpg")
            $('.Hand6').find(".Card2").attr("src", "img/" + GamblingCard2_6 + ".jpg")
            $('.HandStats.Hand6').html(EarnAmount_6)

            $('.Hand5').find(".Card1").attr("src", "img/" + GamblingCard1_5 + ".jpg")
            $('.Hand5').find(".Card2").attr("src", "img/" + GamblingCard2_5 + ".jpg")
            $('.HandStats.Hand5').html(EarnAmount_5)
            $('.Hand4').find(".Card1").attr("src", "img/" + GamblingCard1_4 + ".jpg")
            $('.Hand4').find(".Card2").attr("src", "img/" + GamblingCard2_4 + ".jpg")
            $('.HandStats.Hand4').html(EarnAmount_4)
            $('.Hand3').find(".Card1").attr("src", "img/" + GamblingCard1_3 + ".jpg")
            $('.Hand3').find(".Card2").attr("src", "img/" + GamblingCard2_3 + ".jpg")
            $('.HandStats.Hand3').html(EarnAmount_3)
            $('.Hand2').find(".Card1").attr("src", "img/" + GamblingCard1_2 + ".jpg")
            $('.Hand2').find(".Card2").attr("src", "img/" + GamblingCard2_2 + ".jpg")
            $('.HandStats.Hand2').html(EarnAmount_2)
            $('.Hand1').find(".Card1").attr("src", "img/" + GamblingCard1_1 + ".jpg")
            $('.Hand1').find(".Card2").attr("src", "img/" + GamblingCard2_1 + ".jpg")
            $('.HandStats.Hand1').html(EarnAmount_1)
        }, IntervalTimePoker)
    }
    /*Game Created 12/22/2019*/
    /*
    Rebirth
    Skill Points 
    On Rebirth Unlock Skill Points and reset variables
    Use Skill Points to Unlock Wooden Pickaxe and Mining Area
    Use Skill Points to buy bonus Haste Potions Upon Rebirth

    Todo Created 1:35PM 12/25/2019
        Make it so that Mining Does Nothing without Wooden Pickaxe and Underground City Unlocked
        Make it so skill points can purchase Haste Potions


    Todo Created 11:48PM 12/24/2019

        Setup 
 + UnlockBattle            When in Battle show Image of Monster Currently Fighting 
            Show Stats
                Player Stats
                Enemy Stats
            Show Recent Loot Drops
            Create Variables For setInterval Time
            Add New Battle Options to Store Menu
        Add Animal Husbandry to Main Menu
            Add Animals to Variables
            Add Animal Products to Variables
        Come up with Mineral Item Prices
        Add Equipment Names From Final Fantasy, Dragon Quest, 
        Add Guns to Equipment
        Add Lasers to Mining Equipment
        Add Skill Point Options to Menu that use points gained from areas you level up in
        Rename Variables and Functions to longer names that describe what they do
        Add Prefix to Variables so you can just type in for example Minerals and see a list of Minerals
        Add Skill Point Variables such as MiningSkillPoints or SkillPointsMining or SkillPointsFarming
        Music
            *Finished Bandcamp Alais Clay
            *Finished Bandcamp Steve Grant
            *Finished Bandcamp Truthseekah
            *Finished Bandcamp Illuminati Congo
            Itom Lab
            Linkin Park
            Watsky
            Nursehella
            Spirit of Truth
            Illuminati Congo
            Itom Lab
            Linkin Park
            Tupac Shakur
            Guns n Roses
            Elton John
            Janis Joplin
            The Doors
            Neil Young
            Eminem
            Ray Charles
            Jimi Hendrix
            The Rolling Stones
            Bob Dylan
            The Beatles            
            The Who
            Bruce Springsteen
            U2
            Stevie Wonder
            Led Zeppelin
            Bob Marley

        
    */
    RebirthInit()
    FunctionInit();

    function FunctionIntervalSecondPanel() {
        //***FunctionIntervalSecondPanel()
        if (RunningSecondPanel == true) {
            clearInterval(IntervalSecondPanel);
        }
        IntervalSecondPanel = setInterval(function() {
            console.log('running interval second panel')
            RunningSecondPanel = true
            SecondPanel();
        }, IntervalTimeSecondPanel)
    }

    function RebirthInit() {
        Options = ["MainLevel", "Battle", "Mining", "Farming", "TreeCutting", "Gathering", "Digging", "Forging", "Sewing", "Apothecary", "Alchemy", "Jewellery", "AnimalHusbandry"];
        UnlockedList = ["Farming", "Music", "Forest", "Gathering", "Mining", "Battle", "Underground City", "Farm", "Slime Area"]
        IntervalNames = ["BattleFarm", "MiningUndergroundCity", "GatheringForest"];
        var i = 0;
        while (i < Options.length) {
            s = Options[i]

            window["ExpTNL" + s] = 10;

            i++
        }
        i = 0;
        while (i < Options.length) {
            o = Options[i];
            window["SkillPointsRebirth" + o] = 0;
            i++
        }
        SkillPointsRebirthMainLevel = 2500;
        VarItemsAmount_PhoenixDownRebirth = 10;
        //***Locked Variables
        //***Lock Farming until unlocked by rebirth skill point purchase
        i = 0;
        while (i < UnlockedList.length) {
            o = UnlockedList[i];
            os = o.replace(/\s/g, '');
            window[os + "Unlocked"] = false
            window["Unlock" + os] = "Unlock " + o
            window["Name" + os] = "Locked: " + o


            i++
        }
    }; //Do not Place Inside FunctionInit
    function Rebirth() {
        //***Rebirth()
        CurrentlyFighting = false;
        i = 0;
        while (i < UnlockedList.length) {
            o = UnlockedList[i];
            os = o.replace(/\s/g, '');
            if (window[o + "Unlocked"] == true) {
                window["Name" + os] = o;
                window["Unlock" + os] = o + " Unlocked"
            }


            i++
        }
        i = 0;
        while (i < Options.length) {
            o = Options[i];
            window["SkillPointsRebirth" + o] += Math.ceil(window["SkillPoints" + o]);
            i++
        }
    }

    function FunctionInit() {
        //***FunctionInit()

        ClearIntervals();
        FunctionCenterStage();
        OnWindowResize()
        GetSetName();
        FunctionInitVariables();
        MainInfo();
        Menu();
        MainMenu();
        FunctionSlider();
        IntervalSecondPanel = setInterval(function() {
            SecondPanel();
        }, IntervalTimeSecondPanel)
        RunningInitInterval = true;
        IntervalFunctionInit = setInterval(function() {
            MainInfo();
            FunctionPotionsHaste();
            if (StatsHealthCurrent > 0) {
                StatusAliveOrDead = "Alive"
            } else {
                StatusAliveOrDead = "Dead"
                if (VarItemsAmount_PhoenixDown > 0) {
                    VarItemsAmount_PhoenixDown -= 1
                    StatsHealthCurrent = StatsHealth
                    StatusAliveOrDead = "Alive"
                }
            }
            i = 0;
            while (i < Options.length) {
                o = Options[i];
                window["ItemMultiplier" + o] = getRandomInt(window["ItemMultiplier" + o + "Min"], window["ItemMultiplier" + o + "Max"]);
                i++
            }
            FunctionLevelUp();
        }, 50);

        $('.Slider').hide();
    }

    function ClearIntervals() {
        //***ClearIntervals
        if (RunningBattleFarm == true) {
            clearInterval(IntervalBattleFarm)
            RunningBattleFarm = false
        }
        if (RunningGatheringForest == true) {
            clearInterval(IntervalGatheringForest)
            RunningGatheringForest = false
        }
        if (RunningMiningUndgroundCity == true) {
            clearInterval(IntervalMiningUndergroundCity)
            RunningMiningUndgroundCity = false
        }
        if (RunningInitInterval == true) {
            clearInterval(IntervalFunctionInit)
            RunningInitInterval = false
        }
    }

    function FunctionSlider() {
        //***FunctionSlider()
        $("#rangeInput").on("input change", function() {
            updateTextInput($("#rangeInput").val());
        });

        $("#rangeInput").val(0);
        FunctionSelectBuySellOrUse("Buy");
        $("#rangeInput").trigger("change");

        function updateTextInput(val) {
            if (Buy == true) {
                $("#SellOrBuy").html("Buy: " + val);
            }
            if (Sell == true) {
                $("#SellOrBuy").html("Sell: " + val);
            }
            if (Use == true) {
                $("#SellOrBuy").html("Use: " + val);
            }
        }
    }

    function FunctionLevelUp() {
        //***FunctionLevelUp()
        if (StatsHealthCurrent > 0) {
            var i = 0;
            while (i < Options.length) {
                s = Options[i]
                if (window["Exp" + s] >= window["ExpTNL" + s]) {
                    window["Level" + s] += 1;
                    window["SkillPoints" + s] += 1 + window["SkillPoints" + s] / 5;
                    window["Exp" + s] -= window["ExpTNL" + s];
                    window["ExpTNL" + s] = window["ExpTNL" + s] * 1.2;
                }
                i++
            }


        }

    }

    function FunctionSelectBuySellOrUse(which) {
        //***FunctionSelectBuySellOrUse(which)
        Buy = false;
        Sell = false;
        Use = false;
        if (which == "Buy") {
            Buy = true;
        }
        if (which == "Sell") {
            Sell = true;
        }
        if (which == "Use") {
            Use = true;
        }
    }

    function FunctionInitVariables() {
        //***FunctionInitVariables()
        PotionsHasteInUseNow = false;
        //***IntervalTimes

        IntervalTimeSecondPanel = 50;
        IntervalTimeGatheringForest = 5000;
        IntervalTimeMiningUndergroundCity = 5000;
        IntervalTimeBattleFarm = 3000;
        RunningSecondPanel = false;

        while (v < IntervalNames.length) {
            o = IntervalNames[v];
            window["Running" + o] = false;
            v++
        }
        //***Haste Speed
        HasteLvL1Speed = 1.5;
        //***Haste Set Speed


        i = 1;

        while (i <= 5) {
            v = 0;
            window["HasteLvL" + i + "Speed"] = HasteLvL1Speed * i;
            while (v < IntervalNames.length) {
                o = IntervalNames[v];
                window["IntervalTime" + o + "HasteLvL" + i] = window["IntervalTime" + o] / window["HasteLvL" + i + "Speed"];
                console.log(window["IntervalTime" + o + "HasteLvL" + i])
                v++
            }
            i++
        }

        Buy = false;
        Sell = false;
        Use = false;
        //***Main Level Stats
        StatsHealth = 200;
        StatsHealthCurrent = 200;
        StatsMP = 25;
        PlayerDamage = 5
        NewItemImgBeg = ""
        NewItemImgEnd = ""

        NumOfOptions = 13;
        console.log('Running')
        var i = 0;
        while (i < Options.length) {
            s = Options[i]
            window["Level" + s] = 1;
            window["Exp" + s] = 0;
            window["ExpTNL" + s] = 10;
            window["SkillPoints" + s] = 0;
            window["ItemMultiplier" + s] = 1
            window["ItemMultiplier" + s + "Min"] = 1
            window["ItemMultiplier" + s + "Max"] = 10
            var v = 1;
            while (v <= 9) {
                window["GainedItem" + s + v] = NewItemImgBeg + "none" + NewItemImgEnd
                v++
            }
            i++
        }

        //***Currency Starting Variables
        Rupees = 0;
        //***Variables Skill Points

        //***GainedItem Variables

        //***Item Multiplier is Set by function of min and max

        //***Minerals and Terrain Amount
        //***Wood Variables
        //***Wood Amount
        VarTreeCuttingAmount_CedarLog = 0;
        VarTreeCuttingAmount_FirLog = 0;
        VarTreeCuttingAmount_PineLog = 0;
        VarTreeCuttingAmount_AshLog = 0;
        VarTreeCuttingAmount_BirchLog = 0;
        VarTreeCuttingAmount_CherryLog = 0;
        VarTreeCuttingAmount_MapleLog = 0;
        VarTreeCuttingAmount_PoplarLog = 0;
        VarTreeCuttingAmount_TeakLog = 0;
        VarTreeCuttingAmount_OakLog = 0;
        VarTreeCuttingAmount_BlackLog = 0;
        VarTreeCuttingAmount_WalnutLog = 0;
        VarTreeCuttingAmount_MahoganyLog = 0;
        VarTreeCuttingAmount_RedwoodLog = 0;
        VarTreeCuttingAmount_DemonLog = 0;
        VarTreeCuttingAmount_AngelLog = 0;
        VarTreeCuttingAmount_BloodyLog = 0;

        VarTreeCuttingAmount_YggdrasilLog = 0;
        //***Wood Names
        VarTreeCuttingName_CedarLog = "Cedar Log";
        VarTreeCuttingName_FirLog = "Fir Log";
        VarTreeCuttingName_PineLog = "Pine Log";
        VarTreeCuttingName_AshLog = "Ash Log";
        VarTreeCuttingName_BirchLog = "Birch Log";
        VarTreeCuttingName_CherryLog = "Cherry Log";
        VarTreeCuttingName_MapleLog = "Maple Log";
        VarTreeCuttingName_PoplarLog = "Poplar Log";
        VarTreeCuttingName_TeakLog = "Teak Log";
        VarTreeCuttingName_OakLog = "Oak Log";
        VarTreeCuttingName_BlackLog = "Black Log";
        VarTreeCuttingName_WalnutLog = "Walnut Log";
        VarTreeCuttingName_MahoganyLog = "Mahogany Log";
        VarTreeCuttingName_RedwoodLog = "Redwood Log";
        VarTreeCuttingName_DemonLog = "Demon Log";
        VarTreeCuttingName_AngelLog = "Angel Log";
        VarTreeCuttingName_BloodyLog = "Bloody Log";

        VarTreeCuttingName_YggdrasilLog = "Yggdrasil Log";
        //***Wood Prices
        VarTreeCuttingPrice_CedarLog = 1;
        VarTreeCuttingPrice_FirLog = 3;
        VarTreeCuttingPrice_PineLog = 10;
        VarTreeCuttingPrice_AshLog = 25;
        VarTreeCuttingPrice_BirchLog = 35;
        VarTreeCuttingPrice_CherryLog = 50;
        VarTreeCuttingPrice_MapleLog = 125;
        VarTreeCuttingPrice_PoplarLog = 250;
        VarTreeCuttingPrice_TeakLog = 500;
        VarTreeCuttingPrice_OakLog = 2500;
        VarTreeCuttingPrice_BlackLog = 5000;
        VarTreeCuttingPrice_WalnutLog = 10000;
        VarTreeCuttingPrice_MahoganyLog = 25000;
        VarTreeCuttingPrice_RedwoodLog = 150000;
        VarTreeCuttingPrice_DemonLog = 275000;
        VarTreeCuttingPrice_AngelLog = 350000;
        VarTreeCuttingPrice_BloodyLog = 475000;

        VarTreeCuttingPrice_YggdrasilLog = 25000000;
        //***Wood Exp
        VarTreeCuttingExp_CedarLog = 0;
        VarTreeCuttingExp_FirLog = 0;
        VarTreeCuttingExp_PineLog = 0;
        VarTreeCuttingExp_AshLog = 0;
        VarTreeCuttingExp_BirchLog = 0;
        VarTreeCuttingExp_CherryLog = 0;
        VarTreeCuttingExp_MapleLog = 0;
        VarTreeCuttingExp_PoplarLog = 0;
        VarTreeCuttingExp_TeakLog = 0;
        VarTreeCuttingExp_OakLog = 0;
        VarTreeCuttingExp_BlackLog = 0;
        VarTreeCuttingExp_WalnutLog = 0;
        VarTreeCuttingExp_MahoganyLog = 0;
        VarTreeCuttingExp_RedwoodLog = 0;
        VarTreeCuttingExp_DemonLog = 0;
        VarTreeCuttingExp_AngelLog = 0;
        VarTreeCuttingExp_BloodyLog = 0;

        VarTreeCuttingExp_YggdrasilLog = 0;
        //***Digging Amount
        VarDiggingAmount_Dirt = 0;
        VarDiggingAmount_Sand = 0;
        VarDiggingAmount_Clay = 0;
        VarDiggingAmount_Sandstone = 0;
        VarDiggingAmount_Stone = 0;
        VarDiggingAmount_Chalk = 0;
        VarDiggingAmount_Marble = 0;
        VarDiggingAmount_Fossils = 0;
        //***Digging Names
        VarDiggingName_Dirt = "Dirt";
        VarDiggingName_Sand = "Sand";
        VarDiggingName_Clay = "Clay";
        VarDiggingName_Sandstone = "Sandstone";
        VarDiggingName_Stone = "Stone";
        VarDiggingName_Chalk = "Chalk";
        VarDiggingName_Marble = "Marble";
        VarDiggingName_Fossils = "Fossils";
        //***Digging Prices
        VarDiggingPrice_Dirt = 0;
        VarDiggingPrice_Sand = 0;
        VarDiggingPrice_Clay = 0;
        VarDiggingPrice_Sandstone = 0;
        VarDiggingPrice_Stone = 0;
        VarDiggingPrice_Chalk = 0;
        VarDiggingPrice_Marble = 0;
        VarDiggingPrice_Fossils = 0;
        //***Digging Exp
        VarDiggingExp_Dirt = 0;
        VarDiggingExp_Sand = 0;
        VarDiggingExp_Clay = 0;
        VarDiggingExp_Sandstone = 0;
        VarDiggingExp_Stone = 0;
        VarDiggingExp_Chalk = 0;
        VarDiggingExp_Marble = 0;
        VarDiggingExp_Fossils = 0;
        //***Forging Amount
        VarForgingAmount_Glass = 0;
        VarForgingAmount_Steel = 0;
        VarForgingAmount_RefinedSteel = 0;
        VarForgingAmount_MysterySteel = 0;
        //***Forging Names
        VarForgingName_Glass = "Glass";
        VarForgingName_Steel = "Steel";
        VarForgingName_RefinedSteel = "Refined Steel";
        VarForgingName_MysterySteel = "Mystery Steel";
        //***Forging Prices
        VarForgingPrice_Glass = 0;
        VarForgingPrice_Steel = 0;
        VarForgingPrice_RefinedSteel = 0;
        VarForgingPrice_MysterySteel = 0;
        //***Forging Exp
        VarForgingExp_Glass = 0;
        VarForgingExp_Steel = 0;
        VarForgingExp_RefinedSteel = 0;
        VarForgingExp_MysterySteel = 0;
        //***Mining Underground Item Chance
        VarMiningChanceUndergroundCity_Coal = 300;
        VarMiningChanceUndergroundCity_Iron = 100;
        VarMiningChanceUndergroundCity_Copper = 25;
        VarMiningChanceUndergroundCity_Bronze = 15;
        VarMiningChanceUndergroundCity_Silver = 5;
        //***Mining Amount
        VarMiningAmount_Coal = 0;
        VarMiningAmount_Iron = 0;
        VarMiningAmount_Copper = 0;
        VarMiningAmount_Bronze = 0;
        VarMiningAmount_Silver = 0;
        VarMiningAmount_Tourmaline = 0;
        VarMiningAmount_Beryl = 0;
        VarMiningAmount_Mica = 0;
        VarMiningAmount_Quartz = 0;
        VarMiningAmount_Garnet = 0;
        VarMiningAmount_Gypsum = 0;
        VarMiningAmount_Pyrite = 0;
        VarMiningAmount_Mercury = 0;
        VarMiningAmount_Graphite = 0;
        VarMiningAmount_Peridotite = 0;
        VarMiningAmount_Soapstone = 0;
        VarMiningAmount_LapisLazuli = 0;
        VarMiningAmount_Fluorite = 0;
        VarMiningAmount_Celestite = 0;
        VarMiningAmount_Agate = 0;
        VarMiningAmount_Amber = 0;
        VarMiningAmount_Gold = 0;
        VarMiningAmount_Amethyst = 0;
        VarMiningAmount_Aquamarine = 0;
        VarMiningAmount_Calcite = 0;
        VarMiningAmount_DarkValunite = 0;
        VarMiningAmount_PixieDust = 0;
        VarMiningAmount_Sapphire = 0;
        VarMiningAmount_Ruby = 0;
        VarMiningAmount_Emerald = 0;
        VarMiningAmount_Diamond = 0;
        VarMiningAmount_Obsidian = 0;
        VarMiningAmount_LightCrystal = 0;
        VarMiningAmount_DarkCrystal = 0;
        VarMiningAmount_BloodCrystal = 0;
        VarMiningAmount_ForestCrystal = 0;
        VarMiningAmount_IceCrystal = 0;
        VarMiningAmount_SandCrystal = 0;
        VarMiningAmount_Orichalcum = 0;
        //***Mining Names
        VarMiningName_Coal = "Coal";
        VarMiningName_Iron = "Iron";
        VarMiningName_Copper = "Copper";
        VarMiningName_Bronze = "Bronze";
        VarMiningName_Silver = "Silver";
        VarMiningName_Tourmaline = "Tourmaline";
        VarMiningName_Beryl = "Beryl";
        VarMiningName_Mica = "Mica";
        VarMiningName_Quartz = "Quartz";
        VarMiningName_Garnet = "Garnet";
        VarMiningName_Gypsum = "Gypsum";
        VarMiningName_Pyrite = "Pyrite";
        VarMiningName_Mercury = "Mercury";
        VarMiningName_Graphite = "Graphite";
        VarMiningName_Peridotite = "Peridotite";
        VarMiningName_Soapstone = "Soapstone";
        VarMiningName_LapisLazuli = "Lapis Lazuli";
        VarMiningName_Fluorite = "Fluorite";
        VarMiningName_Celestite = "Celestite";
        VarMiningName_Agate = "Agate";
        VarMiningName_Amber = "Amber";
        VarMiningName_Gold = "Gold";
        VarMiningName_Amethyst = "Amethyst";
        VarMiningName_Aquamarine = "Aquamarine";
        VarMiningName_Calcite = "Calcite";
        VarMiningName_DarkValunite = "Dark Valunite";
        VarMiningName_PixieDust = "Pixie Dust";
        VarMiningName_Sapphire = "Sapphire";
        VarMiningName_Ruby = "Ruby";
        VarMiningName_Emerald = "Emerald";
        VarMiningName_Diamond = "Diamond";
        VarMiningName_Obsidian = "Obsidian";
        VarMiningName_LightCrystal = "Light Crystal";
        VarMiningName_DarkCrystal = "Dark Crystal";
        VarMiningName_BloodCrystal = "Blood Crystal";
        VarMiningName_ForestCrystal = "Forest Crystal";
        VarMiningName_IceCrystal = "Ice Crystal";
        VarMiningName_SandCrystal = "Sand Crystal";
        VarMiningName_Orichalcum = "Orichalcum";
        //***Mining Item Prices
        VarMiningPrice_Coal = 0;
        VarMiningPrice_Iron = 0;
        VarMiningPrice_Copper = 0;
        VarMiningPrice_Bronze = 0;
        VarMiningPrice_Silver = 0;
        VarMiningPrice_Tourmaline = 0;
        VarMiningPrice_Beryl = 0;
        VarMiningPrice_Mica = 0;
        VarMiningPrice_Quartz = 0;
        VarMiningPrice_Garnet = 0;
        VarMiningPrice_Gypsum = 0;
        VarMiningPrice_Pyrite = 0;
        VarMiningPrice_Mercury = 0;
        VarMiningPrice_Graphite = 0;
        VarMiningPrice_Peridotite = 0;
        VarMiningPrice_Soapstone = 0;
        VarMiningPrice_LapisLazuli = 0;
        VarMiningPrice_Fluorite = 0;
        VarMiningPrice_Celestite = 0;
        VarMiningPrice_Agate = 0;
        VarMiningPrice_Amber = 0;
        VarMiningPrice_Gold = 0;
        VarMiningPrice_Amethyst = 0;
        VarMiningPrice_Aquamarine = 0;
        VarMiningPrice_Calcite = 0;
        VarMiningPrice_DarkValunite = 0;
        VarMiningPrice_PixieDust = 0;
        VarMiningPrice_Sapphire = 0;
        VarMiningPrice_Ruby = 0;
        VarMiningPrice_Emerald = 0;
        VarMiningPrice_Diamond = 0;
        VarMiningPrice_Obsidian = 0;
        VarMiningPrice_LightCrystal = 0;
        VarMiningPrice_DarkCrystal = 0;
        VarMiningPrice_BloodCrystal = 0;
        VarMiningPrice_ForestCrystal = 0;
        VarMiningPrice_IceCrystal = 0;
        VarMiningPrice_SandCrystal = 0;
        VarMiningPrice_Orichalcum = 0;
        //***Mining Exp
        VarMiningExp_Coal = 0.1;
        VarMiningExp_Iron = 0.3;
        VarMiningExp_Copper = 1;
        VarMiningExp_Bronze = 3;
        VarMiningExp_Silver = 10;
        VarMiningExp_Tourmaline = 0;
        VarMiningExp_Beryl = 0;
        VarMiningExp_Mica = 0;
        VarMiningExp_Quartz = 0;
        VarMiningExp_Garnet = 0;
        VarMiningExp_Gypsum = 0;
        VarMiningExp_Pyrite = 0;
        VarMiningExp_Mercury = 0;
        VarMiningExp_Graphite = 0;
        VarMiningExp_Peridotite = 0;
        VarMiningExp_Soapstone = 0;
        VarMiningExp_LapisLazuli = 0;
        VarMiningExp_Fluorite = 0;
        VarMiningExp_Celestite = 0;
        VarMiningExp_Agate = 0;
        VarMiningExp_Amber = 0;
        VarMiningExp_Gold = 0;
        VarMiningExp_Amethyst = 0;
        VarMiningExp_Aquamarine = 0;
        VarMiningExp_Calcite = 0;
        VarMiningExp_DarkValunite = 0;
        VarMiningExp_PixieDust = 0;
        VarMiningExp_Sapphire = 0;
        VarMiningExp_Ruby = 0;
        VarMiningExp_Emerald = 0;
        VarMiningExp_Diamond = 0;
        VarMiningExp_Obsidian = 0;
        VarMiningExp_LightCrystal = 0;
        VarMiningExp_DarkCrystal = 0;
        VarMiningExp_BloodCrystal = 0;
        VarMiningExp_ForestCrystal = 0;
        VarMiningExp_IceCrystal = 0;
        VarMiningExp_SandCrystal = 0;
        VarMiningExp_Orichalcum = 0;

        VarMiningImgDir_Coal = 'img/' + VarMiningName_Coal + ' Piece.png'
        VarMiningImgDir_Iron = 'img/' + VarMiningName_Iron + ' Piece.png'
        VarMiningImgDir_Copper = 'img/' + VarMiningName_Copper + ' Piece.png'
        VarMiningImgDir_Bronze = 'img/' + VarMiningName_Bronze + ' Piece.png'
        VarMiningImgDir_Silver = 'img/' + VarMiningName_Silver + ' Piece.png'
        VarMiningImg_Coal = "<img class='ItemImageInline' src='img/" + VarMiningName_Coal + " Piece.png'>"
        VarMiningImg_Iron = "<img class='ItemImageInline' src='img/" + VarMiningName_Iron + " Piece.png'>"
        VarMiningImg_Copper = "<img class='ItemImageInline' src='img/" + VarMiningName_Copper + " Piece.png'>"
        VarMiningImg_Bronze = "<img class='ItemImageInline' src='img/" + VarMiningName_Bronze + " Piece.png'>"
        VarMiningImg_Silver = "<img class='ItemImageInline' src='img/" + VarMiningName_Silver + " Piece.png'>"
            //***Mining Amount
        VarGatheringAmount_GreenGrass = 0;
        VarGatheringAmount_EyeDrops = 0;
        VarGatheringAmount_Ether = 0;
        VarGatheringAmount_Potion = 0;
        VarGatheringAmount_PhoenixDown = 0;
        //***Amount of Haste Potions to start with
        VarGatheringAmount_HastePotionLvL1 = 5;
        VarGatheringAmount_HastePotionLvL2 = 5;
        VarGatheringAmount_HastePotionLvL3 = 0;
        VarGatheringAmount_HastePotionLvL4 = 0;
        VarGatheringAmount_HastePotionLvL5 = 0;

        //***Haste Potions Amount of Time
        //Make sure potion time is greater than time it takes to complete one action
        HastePotionLengthOfTime = 5000;
        PotionsHasteLvL1LengthOfTime = HastePotionLengthOfTime;
        PotionsHasteLvL2LengthOfTime = HastePotionLengthOfTime;
        PotionsHasteLvL3LengthOfTime = HastePotionLengthOfTime;
        PotionsHasteLvL4LengthOfTime = HastePotionLengthOfTime;
        PotionsHasteLvL5LengthOfTime = HastePotionLengthOfTime;
        //***Gathering Names
        VarGatheringName_GreenGrass = "Green Grass";
        VarGatheringName_EyeDrops = "Eye Drops";
        VarGatheringName_Ether = "Ether";
        VarGatheringName_Potion = "Potion";
        VarGatheringName_PhoenixDown = "Phoenix Down";
        //***Haste Potion Names
        VarGatheringName_HastePotionLvL1 = "Haste Potion LvL I";
        VarGatheringName_HastePotionLvL2 = "Haste Potion LvL II";
        VarGatheringName_HastePotionLvL3 = "Haste Potion LvL III";
        VarGatheringName_HastePotionLvL4 = "Haste Potion LvL IV";
        VarGatheringName_HastePotionLvL5 = "Haste Potion LvL V";

        VarGatheringImgDir_GreenGrass = "img/" + VarGatheringName_GreenGrass + ".png"
        VarGatheringImgDir_EyeDrops = "img/" + VarGatheringName_EyeDrops + ".png"
        VarGatheringImgDir_Ether = "img/" + VarGatheringName_Ether + ".png"
        VarGatheringImgDir_Potion = "img/" + VarGatheringName_Potion + ".png"
        VarGatheringImgDir_PhoenixDown = "img/" + VarGatheringName_PhoenixDown + ".png"
        VarGatheringImgDir_HastePotionLvL1 = "img/" + VarGatheringName_HastePotionLvL1 + ".png"
        VarGatheringImg_GreenGrass = "<img class='ItemImageInline' src='img/" + VarGatheringName_GreenGrass + ".png'>"
        VarGatheringImg_EyeDrops = "<img class='ItemImageInline' src='img/" + VarGatheringName_EyeDrops + ".png'>"
        VarGatheringImg_Ether = "<img class='ItemImageInline' src='img/" + VarGatheringName_Ether + ".png'>"
        VarGatheringImg_Potion = "<img class='ItemImageInline' src='img/" + VarGatheringName_Potion + ".png'>"
        VarGatheringImg_PhoenixDown = "<img class='ItemImageInline' src='img/" + VarGatheringName_PhoenixDown + ".png'>"
        VarGatheringImg_HastePotionLvL1 = "<img class='ItemImageInline' src='img/" + VarGatheringName_HastePotionLvL1 + ".png'>"


        //***Gathering Exp
        VarGatheringExp_GreenGrass = 0.1;
        VarGatheringExp_EyeDrops = 0.3;
        VarGatheringExp_Ether = 1;
        VarGatheringExp_Potion = 3;
        VarGatheringExp_PhoenixDown = 15;
        //***Haste Potion Exp
        VarGatheringExp_HastePotionLvL1 = 25;
        VarGatheringExp_HastePotionLvL2 = 250;
        VarGatheringExp_HastePotionLvL3 = 2500;
        VarGatheringExp_HastePotionLvL4 = 25000;
        VarGatheringExp_HastePotionLvL5 = 250000;
        //***Gathering Forest Chances
        VarGatheringChance_Forest_GreenGrass = 750;
        VarGatheringChance_Forest_EyeDrops = 300;
        VarGatheringChance_Forest_Ether = 100;
        VarGatheringChance_Forest_Potion = 50;
        VarGatheringChance_Forest_PhoenixDown = 25;
        VarGatheringChance_Forest_HastePotionLvL1 = 15;

        EnemyName = "No Enemy"
        EnemyHP = "No Enemy"
        VarBattleChance_Farm_Cow = 100
        VarBattleChance_Farm_Horse = 250
        VarBattleChance_Farm_Pig = 350
        VarBattleChance_Farm_Chicken = 500
        VarBattleName_Cow = "Cow"
        VarBattleName_Horse = "Horse"
        VarBattleName_Pig = "Pig"
        VarBattleName_Chicken = "Chicken"
        VarBattleDamage_Farm_Cow = 10
        VarBattleDamage_Farm_Horse = 5
        VarBattleDamage_Farm_Pig = 3
        VarBattleDamage_Farm_Chicken = 1
        VarBattle_CowHP = 50;
        VarBattle_HorseHP = 30;
        VarBattle_PigHP = 25;
        VarBattle_ChickenHP = 10;
        VarBattleAmount_CowHide = 0
        VarBattleAmount_Steaks = 0
        VarBattleAmount_Bones = 0
        VarBattleAmount_ChickenFeathers = 0
        VarBattleAmount_Eggs = 0
        VarBattleAmount_PigSkin = 0
        VarBattleAmount_Ham = 0
        VarBattleAmount_HorseHide = 0
        VarBattleAmount_HorseMeat = 0
        VarBattleExp_CowHide = 3
        VarBattleExp_Steaks = 5
        VarBattleExp_Bones = 3
        VarBattleExp_ChickenFeathers = 0.1
        VarBattleExp_Eggs = 1
        VarBattleExp_PigSkin = 1
        VarBattleExp_Ham = 2
        VarBattleExp_HorseHide = 1
        VarBattleExp_HorseMeat = 1
        VarBattleName_CowHide = "Cow Hide"
        VarBattleName_Steaks = "Steaks"
        VarBattleName_Bones = "Bones"
        VarBattleName_ChickenFeathers = "Chicken Feathers"
        VarBattleName_Eggs = "Eggs"
        VarBattleName_PigSkin = "Pig Skin"
        VarBattleName_Ham = "Ham"
        VarBattleName_HorseHide = "Horse Hide"
        VarBattleName_HorseMeat = "Horse Meat"
        VarBattleImgDir_CowHide = 'img/' + VarBattleName_CowHide + '.png'
        VarBattleImgDir_Steaks = 'img/' + VarBattleName_Steaks + '.png'
        VarBattleImgDir_ChickenFeathers = 'img/' + VarBattleName_ChickenFeathers + '.png'
        VarBattleImgDir_Eggs = 'img/' + VarBattleName_Eggs + '.png'
        VarBattleImgDir_PigSkin = 'img/' + VarBattleName_PigSkin + '.png'
        VarBattleImgDir_Ham = 'img/' + VarBattleName_Ham + '.png'
        VarBattleImgDir_HorseHide = 'img/' + VarBattleName_HorseHide + '.png'
        VarBattleImgDir_HorseMeat = 'img/' + VarBattleName_HorseMeat + '.png'
        VarBattleImgDir_Bones = 'img/' + VarBattleName_Bones + '.png'
        VarBattleImg_CowHide = "<img class='ItemImageInline' src='img/" + VarBattleName_CowHide + ".png'>"
        VarBattleImg_Steaks = "<img class='ItemImageInline' src='img/" + VarBattleName_Steaks + ".png'>"
        VarBattleImg_ChickenFeathers = "<img class='ItemImageInline' src='img/" + VarBattleName_ChickenFeathers + ".png'>"
        VarBattleImg_Eggs = "<img class='ItemImageInline' src='img/" + VarBattleName_Eggs + ".png'>"
        VarBattleImg_PigSkin = "<img class='ItemImageInline' src='img/" + VarBattleName_PigSkin + ".png'>"
        VarBattleImg_Ham = "<img class='ItemImageInline' src='img/" + VarBattleName_Ham + ".png'>"
        VarBattleImg_HorseHide = "<img class='ItemImageInline' src='img/" + VarBattleName_HorseHide + ".png'>"
        VarBattleImg_HorseMeat = "<img class='ItemImageInline' src='img/" + VarBattleName_HorseMeat + ".png'>"
        VarBattleImg_Bones = "<img class='ItemImageInline' src='img/" + VarBattleName_Bones + ".png'>"

        VarItemsName_PhoenixDown = "Phoenix Down";
        VarItemsAmount_PhoenixDown = VarItemsAmount_PhoenixDownRebirth;
        SkillPointsCostOfPhoenixDownOne = 300
            //***Unlock Amount of Skill Points
        UnlockFarmingAmountOfSkillPoints = 0
        UnlockMusicAmountOfSkillPoints = 1000
        UnlockForestAmountOfSkillPoints = 500
        UnlockGatheringAmountOfSkillPoints = 500
        UnlockMiningAmountOfSkillPoints = 300
        UnlockBattleAmountOfSkillPoints = 10
        UnlockSlimeAreaAmountOfSkillPoints = 50
        UnlockFarmAmountOfSkillPoints = 10
        UnlockUndergroundCityAmountOfSkillPoints = 50






    }

    function OnWindowResize() {
        //***OnWindowResize()
        $(window).resize(function() {

            //RealignBackground = RBG
            FunctionCenterStage();

        });
    }

    function OptionsUp() {
        //***O+50ptionsUp()
        GetOptionAndWhichMenu()

        if (Option == "") {
            simulateKey(38);

        }

    }

    function OptionsDown() {
        //***OptionsDown()
        GetOptionAndWhichMenu()

        if (Option == "") {
            simulateKey(40);

        }

    }
    //***Gain Item or Stat by Skill Point Use
    function FunctionInsertMenuIncreasePhoenixDownbyOne() {
        if (SkillPointsRebirthBattle > SkillPointsCostOfPhoenixDownOne) {
            SkillPointsRebirthBattle -= SkillPointsCostOfPhoenixDownOne
            VarItemsAmount_PhoenixDown += 1
            VarItemsAmount_PhoenixDownRebirth += 1
        }
    }
    //***Insert Unlock Function

    function FunctionUnlockFarming() {
        //***Function Unlock Farming
        if (SkillPointsRebirthMainLevel > UnlockFarmingAmountOfSkillPoints && FarmingUnlocked == false) {
            SkillPointsRebirthMainLevel -= UnlockFarmingAmountOfSkillPoints
            FarmingUnlocked = true
            UnlockFarming = "Farming Unlocked"
            NameFarming = "Farming"

        }
    }

    function FunctionUnlockMusic() {
        //***Function Unlock Music
        if (SkillPointsRebirthMainLevel > UnlockMusicAmountOfSkillPoints && MusicUnlocked == false) {
            SkillPointsRebirthMainLevel -= UnlockMusicAmountOfSkillPoints
            MusicUnlocked = true
            UnlockMusic = "Music Unlocked"
            NameMusic = "Music"

        }
    }

    function FunctionUnlockForest() {
        //***Function Unlock Forest
        if (SkillPointsRebirthMainLevel > UnlockForestAmountOfSkillPoints && ForestUnlocked == false) {
            SkillPointsRebirthMainLevel -= UnlockForestAmountOfSkillPoints
            ForestUnlocked = true
            UnlockForest = "Forest Unlocked"
            NameForest = "Forest"

        }
    }
    //***Function Unlock Gathering
    function FunctionUnlockGathering() {
        if (SkillPointsRebirthMainLevel >= UnlockGatheringAmountOfSkillPoints && GatheringUnlocked == false) {
            SkillPointsRebirthMainLevel -= UnlockGatheringAmountOfSkillPoints
            GatheringUnlocked = true
            UnlockGathering = "Gathering Unlocked"
            NameGathering = "Gathering"

        }
    }
    //***Function Unlock Mining
    function FunctionUnlockMining() {
        if (SkillPointsRebirthMainLevel >= UnlockMiningAmountOfSkillPoints && MiningUnlocked == false) {
            SkillPointsRebirthMainLevel -= UnlockMiningAmountOfSkillPoints
            MiningUnlocked = true
            UnlockMining = "Mining Unlocked"
            NameMining = "Mining"

        }
    }
    //***Function Unlock Battle
    function FunctionUnlockBattle() {
        if (SkillPointsRebirthMainLevel >= UnlockBattleAmountOfSkillPoints && BattleUnlocked == false) {
            SkillPointsRebirthMainLevel -= UnlockBattleAmountOfSkillPoints
            BattleUnlocked = true
            UnlockBattle = "Battle Unlocked"
            NameBattle = "Battle"

        }
    }
    //***Function Unlock Underground City
    function FunctionUnlockUndergroundCity() {
        if (SkillPointsRebirthMainLevel >= UnlockUndergroundCityAmountOfSkillPoints && UndergroundCityUnlocked == false) {
            SkillPointsRebirthMainLevel -= UnlockUndergroundCityAmountOfSkillPoints
            UndergroundCityUnlocked = true
            UnlockUndergroundCity = "Underground City Unlocked"
            NameUndergroundCity = "Underground City"

        }
    }
    //***Function Unlock Farm
    function FunctionUnlockFarm() {
        if (SkillPointsRebirthMainLevel >= UnlockFarmAmountOfSkillPoints && FarmUnlocked == false) {
            SkillPointsRebirthMainLevel -= UnlockFarmAmountOfSkillPoints
            FarmUnlocked = true
            UnlockFarm = "Farm Unlocked"
            NameFarm = "Farm"

        }
    }
    //***Function Unlock Slime Area
    function FunctionUnlockSlimeArea() {
        if (SkillPointsRebirthBattle >= UnlockSlimeAreaAmountOfSkillPoints && SlimeAreaUnlocked == false) {
            SkillPointsRebirthBattle -= UnlockSlimeAreaAmountOfSkillPoints
            SlimeAreaUnlocked = true
            UnlockSlimeArea = "Slime Area Unlocked"
            NameSlimeArea = "Slime Area"

        }
    }

    function SecondPanel() {

        GetOptionAndWhichMenu()
            //***SecondPanel()




        if (WhichMenu == "Skill Points Main Level" && Option == "Unlock Farming") {
            //***Second Panel Farming Display
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>Currently you have: ${SkillPointsRebirthMainLevel} Points
                    <br>Spend ${UnlockFarmingAmountOfSkillPoints} Points to Unlock Farming
                    `
        } else if (WhichMenu == "Skill Points Main Level" && Option == "Unlock Music") {
            //***Second Panel Music Display
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `

                    <br>Currently you have: ${SkillPointsRebirthMainLevel} Points
                    <br>Spend ${UnlockMusicAmountOfSkillPoints} Points to Unlock Music
                    `
        } else if (WhichMenu == "Skill Points Main Level" && Option == "Unlock Forest") {
            //***Second Panel Forest Display
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
             <br>This is a Gathering Area, Must unlock Gathering First
                    <br>Currently you have: ${SkillPointsRebirthMainLevel} Points
                    <br>Spend ${UnlockForestAmountOfSkillPoints} Points to Unlock Forest
                    `
        } else if (WhichMenu == "Skill Points Main Level" && Option == "Unlock Gathering") {
            //***Second Panel Unlock Gathering
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
            <br>This will unlock Gathering but no areas inside of it
                    <br>Currently you have: ${SkillPointsRebirthMainLevel} Points
                    <br>Spend ${UnlockGatheringAmountOfSkillPoints} Points to Unlock Gathering
                    `
        } else if (WhichMenu == "Skill Points Battle" && Option == "Increase Phoenix Down by One") {
            //***Second Panel Increase Phoenix Down by One
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                <br>Currently you have: ${SkillPointsRebirthBattle} Points
                <br>Cost of an Extra Phoenix Down: ${SkillPointsCostOfPhoenixDownOne} Points
                <br>Number of Phoenix Down at Rebirth: ${VarItemsAmount_PhoenixDownRebirth} 
                <br>Current Number of Phoenix Down: ${VarItemsAmount_PhoenixDown}
            `
        } else if (WhichMenu == "Skill Points Main Level" && Option == "Unlock Mining") {
            //***Second Panel Unlock Mining
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>This will unlock Mining but no areas inside of it
                    <br>${SkillPointsRebirthMainLevel} Points
                    <br>Spend ${UnlockMiningAmountOfSkillPoints} Points to Unlock Mining
                    `
        } else if (WhichMenu == "Skill Points Main Level" && Option == "Unlock Battle") {
            //***Second Panel Unlock Battle
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>This will unlock the Battle but no areas inside of it
                    <br>${SkillPointsRebirthMainLevel} Points
                    <br>Spend ${UnlockBattleAmountOfSkillPoints} Points to Unlock Battle
                    `
        } else if (WhichMenu == "Skill Points Main Level" && Option == "Unlock Underground City") {
            //***Second Panel Underground City Display
            //***Second Panel Unlock Underground City
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>This is a Mining Area, Must unlock Mining First
                    <br>Currently you have: ${SkillPointsRebirthMainLevel} Points
                    <br>Spend ${UnlockUndergroundCityAmountOfSkillPoints} Points to Unlock Underground City
                    `
        } else if (WhichMenu == "Skill Points Main Level" && Option == "Unlock Farm") {
            //***Second Panel Unlock Farm
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>This is a Battle, Must on lock Battle First
                    <br>Currently you have: ${SkillPointsRebirthMainLevel} Points
                    <br>Spend ${UnlockFarmAmountOfSkillPoints} Points to Unlock Farm
                    `
        } else if (WhichMenu == "Skill Points Battle" && Option == "Unlock Slime Area") {
            //***Second Panel Unlock Slime Area
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>This is a Battle, Must on lock Battle First
                    <br>Currently you have: ${SkillPointsRebirthBattle} Points
                    <br>Spend ${UnlockSlimeAreaAmountOfSkillPoints} Points to Unlock Slime Area
                    `
        } else if (WhichMenu == "Skill Points" || WhichMenu == "Skill Points Page 2") {
            //***Second Panel 
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>${Math.ceil(SkillPointsRebirthMainLevel)} MainLevel
                    <br>${Math.ceil(SkillPointsRebirthBattle)} Battle
                    <br>${Math.ceil(SkillPointsRebirthMining)} Mining
                    <br>${Math.ceil(SkillPointsRebirthFarming)} Farming
                    <br>${Math.ceil(SkillPointsRebirthTreeCutting)} Tree Cutting
                    <br>${Math.ceil(SkillPointsRebirthGathering)} Gathering
                    <br>${Math.ceil(SkillPointsRebirthDigging)} Digging
                    <br>${Math.ceil(SkillPointsRebirthForging)} Forging
                    <br>${Math.ceil(SkillPointsRebirthSewing)} Sewing
                    <br>${Math.ceil(SkillPointsRebirthApothecary)} Apothecary
                    <br>${Math.ceil(SkillPointsRebirthAlchemy)} Alchemy
                    <br>${Math.ceil(SkillPointsRebirthJewellery)} Jewellery
                    <br>${Math.ceil(SkillPointsRebirthAnimalHusbandry)} Animal Husbandry 

                    `
        } else if (WhichMenu == "Battle" && Option == "Farm") {
            //***Second Panel Farm
            if (VarGatheringAmount_HastePotionLvL5 >= 1) {
                CurrentTime = IntervalTimeBattleFarmHasteLvL5
            } else if (VarGatheringAmount_HastePotionLvL4 >= 1) {
                CurrentTime = IntervalTimeBattleFarmHasteLvL4
            } else if (VarGatheringAmount_HastePotionLvL3 >= 1) {
                CurrentTime = IntervalTimeBattleFarmHasteLvL3
            } else if (VarGatheringAmount_HastePotionLvL2 >= 1) {
                CurrentTime = IntervalTimeBattleFarmHasteLvL2
            } else if (VarGatheringAmount_HastePotionLvL1 >= 1) {
                CurrentTime = IntervalTimeBattleFarmHasteLvL1
            } else {
                CurrentTime = IntervalTimeBattleFarm
            }
            IntervalTimeSecondPanel = 20050;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>Exp is per Ore so 2 ${VarBattleName_CowHide} is ${VarBattleExp_CowHide * 2} Exp
                    <br>Chance
                    <br>&emsp;&emsp;${VarBattleName_Cow}: ${0.1 * VarBattleChance_Farm_Cow}%
                    <br>&emsp;&emsp;${VarBattleName_Horse}: ${0.1 * VarBattleChance_Farm_Horse}%
                    <br>&emsp;&emsp;${VarBattleName_Pig}: ${0.1 * VarBattleChance_Farm_Pig}%
                    <br>&emsp;&emsp;${VarBattleName_Chicken}: ${0.1 * VarBattleChance_Farm_Chicken}%
                    <br>
                    <br>Battle Time: ${CurrentTime} Milliseconds
                    <br>Item Multiplier: ${ItemMultiplierBattleMin}x - ${ItemMultiplierBattleMax}x   
                    <br>
                    <br>${GainedItemBattle1}
                    <br>${GainedItemBattle2}
                    <br>${GainedItemBattle3}
                    <br>${GainedItemBattle4}
                    <br>${GainedItemBattle5}
                    <br>${GainedItemBattle6}
                    <br>${GainedItemBattle7}
                    <br>${GainedItemBattle8}
                    <br>${GainedItemBattle9}
                    `
        } else if (Option == "Rebirth") {
            //***Rebirth Second Panel
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>
                    <br>Press Right or Enter to Rebirth 
                    <br>
                    <br>You Will Unlock 
                    <br>the Following Skill Points
                    <br>
                    <br>${Math.ceil(SkillPointsMainLevel)} Main Level
                    <br>${Math.ceil(SkillPointsBattle)} Battle
                    <br>${Math.ceil(SkillPointsMining)} Mining
                    <br>${Math.ceil(SkillPointsFarming)} Farming
                    <br>${Math.ceil(SkillPointsTreeCutting)} Tree Cutting
                    <br>${Math.ceil(SkillPointsGathering)} Gathering
                    <br>${Math.ceil(SkillPointsDigging)} Digging
                    <br>${Math.ceil(SkillPointsForging)} Forging
                    <br>${Math.ceil(SkillPointsSewing)} Sewing
                    <br>${Math.ceil(SkillPointsApothecary)} Apothecary
                    <br>${Math.ceil(SkillPointsAlchemy)} Alchemy
                    <br>${Math.ceil(SkillPointsJewellery)} Jewellery
                    <br>${Math.ceil(SkillPointsAnimalHusbandry)} Animal Husbandry 


                    `
        } else if (Option == "Dirt" || Option == "Sand" || Option == "Clay" || Option == "Glass") {
            IntervalTimeSecondPanel = 50;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>
                    <br>Dirt: ${VarDigging_Dirt}
                    <br>Rupees: ${VarDiggingPrice_Dirt}
                    <br>Sand: ${VarDigging_Sand}
                    <br>Rupees: ${VarDiggingPrice_Sand}
                    <br>Clay: ${VarDigging_Clay}
                    <br>Rupees: ${VarDiggingPrice_Clay}
                    <br>Glass: ${VarForging_Glass}
                    <br>Rupees: ${VarForgingPrice_Glass}
                    `
        } else if (Option == "Underground City" && WhichMenu == "Mining") {
            //***Underground City Second Panel
            IntervalTimeSecondPanel = 50;
            if (VarGatheringAmount_HastePotionLvL5 >= 1) {
                CurrentTime = IntervalTimeMiningUndergroundCityHasteLvL5
            } else if (VarGatheringAmount_HastePotionLvL4 >= 1) {
                CurrentTime = IntervalTimeMiningUndergroundCityHasteLvL4
            } else if (VarGatheringAmount_HastePotionLvL3 >= 1) {
                CurrentTime = IntervalTimeMiningUndergroundCityHasteLvL3
            } else if (VarGatheringAmount_HastePotionLvL2 >= 1) {
                CurrentTime = IntervalTimeMiningUndergroundCityHasteLvL2
            } else if (VarGatheringAmount_HastePotionLvL1 >= 1) {
                CurrentTime = IntervalTimeMiningUndergroundCityHasteLvL1
            } else {
                CurrentTime = IntervalTimeMiningUndergroundCity
            }
            CurrentTime = shortenNumber(CurrentTime)



            FunctionIntervalSecondPanel();
            SecondPanelText = `
                    <br>Exp is per Ore so 2 Silver is ${VarMiningExp_Silver * 2} Exp
                    <br>Chance
                    <br>&emsp;&emsp;${VarMiningName_Coal}: ${0.1 * VarMiningChanceUndergroundCity_Coal}% ${VarMiningExp_Coal} Exp
                    <br>&emsp;&emsp;${VarMiningName_Iron}: ${0.1 * VarMiningChanceUndergroundCity_Iron}% ${VarMiningExp_Iron} Exp
                    <br>&emsp;&emsp;${VarMiningName_Copper}: ${0.1 * VarMiningChanceUndergroundCity_Copper}% ${VarMiningExp_Copper} Exp
                    <br>&emsp;&emsp;${VarMiningName_Bronze}: ${0.1 * VarMiningChanceUndergroundCity_Bronze}%  ${VarMiningExp_Bronze} Exp
                    <br>&emsp;&emsp;${VarMiningName_Silver}: ${0.1 * VarMiningChanceUndergroundCity_Silver}%   ${VarMiningExp_Silver} Exp
                    <br>
                    <br>Mining Time: ${CurrentTime} Milliseconds
                    <br>Item Multiplier: ${ItemMultiplierMiningMin}x - ${ItemMultiplierMiningMax}x   
                    <br>
                    <br>${GainedItemMining1}
                    <br>${GainedItemMining2}
                    <br>${GainedItemMining3}
                    <br>${GainedItemMining4}
                    <br>${GainedItemMining5}
                    <br>${GainedItemMining6}
                    <br>${GainedItemMining7}
                    <br>${GainedItemMining8}
                    <br>${GainedItemMining9}


                    `;

        } else if (Option == "Forest" && WhichMenu == "Gathering") {
            IntervalTimeSecondPanel = 50;
            //***Forest Second Panel

            if (VarGatheringAmount_HastePotionLvL5 >= 1) {
                CurrentTime = IntervalTimeGatheringForestHasteLvL5
            } else if (VarGatheringAmount_HastePotionLvL4 >= 1) {
                CurrentTime = IntervalTimeGatheringForestHasteLvL4
            } else if (VarGatheringAmount_HastePotionLvL3 >= 1) {
                CurrentTime = IntervalTimeGatheringForestHasteLvL3
            } else if (VarGatheringAmount_HastePotionLvL2 >= 1) {
                CurrentTime = IntervalTimeGatheringForestHasteLvL2
            } else if (VarGatheringAmount_HastePotionLvL1 >= 1) {
                CurrentTime = IntervalTimeGatheringForestHasteLvL1
            } else {
                CurrentTime = IntervalTimeGatheringForest
            }
            CurrentTime = shortenNumber(CurrentTime)
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                            Exp is per Item so 5 Phoenix Down is ${VarGatheringExp_PhoenixDown * 5} Exp
                            <br>Chance
                            <br>&emsp;&emsp;${VarGatheringName_GreenGrass}: ${0.1 * VarGatheringChance_Forest_GreenGrass}% ${VarGatheringExp_GreenGrass} Exp
                            <br>&emsp;&emsp;${VarGatheringName_EyeDrops}: ${0.1 * VarGatheringChance_Forest_EyeDrops}% ${VarGatheringExp_EyeDrops} Exp
                            <br>&emsp;&emsp;${VarGatheringName_Ether}: ${0.1 * VarGatheringChance_Forest_Ether}% ${VarGatheringExp_Ether} Exp
                            <br>&emsp;&emsp;${VarGatheringName_Potion}: ${0.1 * VarGatheringChance_Forest_Potion}% ${VarGatheringExp_Potion} Exp
                            <br>&emsp;&emsp;${VarGatheringName_PhoenixDown}: ${0.1 * VarGatheringChance_Forest_PhoenixDown}% ${VarGatheringExp_PhoenixDown} Exp
                            <br>&emsp;&emsp;${VarGatheringName_HastePotionLvL1}: ${0.1 * VarGatheringChance_Forest_HastePotionLvL1}% ${VarGatheringExp_HastePotionLvL1} Exp
                            <br>
                            <br>Mining Time: ${CurrentTime} Milliseconds
                            <br>Item Multiplier: ${ItemMultiplierGatheringMin}x - ${ItemMultiplierGatheringMax}x   
                            <br>
                            <br>${GainedItemGathering1}
                            <br>${GainedItemGathering2}
                            <br>${GainedItemGathering3}
                            <br>${GainedItemGathering4}
                            <br>${GainedItemGathering5}
                            <br>${GainedItemGathering6}
                            <br>${GainedItemGathering7}
                            <br>${GainedItemGathering8}
                            <br>${GainedItemGathering9}


                            `;

        } else if (Option == "Elevated Frequencies") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br><a href="https://alaisclay.bandcamp.com/track/mountains-we-move">Mountains We Move</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/we-will-march">We Will March</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/with-earth-as-my-witness">With Earth As My Witness</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/log-333-featuring-steve-grant">Log 333</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/reality-check">Reality Check</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/in-the-light">In The Light</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/truth-of-your-power">Truth Of Your Power</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/came-here-to-do">Came Here To Do</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/thin-thin-line">Thin, Thin Line</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/firme-en-la-lucha">Firme En La Lucha</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/heat-brewin-featuring-mike-wird">Heat Brewin'</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/shine-on">Shine On</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/back-to-land-feat-vandana-shiva-sample">Back To Land</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/medicine-drum-featuring-mcad-totem">Medicine Drum</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/prayers-coming-through-ft-totem">Prayers Coming Through</a>

                            `
        } else if (Option == "End of an Era") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br><a href="https://alaisclay.bandcamp.com/track/gather-all-around">Gather All Around</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/whole-different-game">Whole Different Game</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/renegade-slave">Renegade Slave</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/message">Message</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/coals-into-diamonds">Coals Into Diamonds</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/ready-to-protect">Ready To Protect</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/jungle">Jungle</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/aho-featuring-mcad">Aho</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/eyes-wide-open">Eyes Wide Open</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/cut-the-ties-ft-ghostryder-steve-grant">Cut the Ties</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/calling-all-warriors">Calling All Warriors</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/up-to-you">Up To You</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/let-go-of-this-pain">Let Go of This Pain</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/you-are">You Are</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/ship-with-no-captain">Ship With No Captain</a>
                            <br>
                            `
        } else if (Option == "Reverse Hypnosis") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br><a href="https://alaisclay.bandcamp.com/track/intro">Intro</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/perfect-timing">Perfect Timing</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/esta-experiencia">Esta Experiencia</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/globalizaci-n-feat-zaravil">Globalización</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/neva-gonna-hush-us-feat-mcad">Neva Gonna Hush Us</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/heavy-koolaid-feat-payday-monsanto">Heavy Koolaid</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/deadly-rain">Deadly Rain</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/sleeping-assassin">Sleeping Assassin</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/otherside">Otherside</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/the-middlemen">The Middlemen</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/we-will-not-rest">We Will Not Rest</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/new-world-police-state">New World Police State</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/hell-no">Hell No</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/reach-out-feat-beth-preston">Reach Out</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/babylon-falls">Babylon Falls</a>
                            <br><a href="https://alaisclay.bandcamp.com/track/rainbow-warriors">Rainbow Warriors</a>

                            `
        } else if (Option == "Alais Clay and Steve Grant Collabs") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br>
                            <br><a href="https://alaisclay.bandcamp.com/track/cut-the-ties-feat-ghostryder">Cut The Ties</a>
                            <br>
                            <br><a href="https://alaisclay.bandcamp.com/track/empire">Empire</a>
                            <br>
                            <br><a href="https://alaisclay.bandcamp.com/track/rise-up-feat-disl-automatic-heidi-d">Rise Up</a>
                            <br>
                            <br><a href="https://alaisclay.bandcamp.com/track/came-here-to-say">Came Here To Say</a>
                            <br>
                            <br><a href="https://alaisclay.bandcamp.com/track/log-333">Log 333 *My Favorite Song of All Time</a>

                            `
        } else if (Option == "COLORS") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/roots">Roots</a>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/stuck-feat-king-james">Stuck</a>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/synchronicity-feat-tha-voyce-illuminati-congo">Synchronicity</a>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/anahata-sacred-heart-space-feat-enfluentz">Anahata Sacred Heart Space</a>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/words-feat-speaking-beauty">Words</a>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/third-eye">Third Eye</a>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/leaving-my-body">Leaving My Body</a>

                            `
        } else if (Option == "SEER") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/second-life-2">Second Life</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/in-the-land-of-make-believe">In The Land of Make Believe</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/i-am-ft-st-anthony-the-voyce-spirit-of-truth">i Am</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/affa">AFFA</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/lost-in-a-dream-ft-the-jokerr-watchman">Lost In A Dream</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/fly-away-ft-loc-saint">Fly Away</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/starlight-ft-watchman">Starlight</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/divine-ft-the-voyce">Divine</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/blow-my-high-ft-grewsum-watchman">Blow My High</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/solar-boat-i-need-you">Solar Boat (I Need You)</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/laughter-ft-king-james-indigo-prophet">Laughter</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/invisible-creatures-of-the-5-elements-ft-illuminati-congo">Invisible Creatures Of The 5 Elements</a>

                            `
        } else if (Option == "333") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/neurogenesis">Neurogenesis</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/the-imaginatrix-feat-illuminati-congo-watchman">The Imaginatrix</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/golden-teachers">Golden Teachers</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/the-inner-reaches-of-outer-space-feat-watchman-tha-voyce">The Inner Reaches Of Outer Space</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/gateway-to-the-seer-realm">Gateway To The Seer Realm</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/beauty-of-a-thousand-suns">Beauty Of A Thousand Suns</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/enter-the-void-feat-illuminati-congo-aslan">Enter The Void</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/i-return-feat-hope-medford-of-medicine-for-the-poeple">I Return</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/fearless-feat-andre-auram-modern-day-soulja">fearLESS</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/agape-truthseekah-feat-o-n-e-tha-voyce-disl-automatic">Agape - TruthSeekah</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/lost-in-time-feat-grewsum-great-capacity-sa115">Lost In Time</a>

                            `
        } else if (Option == "Spiritual Alchemy") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/spiritual-alchemy-intro">Spiritual Alchemy / Intro</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/mystic-mind">Mystic Mind</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/wingardium-leviosa-feat-aslan">Wingardium Leviosa</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/opening-doors-to-the-unseen-feat-beast1333">Opening Doors To The Unseen</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/esoteric-agenda">Esoteric Agenda</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/syncretism-feat-savage-trinity-e-truth">Syncretism</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/7-stars-feat-tehuti-mos-tha-hollaboy">7 Stars</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/atmosphere-feat-king-james-tha-hollaboy">Atmosphere</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/fossilized-customs-feat-great-capacity-tha-voyce">Fossilized Customs</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/flight-of-the-navigator-feat-rasul-allah">Flight of The Navigator</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/sometimes-they-come-back-feat-sa-115-tha-voyce">Sometimes They Come Back</a>

                            `
        } else if (Option == "Awaken The Fire") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://truthseekah.bandcamp.com/track/intro">Intro</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/the-other-side">The Other Side</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/disciples-of-the-mysterium-feat-rasul-allah-illuminati-congo">Disciples Of The Mysterium</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/meditation">Meditation</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/enigma-feat-sick-since">Enigma</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/mysteries-of-the-astral-light-feat-atma-rasul-allah-trust-one">Mysteries Of The Astral Light</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/kymatica">Kymatica</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/dreams-feat-lo-key-tehuti-mos-sick-since">Dreams</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/enter-the-stargate-feat-cosmic-crusader-neme">Enter The Stargate</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/fiyah">Fiyah</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/the-knowing-feat-tehuti-mos-decipher-yediyah-ben-sion">The Knowing</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/origins-oracles-feat-sa-115">Origins & Oracles</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/the-hidden-hand-feat-b-sanders-king-david-watchman">The Hidden Hand</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/ghost">Ghost</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/if-only-feat-kryspy">If Only</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/unworthy-feat-king-james-will-bolds">UnWorthy</a>

                            `
        } else if (Option == "Take My Life") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://truthseekah.bandcamp.com/track/dead-men-walking-ft-truthseekah-king-james">Dead Men Walking</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/take-my-life-feat-king-james-truthseekah">Take My Life</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/horror-flick-feat-king-james">Horror Flick</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/back-to-that-life-feat-truthseekah-jelly-roll-white-mike">Back To That Life</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/atmosphere-feat-truthseekah-king-james-tha-hollaboy">Atmosphere</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/closer-feat-truthseekah-lokka">Closer</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/snap-out-of-it-feat-king-james-truthseekah">Snap Out Of It</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/running-in-circles-feat-king-james">Running In Circles</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/unashamed-feat-truthseekah-king-james-sa-115">UnAshamed</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/all-praise-feat-truthseekah-king-james-phil-j">All Praise</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/pyp-play-your-position-feat-king-james-truthseekah">PYP (Play Your Position)</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/unworthy-feat-truthseekah-king-james-will-bolds">UnWorthy</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/enjoying-life-feat-king-james">Enjoying Life</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/sundown-feat-truthseekah-benjah-tha-voyce">SunDown</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/fiyah-part-2-feat-truthseekah-malachi">Fiyah Part 2</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/back-at-it-feat-truthseekah-king-james-dillon-chase">Back At It</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/christ-must-increase-part-2-feat-truthseekah-king-james-sa-115">Christ Must Increase Part 2</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/spiritual-mind-feat-king-james-truthseekah">Spiritual Mind</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/king-of-kings-feat-truthseekah-k-drama-sa-115">King of Kings</a>
                            <br><a href="https://truthseekah.bandcamp.com/track/hold-me-down-feat-truthseekah-king-james-c-nile-chris-taylor">Hold Me Down</a>

                            `
        } else if (Option == "Second Life") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br>
                            <br><a href="https://truthseekah.bandcamp.com/track/second-life">Second Life</a>

                            `
        } else if (Option == "Time Killaz") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/time-killaz">Time Killaz</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/distractions-ft-illi-zion-i">Distractions</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/the-past-done">The Past Done</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/time-killin-1">Time Killin 1</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ignobliss-ft-shabazz-palaces">Ignobliss</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/black-red-gold-green">Black Red Gold Green</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/best-things-in-life-are-free">Best Things in Life are Free</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/impermanence">Impermanence</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/how-i-feel-ft-perfect-giddimani">How I Feel</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/vortex-ft-akbar">Vortex</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/within-without">Within Without</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/time-killin-2">Time Killin 2</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/we-outcheer">We Outcheer</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/internal-ramble-ft-vic-spencer">Internal Ramble</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/synchronistic-ft-john-robinson">Synchronistic</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/sacrament">Sacrament</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/knotted">Knotted</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/be-water">Be Water</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ancestral-life">Ancestral Life</a>

                            `
        } else if (Option == "Illuminate") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/illuminated">Illuminated</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/open-the-way-legba">Open The Way (Legba)</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/unwrapper">Unwrapper</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/wisdom-of-the-tarot">Wisdom of the Tarot</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/treed-up-devi-cannabis">Tree'd Up (Devi Cannabis)</a>

                            `
        } else if (Option == "Transfigure ft Aura Da Prophet") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/transfigure-ft-aura-da-prophet">Transfigure</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/pinnacle-ft-aura-da-prophet">Pinnacle</a>

                            `
        } else if (Option == "One Won") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/universal-support-ft-mista-monk-elf-transporter">Universal Support</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/jah-liveth-ft-motley">Jah Liveth</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/one-ft-jah-tung">One</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/oppositeness-ft-teepz">Oppositeness</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/outshine-ft-viking-n3-jinz-moss">Outshine</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/set-sail-ft-nina-nicole">Set Sail</a>

                            `
        } else if (Option == "Lucid") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ascension">Ascension</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/star-gate">Star Gate</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/lucid-dreaming-ft-3rd-eye-indigo-iconic">Lucid Dreaming</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/aghora">Aghora</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/plants-of-the-gods">Plants of the Gods</a>

                            `
        } else if (Option == "Jewels") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/jewels">Jewels</a>

                            `
        } else if (Option == "Illumine The Nadis") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/mandela-effect">Mandela Effect</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/no-vaccines">No Vaccines</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/jake-snake-ddt">Jake Snake DDT</a>

                            `
        } else if (Option == "Delphi") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/alkhemit">ALKHEMIT</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/delphi">DELPHI</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/phosphorus-ft-apak">PHOSPHORUS</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/empty-ft-son-of-saturn">EMPTY</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/yggdrasil-ft-sense-one-amun-neter-el">YGGDRASIL</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ground-zero-point">GROUND ZERO POINT</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/high-jahn-the-conqueror">HIGH JAHN THE CONQUEROR</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/endarkment">ENDARKMENT</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/daemonic">DAEMONIC</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/dark-light-guru">DARK LIGHT GURU</a>

                            `
        } else if (Option == "SevenR") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/all-is-one">All is One</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/by-example">By Example</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/connectivity">Connectivity</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/high-life">High Life</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/all-of-innerlude">All Of (innerlude)</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/feel-alright">Feel Alright</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/lets-go">Let's Go</a>

                            `
        } else if (Option == "All Is Tantra") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/lila">Lila</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/connected-breath">Connected Breath</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/starseed-indigo">Starseed Indigo</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/creation-mantra-ft-astarius-miraculii">Creation Mantra</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/all-is-tantra">All Is Tantra</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/the-field">The Field</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/source-inside">Source Inside</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/thug-life-mudra">Thug Life Mudra</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/zin-uru">Zin Uru</a>

                            `
        } else if (Option == "InnerGalactic") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/universe-inside">UNIVERSE INSIDE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/innergalactic-ft-mike-wird">INNERGALACTIC</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/heartwork">HEARTWORK</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/living-free">LIVING FREE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/money-follows">MONEY FOLLOWS</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/0-fucks">0 FUCKS</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/inner-dimensions-interlude">INNER DIMENSIONS INTERLUDE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/trust">TRUST</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/jamboree">JAMBOREE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/cooler">COOLER</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/9-phases-interlude">9 PHASES INTERLUDE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/refresh">REFRESH</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/life-is-not-short">LIFE IS NOT SHORT</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ill-return">I'LL RETURN</a>

                            `
        } else if (Option == "Health Wealth Knowledge of Self") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/we-keep-it-natural">We Keep it Natural</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/yoga-in-the-morning">Yoga in the Morning</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/health-wealth-knowledge-of-self-ft-sa-roc">Health Wealth Knowledge of Self</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/life-urge-ft-leonard-orr-and-raja-orr">Life Urge</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/im-alive-now">I'm Alive Now</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/4-laws-of-wealth">4 Laws of Wealth</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/flower-of-life">Flower of Life</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/banksters">Banksters</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ye-r-gods">Ye R Gods</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/pull-up">Pull Up</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/bike-ridin">Bike Ridin'</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/keep-lovin">Keep Lovin'</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/juicin-ft-ashel-seasunz">Juicin'</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/friend-of-all-creatures">Friend of All Creatures</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/rbg-gold-ft-mike-flo">RBG Gold</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/truth-love-simplicity">Truth Love Simplicity</a>

                            `
        } else if (Option == "Siddha Gita") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ganapati">Ganapati</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/shiva-shakti">Shiva Shakti</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/maa-kali">Maa Kali</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/vetri-vel-murugan">Vetri Vel Murugan</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/agastiyar-64-bars">Agastiyar 64 Bars</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/guru-datta">Guru Datta</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/aum-namah-shivaya">Aum Namah Shivaya</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ten-mahavidyas">Ten MahaVidyas</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/goraksa-yogi">Goraksa Yogi</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/thirumandiram">Thirumandiram</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ganga-river">Ganga River</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/siddha-gita">Siddha Gita</a>

                            `
        } else if (Option == "Green Is All I Need") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/in-love-with-mary-jane">In Love With Mary Jane</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/shiva-smokin">Shiva Smokin</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/green-is-all-i-need">Green is All i Need</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/smoke-weed-everyday-ft-anthony-b">Smoke Weed Everyday</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/chalawa">Chalawa</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ini-be-the-highest-ft-pugs-atomz">InI Be the Highest</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/puff-puff-no-pass">Puff Puff NO Pass</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/drug-war-ft-rocker-t">Drug War</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/loud-pack">Loud Pack</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/50-bag-of-skunk-ft-rita-j-kickass-alyssia-cee-know-doodlebug">50 Bag of Skunk</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/cloud-loud">Cloud Loud</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/still-got-my-sensi">Still Got My Sensi</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/ganja-girl">Ganja Girl</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/imma-blaze-ft-jahdan-blakkamoore">Imma Blaze</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/tree-of-life">Tree of Life</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/higher-and-higher-ft-reefa-rei-sense-ill-legit-riddlore-ang13-cosmos-ray-jah-wave-booda-blaou-ras-arcane-mr-greenweeds-esq">Higher and Higher</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/lion-paw">Lion Paw</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/every-time-i-chant">Every Time I Chant</a>

                            `
        } else if (Option == "Island of Patmos") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/island-of-patmos">Island of Patmos</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/all-praises-due">All Praises Due</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/beyond-the-beyond">Beyond the Beyond</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/be-here-now">Be Here Now</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/no-holds-barred">No Holds Barred</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/whatever-the-fuck">Whatever the Fuck</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/poor-righteous-teachers">Poor Righteous Teachers</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/red-gaurd">Red Gaurd</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/hardcore-nigga-moors">Hardcore Nigga Moors</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/grimey-heathens">Grimey Heathens</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/never-lost">Never Lost</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/life-is-awesome">Life is Awesome</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/mental-calisthenics">Mental Calisthenics</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/silent-illusions">Silent Illusions</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/arrogant-bastards">Arrogant Bastards</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/youre-not-worthy">You're Not Worthy</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/warriors-anthem">Warriors Anthem</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/fuck-your-beliefs">Fuck your Beliefs</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/sacrificial-lamb">Sacrificial Lamb</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/i-self-lord-am-master">I Self Lord Am Master</a>

                            `
        } else if (Option == "NIGGATIVITY") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/highest-good">HIGHEST GOOD</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/i-hate-rappers">I HATE RAPPERS</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/entered-apprentice">ENTERED APPRENTICE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/gory-aghori-story">GORY AGHORI STORY</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/niggativity">NIGGATIVITY</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/totally-awesome">TOTALLY AWESOME</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/have-a-great-fucking-day">HAVE A GREAT FUCKING DAY</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/multiverse">MULTIVERSE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/i-aint-trippin">I AINT TRIPPIN</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/i-will-prevail">I WILL PREVAIL</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/fools-waiting">FOOLS WAITING</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/death-to-your-doctrine">DEATH TO YOUR DOCTRINE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/death-urge">DEATH URGE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/i-wish-i-was-white">I WISH I WAS WHITE</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/baphomet-pan-the-scapegoat-man">BAPHOMET PAN THE SCAPEGOAT MAN</a>

                            `
        } else if (Option == "ALL EYE SEE") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://illuminaticongo.bandcamp.com/track/intro">intro</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/here-we-come-ft-cosmos-ray-esq">Here We Come</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/whe-dem-ft-jahdan-blakkamoore">Whe Dem</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/get-my-bruce-lee-on">Get My Bruce Lee On</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/unto-the-pure-ft-digital-ancient">Unto the Pure</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/loving-you-endlessly-ft-robert-james">Loving You Endlessly</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/foot-fetish">Foot Fetish</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/straight-up-ft-simeon-viltz-and-rita-j">Straight Up</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/bermuda-ft-cosmos-ray">Bermuda</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/filthy-ft-phillip-morris-vitamin-d-ill-legit-sharkula">Filthy</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/i-dont-want-to-fall-in-love">I Dont Want to Fall in Love</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/machete-ft-lee-scratch-perry">Machete</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/whatever-ft-apak-bukue-one">Whatever ft. Apak & Bukue One</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/no-no-ft-deltron">No No</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/im-chill">I'm Chill</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/lets-do-yoga-ft-devi-2000">Lets Do Yoga</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/us-against-them-ft-i-blacky">Us Against Them</a>

                            `
        } else if (Option == "ILLUMINATI CONGO") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <a href="https://illuminaticongo.bandcamp.com/track/intro-with-big-youth">intro with Big Youth</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/link-me">Link Me</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/only-love-with-lutan-fyah">Only Love with Lutan Fyah</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/eternal-life">Eternal Life</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/flash-through">Flash Through</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/conquering-lion">Conquering Lion</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/god-in-all">God in All</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/top-of-the-line">Top of the Line</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/stalkin-with-ang13">Stalkin with Ang13</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/jahnigga-with-sharkula">Jahnigga with Sharkula</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/posted-with-doodlebug">Posted with Doodlebug</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/i-love">I Love</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/chalice">Chalice</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/prodigal-son-with-yaw">Prodigal Son with Yaw</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/interplanetary-interlude">Interplanetary interlude</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/illuminati-congo">Illuminati Congo</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/tweakin-with-mc-juice">Tweakin with Mc Juice</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/no-matter-what">No Matter What</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/fire-with-big-youth">Fire with Big Youth</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/dont-stop-me-now-with-i-blacky">Dont Stop Me Now with I Blacky</a>
                            <br><a href="https://illuminaticongo.bandcamp.com/track/thank-yous">Thank Yous</a>

                            `
        } else if (Option == "The Phoenix of My Imagination") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://itomlab.bandcamp.com/track/vast-fields-of-light-feat-gabriella-young">Vast Fields of Light (feat. Gabriella Young)</a>
                            <br><a href="https://itomlab.bandcamp.com/track/golden-waves">Golden Waves</a>
                            <br><a href="https://itomlab.bandcamp.com/track/squiggle-giggle">Squiggle Giggle</a>
                            <br><a href="https://itomlab.bandcamp.com/track/the-twilight-tone">The Twilight Tone</a>
                            <br><a href="https://itomlab.bandcamp.com/track/dream-tea">Dream Tea</a>
                            `
        } else if (Option == "The Journey Is the Destination") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://itomlab.bandcamp.com/track/starting-the-mothership">Starting the Mothership</a>
                            <br><a href="https://itomlab.bandcamp.com/track/djinn">Djinn</a>
                            <br><a href="https://itomlab.bandcamp.com/track/the-far-shore-akara-remix">The Far Shore | Akara - Remix</a>
                            <br><a href="https://itomlab.bandcamp.com/track/transients-more-than-meets-the-ear">Transients | More Than Meets the Ear</a>
                            <br><a href="https://itomlab.bandcamp.com/track/dance-into-the-sun-feat-patrick-haize">Dance Into the Sun (feat. Patrick Haize)</a>
                            <br><a href="https://itomlab.bandcamp.com/track/professional-dimensions">Professional Dimensions</a>
                            <br><a href="https://itomlab.bandcamp.com/track/galactic-mantra-432hz">Galactic Mantra | 432Hz</a>
                            <br><a href="https://itomlab.bandcamp.com/track/beethoven-sym7-mv2-432hz">Beethoven Sym7 Mv2 | 432Hz</a>
                            <br><a href="https://itomlab.bandcamp.com/track/cloud-9">Cloud 9</a>

                            `
        } else if (Option == "Dragon Scales") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://itomlab.bandcamp.com/track/eshakani">Eshakani</a>
                            <br><a href="https://itomlab.bandcamp.com/track/triangles-in-the-jungle">Triangles in the Jungle</a>
                            <br><a href="https://itomlab.bandcamp.com/track/wuji-waves">Wuji Waves</a>
                            <br><a href="https://itomlab.bandcamp.com/track/crown-sounds">Crown Sounds</a>
                            <br><a href="https://itomlab.bandcamp.com/track/formless">Formless</a>
                            <br><a href="https://itomlab.bandcamp.com/track/panther-meadow">Panther Meadow</a>
                            <br><a href="https://itomlab.bandcamp.com/track/ouroboros-om">Ouroboros OM</a>
                            <br><a href="https://itomlab.bandcamp.com/track/zen-clouds">Zen Clouds</a>
                            <br><a href="https://itomlab.bandcamp.com/track/the-ninth">The Ninth</a>
                            <br><a href="https://itomlab.bandcamp.com/track/snaked-geometry">Snaked Geometry</a>
                            <br><a href="https://itomlab.bandcamp.com/track/a-thousand-petaled-lotus">A Thousand Petaled Lotus</a>

                            `
        } else if (Option == "Brahmin") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://itomlab.bandcamp.com/track/metazen-2">MetaZen</a>
                            <br><a href="https://itomlab.bandcamp.com/track/home-bass">hOMe Bass</a>
                            <br><a href="https://itomlab.bandcamp.com/track/brahmin">Brahmin</a>
                            <br><a href="https://itomlab.bandcamp.com/track/at-the-speed-of-sound-2">At the Speed of Sound</a>
                            <br><a href="https://itomlab.bandcamp.com/track/digital-scrolls">Digital Scrolls</a>

                            `
        } else if (Option == "NEYEN") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://itomlab.bandcamp.com/track/orion-sky">Orion Sky</a>
                            <br><a href="https://itomlab.bandcamp.com/track/neyen-lives">Neyen Lives</a>
                            <br><a href="https://itomlab.bandcamp.com/track/shivai">Shivai</a>
                            <br><a href="https://itomlab.bandcamp.com/track/audiohuasca">Audiohuasca</a>
                            <br><a href="https://itomlab.bandcamp.com/track/sri-whomptra">Sri Whomptra</a>
                            <br><a href="https://itomlab.bandcamp.com/track/dreamstep">Dreamstep</a>
                            <br><a href="https://itomlab.bandcamp.com/track/the-real-ogs-2">The Real OG's</a>
                            <br><a href="https://itomlab.bandcamp.com/track/see-sharp">See Sharp</a>
                            <br><a href="https://itomlab.bandcamp.com/track/twinkle-twin-call">Twinkle Twin-Call</a>
                            <br><a href="https://itomlab.bandcamp.com/track/yayl">Ya'Yl</a>
                            <br><a href="https://itomlab.bandcamp.com/track/synchronis-city">Synchronis City</a>
                            <br><a href="https://itomlab.bandcamp.com/track/amorical">Amorical</a>
                            <br><a href="https://itomlab.bandcamp.com/track/eyemanja">Eyemanja</a>

                            `
        } else if (Option == "The Crop Circle of Life") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://itomlab.bandcamp.com/track/youniversoul">Youniversoul</a>
                            <br><a href="https://itomlab.bandcamp.com/track/om-igod">OM iGod</a>
                            <br><a href="https://itomlab.bandcamp.com/track/lexicon">Lexicon</a>
                            <br><a href="https://itomlab.bandcamp.com/track/electronic-shamanism">Electronic Shamanism</a>
                            <br><a href="https://itomlab.bandcamp.com/track/siddha-stargate">Siddha Stargate</a>
                            <br><a href="https://itomlab.bandcamp.com/track/atlantean-nights">Atlantean Nights</a>
                            <br><a href="https://itomlab.bandcamp.com/track/dream-13">Dream 13</a>
                            <br><a href="https://itomlab.bandcamp.com/track/ancient-future">Ancient Future</a>

                            `
        } else if (Option == "Atomic Consciousness") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br><a href="https://itomlab.bandcamp.com/track/kundalini-illumination">Kundalini Illumination</a>
                            <br><a href="https://itomlab.bandcamp.com/track/pi">PI</a>
                            <br><a href="https://itomlab.bandcamp.com/track/ancient-alien">Ancient Alien</a>
                            <br><a href="https://itomlab.bandcamp.com/track/geometronic">Geometronic</a>
                            <br><a href="https://itomlab.bandcamp.com/track/transmission-2012">Transmission 2012</a>
                            <br><a href="https://itomlab.bandcamp.com/track/you-must-experience">You Must Experience</a>
                            <br><a href="https://itomlab.bandcamp.com/track/galactic-mantra">Galactic Mantra</a>
                            <br><a href="https://itomlab.bandcamp.com/track/living-gods">Living Gods</a>
                            <br><a href="https://itomlab.bandcamp.com/track/iwonder">iWonder</a>
                            <br><a href="https://itomlab.bandcamp.com/track/spirit-molecule">Spirit Molecule</a>

                            `
        } else if (Option == "Khatum") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `
                            <br>
                            <br>
                            <br>
                            <br>            
                            <br><a href="https://soundcloud.com/nfnneo/sets/khatum">All Songs In a Playlist</a>
                            <br>
                            <br>
                            <br><a href="https://soundcloud.com/khatum/what-i-got-rough">64Upgrades: What I Got</a>
                            <br><a href="https://soundcloud.com/khatum/time-to-go-home-by-saer-one">time to go home</a>
                            <br><a href="https://soundcloud.com/khatum/krooked-liberty-2oo4">krooked liberty</a>
                            <br><a href="https://soundcloud.com/khatum/the-highest-ft-emcaa-moses">the highest</a>
                            <br><a href="https://soundcloud.com/khatum/meteor-charterz-recorded-2004">meteor charterz</a>
                            <br><a href="https://soundcloud.com/khatum/eotwc">EOTWC</a>

                            `
        } else if (Option == "") {
            IntervalTimeSecondPanel = 5000000;
            SecondPanelText = `

                            `
        } else {

            IntervalTimeSecondPanel = 5000000;
            FunctionIntervalSecondPanel();
            SecondPanelText = `
                            <br>Created by Max Meents 
                            <br>Send Email Suggestions
                            <br>and comments to
                            <br><a href="mailto:maxmeents@gmail.com">maxmeents@gmail.com</a>
                            <br>to earn special codes
                            <br>
                            <br>Unlock 1000 Rebirth Points
                            <br>by typing in 
                            <br>Rebirth 1000 Now
                            <br>into 
                            <br>Use Special Code
                            <br>
                            <br>*Use Special Code is
                            <br>located on the last
                            <br>page of the Main Menu
                            <br>
                            <br>Every Link to a song 
                            <br>by my favorite music artist
                            <br>Khatum 
                            <br>gives special codes



                            `;
        }
        $(".SecondPanel").html(SecondPanelText);
        FunctionTargetBlank();
    }

    function FunctionTargetBlank() {
        $('a').each(function() {
            var href = $(this).attr('href');
            $(this).attr('onclick', "window.open('" + href + "', '_blank')")
                .removeAttr('href');
        });
    }

    function simulateKeyPress(character) {
        jQuery.event.trigger({
            type: "keypress",
            keyCode: character
        });
    }

    function Menu() {
        //***Menu if keys are pressed
        document.onkeydown = checkKey;

        function checkKey(e) {

            e = e || window.event;

            if (e.keyCode == "38") {
                // up arrow
                if ($(".HO").hasClass("M1")) {
                    $(".M1").removeClass("HO").addClass("UHO");
                    $(".M12").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M2")) {
                    $(".M2").removeClass("HO").addClass("UHO");
                    $(".M1").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M3")) {
                    $(".M3").removeClass("HO").addClass("UHO");
                    $(".M2").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M4")) {
                    $(".M4").removeClass("HO").addClass("UHO");
                    $(".M3").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M5")) {
                    $(".M5").removeClass("HO").addClass("UHO");
                    $(".M4").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M6")) {
                    $(".M6").removeClass("HO").addClass("UHO");
                    $(".M5").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M7")) {
                    $(".M7").removeClass("HO").addClass("UHO");
                    $(".M6").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M8")) {
                    $(".M8").removeClass("HO").addClass("UHO");
                    $(".M7").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M9")) {
                    $(".M9").removeClass("HO").addClass("UHO");
                    $(".M8").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M10")) {
                    $(".M10").removeClass("HO").addClass("UHO");
                    $(".M9").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M11")) {
                    $(".M11").removeClass("HO").addClass("UHO");
                    $(".M10").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                } else if ($(".HO").hasClass("M12")) {
                    $(".M12").removeClass("HO").addClass("UHO");
                    $(".M11").removeClass("UHO").addClass("HO");
                    OptionsUp();
                    SecondPanel();
                }
            } else if (e.keyCode == "40") {
                // down arrow








                if ($(".HO").hasClass("M1")) {
                    $(".M1").removeClass("HO").addClass("UHO");
                    $(".M2").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M2")) {
                    $(".M2").removeClass("HO").addClass("UHO");
                    $(".M3").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M3")) {
                    $(".M3").removeClass("HO").addClass("UHO");
                    $(".M4").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M4")) {
                    $(".M4").removeClass("HO").addClass("UHO");
                    $(".M5").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M5")) {
                    $(".M5").removeClass("HO").addClass("UHO");
                    $(".M6").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M6")) {
                    $(".M6").removeClass("HO").addClass("UHO");
                    $(".M7").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M7")) {
                    $(".M7").removeClass("HO").addClass("UHO");
                    $(".M8").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M8")) {
                    $(".M8").removeClass("HO").addClass("UHO");
                    $(".M9").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M9")) {
                    $(".M9").removeClass("HO").addClass("UHO");
                    $(".M10").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M10")) {
                    $(".M10").removeClass("HO").addClass("UHO");
                    $(".M11").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M11")) {
                    $(".M11").removeClass("HO").addClass("UHO");
                    $(".M12").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                } else if ($(".HO").hasClass("M12")) {
                    $(".M12").removeClass("HO").addClass("UHO");
                    $(".M1").removeClass("UHO").addClass("HO");
                    OptionsDown();
                    SecondPanel();
                }


            } else if (e.keyCode == "37") {
                // left arrow
                SelectOptionBack();
            } else if (e.keyCode == "39") {
                // right arrow
                SelectOption();
            } else if (e.keyCode == "13") {
                SelectOption();

            }

        }
    }

    function SelectOptionBack() {

        GetOptionAndWhichMenu()
            //***SelectOptionBack()
        if (WhichMenu == "Skill Points Main Level") {
            SkillPointsPage1();
        }
        if (WhichMenu == "Skill Points Battle") {
            SkillPointsPage1();
        }


        if (WhichMenu == "Skill Points") {
            MainMenu6();
        }
        if (WhichMenu == "Skill Points Page Two") {
            SkillPointsPage1();
        }
        //***Select Main Menu Page One
        if (WhichMenu == "Mining") {
            MainMenu();
        }
        if (WhichMenu == "Battle") {
            MainMenu();
            SetBackground("BattleBackground.jpg")
        }
        //***Go Back From Main Menu Page Two 
        if (WhichMenu == "Main Menu Page Two") {
            MainMenu();
        }
        //***Go Back From Main Menu Page Three 
        if (WhichMenu == "Main Menu Page Three") {
            MainMenu2();
        }
        //***Go Back From Main Menu Page Four 
        if (WhichMenu == "Main Menu Page Four") {
            MainMenu3();
        }
        //***Go Back From Main Menu Page Five 
        if (WhichMenu == "Main Menu Page Five") {
            MainMenu4();
        }
        //***Go Back From Main Menu Page Six 
        if (WhichMenu == "Main Menu Page Six") {
            MainMenu5();
        }
        //***Go Back From Main Menu Special Codes 
        if (WhichMenu == "Main Menu Special Codes") {
            MainMenu6();
        }
        if (Option == "Skill Points") {
            MainMenu6();
        }
        //***Go Back From Items 
        if (WhichMenu == "Items") {
            MainMenu();
        }
        //***Go Back From Gathering 
        if (WhichMenu == "Gathering") {
            MainMenu();
        }
        //***Go Back From Gathering Page Two 
        if (WhichMenu == "Gathering Page Two") {
            FunctionInsertMenu_Gathering();
        }
        //***Go Back From Gathering Page Three 
        if (WhichMenu == "Gathering Page Three") {
            FunctionInsertMenu_Gathering2();
        }
        //***Go Back From Gathering Page Four 
        if (WhichMenu == "Gathering Page Four") {
            FunctionInsertMenu_Gathering3();
        }
        //***Go Back From Items Buy
        if (WhichMenu == "Items Buy") {
            Items();
        }
        //***Go Back From Items Sell 
        if (WhichMenu == "Items Sell") {
            Items();
        }
        //***Go Back From Items Use 
        if (WhichMenu == "Items Use") {
            Items();
        }
        //***Go Back From Sell Minerals 
        if (WhichMenu == "Sell Minerals") {
            ItemsSell();
        }
        //***Go Back From Sell Minerals Page Two 
        if (WhichMenu == "Sell Minerals Page Two") {
            ItemsSellMinerals();
        }
        //***Go Back From Sell Minerals Page Three 
        if (WhichMenu == "Sell Minerals Page Three") {
            ItemsSellMinerals2();
        }
        //***Go Back From Music 
        if (WhichMenu == "Music") {
            MainMenu3();
        }
        //***Go Back From Music Page Two 
        if (WhichMenu == "Music Page Two") {
            FunctionInsertMenu_Music();
        }
        //***Go Back From Music Page Three 
        if (WhichMenu == "Music Page Three") {
            FunctionInsertMenu_Music2();
        }
        //***Go Back From Music Page Four 
        if (WhichMenu == "Music Page Four") {
            FunctionInsertMenu_Music3();
        }
        //***Go Back From Music Page Five 
        if (WhichMenu == "Music Page Five") {
            FunctionInsertMenu_Music4();
        }
        //***Go Back From Music Page Six 
        if (WhichMenu == "Music Page Six") {
            FunctionInsertMenu_Music5();
        }
        //***Go back from bandcamp artists
        if (WhichMenu == "Alais Clay" || WhichMenu == "Steve Grant" || WhichMenu == "Truthseekah" || WhichMenu == "Illuminati Congo" || WhichMenu == "Itom Lab" || WhichMenu == "PTP" || WhichMenu == "Watsky" || WhichMenu == "Nursehella" || WhichMenu == "Spirit of Truth" || WhichMenu == "Illuminati Congo" || WhichMenu == "Itom Lab" || WhichMenu == "Linkin Park") {
            FunctionInsertMenu_Music();
        }

        $(".HO").addClass("UHO").removeClass("HO");
        $(".M1").addClass("HO").removeClass("UHO");
        OptionsDown();
    }
    //***Option and Which Menu
    function GetOptionAndWhichMenu() {

        Option = $(".HO").text();
        Option = Option.replace(/[^a-zA-Z ]/g, "");
        WhichMenu = $(".MenuName").text();
        WhichMenu = WhichMenu.replace(/[^a-zA-Z ]/g, "");
    }
    //***Function Set Background
    function SetBackground(ImageName) {
        $('.Background').attr('src', 'img/' + ImageName)
    }

    function SelectOption() {
        //***SelectOption()

        GetOptionAndWhichMenu()
            //***Select Rebirth
        if (Option == "Rebirth") {
            Rebirth();
            FunctionInit();
            MainMenu();
        }
        //***SO()
        if (Option == "Increase Phoenix Down by One" && WhichMenu == "Skill Points Battle") {
            FunctionInsertMenuIncreasePhoenixDownbyOne();
        }
        if (Option == "Main Level" && WhichMenu == "Skill Points") {
            FunctionInsertMenuSkillPointsMainLevel();
        }
        if (Option == "Battle" && WhichMenu == "Skill Points") {
            FunctionInsertMenuSkillPointsBattle();
        }
        //***Insert Unlock Select Option
        //***Unlock Farming Upon Select Option
        if (Option == "Unlock Farming" && WhichMenu == "Skill Points Main Level") {
            FunctionUnlockFarming();
            FunctionInsertMenuSkillPointsMainLevel();
        }
        //***Unlock Music Upon Select Option
        if (Option == "Unlock Music" && WhichMenu == "Skill Points Main Level") {
            FunctionUnlockMusic();
            FunctionInsertMenuSkillPointsMainLevel();
        }

        //***Unlock Gathering Upon Select Option
        if (Option == "Unlock Forest" && WhichMenu == "Skill Points Main Level") {
            FunctionUnlockForest();
            FunctionInsertMenuSkillPointsMainLevel();
        }
        if (Option == "Unlock Gathering" && WhichMenu == "Skill Points Main Level") {
            FunctionUnlockGathering();
            FunctionInsertMenuSkillPointsMainLevel();
        }
        //***Unlock Mining Upon Select Option
        if (Option == "Unlock Mining" && WhichMenu == "Skill Points Main Level") {
            FunctionUnlockMining();
            FunctionInsertMenuSkillPointsMainLevel();
        }
        //***Unlock Battle Upon Select Option
        if (Option == "Unlock Battle" && WhichMenu == "Skill Points Main Level") {
            FunctionUnlockBattle();
            FunctionInsertMenuSkillPointsMainLevel();
            SetBackground("BattleBackground.jpg")
        }
        //***Unlock Underground City Upon Select Option
        if (Option == "Unlock Underground City" && WhichMenu == "Skill Points Main Level") {
            FunctionUnlockUndergroundCity();
            FunctionInsertMenuSkillPointsMainLevel();
        }
        //***Unlock Farm Upon Select Option
        if (Option == "Unlock Farm" && WhichMenu == "Skill Points Main Level") {
            FunctionUnlockFarm();
            FunctionInsertMenuSkillPointsMainLevel();
            SetBackground("FarmBackground.jpeg")
        }
        //***Unlock Slime Area Select Option
        if (Option == "Unlock Slime Area" && WhichMenu == "Skill Points Battle") {
            FunctionUnlockSlimeArea();
            FunctionInsertMenuSkillPointsBattle();
        }
        if (Option == NameFarm && WhichMenu == "Battle") {
            FunctionBattleFarm(IntervalTimeBattleFarm);
            SetBackground("FarmBackground.jpeg")

        }
        if (Option == NameBattle && WhichMenu == "Main Menu") {
            FunctionInsertMenuBattle();
            SetBackground("BattleBackground.jpg")
        }

        //***Skill Points Page 1
        if (Option == "Skill Points") {
            SkillPointsPage1();
        }
        //***Skill Points Page 2
        if (Option == "More" && WhichMenu == "Skill Points") {
            SkillPointsPage2();
        }
        //***Select Underground City
        if (Option == "Underground City") {
            MiningUndergroundCity(IntervalTimeMiningUndergroundCity);
        }
        //***Select Forest
        if (Option == "Forest" && WhichMenu == "Gathering") {
            GatheringForest(IntervalTimeGatheringForest);
        }
        //***Select Mining
        if (Option == "Mining" && WhichMenu == "Main Menu") {
            Mining();

        }
        //***Select Items Select
        if (Option == "Items" && WhichMenu == "Main Menu") {
            Items();
        }
        //***Select Main Menu Page Two
        if (Option == "More" && WhichMenu == "Main Menu") {
            MainMenu2();
        }
        //***Select Main Menu Page Three
        if (Option == "More" && WhichMenu == "Main Menu Page Two") {
            MainMenu3();
        }
        //***Select Main Menu Page Four
        if (Option == "More" && WhichMenu == "Main Menu Page Three") {
            MainMenu4();
        }
        //***Select Main Menu Page Five
        if (Option == "More" && WhichMenu == "Main Menu Page Four") {
            MainMenu5();
        }
        //***Select Main Menu Page Six
        if (Option == "More" && WhichMenu == "Main Menu Page Five") {
            MainMenu6();
        }
        //***Select Main Menu Page Seven
        if (Option == "More" && WhichMenu == "Main Menu Page Six") {
            MainMenu7();
        }
        //Select Farming
        if (Option == "Farming" && WhichMenu == "Main Menu") {
            RunFarming();
        }
        //***Select Gathering Page 1
        if (Option == "Gathering") {
            FunctionInsertMenu_Gathering();
        }
        //***Select Gathering Page 2
        if (WhichMenu == "Gathering" && Option == "More") {
            FunctionInsertMenu_Gathering2();
        }
        //***Select Gathering Page 3
        if (WhichMenu == "Gathering Page Two" && Option == "More") {
            FunctionInsertMenu_Gathering3();
        }
        //***Select Gathering Page 4
        if (WhichMenu == "Gathering Page Three" && Option == "More") {
            FunctionInsertMenu_Gathering4();
        }
        //***Select Items Buy
        if (Option == "Buy" && WhichMenu == "Items") {
            ItemsBuy();
        }
        //***Select Items Sell Main
        if (Option == "Sell" && WhichMenu == "Items") {
            ItemsSell();
        }
        //***Select Items Sell Minerals Page 1
        if (Option == "Minerals" && WhichMenu == "Items Sell") {
            ItemsSellMinerals();
        }
        //***Select Items Sell Minerals Page 2
        if (Option == "More" && WhichMenu == "Sell Minerals") {
            ItemsSellMinerals2();
        }
        //***Select Items Sell Minerals Page 3
        if (Option == "More" && WhichMenu == "Sell Minerals Page Two") {
            ItemsSellMinerals3();
        }
        //***Select Items Use
        if (Option == "Use" && WhichMenu == "Items") {
            ItemsUse();
        }
        //***Select Music Page 1
        if (Option == 'Music' && WhichMenu == "Main Menu Page Three") {
            FunctionInsertMenu_Music();
        }
        //***Select Music Page 2
        if (Option == 'More' && WhichMenu == "Music") {
            FunctionInsertMenu_Music2();
        }
        //***Select Music Page 3
        if (Option == 'More' && WhichMenu == "Music Page Two") {
            FunctionInsertMenu_Music3();
        }
        //***Select Music Page 4
        if (Option == 'More' && WhichMenu == "Music Page Three") {
            FunctionInsertMenu_Music4();
        }
        //***Select Music Page 5
        if (Option == 'More' && WhichMenu == "Music Page Four") {
            FunctionInsertMenu_Music5();
        }
        //***Select Music Page 6
        if (Option == 'More' && WhichMenu == "Music Page Five") {
            FunctionInsertMenu_Music6();
        }
        //***Select Music Page 7
        if (Option == 'More' && WhichMenu == "Music Page Six") {
            FunctionInsertMenu_Music7();
        }
        //***Create Menu with bandcamp options
        if (Option == "Alais Clay" || Option == "Steve Grant" || Option == "Truthseekah" || Option == "Illuminati Congo" || Option == "Itom Lab" || Option == "PTP" || Option == "Watsky" || Option == "Nursehella" || Option == "Spirit of Truth" || Option == "Linkin Park") {
            $(".MenuName").html(Option);
            FunctionInsertMenu_MusicOptions();
        }
        //***Select Bandcamp 
        if (WhichMenu == "Alais Clay" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_AlaisClay_Bandcamp();
        }
        if (WhichMenu == "Steve Grant" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_SteveGrant_Bandcamp();
        }
        if (WhichMenu == "Truthseekah" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_Truthseekah_Bandcamp();
        }
        if (WhichMenu == "Watsky" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_Watsky_Bandcamp();
        }
        if (WhichMenu == "Nursehella" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_Nursehella_Bandcamp();
        }
        if (WhichMenu == "Spirit of Truth" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_SpiritofTruth_Bandcamp();
        }
        if (WhichMenu == "Illuminati Congo" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp();
        }
        if (WhichMenu == "Illuminati Congo" && Option == "Page Two") {
            FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp2();
        }
        if (WhichMenu == "Illuminati Congo" && Option == "Page Three") {
            FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp3();
        }
        if (WhichMenu == "Itom Lab" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_ItomLab_Bandcamp();
        }
        if (WhichMenu == "Linkin Park" && Option == "Bandcamp Albums") {
            FunctionInsertMenu_Music_LinkinPark_Bandcamp();
        }
        $(".HO").addClass("UHO").removeClass("HO");
        $(".M1").addClass("HO").removeClass("UHO");
        OptionsDown();

    }

    function TargetPractice() {
        ww = $(window).width();
        wh = $(window).height();

        rl = getRandomArbitrary(1, ww - 100)
        rt = getRandomArbitrary(1, wh - 100)
        $('body').append('<img class="Target" src="img/Target.png">').css({
            top: rt,
            left: rl
        })
        $('.Target').click(function() {

            $this = $(this).attr('src', 'img/Target Hit.png').addClass('Hit')
            setTimeout(function($this) {
                $('.Hit').remove();
                TargetPractice();
            }, 230)
        })
    }
    //TargetPractice();
    //Farming Function
    function RunFarming() {
        $('.Stage').hide();
        $('body').css("position", "relative")
        $(".ContainerContainer,.ShowUpgradeDirt,.MiningClick,.PlantHowManyAtATime,.ShowSell,.Money").show();
    }
    //***Function Insert Menu

    function FunctionInsertMenuSkillPointsMainLevel() {
        //***FunctionInsertMenuSkillPointsMainLevel()
        $(".MenuName").html("Skill Points Main Level");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;" + UnlockMusic);
        $(".M3").html("&emsp;&emsp;" + UnlockBattle);
        $(".M4").html("&emsp;&emsp;" + UnlockFarm);
        $(".M5").html("&emsp;&emsp;" + UnlockMining);
        $(".M6").html("&emsp;&emsp;" + UnlockUndergroundCity);
        $(".M7").html("&emsp;&emsp;" + UnlockGathering);
        $(".M8").html("&emsp;&emsp;" + UnlockForest);
        $(".M9").html("&emsp;&emsp;" + UnlockFarming);
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenuSkillPointsBattle() {
        //***FunctionInsertMenuSkillPoints Battle()
        $(".MenuName").html("Skill Points " + NameBattle);
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;" + UnlockFarming);
        $(".M3").html("&emsp;&emsp;" + UnlockSlimeArea);
        $(".M4").html("&emsp;&emsp;Increase Minimum Items by One");
        $(".M5").html("&emsp;&emsp;Increase Maximum Items by One");
        $(".M6").html("&emsp;&emsp;Increase Damage by One");
        $(".M7").html("&emsp;&emsp;Increase HP by Five");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }



    function FunctionInsertMenuBattle() {
        //***FunctionInsertMenuBattle()
        $(".MenuName").html(NameBattle);
        $(".M1").html("&emsp;&emsp;More ");
        $(".M2").html("&emsp;&emsp;" + NameFarm);
        $(".M3").html("&emsp;&emsp;" + NameSlimeArea);
        $(".M4").html("&emsp;&emsp;");
        $(".M5").html("&emsp;&emsp;");
        $(".M6").html("&emsp;&emsp;");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }






    function SkillPointsPage1() {
        //***SkillPointsPage1()
        $(".MenuName").html("Skill Points");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;Main Level");
        $(".M3").html("&emsp;&emsp;" + NameBattle);
        $(".M4").html("&emsp;&emsp;" + NameMining);
        $(".M5").html("&emsp;&emsp;" + NameFarming);
        $(".M6").html("&emsp;&emsp;Locked: Tree Cutting");
        $(".M7").html("&emsp;&emsp;" + NameGathering);
        $(".M8").html("&emsp;&emsp;Locked: Digging");
        $(".M9").html("&emsp;&emsp;Locked: Fishing");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function SkillPointsPage2() {
        //***SkillPointsPage2()
        $(".MenuName").html("Skill Points Page Two");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;Locked: Forging");
        $(".M3").html("&emsp;&emsp;Locked: Sewing");
        $(".M4").html("&emsp;&emsp;Locked: Apothecary");
        $(".M5").html("&emsp;&emsp;Locked: Alchemy");
        $(".M6").html("&emsp;&emsp;Locked: Jewellery");
        $(".M7").html("&emsp;&emsp;Locked: Animal Husbandry");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function MainMenu() {
        //***MainMenu()
        $(".MenuName").html("Main Menu");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;" + NameBattle);
        $(".M3").html("&emsp;&emsp;Locked: Store");
        $(".M4").html("&emsp;&emsp;" + NameMining);
        $(".M5").html("&emsp;&emsp;" + NameFarming);
        $(".M6").html("&emsp;&emsp;Locked: Tree Cutting");
        $(".M7").html("&emsp;&emsp;" + NameGathering);
        $(".M8").html("&emsp;&emsp;Locked: Fishing");
        $(".M9").html("&emsp;&emsp;Locked: Glass Blowing");
        $(".M10").html("&emsp;&emsp;Locked: Pottery");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;Locked: Items");
    }

    function FunctionInsertMenu_Gathering() {
        //***FunctionInsertMenu_Gathering()
        $(".MenuName").html("Gathering");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;" + NameForest);
        $(".M5").html("&emsp;&emsp;Locked: Desert");
        $(".M6").html("&emsp;&emsp;Locked: Tundra");
        $(".M7").html("&emsp;&emsp;Locked: Everglades");
        $(".M8").html("&emsp;&emsp;Locked: Unknown Island");
        $(".M9").html("&emsp;&emsp;Locked: Moon City");
        $(".M10").html("&emsp;&emsp;Locked: Sun City");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Gathering2() {
        //***FunctionInsertMenu_Gathering2()
        $(".MenuName").html("Gathering Page Two");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;Locked: Demon Town");
        $(".M5").html("&emsp;&emsp;Locked: Angel Clouds");
        $(".M6").html("&emsp;&emsp;Locked: Gods Home");
        $(".M7").html("&emsp;&emsp;Locked: Gods Creater City");
        $(".M8").html("&emsp;&emsp;Locked: Gods Creater Home");
        $(".M9").html("&emsp;&emsp;Locked: Multiverse Center");
        $(".M10").html("&emsp;&emsp;Locked: Ricks Garage");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Gathering3() {
        //***FunctionInsertMenu_Gathering3()
        $(".MenuName").html("Gathering Page Three");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;Locked: Tiffas Loot");
        $(".M5").html("&emsp;&emsp;Locked: Gokus Spaceship");
        $(".M6").html("&emsp;&emsp;Locked: Gohans Home");
        $(".M7").html("&emsp;&emsp;Locked: Vegetas House");
        $(".M8").html("&emsp;&emsp;Locked: Planet Namake");
        $(".M9").html("&emsp;&emsp;Locked: Planet Vegeta");
        $(".M10").html("&emsp;&emsp;Locked: Master Roshis Island");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Gathering4() {
        //***FunctionInsertMenu_Gathering4()
        $(".MenuName").html("Gathering Page Four");
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;");
        $(".M5").html("&emsp;&emsp;");
        $(".M6").html("&emsp;&emsp;");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;Locked: Whis Special Bag");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function MainMenu2() {
        //***MainMenu2()
        $(".MenuName").html("Main Menu Page Two");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;Locked: Digging");
        $(".M5").html("&emsp;&emsp;Locked: Forging");
        $(".M6").html("&emsp;&emsp;Locked: Sewing");
        $(".M7").html("&emsp;&emsp;Locked: Apothecary");
        $(".M8").html("&emsp;&emsp;Locked: Alchemy");
        $(".M9").html("&emsp;&emsp;Locked: Jewellery");
        $(".M10").html("&emsp;&emsp;Locked: Animal Husbandry");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function MainMenu3() {
        //***MainMenu3()
        $(".MenuName").html("Main Menu Page Three");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;" + NameMusic);
        $(".M4").html("&emsp;&emsp;");
        $(".M5").html("&emsp;&emsp;Locked: Gambling");
        $(".M6").html("&emsp;&emsp;Locked: School");
        $(".M7").html("&emsp;&emsp;Locked: Charity");
        $(".M8").html("&emsp;&emsp;Locked: Chores");
        $(".M9").html("&emsp;&emsp;Locked: Training");
        $(".M10").html("&emsp;&emsp;Locked: Hire Assistance");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function MainMenu4() {
        //***MainMenu4()
        $(".MenuName").html("Main Menu Page Four");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;Locked: High Stakes Gambling");
        $(".M5").html("&emsp;&emsp;Locked: Monster Contracts");
        $(".M6").html("&emsp;&emsp;Locked: Item Requests");
        $(".M7").html("&emsp;&emsp;Locked: Permits");
        $(".M8").html("&emsp;&emsp;Locked: Technologies");
        $(".M9").html("&emsp;&emsp;Locked: Recreational Activies");
        $(".M10").html("&emsp;&emsp;Locked: Weather Manipulation");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function MainMenu5() {
        //***MainMenu5()
        $(".MenuName").html("Main Menu Page Five");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Locked: Omega Battles");
        $(".M4").html("&emsp;&emsp;Locked: Raids");
        $(".M5").html("&emsp;&emsp;Locked: Psychotic Quest Requests");
        $(".M6").html("&emsp;&emsp;Locked: Weather Manipulation");
        $(".M7").html("&emsp;&emsp;Locked: Recreational Activies");
        $(".M8").html("&emsp;&emsp;Locked: Trancendence");
        $(".M9").html("&emsp;&emsp;Locked: Angel Interference");
        $(".M10").html("&emsp;&emsp;Locked: Spells");
        $(".M11").html("&emsp;&emsp;Locked: Rage Mode");
        $(".M12").html("&emsp;&emsp;");
    }

    function MainMenu6() {
        //***MainMenu6()
        $(".MenuName").html("Main Menu Page Six");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Skill Points");
        $(".M4").html("&emsp;&emsp;");
        $(".M5").html("&emsp;&emsp;Rebirth");
        $(".M6").html("&emsp;&emsp;Locked: Trancendence");
        $(".M7").html("&emsp;&emsp;Locked: Angel Rebirth");
        $(".M8").html("&emsp;&emsp;Locked: Devil Rebirth");
        $(".M9").html("&emsp;&emsp;Locked: God Rebirth");
        $(".M10").html("&emsp;&emsp;Locked: Multiverse Creator Rebirth");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function MainMenu7() {
        //***MainMenu7()
        $(".MenuName").html("Main Menu Special Codes");
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;");
        $(".M5").html("&emsp;&emsp;");
        $(".M6").html("&emsp;&emsp;");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;Locked: Earn Special Codes");
        $(".M12").html("&emsp;&emsp;Locked: Use Special Code");
    }

    function Mining() {
        //***Mining()
        $(".MenuName").html("Mining");
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;" + NameUndergroundCity);
        $(".M5").html("&emsp;&emsp;");
        $(".M6").html("&emsp;&emsp;");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function Items() {
        //***Items()
        $(".MenuName").html("Items");
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;Locked: Buy");
        $(".M5").html("&emsp;&emsp;Locked: Sell");
        $(".M6").html("&emsp;&emsp;Locked: Use");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function ItemsBuy() {
        //***ItemsBuy()
        $(".MenuName").html("Items Buy");
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;Locked: Equipment");
        $(".M3").html("&emsp;&emsp;Locked: AutoUse Items");
        $(".M4").html("&emsp;&emsp;Locked: Minerals");
        $(".M5").html("&emsp;&emsp;Locked: Key Items");
        $(".M6").html("&emsp;&emsp;Locked: Rebirth Items");
        $(".M7").html("&emsp;&emsp;Locked: Potions");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function ItemsSell() {
        //***ItemsSell()
        $(".MenuName").html("Items Sell");
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Locked: Equipment");
        $(".M4").html("&emsp;&emsp;Locked: AutoUse Items");
        $(".M5").html("&emsp;&emsp;Locked: Minerals");
        $(".M6").html("&emsp;&emsp;Locked: Potions");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function ItemsSellMinerals() {
        //***ItemsSellMinerals()
        $(".MenuName").html("Sell Minerals");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;Dirt");
        $(".M5").html("&emsp;&emsp;Sand");
        $(".M6").html("&emsp;&emsp;Clay");
        $(".M7").html("&emsp;&emsp;Glass");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function ItemsSellMinerals2() {
        //***ItemsSellMinerals2()
        $(".MenuName").html("Sell Minerals Page Two");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Coal");
        $(".M4").html("&emsp;&emsp;Iron");
        $(".M5").html("&emsp;&emsp;Copper");
        $(".M6").html("&emsp;&emsp;Bronze");
        $(".M7").html("&emsp;&emsp;Silver");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function ItemsSellMinerals3() {
        //***ItemsSellMinerals3()
        $(".MenuName").html("Sell Minerals Page Three");
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Ruby");
        $(".M4").html("&emsp;&emsp;Emerald");
        $(".M5").html("&emsp;&emsp;Diamond");
        $(".M6").html("&emsp;&emsp;");
        $(".M7").html("&emsp;&emsp;Orichalcum");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function ItemsUse() {
        //***ItemsUse()
        $(".MenuName").html("Items Use");
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;");
        $(".M5").html("&emsp;&emsp;Potions");
        $(".M6").html("&emsp;&emsp;");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function BattleEquipment() {
        //***BattleEquipment()
        $(".MenuName").html("Battle Equipment");
        $(".M1").html("&emsp;&emsp;Locked: Sword");
        $(".M2").html("&emsp;&emsp;Locked: Shield");
        $(".M3").html("&emsp;&emsp;Locked: Armor");
        $(".M4").html("&emsp;&emsp;Locked: Necklace");
        $(".M5").html("&emsp;&emsp;Locked: Earrings");
        $(".M6").html("&emsp;&emsp;Locked: Shoes");
        $(".M7").html("&emsp;&emsp;Locked: Helment");
        $(".M8").html("&emsp;&emsp;Locked: Crown");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_MusicOptions() {
        //***FunctionInsertMenu_MusicOptions()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Bandcamp Albums");
        $(".M4").html("&emsp;&emsp;Youtube");
        $(".M5").html("&emsp;&emsp;");
        $(".M6").html("&emsp;&emsp;");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music() {
        //***FunctionInsertMenu_Music()
        $(".MenuName").html("Music");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Khatum");
        $(".M4").html("&emsp;&emsp;Alais Clay");
        $(".M5").html("&emsp;&emsp;Steve Grant");
        $(".M6").html("&emsp;&emsp;Truthseekah");
        $(".M7").html("&emsp;&emsp;Illuminati Congo");
        $(".M8").html("&emsp;&emsp;Itom Lab");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music2() {
        //***FunctionInsertMenu_Music2()
        $(".MenuName").html("Music Page Two");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Watsky");
        $(".M4").html("&emsp;&emsp;Nursehella");
        $(".M5").html("&emsp;&emsp;Spirit of Truth");
        $(".M6").html("&emsp;&emsp;Illuminati Congo");
        $(".M7").html("&emsp;&emsp;Itom Lab");
        $(".M8").html("&emsp;&emsp;Linkin Park");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music3() {
        //***FunctionInsertMenu_Music3()
        $(".MenuName").html("Music Page Three");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Locked: Tupac Shakur");
        $(".M4").html("&emsp;&emsp;Locked: Guns n Roses");
        $(".M5").html("&emsp;&emsp;Locked: Elton John");
        $(".M6").html("&emsp;&emsp;Locked: Janis Joplin");
        $(".M7").html("&emsp;&emsp;Locked: The Doors");
        $(".M8").html("&emsp;&emsp;Locked: Neil Young");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music4() {
        //***FunctionInsertMenu_Music4()
        $(".MenuName").html("Music Page Four");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Locked: Eminem");
        $(".M4").html("&emsp;&emsp;Locked: Ray Charles");
        $(".M5").html("&emsp;&emsp;Locked: Jimi Hendrix");
        $(".M6").html("&emsp;&emsp;Locked: The Rolling Stones");
        $(".M7").html("&emsp;&emsp;Locked: Bob Dylan");
        $(".M8").html("&emsp;&emsp;Locked: The Beatles");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music5() {
        //***FunctionInsertMenu_Music5()
        $(".MenuName").html("Music Page Five");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Locked: The Who");
        $(".M4").html("&emsp;&emsp;Locked: Bruce Springsteen");
        $(".M5").html("&emsp;&emsp;Locked: U2");
        $(".M6").html("&emsp;&emsp;Locked: Stevie Wonder");
        $(".M7").html("&emsp;&emsp;Locked: Led Zeppelin");
        $(".M8").html("&emsp;&emsp;Locked: Bob Marley");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music6() {
        //***FunctionInsertMenu_Music6()
        $(".MenuName").html("Music Page Six");
        $(".M1").html("&emsp;&emsp;More");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Locked: Pink Floyd");
        $(".M4").html("&emsp;&emsp;Locked: Queen");
        $(".M5").html("&emsp;&emsp;Locked: Eric Clapton");
        $(".M6").html("&emsp;&emsp;Locked: Radiohead");
        $(".M7").html("&emsp;&emsp;Locked: Nirvana");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music_AlaisClay_Bandcamp() {
        //***FunctionInsertMenu_Music_AlaisClay_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Elevated Frequencies");
        $(".M4").html("&emsp;&emsp;End of an Era");
        $(".M5").html("&emsp;&emsp;Reverse Hypnosis");
        $(".M6").html("&emsp;&emsp;Alais Clay and Steve Grant Collabs");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music_SteveGrant_Bandcamp() {
        //***FunctionInsertMenu_Music_SteveGrant_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;");
        $(".M4").html("&emsp;&emsp;");
        $(".M5").html("&emsp;&emsp;");
        $(".M6").html("&emsp;&emsp;Alais Clay and Steve Grant Collabs");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music_Truthseekah_Bandcamp() {
        //***FunctionInsertMenu_Music_Truthseekah_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;COLORS");
        $(".M3").html("&emsp;&emsp;SEER");
        $(".M4").html("&emsp;&emsp;333");
        $(".M5").html("&emsp;&emsp;Spiritual Alchemy");
        $(".M6").html("&emsp;&emsp;Awaken The Fire");
        $(".M7").html("&emsp;&emsp;Take My Life");
        $(".M8").html("&emsp;&emsp;Second Life");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music_Khatum_Bandcamp() {
        //***FunctionInsertMenu_Music_Khatum_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Elevated Frequencies");
        $(".M4").html("&emsp;&emsp;End of an Era");
        $(".M5").html("&emsp;&emsp;Reverse Hypnosis");
        $(".M6").html("&emsp;&emsp;Alais Clay and Steve Grant Collabs");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music_Watsky_Bandcamp() {
        //***FunctionInsertMenu_Music_Watsky_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Elevated Frequencies");
        $(".M4").html("&emsp;&emsp;End of an Era");
        $(".M5").html("&emsp;&emsp;Reverse Hypnosis");
        $(".M6").html("&emsp;&emsp;Alais Clay and Steve Grant Collabs");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music_Nursehella_Bandcamp() {
        //***FunctionInsertMenu_Music_Nursehella_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Elevated Frequencies");
        $(".M4").html("&emsp;&emsp;End of an Era");
        $(".M5").html("&emsp;&emsp;Reverse Hypnosis");
        $(".M6").html("&emsp;&emsp;Alais Clay and Steve Grant Collabs");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music_SpiritofTruth_Bandcamp() {
        //***FunctionInsertMenu_Music_SpiritofTruth_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Elevated Frequencies");
        $(".M4").html("&emsp;&emsp;End of an Era");
        $(".M5").html("&emsp;&emsp;Reverse Hypnosis");
        $(".M6").html("&emsp;&emsp;Alais Clay and Steve Grant Collabs");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp() {
        //***FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp()
        $(".M1").html("&emsp;&emsp;Page Two");
        $(".M2").html("&emsp;&emsp;Time Killaz");
        $(".M3").html("&emsp;&emsp;Illuminate");
        $(".M4").html("&emsp;&emsp;Transfigure ft Aura Da Prophet");
        $(".M5").html("&emsp;&emsp;One Won");
        $(".M6").html("&emsp;&emsp;Lucid");
        $(".M7").html("&emsp;&emsp;Jewels");
        $(".M8").html("&emsp;&emsp;Illumine The Nadis");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp2() {
        //***FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp2()
        $(".M1").html("&emsp;&emsp;Page Three");
        $(".M2").html("&emsp;&emsp;Delphi");
        $(".M3").html("&emsp;&emsp;SevenR");
        $(".M4").html("&emsp;&emsp;All Is Tantra");
        $(".M5").html("&emsp;&emsp;InnerGalactic");
        $(".M6").html("&emsp;&emsp;Health Wealth Knowledge of Self");
        $(".M7").html("&emsp;&emsp;Siddha Gita");
        $(".M8").html("&emsp;&emsp;Green Is All I Need");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp3() {
        //***FunctionInsertMenu_Music_IlluminatiCongo_Bandcamp3()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Island of Patmos");
        $(".M4").html("&emsp;&emsp;NIGGATIVITY");
        $(".M5").html("&emsp;&emsp;ALL EYE SEE");
        $(".M6").html("&emsp;&emsp;ILLUMINATI CONGO");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    function FunctionInsertMenu_Music_ItomLab_Bandcamp() {
        //***FunctionInsertMenu_Music_ItomLab_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;The Phoenix of My Imagination");
        $(".M3").html("&emsp;&emsp;The Journey Is the Destination");
        $(".M4").html("&emsp;&emsp;Dragon Scales");
        $(".M5").html("&emsp;&emsp;Brahmin");
        $(".M6").html("&emsp;&emsp;NEYEN");
        $(".M7").html("&emsp;&emsp;The Crop Circle of Life");
        $(".M8").html("&emsp;&emsp;Atomic Consciousness");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");
    }

    function FunctionInsertMenu_Music_LinkinPark_Bandcamp() {
        //***FunctionInsertMenu_Music_LinkinPark_Bandcamp()
        $(".M1").html("&emsp;&emsp;");
        $(".M2").html("&emsp;&emsp;");
        $(".M3").html("&emsp;&emsp;Elevated Frequencies");
        $(".M4").html("&emsp;&emsp;End of an Era");
        $(".M5").html("&emsp;&emsp;Reverse Hypnosis");
        $(".M6").html("&emsp;&emsp;Alais Clay and Steve Grant Collabs");
        $(".M7").html("&emsp;&emsp;");
        $(".M8").html("&emsp;&emsp;");
        $(".M9").html("&emsp;&emsp;");
        $(".M10").html("&emsp;&emsp;");
        $(".M11").html("&emsp;&emsp;");
        $(".M12").html("&emsp;&emsp;");

    }

    //***RotateItemsGained
    function RotateItemsGainedBattle(ItemGained) {
        //***RotateItemsGainedBattle(ItemGained)
        GainedItemBattle9 = GainedItemBattle8;
        GainedItemBattle8 = GainedItemBattle7;
        GainedItemBattle7 = GainedItemBattle6;
        GainedItemBattle6 = GainedItemBattle5;
        GainedItemBattle5 = GainedItemBattle4;
        GainedItemBattle4 = GainedItemBattle3;
        GainedItemBattle3 = GainedItemBattle2;
        GainedItemBattle2 = GainedItemBattle1;
        GainedItemBattle1 = ItemGained;
    }

    function RotateItemsGainedMining(ItemGained) {
        //***RotateItemsGainedMining(ItemGained)
        GainedItemMining9 = GainedItemMining8;
        GainedItemMining8 = GainedItemMining7;
        GainedItemMining7 = GainedItemMining6;
        GainedItemMining6 = GainedItemMining5;
        GainedItemMining5 = GainedItemMining4;
        GainedItemMining4 = GainedItemMining3;
        GainedItemMining3 = GainedItemMining2;
        GainedItemMining2 = GainedItemMining1;
        GainedItemMining1 = ItemGained;
    }

    function RotateItemsGainedFarming(ItemGained) {
        //***RotateItemsGainedFarming(ItemGained)
        GainedItemFarming9 = GainedItemFarming8;
        GainedItemFarming8 = GainedItemFarming7;
        GainedItemFarming7 = GainedItemFarming6;
        GainedItemFarming6 = GainedItemFarming5;
        GainedItemFarming5 = GainedItemFarming4;
        GainedItemFarming4 = GainedItemFarming3;
        GainedItemFarming3 = GainedItemFarming2;
        GainedItemFarming2 = GainedItemFarming1;
        GainedItemFarming1 = ItemGained;
    }

    function RotateItemsGainedTreeCutting(ItemGained) {
        //***RotateItemsGainedTreeCutting(ItemGained)
        GainedItemTreeCutting9 = GainedItemTreeCutting8;
        GainedItemTreeCutting8 = GainedItemTreeCutting7;
        GainedItemTreeCutting7 = GainedItemTreeCutting6;
        GainedItemTreeCutting6 = GainedItemTreeCutting5;
        GainedItemTreeCutting5 = GainedItemTreeCutting4;
        GainedItemTreeCutting4 = GainedItemTreeCutting3;
        GainedItemTreeCutting3 = GainedItemTreeCutting2;
        GainedItemTreeCutting2 = GainedItemTreeCutting1;
        GainedItemTreeCutting1 = ItemGained;
    }

    function RotateItemsGainedGathering(ItemGained) {
        //***RotateItemsGainedGathering(ItemGained)
        GainedItemGathering9 = GainedItemGathering8;
        GainedItemGathering8 = GainedItemGathering7;
        GainedItemGathering7 = GainedItemGathering6;
        GainedItemGathering6 = GainedItemGathering5;
        GainedItemGathering5 = GainedItemGathering4;
        GainedItemGathering4 = GainedItemGathering3;
        GainedItemGathering3 = GainedItemGathering2;
        GainedItemGathering2 = GainedItemGathering1;
        GainedItemGathering1 = ItemGained;
    }

    function RotateItemsGainedDigging(ItemGained) {
        //***RotateItemsGainedDigging(ItemGained)
        GainedItemDigging9 = GainedItemDigging8;
        GainedItemDigging8 = GainedItemDigging7;
        GainedItemDigging7 = GainedItemDigging6;
        GainedItemDigging6 = GainedItemDigging5;
        GainedItemDigging5 = GainedItemDigging4;
        GainedItemDigging4 = GainedItemDigging3;
        GainedItemDigging3 = GainedItemDigging2;
        GainedItemDigging2 = GainedItemDigging1;
        GainedItemDigging1 = ItemGained;
    }

    function RotateItemsGainedForging(ItemGained) {
        //***RotateItemsGainedForging(ItemGained)
        GainedItemForging9 = GainedItemForging8;
        GainedItemForging8 = GainedItemForging7;
        GainedItemForging7 = GainedItemForging6;
        GainedItemForging6 = GainedItemForging5;
        GainedItemForging5 = GainedItemForging4;
        GainedItemForging4 = GainedItemForging3;
        GainedItemForging3 = GainedItemForging2;
        GainedItemForging2 = GainedItemForging1;
        GainedItemForging1 = ItemGained;
    }

    function RotateItemsGainedSewing(ItemGained) {
        //***RotateItemsGainedSewing(ItemGained)
        GainedItemSewing9 = GainedItemSewing8;
        GainedItemSewing8 = GainedItemSewing7;
        GainedItemSewing7 = GainedItemSewing6;
        GainedItemSewing6 = GainedItemSewing5;
        GainedItemSewing5 = GainedItemSewing4;
        GainedItemSewing4 = GainedItemSewing3;
        GainedItemSewing3 = GainedItemSewing2;
        GainedItemSewing2 = GainedItemSewing1;
        GainedItemSewing1 = ItemGained;
    }

    function RotateItemsGainedApothecary(ItemGained) {
        //***RotateItemsGainedApothecary(ItemGained)
        GainedItemApothecary9 = GainedItemApothecary8;
        GainedItemApothecary8 = GainedItemApothecary7;
        GainedItemApothecary7 = GainedItemApothecary6;
        GainedItemApothecary6 = GainedItemApothecary5;
        GainedItemApothecary5 = GainedItemApothecary4;
        GainedItemApothecary4 = GainedItemApothecary3;
        GainedItemApothecary3 = GainedItemApothecary2;
        GainedItemApothecary2 = GainedItemApothecary1;
        GainedItemApothecary1 = ItemGained;
    }

    function RotateItemsGainedAlchemy(ItemGained) {
        //***RotateItemsGainedAlchemy(ItemGained)
        GainedItemAlchemy9 = GainedItemAlchemy8;
        GainedItemAlchemy8 = GainedItemAlchemy7;
        GainedItemAlchemy7 = GainedItemAlchemy6;
        GainedItemAlchemy6 = GainedItemAlchemy5;
        GainedItemAlchemy5 = GainedItemAlchemy4;
        GainedItemAlchemy4 = GainedItemAlchemy3;
        GainedItemAlchemy3 = GainedItemAlchemy2;
        GainedItemAlchemy2 = GainedItemAlchemy1;
        GainedItemAlchemy1 = ItemGained;
    }

    function RotateItemsGainedJewellery(ItemGained) {
        //***RotateItemsGainedJewellery(ItemGained)
        GainedItemJewellery9 = GainedItemJewellery8;
        GainedItemJewellery8 = GainedItemJewellery7;
        GainedItemJewellery7 = GainedItemJewellery6;
        GainedItemJewellery6 = GainedItemJewellery5;
        GainedItemJewellery5 = GainedItemJewellery4;
        GainedItemJewellery4 = GainedItemJewellery3;
        GainedItemJewellery3 = GainedItemJewellery2;
        GainedItemJewellery2 = GainedItemJewellery1;
        GainedItemJewellery1 = ItemGained;
    }

    function RotateItemsGainedAnimalHusbandry(ItemGained) {
        //***RotateItemsGainedAnimalHusbandry(ItemGained)
        GainedItemAnimalHusbandry9 = GainedItemAnimalHusbandry8;
        GainedItemAnimalHusbandry8 = GainedItemAnimalHusbandry7;
        GainedItemAnimalHusbandry7 = GainedItemAnimalHusbandry6;
        GainedItemAnimalHusbandry6 = GainedItemAnimalHusbandry5;
        GainedItemAnimalHusbandry5 = GainedItemAnimalHusbandry4;
        GainedItemAnimalHusbandry4 = GainedItemAnimalHusbandry3;
        GainedItemAnimalHusbandry3 = GainedItemAnimalHusbandry2;
        GainedItemAnimalHusbandry2 = GainedItemAnimalHusbandry1;
        GainedItemAnimalHusbandry1 = ItemGained;
    }
    //***setIntervals
    function FunctionBattleFarm(IntervalTime) {
        //***BattleFarm()

        if (RunningBattleFarm == true) {
            clearInterval(IntervalBattleFarm)
        }
        IntervalBattleFarm = setInterval(function() {
            i = 0;
            while (i < NumberOfTurnsAtOnce) {
                console.log("running battle")
                RunningBattleFarm = true;
                if (StatusAliveOrDead == "Dead") {

                } else if (StatusAliveOrDead == "Alive") {
                    if (CurrentlyFighting == false) {
                        r = getRandom(0, 1000);
                        if (r <= VarBattleChance_Farm_Cow) {
                            EnemyDamage = VarBattleDamage_Farm_Cow
                            CurrentlyFighting = true;
                            console.log("Enemy is Cow")
                            EnemyName = "Cow";
                            EnemyHP = VarBattle_CowHP
                        } else if (r <= VarBattleChance_Farm_Horse) {
                            EnemyDamage = VarBattleDamage_Farm_Horse
                            CurrentlyFighting = true;
                            console.log("Enemy is Horse")
                            EnemyName = "Horse"
                            EnemyHP = VarBattle_HorseHP
                        } else if (r <= VarBattleChance_Farm_Pig) {
                            EnemyDamage = VarBattleDamage_Farm_Pig
                            CurrentlyFighting = true;
                            console.log("Enemy is Pig")
                            EnemyName = "Pig"
                            EnemyHP = VarBattle_PigHP
                        } else if (r <= VarBattleChance_Farm_Chicken) {
                            EnemyDamage = VarBattleDamage_Farm_Chicken
                            CurrentlyFighting = true;
                            console.log("Enemy is Chicken")
                            EnemyName = "Chicken"
                            EnemyHP = VarBattle_ChickenHP
                        }
                    } else {
                        if (EnemyName == "Cow") {
                            if (EnemyHP > 0) {
                                EnemyHP -= PlayerDamage
                                if (EnemyHP > 0) {
                                    StatsHealthCurrent -= EnemyDamage
                                } else {
                                    AmountGained = ItemMultiplierBattle;
                                    VarBattleAmount_Bones += AmountGained;
                                    ExpMainLevel += VarBattleExp_Bones * AmountGained;
                                    ExpBattle += VarBattleExp_Bones * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_Bones, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Bones + VarBattleName_Bones + ": " + AmountGained + NewItemImgEnd);
                                    AmountGained = ItemMultiplierGathering;
                                    VarBattleAmount_CowHide += AmountGained;
                                    ExpMainLevel += VarBattleExp_CowHide * AmountGained;
                                    ExpBattle += VarBattleExp_CowHide * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_CowHide, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_CowHide + VarBattleName_CowHide + ": " + AmountGained + NewItemImgEnd);
                                    AmountGained = ItemMultiplierBattle;
                                    VarBattleAmount_Steaks += AmountGained;
                                    ExpMainLevel += VarBattleExp_Steaks * AmountGained;
                                    ExpBattle += VarBattleExp_Steaks * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_Steaks, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Steaks + VarBattleName_Steaks + ": " + AmountGained + NewItemImgEnd);

                                    CurrentlyFighting = false;

                                }

                            } else {
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_Bones += AmountGained;
                                ExpMainLevel += VarBattleExp_Bones * AmountGained;
                                ExpBattle += VarBattleExp_Bones * AmountGained;
                                ShowItemsGained(VarBattleImgDir_Bones, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Bones + VarBattleName_Bones + ": " + AmountGained + NewItemImgEnd);
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_CowHide += AmountGained;
                                ExpMainLevel += VarBattleExp_CowHide * AmountGained;
                                ExpBattle += VarBattleExp_CowHide * AmountGained;
                                ShowItemsGained(VarBattleImgDir_CowHide, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_CowHide + VarBattleName_CowHide + ": " + AmountGained + NewItemImgEnd);
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_Steaks += AmountGained;
                                ExpMainLevel += VarBattleExp_Steaks * AmountGained;
                                ExpBattle += VarBattleExp_Steaks * AmountGained;
                                ShowItemsGained(VarBattleImgDir_Steaks, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Steaks + VarBattleName_Steaks + ": " + AmountGained + NewItemImgEnd);

                                CurrentlyFighting = false;
                            }
                        } else if (EnemyName == "Chicken") {
                            if (EnemyHP > 0) {
                                EnemyHP -= PlayerDamage
                                if (EnemyHP > 0) {
                                    StatsHealthCurrent -= EnemyDamage
                                } else {
                                    AmountGained = ItemMultiplierBattle;
                                    VarBattleAmount_Bones += AmountGained;
                                    ExpMainLevel += VarBattleExp_Bones * AmountGained;
                                    ExpBattle += VarBattleExp_Bones * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_Bones, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Bones + VarBattleName_Bones + ": " + AmountGained + NewItemImgEnd);
                                    CurrentlyFighting = false;
                                    AmountGained = ItemMultiplierGathering;
                                    VarBattleAmount_ChickenFeathers += AmountGained;
                                    ExpMainLevel += VarBattleExp_ChickenFeathers * AmountGained;
                                    ExpBattle += VarBattleExp_ChickenFeathers * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_ChickenFeathers, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_ChickenFeathers + VarBattleName_ChickenFeathers + ": " + AmountGained + NewItemImgEnd);
                                    AmountGained = ItemMultiplierBattle;
                                    VarBattleAmount_Eggs += AmountGained;
                                    ExpMainLevel += VarBattleExp_Eggs * AmountGained;
                                    ExpBattle += VarBattleExp_Eggs * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_Eggs, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Eggs + VarBattleName_Eggs + ": " + AmountGained + NewItemImgEnd);

                                }

                            } else {
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_Bones += AmountGained;
                                ExpMainLevel += VarBattleExp_Bones * AmountGained;
                                ExpBattle += VarBattleExp_Bones * AmountGained;
                                ShowItemsGained(VarBattleImgDir_Bones, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Bones + VarBattleName_Bones + ": " + AmountGained + NewItemImgEnd);
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_ChickenFeathers += AmountGained;
                                ExpMainLevel += VarBattleExp_ChickenFeathers * AmountGained;
                                ExpBattle += VarBattleExp_ChickenFeathers * AmountGained;
                                ShowItemsGained(VarBattleImgDir_ChickenFeathers, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_ChickenFeathers + VarBattleName_ChickenFeathers + ": " + AmountGained + NewItemImgEnd);
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_Eggs += AmountGained;
                                ExpMainLevel += VarBattleExp_Eggs * AmountGained;
                                ExpBattle += VarBattleExp_Eggs * AmountGained;
                                ShowItemsGained(VarBattleImgDir_Eggs, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Eggs + VarBattleName_Eggs + ": " + AmountGained + NewItemImgEnd);

                                CurrentlyFighting = false;
                            }
                        } else if (EnemyName == "Pig") {
                            if (EnemyHP > 0) {
                                EnemyHP -= PlayerDamage
                                if (EnemyHP > 0) {
                                    StatsHealthCurrent -= EnemyDamage
                                } else {
                                    AmountGained = ItemMultiplierBattle;
                                    VarBattleAmount_Bones += AmountGained;
                                    ExpMainLevel += VarBattleExp_Bones * AmountGained;
                                    ExpBattle += VarBattleExp_Bones * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_Bones, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Bones + VarBattleName_Bones + ": " + AmountGained + NewItemImgEnd);
                                    AmountGained = ItemMultiplierGathering;
                                    VarBattleAmount_PigSkin += AmountGained;
                                    ExpMainLevel += VarBattleExp_PigSkin * AmountGained;
                                    ExpBattle += VarBattleExp_PigSkin * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_PigSkin, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_PigSkin + VarBattleName_PigSkin + ": " + AmountGained + NewItemImgEnd);
                                    AmountGained = ItemMultiplierBattle;
                                    VarBattleAmount_Ham += AmountGained;
                                    ExpMainLevel += VarBattleExp_Ham * AmountGained;
                                    ExpBattle += VarBattleExp_Ham * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_Ham, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Ham + VarBattleName_Ham + ": " + AmountGained + NewItemImgEnd);

                                    CurrentlyFighting = false;
                                }

                            } else {
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_Bones += AmountGained;
                                ExpMainLevel += VarBattleExp_Bones * AmountGained;
                                ExpBattle += VarBattleExp_Bones * AmountGained;
                                ShowItemsGained(VarBattleImgDir_Bones, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Bones + VarBattleName_Bones + ": " + AmountGained + NewItemImgEnd);
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_PigSkin += AmountGained;
                                ExpMainLevel += VarBattleExp_PigSkin * AmountGained;
                                ExpBattle += VarBattleExp_PigSkin * AmountGained;
                                ShowItemsGained(VarBattleImgDir_PigSkin, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_PigSkin + VarBattleName_PigSkin + ": " + AmountGained + NewItemImgEnd);
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_Ham += AmountGained;
                                ExpMainLevel += VarBattleExp_Ham * AmountGained;
                                ExpBattle += VarBattleExp_Ham * AmountGained;
                                ShowItemsGained(VarBattleImgDir_Ham, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Ham + VarBattleName_Ham + ": " + AmountGained + NewItemImgEnd);

                                CurrentlyFighting = false;
                            }
                        } else if (EnemyName == "Horse") {
                            if (EnemyHP > 0) {
                                EnemyHP -= PlayerDamage
                                if (EnemyHP > 0) {
                                    StatsHealthCurrent -= EnemyDamage
                                } else {
                                    AmountGained = ItemMultiplierBattle;
                                    VarBattleAmount_Bones += AmountGained;
                                    ExpMainLevel += VarBattleExp_Bones * AmountGained;
                                    ExpBattle += VarBattleExp_Bones * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_Bones, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Bones + VarBattleName_Bones + ": " + AmountGained + NewItemImgEnd);
                                    AmountGained = ItemMultiplierGathering;
                                    VarBattleAmount_HorseHide += AmountGained;
                                    ExpMainLevel += VarBattleExp_HorseHide * AmountGained;
                                    ExpBattle += VarBattleExp_HorseHide * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_HorseHide, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_HorseHide + VarBattleName_HorseHide + ": " + AmountGained + NewItemImgEnd);
                                    AmountGained = ItemMultiplierBattle;
                                    VarBattleAmount_HorseMeat += AmountGained;
                                    ExpMainLevel += VarBattleExp_HorseMeat * AmountGained;
                                    ExpBattle += VarBattleExp_HorseMeat * AmountGained;
                                    ShowItemsGained(VarBattleImgDir_HorseMeat, AmountGained)
                                    RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_HorseMeat + VarBattleName_HorseMeat + ": " + AmountGained + NewItemImgEnd);

                                    CurrentlyFighting = false;
                                }

                            } else {
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_Bones += AmountGained;
                                ExpMainLevel += VarBattleExp_Bones * AmountGained;
                                ExpBattle += VarBattleExp_Bones * AmountGained;
                                ShowItemsGained(VarBattleImgDir_Bones, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_Bones + VarBattleName_Bones + ": " + AmountGained + NewItemImgEnd);
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_HorseHide += AmountGained;
                                ExpMainLevel += VarBattleExp_HorseHide * AmountGained;
                                ExpBattle += VarBattleExp_HorseHide * AmountGained;
                                ShowItemsGained(VarBattleImgDir_HorseHide, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_HorseHide + VarBattleName_HorseHide + ": " + AmountGained + NewItemImgEnd);
                                AmountGained = ItemMultiplierBattle;
                                VarBattleAmount_HorseMeat += AmountGained;
                                ExpMainLevel += VarBattleExp_HorseMeat * AmountGained;
                                ExpBattle += VarBattleExp_HorseMeat * AmountGained;
                                ShowItemsGained(VarBattleImgDir_HorseMeat, AmountGained)
                                RotateItemsGainedBattle(NewItemImgBeg + VarBattleImg_HorseMeat + VarBattleName_HorseMeat + ": " + AmountGained + NewItemImgEnd);

                                CurrentlyFighting = false;
                            }
                        }
                    }

                }
                i++
            }
        }, IntervalTime)
    }

    function GatheringForest(IntervalTime) {
        //***GatheringForest()

        if (RunningGatheringForest == true) {
            clearInterval(IntervalGatheringForest)
        }
        IntervalGatheringForest = setInterval(function() {
            i = 0;
            while (i < NumberOfTurnsAtOnce) {
                RunningGatheringForest = true;
                console.log("Running Gathering Forest")
                r = getRandom(0, 1000);
                if (r <= VarGatheringChance_Forest_GreenGrass) {
                    AmountGained = ItemMultiplierGathering;
                    VarGatheringAmount_GreenGrass += AmountGained;
                    ExpMainLevel += VarGatheringExp_GreenGrass * AmountGained;
                    ExpGathering += VarGatheringExp_GreenGrass * AmountGained;
                    ShowItemsGained(VarGatheringImgDir_GreenGrass, AmountGained)
                    RotateItemsGainedGathering(NewItemImgBeg + VarGatheringImg_GreenGrass + VarGatheringName_GreenGrass + ": " + AmountGained + NewItemImgEnd);
                }
                r = getRandom(0, 1000);
                if (r <= VarGatheringChance_Forest_EyeDrops) {
                    AmountGained = ItemMultiplierGathering;
                    VarGatheringAmount_EyeDrops += AmountGained;
                    ExpMainLevel += VarGatheringExp_EyeDrops * AmountGained;
                    ExpGathering += VarGatheringExp_EyeDrops * AmountGained;
                    ShowItemsGained(VarGatheringImgDir_EyeDrops, AmountGained)
                    RotateItemsGainedGathering(NewItemImgBeg + VarGatheringImg_EyeDrops + VarGatheringName_EyeDrops + ": " + AmountGained + NewItemImgEnd);
                }
                r = getRandom(0, 1000);
                if (r <= VarGatheringChance_Forest_Ether) {
                    AmountGained = ItemMultiplierGathering;
                    VarGatheringAmount_Ether += AmountGained;
                    ExpMainLevel += VarGatheringExp_Ether * AmountGained;
                    ExpGathering += VarGatheringExp_Ether * AmountGained;
                    ShowItemsGained(VarGatheringImgDir_Ether, AmountGained)
                    RotateItemsGainedGathering(NewItemImgBeg + VarGatheringImg_Ether + VarGatheringName_Ether + ": " + AmountGained + NewItemImgEnd);
                }
                r = getRandom(0, 1000);
                if (r <= VarGatheringChance_Forest_Potion) {
                    AmountGained = ItemMultiplierGathering;
                    VarGatheringAmount_Potion += AmountGained;
                    ExpMainLevel += VarGatheringExp_Potion * AmountGained;
                    ExpGathering += VarGatheringExp_Potion * AmountGained;
                    ShowItemsGained(VarGatheringImgDir_Potion, AmountGained)
                    RotateItemsGainedGathering(NewItemImgBeg + VarGatheringImg_Potion + VarGatheringName_Potion + ": " + AmountGained + NewItemImgEnd);
                }
                r = getRandom(0, 1000);
                if (r <= VarGatheringChance_Forest_PhoenixDown) {
                    AmountGained = ItemMultiplierGathering;
                    VarGatheringAmount_PhoenixDown += AmountGained;
                    ExpMainLevel += VarGatheringExp_PhoenixDown * AmountGained;
                    ExpGathering += VarGatheringExp_PhoenixDown * AmountGained;
                    ShowItemsGained(VarGatheringImgDir_PhoenixDown, AmountGained)
                    RotateItemsGainedGathering(NewItemImgBeg + VarGatheringImg_PhoenixDown + VarGatheringName_PhoenixDown + ": " + AmountGained + NewItemImgEnd);
                }
                r = getRandom(0, 1000);
                if (r <= VarGatheringChance_Forest_HastePotionLvL1) {
                    AmountGained = ItemMultiplierGathering;
                    VarGatheringAmount_HastePotionLvL1 += AmountGained;
                    ExpMainLevel += VarGatheringExp_HastePotionLvL1 * AmountGained;
                    ExpGathering += VarGatheringExp_HastePotionLvL1 * AmountGained;
                    ShowItemsGained(VarGatheringImgDir_HastePotionLvL1, AmountGained)
                    RotateItemsGainedGathering(NewItemImgBeg + VarGatheringImg_HastePotionLvL1 + VarGatheringName_HastePotionLvL1 + ": " + AmountGained + NewItemImgEnd);
                }
                i++;
            }
        }, IntervalTime)
    }

    function MiningUndergroundCity(IntervalTime) {
        //***MiningUndergroundCity()
        if (RunningMiningUndgroundCity == true) {
            clearInterval(IntervalMiningUndergroundCity)
        }
        IntervalMiningUndergroundCity = setInterval(function() {
            i = 0;
            while (i < NumberOfTurnsAtOnce) {
                RunningMiningUndgroundCity = true;
                r = getRandom(0, 1000);
                if (r <= VarMiningChanceUndergroundCity_Coal) {
                    AmountGained = ItemMultiplierMining;
                    VarMiningAmount_Coal += AmountGained;
                    ExpMainLevel += VarMiningExp_Coal * AmountGained;
                    ExpMining += VarMiningExp_Coal * AmountGained;
                    ShowItemsGained(VarMiningImgDir_Coal, AmountGained)
                    RotateItemsGainedMining(NewItemImgBeg + VarMiningImg_Coal + VarMiningName_Coal + ": " + AmountGained + NewItemImgEnd);
                }
                r = getRandom(0, 1000);
                if (r <= VarMiningChanceUndergroundCity_Iron) {
                    AmountGained = ItemMultiplierMining;
                    VarMiningAmount_Iron += AmountGained;
                    ExpMainLevel += VarMiningExp_Iron * AmountGained;
                    ExpMining += VarMiningExp_Iron * AmountGained;
                    ShowItemsGained(VarMiningImgDir_Iron, AmountGained)
                    RotateItemsGainedMining(NewItemImgBeg + VarMiningImg_Iron + VarMiningName_Iron + ": " + AmountGained + NewItemImgEnd);

                }
                r = getRandom(0, 1000);
                if (r <= VarMiningChanceUndergroundCity_Copper) {
                    AmountGained = ItemMultiplierMining;
                    VarMiningAmount_Copper += AmountGained;
                    ExpMainLevel += VarMiningExp_Copper * AmountGained;
                    ExpMining += VarMiningExp_Copper * AmountGained;
                    ShowItemsGained(VarMiningImgDir_Copper, AmountGained)
                    RotateItemsGainedMining(NewItemImgBeg + VarMiningImg_Copper + VarMiningName_Copper + ": " + AmountGained + NewItemImgEnd);

                }
                r = getRandom(0, 1000);
                if (r <= VarMiningChanceUndergroundCity_Bronze) {
                    AmountGained = ItemMultiplierMining;
                    VarMiningAmount_Bronze += AmountGained;
                    ExpMainLevel += VarMiningExp_Bronze * AmountGained;
                    ExpMining += VarMiningExp_Bronze * AmountGained;
                    ShowItemsGained(VarMiningImgDir_Bronze, AmountGained)
                    RotateItemsGainedMining(NewItemImgBeg + VarMiningImg_Bronze + VarMiningName_Bronze + ": " + AmountGained + NewItemImgEnd);

                }
                r = getRandom(0, 1000);
                if (r <= VarMiningChanceUndergroundCity_Silver) {
                    AmountGained = ItemMultiplierMining;
                    VarMiningAmount_Silver += AmountGained;
                    ExpMainLevel += VarMiningExp_Silver * AmountGained;
                    ExpMining += VarMiningExp_Silver * AmountGained;
                    ShowItemsGained(VarMiningImgDir_Silver, AmountGained)
                    RotateItemsGainedMining(NewItemImgBeg + VarMiningImg_Silver + VarMiningName_Silver + ": " + AmountGained + NewItemImgEnd);
                }
                i++
            }
        }, IntervalTime);
    }

    function FunctionPotionsHaste() {
        //***FunctionPotionsHaste()
        if (VarGatheringAmount_HastePotionLvL5 >= 1 && PotionsHasteInUseNow == false) {
            VarGatheringAmount_HastePotionLvL5 -= 1;
            PotionsHasteInUseNow = true;

            if (RunningGatheringForest == true) {
                clearInterval(IntervalGatheringForest);
                GatheringForest(IntervalTimeGatheringForestHasteLvL5);
            }
            if (RunningMiningUndgroundCity == true) {
                clearInterval(IntervalMiningUndergroundCity);
                MiningUndergroundCity(IntervalTimeMiningUndergroundCityHasteLvL5);
            }

            SecondPanel();
            //May need to do a clear timeout on rebirth
            setTimeout(function() {
                PotionsHasteInUseNow = false;

                if (RunningGatheringForest) {
                    clearInterval(IntervalGatheringForest)
                    GatheringForest(IntervalTimeGatheringForest);
                }
                if (RunningMiningUndgroundCity) {
                    clearInterval(IntervalMiningUndergroundCity)
                    MiningUndergroundCity(IntervalTimeMiningUndergroundCity);
                }
            }, PotionsHasteLvL5LengthOfTime)
        } else if (VarGatheringAmount_HastePotionLvL4 >= 1 && PotionsHasteInUseNow == false) {
            console.log('FunctionPotionsHaste Running')
            VarGatheringAmount_HastePotionLvL4 -= 1;
            PotionsHasteInUseNow = true;

            if (RunningGatheringForest == true) {
                clearInterval(IntervalGatheringForest);
                GatheringForest(IntervalTimeGatheringForestHasteLvL4);
            }
            if (RunningMiningUndgroundCity == true) {
                clearInterval(IntervalMiningUndergroundCity);
                MiningUndergroundCity(IntervalTimeMiningUndergroundCityHasteLvL4);
            }

            SecondPanel();
            console.log('FunctionPotionsHaste Running2')
            setTimeout(function() {
                console.log('FunctionPotionsHaste Exiting')
                PotionsHasteInUseNow = false;

                if (RunningGatheringForest) {
                    clearInterval(IntervalGatheringForest)
                    GatheringForest(IntervalTimeGatheringForest);
                }
                if (RunningMiningUndgroundCity) {
                    clearInterval(IntervalMiningUndergroundCity)
                    MiningUndergroundCity(IntervalTimeMiningUndergroundCity);
                }
            }, PotionsHasteLvL4LengthOfTime)
        } else if (VarGatheringAmount_HastePotionLvL3 >= 1 && PotionsHasteInUseNow == false) {
            console.log('FunctionPotionsHaste Running')
            VarGatheringAmount_HastePotionLvL3 -= 1;
            PotionsHasteInUseNow = true;

            if (RunningGatheringForest == true) {
                clearInterval(IntervalGatheringForest);
                GatheringForest(IntervalTimeGatheringForestHasteLvL3);
            }
            if (RunningMiningUndgroundCity == true) {
                clearInterval(IntervalMiningUndergroundCity);
                MiningUndergroundCity(IntervalTimeMiningUndergroundCityHasteLvL3);
            }

            SecondPanel();
            console.log('FunctionPotionsHaste Running2')
            setTimeout(function() {
                console.log('FunctionPotionsHaste Exiting')
                PotionsHasteInUseNow = false;

                if (RunningGatheringForest) {
                    clearInterval(IntervalGatheringForest)
                    GatheringForest(IntervalTimeGatheringForest);
                }
                if (RunningMiningUndgroundCity) {
                    clearInterval(IntervalMiningUndergroundCity)
                    MiningUndergroundCity(IntervalTimeMiningUndergroundCity);
                }
            }, PotionsHasteLvL3LengthOfTime)
        } else if (VarGatheringAmount_HastePotionLvL2 >= 1 && PotionsHasteInUseNow == false) {
            console.log('FunctionPotionsHaste Running')
            VarGatheringAmount_HastePotionLvL2 -= 1;
            PotionsHasteInUseNow = true;

            if (RunningGatheringForest == true) {
                clearInterval(IntervalGatheringForest);

                GatheringForest(IntervalTimeGatheringForestHasteLvL2);

            }
            if (RunningMiningUndgroundCity == true) {
                clearInterval(IntervalMiningUndergroundCity);
                MiningUndergroundCity(IntervalTimeMiningUndergroundCityHasteLvL2);
            }

            SecondPanel();
            console.log('FunctionPotionsHaste Running2')
            setTimeout(function() {
                console.log('FunctionPotionsHaste Exiting')
                PotionsHasteInUseNow = false;

                if (RunningGatheringForest) {
                    clearInterval(IntervalGatheringForest)
                    GatheringForest(IntervalTimeGatheringForest);
                }
                if (RunningMiningUndgroundCity) {
                    clearInterval(IntervalMiningUndergroundCity)
                    MiningUndergroundCity(IntervalTimeMiningUndergroundCity);
                }
            }, PotionsHasteLvL2LengthOfTime)
        } else if (VarGatheringAmount_HastePotionLvL1 >= 1 && PotionsHasteInUseNow == false) {
            console.log('FunctionPotionsHasteLvL1 Running')
            VarGatheringAmount_HastePotionLvL1 -= 1;
            PotionsHasteInUseNow = true;

            if (RunningGatheringForest == true) {
                clearInterval(IntervalGatheringForest);

                GatheringForest(IntervalTimeGatheringForestHasteLvL1);
            }
            if (RunningMiningUndgroundCity == true) {
                clearInterval(IntervalMiningUndergroundCity);
                MiningUndergroundCity(IntervalTimeMiningUndergroundCityHasteLvL1);
            }

            SecondPanel();
            console.log('FunctionPotionsHasteLvL1 Running2')
            setTimeout(function() {
                console.log('FunctionPotionsHasteLvL1 Exiting')
                PotionsHasteInUseNow = false;

                if (RunningGatheringForest) {
                    clearInterval(IntervalGatheringForest)
                    GatheringForest(IntervalTimeGatheringForest);
                }
                if (RunningMiningUndgroundCity) {
                    clearInterval(IntervalMiningUndergroundCity)
                    MiningUndergroundCity(IntervalTimeMiningUndergroundCity);
                }
            }, PotionsHasteLvL1LengthOfTime)
        }

    }
    //***Center Stage on Window
    function FunctionCenterStage() {
        //***FunctionCenterStage()
        ww = $(window).width();
        wh = $(window).height();
        $('.Background').css({
                width: ww + 50,
                height: wh + 50
            })
            //BG = Background
        b = $(".Stage");
        bgw = b.width();
        bgh = b.height();
        b.css({
            left: ww / 2 - bgw / 2,
            top: wh / 2 - bgh / 2
        });
    }


    function GetSetName() {
        //***Get and Set Player Name
        var name = getCookie("name");
        if (name) {
            $(".Name").html(name);
        } else {
            //name = window.prompt("Enter your name: ");
            $(".Name").html(name);
            setCookie("name", name, 760);
        }
    }

    function MainInfo() {
        if (VarGatheringAmount_HastePotionLvL5 >= 1) {
            PotionsHasteShowStatus = "Haste V Potions: " + VarGatheringAmount_HastePotionLvL5 + " Haste Active"
        } else if (VarGatheringAmount_HastePotionLvL4 >= 1) {
            PotionsHasteShowStatus = "Haste IV Potions: " + VarGatheringAmount_HastePotionLvL4 + " Haste Active"
        } else if (VarGatheringAmount_HastePotionLvL3 >= 1) {
            PotionsHasteShowStatus = "Haste III Potions: " + VarGatheringAmount_HastePotionLvL3 + " Haste Active"
        } else if (VarGatheringAmount_HastePotionLvL2 >= 1) {
            PotionsHasteShowStatus = "Haste II Potions: " + VarGatheringAmount_HastePotionLvL2 + " Haste Active"
        } else if (VarGatheringAmount_HastePotionLvL1 >= 1) {
            PotionsHasteShowStatus = "Haste I Potions: " + VarGatheringAmount_HastePotionLvL1 + " Haste Active"
        } else {
            PotionsHasteShowStatus = "Haste Potions: " + VarGatheringAmount_HastePotionLvL1 + " Haste Disabled"
        }





        GetOptionAndWhichMenu()
            //***First Panel Info
        if (WhichMenu == "Battle" && Option == "Farm") {
            MainInfoText = `
                            Currently Fighting: ${EnemyName}
                            <br>${VarItemsName_PhoenixDown}: ${VarItemsAmount_PhoenixDown}
                            <br>HP: ${StatsHealthCurrent} MP:${StatsMP}
                                <br>${PotionsHasteShowStatus}            
                                <br>Battle Level: ${LevelBattle} 
                                <br>Exp: ${shortenNumber(ExpBattle,2)} &emsp;&emsp;Next Level: ${shortenNumber(ExpTNLBattle,2)} 

                                <br>Equipped: Wooden Sword       
                                <br>Exp: 
                                C Hide: ${VarBattleExp_CowHide} ${VarBattleName_Steaks}: ${VarBattleExp_Steaks} 
                                 C Feathers: ${VarBattleExp_ChickenFeathers} 
                                ${VarBattleName_Eggs}: ${VarBattleExp_Eggs} P: ${VarBattleExp_PigSkin} 
                                ${VarBattleName_Ham}: ${VarBattleExp_Ham} ${VarBattleName_HorseHide}: ${VarBattleExp_HorseHide} 
                                H Meat: ${VarBattleExp_HorseMeat} ${VarBattleName_Bones}: ${VarBattleExp_Bones}
                        `;
        } else if (WhichMenu == "Battle") {
            MainInfoText = `
                            <br>${VarItemsName_PhoenixDown}: ${VarItemsAmount_PhoenixDown}
                            <br>HP: ${StatsHealthCurrent} MP:${StatsMP}
                            <br>${PotionsHasteShowStatus}            
                            <br>Battle Level: ${LevelBattle} 

                            <br>Exp: ${shortenNumber(ExpBattle,2)} &emsp;&emsp;Next Level: ${shortenNumber(ExpTNLBattle,2)} 
                            <br>
                            <br>Equipped: Wooden Sword                
                        `;
        } else if (WhichMenu == "Mining") {
            MainInfoText = `
                            ${PotionsHasteShowStatus}
                            <br>Mining Level: ${LevelMining} 
                            <br>Exp: ${shortenNumber(ExpMining,2)} &emsp;&emsp;Next Level: ${shortenNumber(ExpTNLMining,2)} 
                            <br>
                            <br>Equipped: Wooden Pickaxe                
                        `;
        } else if (WhichMenu == "Farming") {
            MainInfoText = `
                            ${PotionsHasteShowStatus}
                            <br>Farming: ${LevelFarming} 
                            <br>Exp: ${shortenNumber(ExpFarming,2)} &emsp;&emsp;Next Level: ${shortenNumber(ExpTNLFarming,2)}
                            <br>
                            <br>Equipped:
                            <br>Wooden Watering Can  
                            <br>Wooden Hoe  
                            <br>Wooden Sythe                 

                        `;
        } else if (WhichMenu == "Tree Cutting") {
            MainInfoText = `
                            ${PotionsHasteShowStatus}
                            <br>Tree Cutting: ${LevelTreeCutting} 
                            <br>Exp: ${shortenNumber(ExpTreeCutting,2)} &emsp;&emsp;Next Level: ${shortenNumber(ExpTNLTreeCutting,2)}
                            <br>
                            <br>Equipped: Wooden Axe             
                        `;
        } else if (WhichMenu == "Gathering") {
            MainInfoText = `
                            ${PotionsHasteShowStatus}
                            <br>Gathering: ${LevelGathering} 
                            <br>Exp: ${shortenNumber(ExpGathering,2)} &emsp;&emsp;Next Level: ${shortenNumber(ExpTNLGathering,2)}
                            <br>
                            <br>Equipped: Small Wooden Basket                 
                        `;
        } else {

            MainInfoText = `
                        ${PotionsHasteShowStatus}
                        <br>Level: ${LevelMainLevel} 
                        <br>Exp: ${shortenNumber(ExpMainLevel,2)} &emsp;&emsp;Next Level: ${shortenNumber(ExpTNLMainLevel,2)} 
                        <br>
                        <br>Rupees: ${Rupees}&emsp;&emsp;Diamond Dust: 0
                        <br>Fol: 0&emsp;&emsp;Bananas: 0&emsp;&emsp;Bottle Caps: 0
                        <br>Gil: 0&emsp;&emsp;Munny: 0&emsp;&emsp;Gold Coins: 0

                        <br>
                        `;

        }


        $(".MainInfo").html(MainInfoText);
    }




    function shortenNumber(num, digits) {
        //***shortenNumber(num, digits)
        var si = [{
                value: 1,
                symbol: ""
            }, {
                value: 1E3,
                symbol: "K"
            }, {
                value: 1E6,
                symbol: "M"
            }, {
                value: 1E9,
                symbol: "B"
            }, {
                value: 1E12,
                symbol: "T"
            }, {
                value: 1E15,
                symbol: "E"
            }, {
                value: 1E18,
                symbol: "F"
            }, {
                value: 1E21,
                symbol: "G"
            }, {
                value: 1E24,
                symbol: "H"
            }, {
                value: 1E27,
                symbol: "I"
            }, {
                value: 1E30,
                symbol: "J"
            }, {
                value: 1E33,
                symbol: "K"
            }, {
                value: 1E36,
                symbol: "L"
            }, {
                value: 1E39,
                symbol: "M"
            }, {
                value: 1E42,
                symbol: "N"
            }, {
                value: 1E45,
                symbol: "O"
            }, {
                value: 1E48,
                symbol: "P"
            }, {
                value: 1E51,
                symbol: "Q"
            }, {
                value: 1E54,
                symbol: "R"
            }, {
                value: 1E57,
                symbol: "S"
            }, {
                value: 1E60,
                symbol: "T"
            }, {
                value: 1E63,
                symbol: "U"
            }, {
                value: 1E66,
                symbol: "V"
            }, {
                value: 1E69,
                symbol: "W"
            }, {
                value: 1E72,
                symbol: "X"
            }, {
                value: 1E75,
                symbol: "Y"
            }, {
                value: 1E78,
                symbol: "Z"
            },

            {
                value: 1E81,
                symbol: "A2"
            }, {
                value: 1E84,
                symbol: "B2"
            }, {
                value: 1E87,
                symbol: "C2"
            }, {
                value: 1E90,
                symbol: "D2"
            }, {
                value: 1E93,
                symbol: "E2"
            }, {
                value: 1E96,
                symbol: "F2"
            }, {
                value: 1E99,
                symbol: "G2"
            }, {
                value: 1E102,
                symbol: "H2"
            }, {
                value: 1E105,
                symbol: "I2"
            }, {
                value: 1E108,
                symbol: "J2"
            }, {
                value: 1E111,
                symbol: "K2"
            }, {
                value: 1E114,
                symbol: "L2"
            }, {
                value: 1E117,
                symbol: "M2"
            }, {
                value: 1E120,
                symbol: "N2"
            }, {
                value: 1E123,
                symbol: "O2"
            }, {
                value: 1E126,
                symbol: "P2"
            }, {
                value: 1E129,
                symbol: "Q2"
            }, {
                value: 1E132,
                symbol: "R2"
            }, {
                value: 1E135,
                symbol: "S2"
            }, {
                value: 1E138,
                symbol: "T2"
            }, {
                value: 1E141,
                symbol: "U2"
            }, {
                value: 1E144,
                symbol: "V2"
            }, {
                value: 1E147,
                symbol: "W2"
            }, {
                value: 1E150,
                symbol: "X2"
            }, {
                value: 1E153,
                symbol: "Y2"
            }, {
                value: 1E156,
                symbol: "Z2"
            }, {
                value: 1E159,
                symbol: "A2"
            }, {
                value: 1E162,
                symbol: "B3"
            }, {
                value: 1E165,
                symbol: "C3"
            }, {
                value: 1E168,
                symbol: "D3"
            }, {
                value: 1E171,
                symbol: "E3"
            }, {
                value: 1E174,
                symbol: "F3"
            }, {
                value: 1E177,
                symbol: "G3"
            }, {
                value: 1E180,
                symbol: "H3"
            }, {
                value: 1E183,
                symbol: "I3"
            }, {
                value: 1E186,
                symbol: "J3"
            }, {
                value: 1E189,
                symbol: "K3"
            }, {
                value: 1E192,
                symbol: "L3"
            }, {
                value: 1E195,
                symbol: "M3"
            }, {
                value: 1E198,
                symbol: "N3"
            }, {
                value: 1E201,
                symbol: "O3"
            }, {
                value: 1E204,
                symbol: "P3"
            }, {
                value: 1E207,
                symbol: "Q3"
            }, {
                value: 1E210,
                symbol: "R3"
            }, {
                value: 1E213,
                symbol: "S3"
            }, {
                value: 1E216,
                symbol: "T3"
            }, {
                value: 1E219,
                symbol: "U3"
            }, {
                value: 1E222,
                symbol: "V3"
            }, {
                value: 1E225,
                symbol: "W3"
            }, {
                value: 1E228,
                symbol: "X3"
            }, {
                value: 1E231,
                symbol: "Y3"
            }, {
                value: 1E234,
                symbol: "Z3"
            },

        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        if (num < 1000) {
            digits = 0;
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }

    function setCookie(name, value, days) {
        //***setCookie(name, value, days)
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        //***getCookie(name)
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        //***eraseCookie(name)
        document.cookie = name + "=; Max-Age=-99999999;";
    }

    function simulateKey(keyCode, type, modifiers) {
        //***simulateKey(keyCode, type, modifiers)
        var evtName = (typeof(type) === "string") ? "key" + type : "keydown";
        var modifier = (typeof(modifiers) === "object") ? modifier : {};

        var event = document.createEvent("HTMLEvents");
        event.initEvent(evtName, true, false);
        event.keyCode = keyCode;

        for (var i in modifiers) {
            event[i] = modifiers[i];
        }

        document.dispatchEvent(event);
    }

    // Setup some tests

    var onKeyEvent = function(event) {
        var state = "pressed";

        if (event.type !== "keypress") {
            state = event.type.replace("key", "");
        }

        //console.log("Key with keyCode " + event.keyCode + " is " + state);
    };


    function getRandom(min, max) {
        //***getRandom(min, max)
        return Math.random() * (max - min) + min;
    }

    function getRandomInt(min, max) {
        //***getRandomInt(min, max)
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});