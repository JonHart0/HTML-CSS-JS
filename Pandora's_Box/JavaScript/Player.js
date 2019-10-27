//////////////
////Stats////
////////////

//####NEED TO FIX, Make current values initialize from base values####////
var player = {Max_HP: 10, Base_HP_Regen: 1, Base_ATK: 1, Base_DEF:1, HP: 10, ATK: 1, DEF: 1, InCombat: "False"}


//Used to remove the item equipped from the equipped arrays
var last_armor_equipped  = 0;
var last_weapon_equipped = 0;

var equipped_weapon_array = [1,0,0,0]
var equipped_armor_array  = [1,0,0,0]

var items_DEF  = 0;
var items_ATK = 0;




function Player_Health_Change() {
  if (player.HP <= 0) {
    location.reload();
  }
  if (player.HP >= player.Max_HP) {
    player.HP = player.Max_HP;
  }
  Player_Health_Bar.style.width = ((player.HP / player.Max_HP) *100) + "%";
  Player_HP_Text.innerHTML = `HP: ${player.HP} / ${player.Max_HP}`
}




function Player_Update() {
  player.Max_HP  = 10;
  player.Base_ATK  = 1;
  player.Base_DEF  = 1;


  items_DEF   = Armor_List[Equipped_Armor.selectedIndex].DEF + Weapon_List[Equipped_Weapon.selectedIndex].DEF;
  items_ATK   = Armor_List[Equipped_Armor.selectedIndex].ATK + Weapon_List[Equipped_Weapon.selectedIndex].ATK;

  player.ATK = player.Base_ATK + items_ATK;
  player.DEF = player.Base_DEF + items_DEF;

  Dis_Player_ATK.innerHTML = `ATK: ${player.ATK}`;
  Dis_Player_DEF.innerHTML = `DEF:   ${player.DEF}`;
}

function Player_Regen() {
  if (player.HP < player.Max_HP && player.InCombat == "False") {
    Player_Health_Bar.style.backgroundColor = "#EE0000"
    player.HP += player.Base_HP_Regen;
    Player_Health_Change()
    window.setTimeout(function(){Player_Health_Bar.style.backgroundColor = "#CC0000"}, 300)
  }
}

setInterval(function() {Player_Regen()}, 5000);
