$(document).ready(function() {
    HP_Holder_Width = $('.HealthBarHolder').width();
    HP_Full = 0;
    Player = {
        Click: {
            Damage: 100
        },
        DPS: {
            Damage: 2000000
        }
    }
    Soil = {
        AreaLevel: 1,
        Current: 1,
        Level_1: {
            Name: 'Top Soil',
            HP_Increase: 1,
            Levels: 200,
            Color: 'brown',
            Chance: {
                Diamond: 0.999,
                Gold: 0.997,
                Malachite: 0.987,
                Aquamarine: 0.977,
                Amethyst: 0.967,
                Topaz: 0.957,
                Calcite: 0.947,
                Boxes: 0.942,
                Cherry: 0.940,
                Ancient: 0.939,
                Ice: 0.939,
                Stone: 0.939,
                Dirt: 0,
            },
        },
        Level_2: {
            Name: 'Sub Soil',
            HP_Increase: 5,
            Levels: 500,
            Color: 'brown',
            Chance: {
                Diamond: 0.999,
                Gold: 0.997,
                Malachite: 0.987,
                Aquamarine: 0.977,
                Amethyst: 0.967,
                Topaz: 0.957,
                Calcite: 0.947,
                Boxes: 0.942,
                Cherry: 0.940,
                Ancient: 0.939,
                Ice: 0.939,
                Stone: 0.839,
                Dirt: 0,
            },
        },
        Level_3: {
            Name: 'Crust',
            HP_Increase: 25,
            Levels: 1000,
            Color: 'brown',
            Chance: {
                Diamond: 0.999,
                Gold: 0.997,
                Malachite: 0.987,
                Aquamarine: 0.977,
                Amethyst: 0.967,
                Topaz: 0.957,
                Calcite: 0.947,
                Boxes: 0.942,
                Cherry: 0.940,
                Ancient: 0.939,
                Ice: 0.939,
                Stone: 0.739,
                Dirt: 0,
            },
        },
        Level_4: {
            Name: 'Bedrock',
            HP_Increase: 50,
            Levels: 2500,
            Color: 'brown',
            Chance: {
                Diamond: 0.999,
                Gold: 0.997,
                Malachite: 0.987,
                Aquamarine: 0.977,
                Amethyst: 0.967,
                Topaz: 0.957,
                Calcite: 0.947,
                Boxes: 0.942,
                Cherry: 0.940,
                Ancient: 0.939,
                Ice: 0.939,
                Stone: 0.439,
                Dirt: 0,
            },
        },
        Level_5: {
            Name: 'Ice Cave',
            HP_Increase: 100,
            Levels: 5000,
            Color: 'brown',
            Chance: {
                Diamond: 0.999,
                Gold: 0.997,
                Malachite: 0.987,
                Aquamarine: 0.977,
                Amethyst: 0.967,
                Topaz: 0.957,
                Calcite: 0.947,
                Boxes: 0.942,
                Cherry: 0.940,
                Ancient: 0.939,
                Ice: 0.739,
                Stone: 0.639,
                Dirt: 0,
            },
        },
        Level_6: {
            Name: 'Gold Cavern',
            HP_Increase: 250,
            Levels: 5000,
            Color: 'brown',
            Chance: {
                Diamond: 0.998,
                Gold: 0.978,
                Malachite: 0.968,
                Aquamarine: 0.958,
                Amethyst: 0.948,
                Topaz: 0.938,
                Calcite: 0.928,
                Boxes: 0.923,
                Cherry: 0.921,
                Ancient: 0.920,
                Ice: 0.720,
                Stone: 0.620,
                Dirt: 0,
            },
        },
        Level_6: {
            Name: 'Diamond Mound',
            HP_Increase: 250,
            Levels: 5000,
            Color: 'brown',
            Chance: {
                Diamond: 0.980,
                Gold: 0.976,
                Malachite: 0.966,
                Aquamarine: 0.956,
                Amethyst: 0.946,
                Topaz: 0.936,
                Calcite: 0.926,
                Boxes: 0.921,
                Cherry: 0.919,
                Ancient: 0.918,
                Ice: 0.718,
                Stone: 0.618,
                Dirt: 0,
            },
        },
        Level_7: {
            Name: 'Mineral Mountain',
            HP_Increase: 250,
            Levels: 5000,
            Color: 'brown',
            Chance: {
                Diamond: 0.980,
                Gold: 0.976,
                Malachite: 0.926,
                Aquamarine: 0.876,
                Amethyst: 0.826,
                Topaz: 0.776,
                Calcite: 0.726,
                Boxes: 0.721,
                Cherry: 0.719,
                Ancient: 0.718,
                Ice: 0.518,
                Stone: 0.418,
                Dirt: 0,
            },
        },
    }
    Blocks = {
        Grass: {
            HP: 100,
        },
        Dirt: {
            HP: 200,
        },
        Boxes: {
            HP: 500,
        },
        Ancient: {
            HP: 2000,
        },
        Cherry: {
            HP: 2000,
        },
        Stone: {
            HP: 1000,
        },
        Ice: {
            HP: 1000,
        },
        Hard_Ice: {
            HP: 1000,
        },
        Malachite: {
            HP: 1000,
        },
        Aquamarine: {
            HP: 1000,
        },
        Amethyst: {
            HP: 1000,
        },
        Topaz: {
            HP: 1000,
        },
        Calcite: {
            HP: 1000,
        },
        Gold: {
            HP: 2500,
        },
        Diamond: {
            HP: 10000,
        }
    };


    NumOfLayers = 10;
    $.each(Blocks, function(index, value) {
        setSource(index)
    });

    InitRandom();
    UpdateHealth(0);

    console.log(HP_Holder_Width)
    SetLayerTop();

    function CurrentHPIncrease() {
        return Soil['Level_' + Soil.Current].HP_Increase
    }

    function ConstantDamage() {
        UpdateHealth(Player.DPS.Damage / 50)
    }
    setInterval(function() {
        ConstantDamage();
    }, 20)
    $('.MineHolder').click(function() {
        UpdateHealth(Player.Click.Damage)


    })

    function SetLayerTop() {
        Top = 1;
        zIndex = 20;
        for (var Layer_Num = 1; Layer_Num <= NumOfLayers; Layer_Num++) {
            Top += 21;
            zIndex -= 1;
            $('.Layer_' + Layer_Num).css({ top: Top, position: 'absolute', zIndex: zIndex })
        }
    }

    function UpdateHealth(Damage) {

        HP -= Damage;
        $('.HealthBar').width(HP / HP_Full * HP_Holder_Width)
        $('.HealthNumber').html(shortenNumber(HP, 1))
        if (HP <= 0) {
            if (SoilName == 'Diamond' || SoilName == 'Gold' || SoilName == 'Malachite' || SoilName == 'Amethyst' || SoilName == 'Topaz' || SoilName == 'Calcite') {
                Items[SoilName].Total_Amount += 25
                $('.Inventory_Item' + '.' + SoilName).find('.AmountSpan').html(shortenNumber(Items[SoilName].Total_Amount, 1));
            }
            if (Soil.AreaLevel >= Soil['Level_' + Soil.Current].Levels) {
                Soil.Current++;
                Soil.AreaLevel = 1;
                SetSoilName();
                SetSoilLevel();
            } else {
                Soil.AreaLevel++;

                SetSoilLevel();
            }

            MoveLayersUp();
        }
    }

    function SetSoilLevel() {
        $('.AreaLevel').html(Soil.AreaLevel + ' / ' + Soil['Level_' + Soil.Current].Levels)
    }

    function IfSrcSet(Name) {
        if ($('.Layer_1 > img').attr('src') == window[Name + '_src']) {
            HP_Full = Blocks[Name].HP;
            SoilName = Name;
        }
    }

    function SetHP() {
        $.each(Blocks, function(index, value) {
            IfSrcSet(index)
        });

        HP_Full = HP_Full * CurrentHPIncrease();
        HP = HP_Full;
        $('.HealthNumber').html(shortenNumber(HP, 1))
        $('.HealthBar').width(HP_Holder_Width)
    }

    function InitRandom() {
        for (var Layer_Num = 1; Layer_Num < NumOfLayers; Layer_Num++) {
            MoveLayersUp();
        }
        $('.Layer_1 > img').attr('src', Grass_src);
        SetHP();


    }

    function SetSoilName() {
        $('.AreaName').html(Soil['Level_' + Soil.Current].Name);
    }

    function ChanceRetrive(Name) {
        return Soil['Level_' + Soil.Current].Chance[Name]
    }

    function RandomSRC() {
        Ran = Math.random()
        var reversed_object = {};
        Object.keys(Soil['Level_' + Soil.Current].Chance).reverse().forEach(function(key) { reversed_object[key] = Soil['Level_' + Soil.Current].Chance[key]; });
        $.each(reversed_object, function(index, value) {
            if (Ran > ChanceRetrive(index)) {
                SRC = window[index + '_src']
            }
        });

    }

    function BoxesChance(Name) {
        return Blocks.Boxes.Chance[Name]

    }

    function setSource(Name) {
        window[Name + '_src'] = 'img/Mining/img/' + Name + '_Block.png'
    }

    function MoveLayersUp() {



        for (var Layer_Num = 1; Layer_Num < NumOfLayers; Layer_Num++) {
            $('.Layer_' + Layer_Num + ' > img').attr('src', $('.Layer_' + (Layer_Num + 1) + ' > img').attr('src'));
        }
        RandomSRC();
        $('.Layer_10 > img').attr('src', SRC);
        SetHP();
    }
})