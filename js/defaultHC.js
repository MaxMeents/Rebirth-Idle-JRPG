  $(document).ready(function() {

      MarginAdjust();
      FirstPress = true;
      ImgsLoaded = 0;


      function MarginAdjust() {
          ContainerContainerSize = 323;
          CCS = ContainerContainerSize;
          IndexAdjust = 4
          if ($(window).width() > CCS * 4) {
              //console.log('Bigger than $(window).width() > 318 * 4 + 25')
              $('.Title').css({
                  marginLeft: -($(window).width() - (CCS * 4)) / 2
              })
              $('.BackgroundContainer').css({
                  marginLeft: ($(window).width() - (CCS * 4)) / 2
              })
          } else if ($(window).width() > CCS * 3) {
              IndexAdjust = 3
              $('.Title').css({
                  marginLeft: -($(window).width() - (CCS * 3)) / 2
              })
              $('.BackgroundContainer').css({
                  marginLeft: ($(window).width() - (CCS * 3)) / 2
              })
          } else if ($(window).width() > CCS * 2) {
              IndexAdjust = 2
              $('.Title').css({
                  marginLeft: -($(window).width() - (CCS * 2)) / 2
              })
              $('.BackgroundContainer').css({
                  marginLeft: ($(window).width() - (CCS * 2)) / 2
              })
          } else if ($(window).width() > CCS * 1) {
              IndexAdjust = 1
              $('.Title').css({
                  marginLeft: -($(window).width() - (CCS * 1)) / 2
              })
              $('.BackgroundContainer').css({
                  marginLeft: ($(window).width() - (CCS * 1)) / 2
              })
          }
      }
      $(window).on('resize', function() {

          MarginAdjust();

      });
      $(document).keydown(function(e) {
          if (e.which == 90) {
              $('.Selected').find('.Auto_Sell_Checkbox').trigger('click');
          }
          if (e.which == 87) {
              if (FirstPress == true) {
                  FirstPress = false;
                  Index = $('.ContainerContainer').first().index()
                  $('.ContainerContainer').first().addClass('Selected')
              } else {
                  ContainerContainerSize = 318;
                  Index -= IndexAdjust;

                  $('.ContainerContainer').removeClass('Selected')
                  $('.ContainerContainer').eq(Index).addClass('Selected');
                  $('html, body').animate({
                      scrollTop: $('.ContainerContainer').eq(Index).offset().top - $(window).height() / 4
                  }, 100);

              }
          }
          if (e.which == 83) {
              if (FirstPress == true) {
                  FirstPress = false;
                  Index = $('.ContainerContainer').first().index()
                  $('.ContainerContainer').first().addClass('Selected')
              } else {
                  Index += IndexAdjust;
                  $('.ContainerContainer').removeClass('Selected')
                  $('.ContainerContainer').eq(Index).addClass('Selected');
                  $('html, body').animate({
                      scrollTop: $('.ContainerContainer').eq(Index).offset().top - $(window).height() / 4
                  }, 100);

              }
          }
          if (e.which == 65) {
              if (FirstPress == true) {
                  FirstPress = false;
                  Index = $('.ContainerContainer').first().index()
                  $('.ContainerContainer').first().addClass('Selected')
              } else {
                  Index -= 1;
                  $('.ContainerContainer').removeClass('Selected')
                  $('.ContainerContainer').eq(Index).addClass('Selected');
                  $('html, body').animate({
                      scrollTop: $('.ContainerContainer').eq(Index).offset().top - $(window).height() / 4
                  }, 100);

              }
          }
          if (e.which == 68) {
              if (FirstPress == true) {
                  FirstPress = false;
                  Index = $('.ContainerContainer').first().next().index()
                  $('.ContainerContainer').first().next().addClass('Selected')
              } else {
                  Index += 1
                  $('.ContainerContainer').removeClass('Selected')
                  $('.ContainerContainer').eq(Index).addClass('Selected');
                  $('html, body').animate({
                      scrollTop: $('.ContainerContainer').eq(Index).offset().top - $(window).height() / 4
                  }, 100);

                  //$('.ContainerContainer').removeClass('Selected')

              }
          }
          if (e.which == 13) {
              $('.Selected').find('.Item_Image').click();

          }
          if (e.which == 69) {
              if (HowManyAtATime == 1) {
                  HowManyAtATime = 5;
                  $('.PlantHowManyAtATime').find('.HowMany').html('5x')
              } else if (HowManyAtATime == 5) {
                  HowManyAtATime = 25;
                  $('.PlantHowManyAtATime').find('.HowMany').html('25x')
              } else if (HowManyAtATime == 25) {
                  HowManyAtATime = 100;
                  $('.PlantHowManyAtATime').find('.HowMany').html('100x')
              } else if (HowManyAtATime == 100) {
                  HowManyAtATime = 1000;
                  $('.PlantHowManyAtATime').find('.HowMany').html('1K')
              } else if (HowManyAtATime == 1000) {
                  HowManyAtATime = 10000;
                  $('.PlantHowManyAtATime').find('.HowMany').html('10K')
              } else if (HowManyAtATime == 10000) {
                  HowManyAtATime = 100000;
                  $('.PlantHowManyAtATime').find('.HowMany').html('100K')
              } else if (HowManyAtATime == 100000) {
                  HowManyAtATime = 1000000;
                  $('.PlantHowManyAtATime').find('.HowMany').html('1M')
              } else if (HowManyAtATime == 1000000) {
                  HowManyAtATime = 1;
                  $('.PlantHowManyAtATime').find('.HowMany').html('1x')
              }
          }
          if (e.which == 81) {
              if (HowManyAtATime == 1) {
                  HowManyAtATime = 1000000;
                  $('.PlantHowManyAtATime').find('.HowMany').html('1M')
              } else if (HowManyAtATime == 5) {
                  HowManyAtATime = 1;
                  $('.PlantHowManyAtATime').find('.HowMany').html('1x')
              } else if (HowManyAtATime == 25) {
                  HowManyAtATime = 5;
                  $('.PlantHowManyAtATime').find('.HowMany').html('5x')
              } else if (HowManyAtATime == 100) {
                  HowManyAtATime = 25;
                  $('.PlantHowManyAtATime').find('.HowMany').html('25x')
              } else if (HowManyAtATime == 1000) {
                  HowManyAtATime = 100;
                  $('.PlantHowManyAtATime').find('.HowMany').html('100x')
              } else if (HowManyAtATime == 10000) {
                  HowManyAtATime = 1000;
                  $('.PlantHowManyAtATime').find('.HowMany').html('1K')
              } else if (HowManyAtATime == 100000) {
                  HowManyAtATime = 10000;
                  $('.PlantHowManyAtATime').find('.HowMany').html('10K')
              } else if (HowManyAtATime == 1000000) {
                  HowManyAtATime = 100000;
                  $('.PlantHowManyAtATime').find('.HowMany').html('100K')
              }
          }
      });


      HowManyAtATime = 1;

      $('.PlantHowManyAtATime').click(function() {
          //console.log(HowManyAtATime)
          if (HowManyAtATime == 1) {
              HowManyAtATime = 5;
              $('.PlantHowManyAtATime').find('.HowMany').html('5x')
          } else if (HowManyAtATime == 5) {
              HowManyAtATime = 25;
              $('.PlantHowManyAtATime').find('.HowMany').html('25x')
          } else if (HowManyAtATime == 25) {
              HowManyAtATime = 100;
              $('.PlantHowManyAtATime').find('.HowMany').html('100x')
          } else if (HowManyAtATime == 100) {
              HowManyAtATime = 1000;
              $('.PlantHowManyAtATime').find('.HowMany').html('1K')
          } else if (HowManyAtATime == 1000) {
              HowManyAtATime = 10000;
              $('.PlantHowManyAtATime').find('.HowMany').html('10K')
          } else if (HowManyAtATime == 10000) {
              HowManyAtATime = 100000;
              $('.PlantHowManyAtATime').find('.HowMany').html('100K')
          } else if (HowManyAtATime == 100000) {
              HowManyAtATime = 1000000;
              $('.PlantHowManyAtATime').find('.HowMany').html('1M')
          } else if (HowManyAtATime == 1000000) {
              HowManyAtATime = 1;
              $('.PlantHowManyAtATime').find('.HowMany').html('1x')
          }

      })

      $('.ShowSell').click(function() {
          $('.SellCrops').show();
          $('.SellCrops').addClass('ShowingSell')
          $('.SellCrops').find('*').addClass('ShowingSell')
      });
      $('.ShowUpgradeDirt, .Upgrade_Dirt_Img').click(function() {
          $('.UpgradeDirt').show();
          $('.UpgradeDirt').addClass('ShowingUpgradeDirt')
          $('.UpgradeDirt').find('*').addClass('ShowingUpgradeDirt')
      });
      $(document).click(function(e) {
          if (!$(e.target).is('.ShowSell, .ShowingSell')) {
              $('.SellCrops').hide();
          }
          if (!$(e.target).is('.ShowUpgradeDirt, .Upgrade_Dirt_Img, .ShowingUpgradeDirt')) {
              $('.UpgradeDirt').hide();
          }
      });

      c = {};
      Canvas_H = 200;
      Canvas_W = 200;
      Columns = 7;
      NumberOfTiles = Columns * Columns;
      Image_S = Canvas_W / Columns;
      var Dirt_1 = new Image();
      var Dirt_2 = new Image();
      var Dirt_3 = new Image();
      var Dirt_4 = new Image();
      var Wood_Floor = new Image();
      var Grass = new Image();
      var Brick = new Image();
      var Hay = new Image();
      Hay.src = 'img/Flooring_19.png';
      Brick.src = 'img/Stone Brick Floor.png';
      Grass.src = 'img/Flooring_28.png';
      Wood_Floor.src = 'img/Diamond Floor.png';

      Dirt_1.src = 'img/Dirt_1.png';
      Dirt_2.src = 'img/Dirt_2.png';
      Dirt_3.src = 'img/Dirt_3.png';
      Dirt_4.src = 'img/Dirt_4.png';

      Items = {
          Money: {
              Total: 1000000000,
          },

      }


      function Insert_Item(Title, Name, NumberOfStages, Cost, Title_BG_Color, Title_Text_Color, Interval_BG_Color, Interval_Fill_Color, Time, Dirt_Level, Total_Growing, Total_Fields, Growing_On_Screen, Inventory_Item_Only, Total_Amount, Tree, Crop, Produce, Multipler, Require, Require_Amount) {
          New_Item = `<div class="ContainerContainer">    
        <div class="ItemContainer">
        <div class="Item ` + Name + `">
        <div class="Item_Title">` + Title + `</div>
        <div class="Name">` + Name + `</div>
        <div class="Item_Cost">$10</div>
        <div class="Auto_Sell">
            <input type='checkbox' class="Auto_Sell_Checkbox" checked="yes"></input>
            <span class="Auto_Sell_Text">Auto Sell</span>
        </div>
        <div class="Total_Growing">Growing 0</div>
        <div class="Timer">
            <div class="Time"></div>
        </div>
        <div class="Image">
            <div class="Dirt">
                <img src="img/Dirt_1.png" alt="">
            </div>
            <div class="Item_Image">
                <img src="img/` + Name + `.png" alt="">
            </div>
        </div>
    </div>
    <canvas id="` + Name + `" class="Canvas_` + Name + `"></canvas>
    </div>
    </div>
    `;
          New_Inventory_Item_Sell_Crops = `
    <div class="ItemWrap">
        <img class="` + Name + ` ItemImage" src="img/` + Name + `.png" />
        <div class="Inventory_Item ` + Name + `">` + Title + `<span class="AmountSpan">0</span>
    </div>
    `;
          New_Inventory_Item_Upgrade_Dirt = `
    <div class="ItemWrap">
        <img class="` + Name + ` ItemImage" src="img/` + Name + `.png" />
        <div class="Inventory_Item ` + Name + `">` + Title + `<span class="Cost">0</span>
    </div>
    `;
          Items[Name] = {};
          I = Items[Name];
          I.Total = Total_Growing;
          I.Total_Amount = Total_Amount;
          I.Growing = Growing_On_Screen;
          I.Fields = Total_Fields;
          while (I.Growing > Columns * Columns) {
              I.Growing = I.Growing - Columns * Columns;
              I.Fields += 1;
          }
          I.Dirt_Level = Dirt_Level;
          I.NumOfStages = NumberOfStages + 2;
          I.Cost = {};
          I.Cost.Default = Cost;
          I.Cost.Sell = I.Cost.Default * .1 * Time / 10000;
          //console.log('Name: ' + Name + ' Sell Price: ' + I.Cost.Sell)
          I.Cost.Inflation = 0.1;
          I.Started = true;
          I.Title = {};
          I.Title.BG_Color = Title_BG_Color;
          I.Border_Color = Title_BG_Color;
          I.Title.Text_Color = Title_Text_Color;
          I.Interval = {};
          I.Interval.BG_Color = Interval_BG_Color;
          I.Interval.Fill_Color = Interval_Fill_Color;
          I.Interval.Time = Time;
          I.Tree = Tree;
          I.StopAnimation = false;
          I.Inventory_Item_Only = Inventory_Item_Only;
          I.Crop = Crop;
          I.Dirt_Level_Upgrade_Cost = Dirt_Level * Cost * 1000;
          I.Produce = Produce;
          I.ProduceMultiplier = Multipler;
          I.Require = Require;
          I.Require_Amount = Require_Amount;
          if (Crop == 1) {
              $('.UpgradeDirt').append(New_Inventory_Item_Upgrade_Dirt);
              Upgrade_Dirt(Name);
          }
          if (Inventory_Item_Only == 1) {
              $('.SellCrops').append(New_Inventory_Item_Sell_Crops);
              $('.' + Name + '.Inventory_Item').css({
                  background: I.Title.BG_Color,
                  color: I.Title.Text_Color
              })
              if (Name == 'Honey' || Name == 'Beer') {
                  Sell(Name);
              }
          } else {
              $('.SellCrops').append(New_Inventory_Item_Sell_Crops);
              if (Name == 'Bee_House' || Name == 'Keg') {

              } else {
                  Sell(Name);
              }



              $('.Crops').append(New_Item);
              Make_CTX(Name);

              CreateImages(Name, NumberOfStages);
              window[Name + 'SN'] = {};
              window[Name + 'SN'].Growthstage = '';
              window[Name + 'SN'].stageNum = 1;
              Item(Name);
              var style = $('<style>.Canvas_' + Name + ' { float: left; margin-left: -50px; }</style>');
              $('html > head').append(style);
              OnCanvasLoad(Name);

          }
      }



      /*          (Title,Name, NumberOfStages, Cost, Title_BG_Color, Title_Text_Color, Interval_BG_Color, Interval_Fill_Color, Time, Dirt_Level, Total_Growing, Total_Fields, Growing_On_Screen, Inventory_Item_Only, Total_Amount, Tree, Crop, Produce, Multipler, Require, Require_Amount)*/
      /*Trees*/
      Insert_Item("Apple", "Apple", 5, 100000, "rgb(172,0,0)", "White", "rgb(172,0,0)", "rgb(172,0,0)", 22000, 1, 0, 0, 0, 0, 0, 1, 1, 'Same', 1, 'none', 0);
      Insert_Item("Apricot", "Apricot", 5, 50000, "#D67005", "White", "#D67005", "White", 20000, 1, 0, 0, 0, 0, 0, 1, 1, 'Same', 1, 'none', 0);
      Insert_Item("Cherry", "Cherry", 5, 250000, "rgb(191,0,0)", "White", "rgb(191,0,0)", "rgb(191,0,0)", 17000, 1, 0, 0, 0, 0, 0, 1, 1, 'Same', 1, 'none', 0);
      Insert_Item("Orange", "Orange", 5, 80000, "rgb(243,179,38)", "White", "rgb(243,179,38)", "rgb(243,179,38)", 30000, 1, 0, 0, 0, 0, 0, 1, 1, 'Same', 1, 'none', 0);
      Insert_Item("Peach", "Peach", 5, 500000, "rgb(208,106,151)", "White", "rgb(208,106,151)", "rgb(208,106,151)", 34000, 1, 0, 0, 0, 0, 0, 1, 1, 'Same', 1, 'none', 0);
      Insert_Item("Pomegranate", "Pomegranate", 5, 300000, "rgb(156,0,80)", "White", "rgb(156,0,80)", "rgb(156,0,80)", 29000, 1, 0, 0, 0, 0, 0, 1, 1, 'Same', 1, 'none', 0);
      Insert_Item("Wood", "Log", -1, 50, "rgb(134,89,47)", "white", "rgb(134,89,47)", "rgb(134,89,47)", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      /*Fruits*/
      Insert_Item("Ancient Fruit", "Ancient_Fruit", 6, 20000, "#06AEC4", "white", "#06AEC4", "white", 7000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Blueberry", "Blueberry", 6, 2500, "#1925D9", "white", "#1925D9", "white", 20000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Cranberry", "Cranberry", 6, 1500, "#63000D", "White", "#63000D", "White", 15000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Grape", "Grape", 6, 800, "#761596", "White", "#761596", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Melon", "Melon", 6, 10000, "#EE5A67", "White", "#EE5A67", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Starfruit", "Starfruit", 6, 500, "#FFA31C", "White", "#FFA31C", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Strawberry", "Strawberry", 6, 5000, "#C63500", "White", "#C63500", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Gem Berry", "Sweet_Gem_Berry", 6, 2000, "#631D33", "White", "#631D33", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Tomato", "Tomato", 6, 120, "#FF4418", "White", "#FF4418", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      /*Vegetables */
      Insert_Item("Amaranth", "Amaranth", 5, 25, "#7F007F", "white", "#7F007F", "white", 15000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Artichoke", "Artichoke", 6, 14, "#007F00", "White", "#007F00", "White", 10000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Beet", "Beet", 5, 12, "rgb(105,0,0)", "White", "rgb(105,0,0)", "rgb(105,0,0)", 10000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Bok Choy", "Bok_Choy", 5, 5, "#58F71A", "rgb(40,40,40)", "#58F71A", "rgb(40,40,40)", 5000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Cauliflower", "Cauliflower", 6, 30, "#FFFFD1", "black", "#FFFFD1", "black", 12000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Corn", "Corn", 6, 12, "#E0BF27", "rgb(40,40,40)", "#E0BF27", "rgb(40,40,40)", 10000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Eggplant", "Eggplant", 6, 40, "#5F27C1", "White", "#5F27C1", "White", 20000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Garlic", "Garlic", 5, 35, "#B58D20", "White", "#B58D20", "White", 30000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Hops", "Hops", 7, 5000, "rgb(69,183,58)", "White", "rgb(69,183,58)", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Hot Pepper", "Hot_Pepper", 5, 200, "#FF3F14", "White", "#FF3F14", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Kale", "Kale", 5, 3, "#27A257", "White", "#27A257", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Parsnip", "Parsnip", 5, 40, "#DDA84E", "White", "#DDA84E", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Potato", "Potato", 6, 1, "#A96210", "White", "#A96210", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Pumpkin", "Pumpkin", 6, 300, "#FF7B00", "White", "#FF7B00", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Radish", "Radish", 5, 2, "#B30505", "White", "#B30505", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Red Cabbage", "Red_Cabbage", 6, 5, "#A80084", "White", "#A80084", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Rhubarb", "Rhubarb", 6, 20, "#EE4600", "White", "#EE4600", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Wheat", "Wheat", 5, 20, "#FFEC1A", "black", "#FFEC1A", "black", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Snow Yam", "Snow_Yam", 3, 200, "rgb(0,105,230)", "White", "rgb(0,105,230)", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);


      /*Flowers*/
      Insert_Item("Blue Jazz", "Blue_Jazz", 5, 50, "rgb(74,112,246)", "White", "rgb(74,112,246)", "White", 10000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Fairy Rose", "Fairy_Rose", 5, 110, "#DA6CE3", "White", "#DA6CE3", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Poppy", "Poppy", 5, 30, "#C43200", "White", "#C43200", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Spangle", "Summer_Spangle", 5, 1000, "#FB8047", "White", "#FB8047", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Sunflower", "Sunflower", 5, 300, "#FFD400", "black", "#FFD400", "black", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);
      Insert_Item("Tulip", "Tulip", 5, 50, "#F74040", "White", "#F74040", "White", 3000, 1, 0, 0, 0, 0, 0, 0, 1, 'Same', 1, 'none', 0);


      /*Animals*/
      Insert_Item("Chicken", "White_Chicken", 11, 15000, "rgb(255,226,175)", "Black", "rgb(255,226,175)", "rgb(255,226,175)", 400, 'Hay', 0, 0, 0, 0, 0, 0, 0, 'Egg', 1, 'none', 0);
      Insert_Item("Egg", "Egg", -1, 50, "rgb(250,238,221)", "black", "rgb(250,238,221)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Onyx Chicken", "Black_Chicken", 11, 15000, "rgb(78,64,56)", "White", "rgb(78,64,56)", "rgb(78,64,56)", 400, 'Hay', 0, 0, 0, 0, 0, 0, 0, 'Black_Egg', 1, 'none', 0);
      Insert_Item("Onyx Egg", "Black_Egg", -1, 50, "rgb(113,113,113)", "white", "rgb(113,113,113)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Golden Chicken", "Golden_Chicken", 12, 50000, "rgb(208,192,33)", "White", "rgb(208,192,33)", "rgb(208,192,33)", 400, 'Hay', 0, 0, 0, 0, 0, 0, 0, 'Golden_Egg', 1, 'none', 0);
      Insert_Item("Golden Egg", "Golden_Egg", -1, 50, "rgb(227,226,90)", "black", "rgb(227,226,90)", "black", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Brown Cow", "Brown_Cow", 12, 12000, "rgb(73,20,14)", "White", "rgb(73,20,14)", "rgb(73,20,14)", 500, 'Grass', 0, 0, 0, 0, 0, 0, 0, 'Chocolate_Milk', 1, 'none', 0);
      Insert_Item("Chocolate Milk", "Chocolate_Milk", -1, 50, "rgb(158,117,79)", "white", "rgb(158,117,79)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("White Cow", "White_Cow", 12, 12000, "rgb(255,225,164)", "black", "rgb(255,225,164)", "rgb(255,225,164)", 500, 'Grass', 0, 0, 0, 0, 0, 0, 0, 'Milk', 1, 'none', 0);
      Insert_Item("White Milk", "Milk", -1, 50, "rgb(249,234,213)", "black", "rgb(249,234,213)", "white", 700, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("White Sheep", "White_Sheep", 10, 12000, "rgb(255,247,221)", "black", "rgb(255,247,221)", "rgb(255,247,221)", 500, 'Grass', 0, 0, 0, 0, 0, 0, 0, 'Wool', 1, 'none', 0);
      Insert_Item("Wool", "Wool", -1, 50, "rgb(249,234,213)", "black", "rgb(249,234,213)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Black Sheep", "Black_Sheep", 12, 12000, "rgb(101,101,101)", "White", "rgb(101,101,101)", "rgb(101,101,101)", 500, 'Grass', 0, 0, 0, 0, 0, 0, 0, 'Black_Wool', 1, 'none', 0);
      Insert_Item("Void Wool", "Black_Wool", -1, 50, "rgb(249,234,213)", "black", "rgb(249,234,213)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Mythril Sheep", "Mythril_Sheep", 11, 12000, "rgb(0,105,230)", "White", "rgb(0,105,230)", "rgb(0,105,230)", 500, 'Grass', 0, 0, 0, 0, 0, 0, 0, 'Mythril_Wool', 1, 'none', 0);
      Insert_Item("Mythril Wool", "Mythril_Wool", -1, 50, "rgb(249,234,213)", "black", "rgb(249,234,213)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);

      /*Makers*/
      Insert_Item("Cherry Jammer", "Cherry_Jam_Maker", 9, 10000, "rgb(191,0,0)", "white", "rgb(191,0,0)", "white", 1000, 'Tile', 1, 0, 0, 0, 0, 0, 0, 'Cherry_Jam', 1, 'Cherry', 20);
      Insert_Item("Cherry Jam", "Cherry_Jam", -1, 100, "rgb(191,0,0)", "white", "rgb(191,0,0)", "black", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Blueberry Jammer", "Blueberry_Jam_Maker", 9, 10000, "#1925D9", "white", "#1925D9", "white", 1000, 'Tile', 1, 0, 0, 0, 0, 0, 0, 'Blueberry_Jam', 1, 'Blueberry', 20);
      Insert_Item("Blueberry Jam", "Blueberry_Jam", -1, 100, "#1925D9", "white", "#1925D9", "black", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);

      Insert_Item("Coal Maker", "Charcoal_Bin", 11, 50000, "rgb(127,42,15)", "white", "rgb(127,42,15)", "rgb(127,42,15)", 1200, 'Brick', 1, 0, 0, 0, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Coal", "Coal", -1, 100, "#FFEC1A", "black", "#FFEC1A", "black", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Bee House", "Bee_House", 11, 10000, "rgb(237,230,3)", "Black", "rgb(237,230,3)", "white", 1000, 'Tile', 1, 0, 0, 0, 0, 0, 0, 'Honey', 1, 'none', 0);
      Insert_Item("Honey", "Honey", -1, 100, "#FFEC1A", "black", "#FFEC1A", "black", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Keg", "Keg", 11, 500, "rgb(240,167,64)", "Black", "rgb(240,167,64)", "rgb(240,167,64)", 1000, 'Brick', 1, 0, 0, 0, 0, 0, 0, 'Beer', 1, 'none', 0);
      Insert_Item("Beer", "Beer", -1, 50, "rgb(163,123,16)", "white", "rgb(163,123,16)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      /*Minerals*/
      Insert_Item("Amethyst", "Amethyst", -1, 50, "rgb(250,238,221)", "black", "rgb(250,238,221)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Topaz", "Topaz", -1, 50, "rgb(250,238,221)", "black", "rgb(250,238,221)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Calcite", "Calcite", -1, 50, "rgb(250,238,221)", "black", "rgb(250,238,221)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Malachite", "Malachite", -1, 50, "rgb(250,238,221)", "black", "rgb(250,238,221)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Gold", "Gold", -1, 50, "rgb(250,238,221)", "black", "rgb(250,238,221)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      Insert_Item("Diamond", "Diamond", -1, 50, "rgb(250,238,221)", "black", "rgb(250,238,221)", "white", 1000, 'Tile', 0, 0, 0, 1, 0, 0, 0, 'Same', 1, 'none', 0);
      setTimeout(function() {
          getCookie("Apricot", 0, 365)
          setCookie("Orange", 0, 365)
          setCookie("Blueberry", 0, 365)
          setCookie("Cranberry", 0, 365)
          setCookie("Golden_Chicken", 0, 365)
          setCookie("Tomato", 0, 365)
          setCookie("Wheat", 0, 365)
          setCookie("White_Chicken", 0, 365)
          setCookie("Amaranth", 0, 365)
          setCookie("Snow_Yam", 0, 365)
          setCookie("Cherry_Jam_Maker", 0, 365)
          setCookie("Artichoke", 0, 365)
          setCookie("Beet", 0, 365)
          setCookie("Bok_Choy", 0, 365)
          setCookie("Black_Chicken", 0, 365)
          setCookie("Cauliflower", 0, 365)
          setCookie("Brown_Cow", 0, 365)
          setCookie("Corn", 0, 365)
          setCookie("Eggplant", 0, 365)
          setCookie("Garlic", 0, 365)
          setCookie("Black_Sheep", 0, 365)
          setCookie("Kale", 0, 365)
          setCookie("Tulip", 0, 365)
          setCookie("Ancient_Fruit", 0, 365)
          setCookie("Parsnip", 0, 365)
          setCookie("White_Cow", 0, 365)
          setCookie("Apple", 0, 365)
          setCookie("Potato", 0, 365)
          setCookie("White_Sheep", 0, 365)
          setCookie("Pumpkin", 0, 365)
          setCookie("Grape", 0, 365)
          setCookie("Radish", 0, 365)
          setCookie("Melon", 0, 365)
          setCookie("Red_Cabbage", 0, 365)
          setCookie("Starfruit", 0, 365)
          setCookie("Strawberry", 0, 365)
          setCookie("Sweet_Gem_Berry", 0, 365)
          setCookie("Mythril_Sheep", 0, 365)
          setCookie("Rhubarb", 0, 365)
          setCookie("Blue_Jazz", 0, 365)
          setCookie("Blueberry_Jam_Maker", 0, 365)
          setCookie("Fairy_Rose", 0, 365)
          setCookie("Charcoal_Bin", 0, 365)
          setCookie("Poppy", 0, 365)
          setCookie("Hops", 0, 365)
          setCookie("Summer_Spangle", 0, 365)
          setCookie("Sunflower", 0, 365)
          setCookie("Hot_Pepper", 0, 365)
          setCookie("Bee_House", 0, 365)
          setCookie("Keg", 0, 365)
          Items.Apricot.Growing = Number(getCookie("Apricot"));
          Items.Orange.Growing = Number(getCookie("Orange"));
          Items.Blueberry.Growing = Number(getCookie("Blueberry"));
          Items.Cranberry.Growing = Number(getCookie("Cranberry"));
          Items.Golden_Chicken.Growing = Number(getCookie("Golden_Chicken"));
          Items.Tomato.Growing = Number(getCookie("Tomato"));
          Items.Wheat.Growing = Number(getCookie("Wheat"));
          Items.White_Chicken.Growing = Number(getCookie("White_Chicken"));
          Items.Amaranth.Growing = Number(getCookie("Amaranth"));
          Items.Snow_Yam.Growing = Number(getCookie("Snow_Yam"));
          Items.Cherry_Jam_Maker.Growing = Number(getCookie("Cherry_Jam_Maker"));
          Items.Artichoke.Growing = Number(getCookie("Artichoke"));
          Items.Beet.Growing = Number(getCookie("Beet"));
          Items.Bok_Choy.Growing = Number(getCookie("Bok_Choy"));
          Items.Black_Chicken.Growing = Number(getCookie("Black_Chicken"));
          Items.Cauliflower.Growing = Number(getCookie("Cauliflower"));
          Items.Brown_Cow.Growing = Number(getCookie("Brown_Cow"));
          Items.Corn.Growing = Number(getCookie("Corn"));
          Items.Eggplant.Growing = Number(getCookie("Eggplant"));
          Items.Garlic.Growing = Number(getCookie("Garlic"));
          Items.Black_Sheep.Growing = Number(getCookie("Black_Sheep"));
          Items.Kale.Growing = Number(getCookie("Kale"));
          Items.Tulip.Growing = Number(getCookie("Tulip"));
          Items.Ancient_Fruit.Growing = Number(getCookie("Ancient_Fruit"));
          Items.Parsnip.Growing = Number(getCookie("Parsnip"));
          Items.White_Cow.Growing = Number(getCookie("White_Cow"));
          Items.Apple.Growing = Number(getCookie("Apple"));
          Items.Potato.Growing = Number(getCookie("Potato"));
          Items.White_Sheep.Growing = Number(getCookie("White_Sheep"));
          Items.Pumpkin.Growing = Number(getCookie("Pumpkin"));
          Items.Grape.Growing = Number(getCookie("Grape"));
          Items.Radish.Growing = Number(getCookie("Radish"));
          Items.Melon.Growing = Number(getCookie("Melon"));
          Items.Red_Cabbage.Growing = Number(getCookie("Red_Cabbage"));
          Items.Starfruit.Growing = Number(getCookie("Starfruit"));
          Items.Strawberry.Growing = Number(getCookie("Strawberry"));
          Items.Sweet_Gem_Berry.Growing = Number(getCookie("Sweet_Gem_Berry"));
          Items.Mythril_Sheep.Growing = Number(getCookie("Mythril_Sheep"));
          Items.Rhubarb.Growing = Number(getCookie("Rhubarb"));
          Items.Blue_Jazz.Growing = Number(getCookie("Blue_Jazz"));
          Items.Blueberry_Jam_Maker.Growing = Number(getCookie("Blueberry_Jam_Maker"));
          Items.Fairy_Rose.Growing = Number(getCookie("Fairy_Rose"));
          Items.Charcoal_Bin.Growing = Number(getCookie("Charcoal_Bin"));
          Items.Poppy.Growing = Number(getCookie("Poppy"));
          Items.Hops.Growing = Number(getCookie("Hops"));
          Items.Summer_Spangle.Growing = Number(getCookie("Summer_Spangle"));
          Items.Sunflower.Growing = Number(getCookie("Sunflower"));
          Items.Hot_Pepper.Growing = Number(getCookie("Hot_Pepper"));
          Items.Bee_House.Growing = Number(getCookie("Bee_House"));
          Items.Keg.Growing = Number(getCookie("Keg"));
      }, 100)
      $('.BackgroundContainer').height("+=3000")

      function Upgrade_Dirt(Name) {
          $('.UpgradeDirt > .ItemWrap').find('.' + Name).click(function() {
              I = Items[Name];
              if (I.Dirt_Level_Upgrade_Cost <= Items.Money.Total && I.Dirt_Level < 4) {
                  I.Dirt_Level++;
                  I.Dirt_Level_Upgrade_Cost = I.Dirt_Level * I.Dirt_Level * I.Dirt_Level * I.Cost.Default * 1000

              }
              Draw(Name, Name + window[Name + 'SN'].Growthstage);
              //console.log('Items[Name].total :' + IN.Total_Amount + ' Items[Name].Cost.Sell : ' + IN.Cost.Sell + ' Items.Money.Total: ' + Items.Money.Total)

          })
      }

      function Sell(Name) {

          $('.SellCrops > .ItemWrap').find('.' + Name).click(function() {
              I = Items[Name];

              //console.log('Items[Name].Total :' + IN.Total_Amount + ' Items[Name].Cost.Sell : ' + IN.Cost.Sell + ' Items.Money.Total: ' + Items.Money.Total)
              $(this).find('.AmountSpan').html('0')
              if (I.Tree == 1) {
                  I = Items[Name];
                  Items.Money.Total += I.Total_Amount * I.Cost.Sell * 0.01;
              } else {
                  I = Items[Name];
                  Items.Money.Total += I.Total_Amount * I.Cost.Sell
              }

              I.Total_Amount = 0;
              //console.log('Items[Name].total :' + IN.Total_Amount + ' Items[Name].Cost.Sell : ' + IN.Cost.Sell + ' Items.Money.Total: ' + Items.Money.Total)

          })
      }


      function LoadCanvasBackground() {
          $.each(Items, function(Name) {
              if (Name != 'Money') {
                  if (Items[Name].Inventory_Item_Only == 1) {

                  } else {
                      Draw_Dirt(Name);
                      Draw(Name, Name + '_Stage_1');
                  }
              }
              return

          });
      }

      function OnCanvasLoad() {

          Dirt_4.onload = function() {
              LoadCanvasBackground();
          }
          Wood_Floor.onload = function() {
              LoadCanvasBackground();
          }
      }

      function Make_CTX(Name) {
          c['canvas_' + Name] = document.getElementById(Name);
          c['ctx_' + Name] = c['canvas_' + Name].getContext('2d');
          c['ctx_' + Name].canvas.height = Canvas_H;
          c['ctx_' + Name].canvas.width = Canvas_W;

      }
      //Make_CTX('Strawberry')
      //Make_CTX('Blueberry')
      //Make_CTX('Ancient_Fruit')
      //Make_CTX('Artichoke')

      Growthstage = '_Stage_1'




      function CreateImages(Name, NumOfStages) {
          window[Name] = new Image();
          window[Name].src = 'img/' + Name + '.png';
          for (var stageNum = 1; stageNum <= NumOfStages; stageNum++) {
              window[Name + '_Stage_' + stageNum] = new Image();
              window[Name + '_Stage_' + stageNum].src = "img/" + Name + "_Stage_" + stageNum + ".png"
          }
      }

      //CreateImages('Strawberry', 7)
      //CreateImages('Blueberry', 7)
      //CreateImages('Ancient_Fruit', 7)
      //CreateImages('Artichoke', 6)



      function Make_Smaller(Item) {
          if (Canvas_W / Image_S * Canvas_H / Image_S < Items[Item].Growing) {
              Image_S *= .5;
              Draw_Dirt(Item);
          }
      }

      function Draw(Item, Growthstage) {

          //Make_Smaller('Strawberry');
          //Make_Smaller('Blueberry');
          //Make_Smaller('Ancient_Fruit');
          //Make_Smaller('Artichoke');

          while (Items[Item].Growing > Columns * Columns) {
              Items[Item].Growing = Items[Item].Growing - Columns * Columns;
              Items[Item].Fields += 1;
          }
          Counter = 0;

          for (var row = 0; row < Canvas_H / Image_S; row++) {
              for (var column = 0; column < Canvas_W / Image_S; column++) {

                  if (Counter < Items[Item].Growing) {
                      if (Item == 'Seed_Maker') {
                          c['ctx_' + Item].drawImage(eval(Item), row * Image_S, column * Image_S, Image_S, Image_S);
                          Counter++;
                      } else {

                          //console.log(Growthstage)
                          c['ctx_' + Item].drawImage(window[Growthstage], row * Image_S, column * Image_S, Image_S, Image_S);
                          Counter++;
                      }
                  }

              }
          }
      }



      function Draw_Dirt(Name) {

          Counter = 0;
          Dirt_Level = Items[Name].Dirt_Level;
          for (var row = 0; row < Canvas_H / Image_S; row++) {
              for (var column = 0; column < Canvas_W / Image_S; column++) {

                  if (Dirt_Level == 1) {

                      $('.Item.' + Name).find('.Dirt > img').attr('src', 'img/Dirt_1.png')
                      c['ctx_' + Name].drawImage(Dirt_1, row * Image_S, column * Image_S, Image_S, Image_S);
                  } else if (Dirt_Level == 2) {
                      $('.Item.' + Name).find('.Dirt > img').attr('src', 'img/Dirt_2.png')
                      c['ctx_' + Name].drawImage(Dirt_2, row * Image_S, column * Image_S, Image_S, Image_S);
                  } else if (Dirt_Level == 3) {
                      $('.Item.' + Name).find('.Dirt > img').attr('src', 'img/Dirt_3.png')
                      c['ctx_' + Name].drawImage(Dirt_3, row * Image_S, column * Image_S, Image_S, Image_S);
                  } else if (Dirt_Level == 4) {
                      $('.Item.' + Name).find('.Dirt > img').attr('src', 'img/Dirt_4.png')
                      c['ctx_' + Name].drawImage(Dirt_4, row * Image_S, column * Image_S, Image_S, Image_S);
                  } else if (Dirt_Level == 'Tile') {
                      $('.Item.' + Name).find('.Dirt > img').attr('src', 'img/Diamond Floor.png')
                      c['ctx_' + Name].drawImage(Wood_Floor, row * Image_S, column * Image_S, Image_S, Image_S);
                  } else if (Dirt_Level == 'Grass') {
                      $('.Item.' + Name).find('.Dirt > img').attr('src', 'img/Flooring_28.png')
                      c['ctx_' + Name].drawImage(Grass, row * Image_S, column * Image_S, Image_S, Image_S);
                  } else if (Dirt_Level == 'Brick') {
                      $('.Item.' + Name).find('.Dirt > img').attr('src', 'img/Stone Brick Floor.png')
                      c['ctx_' + Name].drawImage(Brick, row * Image_S, column * Image_S, Image_S, Image_S);
                  } else if (Dirt_Level == 'Hay') {
                      $('.Item.' + Name).find('.Dirt > img').attr('src', 'img/Flooring_19.png')
                      c['ctx_' + Name].drawImage(Hay, row * Image_S, column * Image_S, Image_S, Image_S);
                  }


              }
          }

      }







      function updateMoney() {
          window.setInterval(function() {
              $('.Money').html('$' + shortenNumber(Items.Money.Total, 2));
          }, 100)
      }

      function Item(Name) {
          I = Items[Name];
          $('.' + Name).find('.Timer').css({
              background: Items[Name].Interval.BG_Color
          })
          $('.' + Name).find('.Time').css({
              background: Items[Name].Interval.Fill_Color
          })
          $('.' + Name).find('.Item_Title').css({
              background: Items[Name].Title.BG_Color,
              color: Items[Name].Title.Text_Color
          })
          $('.' + Name + '.Inventory_Item').css({
              background: Items[Name].Title.BG_Color,
              color: Items[Name].Title.Text_Color
          })
          $('.' + Name).parent().css({
              borderColor: I.Border_Color
          })
          window.setInterval(function() {
              $('.' + Name).find('.Total_Growing').html('Fields ' + shortenNumber(Items[Name].Fields, 1))
              $('.' + Name).find('.Item_Cost').html('$' + shortenNumber(Items[Name].Cost.Default * HowManyAtATime, 2));
              if (Items[Name].Cost.Default * HowManyAtATime > Items.Money.Total) {
                  $('.' + Name).find('.Item_Cost').css({
                      color: 'gray'
                  })
              } else {
                  $('.' + Name).find('.Item_Cost').css({
                      color: 'blue'
                  })
              }
              //console.log($('.UpgradeDirt > .ItemWrap > .Inventory_Item.' + Name))
              if (Items[Name].Dirt_Level == 4) {
                  $('.UpgradeDirt > .ItemWrap > .Inventory_Item.' + Name).find('.Cost').html('MAX');
              } else {
                  $('.UpgradeDirt > .ItemWrap > .Inventory_Item.' + Name).find('.Cost').html('$' + shortenNumber(Items[Name].Dirt_Level_Upgrade_Cost, 2));
              }
              if (Items[Name].Dirt_Level_Upgrade_Cost > Items.Money.Total) {
                  $('.UpgradeDirt > .ItemWrap > .Inventory_Item.' + Name).css({
                      opacity: .4
                  })
              } else {
                  $('.UpgradeDirt > .ItemWrap > .Inventory_Item.' + Name).css({
                      opacity: 1
                  })
              }


          }, 100);
          stageNum = 1;
          Growthstage = '_Stage_' + stageNum;
          //StrawberrySN = {};
          //StrawberrySN.stageNum = 1;
          //BlueberrySN = {};
          //BlueberrySN.stageNum = 1;
          //Ancient_FruitSN = {};
          //Ancient_FruitSN.stageNum = 1;



          function Change_Images(ImageName) {
              NOS = Items[Name].NumOfStages;


              IntervalTime = Items[Name].Interval.Time / Items[Name].NumOfStages + 1;
              if (NOS == 0) {
                  //console.log(NOS)                
                  window[Name + 'SN'].Growthstage = '';
                  Draw_Dirt(ImageName);
                  Draw(ImageName, 'Wood_Floor');


              } else if (window[Name + 'SN'].stageNum < NOS - 1) {

                  setTimeout(function() {
                      window[Name + 'SN'].Growthstage = '_Stage_' + window[Name + 'SN'].stageNum;
                      Draw_Dirt(ImageName);
                      Draw(ImageName, ImageName + window[Name + 'SN'].Growthstage);
                      window[Name + 'SN'].stageNum += 1;
                      Change_Images(ImageName);

                  }, IntervalTime)

              } else if (window[Name + 'SN'].stageNum == NOS - 1) {
                  setTimeout(function() {
                      window[Name + 'SN'].Growthstage = '';
                      Draw_Dirt(ImageName);
                      Draw(ImageName, ImageName + window[Name + 'SN'].Growthstage);
                      window[Name + 'SN'].stageNum += 1;
                      Change_Images(ImageName);

                  }, IntervalTime)

              } else if (window[Name + 'SN'].stageNum == NOS) {
                  window[Name + 'SN'].stageNum = 1;

              }

          }

          function New_Cycle(Name) {
              if (Items[Name].Timer > 100) {

                  if (Number(getCookie(Name + '_Total_Growing')) > 1) {
                      Items[Name].Growing += Number(getCookie(Name + '_Total_Growing'))

                  }
                  if (Number(getCookie(Name + '_Add_To_Growing')) > 1) {
                      Items[Name].Growing += Number(getCookie(Name + '_Add_To_Growing'))
                      eraseCookie(Name + '_Add_To_Growing')
                  }
                  //Items.Money.Total += Items[Name].Cost.Default * .1 * (Items[Name].Fields * 64) * Items[Name].Growing
                  //console.log(Items[Name].Produce)
                  if (Items[Name].Produce != 'Same' && Name != 'Charcoal_Bin' && Name != 'Cherry_Jam_Maker' && Name != 'Blueberry_Jam_Maker') {
                      setCookie(Items[Name].Produce, Items[Items[Name].Produce].Total_Amount, 365)
                      Items[Name].Total = (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing;
                      Items[Name].Total_Amount = (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing;
                      Items[Items[Name].Produce].Total += (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing * Items[Name].ProduceMultiplier;
                      Items[Items[Name].Produce].Total_Amount += (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing * Items[Name].ProduceMultiplier;
                      $('.Inventory_Item' + '.' + Name).find('.AmountSpan').html(shortenNumber(Items[Name].Total_Amount, 1));
                      $('.Inventory_Item' + '.' + Items[Name].Produce).find('.AmountSpan').html(shortenNumber(Items[Items[Name].Produce].Total_Amount, 1));
                      //console.log('Name: ' + Name + '\n Produce:' + Items[Name].Produce + '\n Produce Amount : ' + Items[Items[Name].Produce].Total_Amount)
                  } else if (Name == 'Charcoal_Bin') {
                      Items[Name].Total = (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing;
                      Items[Name].Total_Amount = (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing;

                      for (var Charcoal_Bin = 0; Charcoal_Bin < Items[Name].Total_Amount; Charcoal_Bin++) {
                          if (Items['Log'].Total_Amount >= 100) {
                              Items['Coal'].Total += 20;
                              Items['Coal'].Total_Amount += 20;
                              Items['Log'].Total_Amount -= 100;
                          }
                      }
                      //console.log(Items['Coal'].Total_Amount)
                      $('.Inventory_Item' + '.' + 'Coal').find('.AmountSpan').html(shortenNumber(Items['Coal'].Total_Amount, 1));
                      $('.Inventory_Item' + '.' + 'Log').find('.AmountSpan').html(shortenNumber(Items['Log'].Total_Amount, 1));

                      $('.Inventory_Item' + '.' + Name).find('.AmountSpan').html(shortenNumber(Items[Name].Total_Amount, 1));


                  } else if (Items[Name].Tree == 1) {
                      Items[Name].Total += (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing * 100;
                      Items[Name].Total_Amount += (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing * 100;
                      $('.Inventory_Item' + '.' + Name).find('.AmountSpan').html(shortenNumber(Items[Name].Total_Amount, 1));
                      Items['Log'].Total += (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing * 10;
                      Items['Log'].Total_Amount += (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing * 10;
                      $('.Inventory_Item' + '.' + 'Log').find('.AmountSpan').html(shortenNumber(Items['Log'].Total_Amount, 1));
                  } else if (Name == 'Cherry_Jam_Maker' || Name == 'Blueberry_Jam_Maker') {
                      Items[Name].Total = (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing;
                      Items[Name].Total_Amount = (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing;
                      //console.log(Items[Name].Require)
                      for (var Jam_Maker = 0; Jam_Maker < Items[Name].Total_Amount; Jam_Maker++) {
                          if (Items[Items[Name].Require].Total_Amount >= Items[Name].Require_Amount) {
                              Items[Items[Name].Produce].Total += 1;
                              Items[Items[Name].Produce].Total_Amount += 1;
                              Items[Items[Name].Require].Total_Amount -= Items[Name].Require_Amount;
                              //console.log('Items[Items[Name].Produce].Total_Amount : ' + Items[Items[Name].Produce].Total_Amount)
                              //console.log('Items[Items[Name].Require].Total_Amount : ' + Items[Items[Name].Require].Total_Amount)
                          }
                      }

                      $('.Inventory_Item' + '.' + Items[Name].Produce).find('.AmountSpan').html(shortenNumber(Items[Items[Name].Produce].Total_Amount, 1));
                      $('.Inventory_Item' + '.' + Items[Name].Require).find('.AmountSpan').html(shortenNumber(Items[Items[Name].Require].Total_Amount, 1));

                      $('.Inventory_Item' + '.' + Name).find('.AmountSpan').html(shortenNumber(Items[Name].Total_Amount, 1));
                      //console.log('Items[Items[Name].Require].Total_Amount : ' + Items[Items[Name].Require].Total_Amount + ' \n Items[Name].Produce : ' + Items[Name].Produce + '\n Items[Name].Require : ' + Items[Name].Require + '\n Items[Items[Name].Produce].Total_Amount : ' + Items[Items[Name].Produce].Total_Amount + '\n Items[Items[Name].Require].Total_Amount : ' + Items[Items[Name].Require].Total_Amount)

                  } else {

                      Items[Name].Total += (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing;
                      Items[Name].Total_Amount += (Items[Name].Fields * NumberOfTiles) + Items[Name].Growing;
                      $('.Inventory_Item' + '.' + Name).find('.AmountSpan').html(shortenNumber(Items[Name].Total_Amount, 1));
                  }

                  Items[Name].Timer = 0;
                  //Make Strawberries grow here... don't draw strawberries anywhere else
                  if (Items[Name].Crop == 0) {

                  } else {
                      Draw_Dirt(Name);
                  }

                  if ($('.Item.' + Name).find('.Auto_Sell_Checkbox').is(':checked')) {
                      if (Items[Name].Produce == 'Same') {
                          I = Items[Name];

                          //console.log('Items[Name].Total :' + IN.Total_Amount + ' Items[Name].Cost.Sell : ' + IN.Cost.Sell + ' Items.Money.Total: ' + Items.Money.Total)
                          $('.SellCrops > .ItemWrap').find('.' + Name).find('.AmountSpan').html('0')
                          if (I.Tree == 1) {
                              I = Items[Name];
                              Items.Money.Total += I.Total_Amount * I.Cost.Sell * 0.01;
                          } else {
                              I = Items[Name];
                              Items.Money.Total += I.Total_Amount * I.Cost.Sell
                          }

                          I.Total_Amount = 0;
                      } else {
                          $('.SellCrops > .ItemWrap').find('.' + Items[Name].Produce).find('.AmountSpan').html('0');
                          I = Items[Items[Name].Produce];
                          Items.Money.Total += I.Total_Amount * I.Cost.Sell
                          I.Total_Amount = 0;

                      }
                  } else {

                  }

                  Change_Images(Name);
              }
              eraseCookie(Name);
              eraseCookie(Name + '_Total_Growing_Init');
              setCookie(Name + '_Add_To_Growing', 0, 365)
              setCookie(Name, Number(Items[Name].Total_Amount), 365)
              setCookie(Name + '_Total_Growing_Init', Number(Items[Name].Total_Amount), 365)
              setCookie(Name + '_Add_To_Growing', 0, 365)
                  //console.log('Items['+Name+'].Total_Amount = getCookie('+Name+');' )
          }

          function Start(Name) {
              window.setInterval(function() {

                  Items[Name].Timer += 1;
                  New_Cycle(Name);

                  $('.' + Name).find('.Time').css({
                      width: Items[Name].Timer
                  })


              }, Items[Name].Interval.Time / 100)
          }

          function StartIfStarted(Name) {
              if (Items[Name].Started == true) {
                  Items[Name].Timer = 100;
                  Start(Name);
              }
          }
          $('.Item_Image').click(function() {
              if ($(this).parent().parent().find('.Name').html() == Name) {

                  if (Items.Money.Total >= Items[Name].Cost.Default * HowManyAtATime) {
                      Items[Name].Growing += HowManyAtATime;
                      Items.Money.Total -= Items[Name].Cost.Default * HowManyAtATime;
                      //Items[Name].Cost.Sell = (Items[Name].Cost.Default /* * Items[Name].Cost.Inflation * Items[Name].Growing */ )                    


                      if (Items[Name].Started == false) {
                          Items[Name].Started = true;
                          Items[Name].Timer = 100;
                          Start(Name)


                      } else {
                          //console.log(Name + Growthstage)
                          Draw(Name, Name + window[Name + 'SN'].Growthstage);


                      }


                  }
              }
          });
          StartIfStarted(Name);
      }
      updateMoney();
      $('.Inventory_Item.Apple').closest('.ItemWrap').before('<div class="Trees_Inv">Trees</div> ')
      $('.Inventory_Item.Log').closest('.ItemWrap').after('<div class="Fruits_Inv">Fruits</div> ')
      $('.Inventory_Item.Tomato').closest('.ItemWrap').after('<div class="Vegetables_Inv">Vegetables</div> ')
      $('.Inventory_Item.Snow_Yam').closest('.ItemWrap').after('<div class="Flowers_Inv">Flowers</div> ')
      $('.Inventory_Item.Tulip').closest('.ItemWrap').after('<div class="Animals_Inv">Animals</div> ')
      $('.Inventory_Item.Mythril_Wool').closest('.ItemWrap').after('<div class="Makers_Inv">Makers</div> ')
      $('.Inventory_Item.Beer').closest('.ItemWrap').after('<div class="Minerals_Inv">Minerals</div> ')
      $('.Auto_Sell_Checkbox').prop('checked', false);

      function setCookie(cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          var expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";domain=localhost;" + expires + ";path=/";
      }

      function getCookie(cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                  c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
              }
          }
          return "";
      }

      function eraseCookie(name) {
          document.cookie = name + '=; Max-Age=-99999999;';
      }
      console.log("Ice:" + Number(getCookie("Coal")))

      function shortenNumber(num, digits) {
          var si = [{
                  value: 1,
                  symbol: ""
              }, {
                  value: 1E3,
                  symbol: "A"
              }, {
                  value: 1E6,
                  symbol: "B"
              }, {
                  value: 1E9,
                  symbol: "C"
              }, {
                  value: 1E12,
                  symbol: "D"
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
          return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
      }
  });