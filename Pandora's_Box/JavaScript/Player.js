//////////////
////Stats////
////////////

//####NEED TO FIX, Make current values initialize from base values####////
var player = {
  Max_HP: 10, Base_HP_Regen: 1, Base_ATK: 1, Base_DEF:1,
  HP: 10, ATK: 1, DEF: 1,
  InCombat: false,
  EXP: 0, LVL: 0,
  Has_Potion: false, Potion_LVL: 0, Potions: 0, Max_Potions: 3,
  Zone_cnt: 0,
      }


//Used to remove the item equipped from the equipped arrays
var last_armor_equipped  = 0;
var last_weapon_equipped = 0;

var equipped_weapon_array = [1,0,0,0]
var equipped_armor_array  = [1,0,0,0]

var items_DEF  = 0;
var items_ATK = 0;

var has_potion = 1;




function Player_Update() {
  //Stat Updates
  items_DEF   = Armor_List[Equipped_Armor.selectedIndex].DEF + Weapon_List[Equipped_Weapon.selectedIndex].DEF;
  items_ATK   = Armor_List[Equipped_Armor.selectedIndex].ATK + Weapon_List[Equipped_Weapon.selectedIndex].ATK;
  player.ATK = player.Base_ATK + items_ATK;
  player.DEF = player.Base_DEF + items_DEF;
  Dis_Player_ATK.innerHTML = `Attack: ${player.ATK}`;
  Dis_Player_DEF.innerHTML = `Defense: ${player.DEF}`;

  //HP Updates
  if (player.HP <= 0) { Player_Dead(); }
  if (player.HP >= player.Max_HP) {
    player.HP = player.Max_HP;
  }
  Player_Health_Bar.style.width = ((player.HP / player.Max_HP) *100) + "%";
  Player_HP_Text.innerHTML = `HP: ${player.HP} / ${player.Max_HP}`
  Town_Inn_Health.innerHTML = `HP: ${player.HP} / ${player.Max_HP}`
}

function Player_Regen() {
  if (player.HP < player.Max_HP && player.InCombat == false) {
    Player_Health_Bar.style.backgroundColor = "#EE0000"
    player.HP += player.Base_HP_Regen;
    Player_Update()
    window.setTimeout(function(){Player_Health_Bar.style.backgroundColor = "#CC0000"}, 300)
  }
}

setInterval(function() {Player_Regen()}, 5000);

var level_req = [8,16,32,64,128,256];

function Player_Level_Check() {
    if (player.EXP >= level_req[player.LVL]) {
      player.EXP -= level_req[player.LVL];
      player.LVL += 1;
      Player_Level_Up();
      Player_Update();
    }
    switch (player.LVL) {
        case 0:

        break;
        case 1:
        player.Base_ATK  = 2;
        player.Base_DEF  = 2;
        break;

        case 2:
          player.Base_HP_Regen = 2;
        break;

        case 3:
        player.Base_ATK  = 3;
        player.Base_DEF  = 3;
        break;

        case 4:
          player.Base_HP_Regen = 3;
        break;

        case 5:
        player.Base_ATK  = 4;
        player.Base_DEF  = 4;
        break;

        case 6:
          player.Base_HP_Regen = 4;
        break;
    }
    Player_Name.title = `LVL: ${player.LVL} EXP: ${player.EXP}/${level_req[player.LVL]}`
}

function Player_Level_Up() {
  player.Max_HP  += 5;
  player.HP = player.Max_HP
  Player_Health_Bar.style.backgroundColor = "gold"
  window.setTimeout(function(){Player_Health_Bar.style.backgroundColor = "#CC0000"}, 1000)
}

function Player_Dead() {
  copper -= Math.floor(copper/2);
  silver -= Math.floor(silver/2);
  gold   -= Math.floor(gold/2);
  player.InCombat = false;
  Explore_Panel.style.display = 'none';
  Explore_Button.style.display = 'none';
  Explore_Button.innerHTML ="Explore";
  Town_Panel.style.display = "inline-block"
  Enter_Place("Town_Inn")
  player.HP += 1;
}
