//////////////
////Stats////
////////////

//####NEED TO FIX, Make current values initialize from base values####////
var player = {Base_HP: 10, Base_ATK: 1, Base_DEF:1, Current_HP: 10, Current_ATK: 1, Current_DEF: 1}


//Used to remove the item equipped from the equipped arrays
var last_armor_equipped  = 0;
var last_weapon_equipped = 0;

var equipped_weapon_array = [1,0,0,0]
var equipped_armor_array  = [1,0,0,0]

var items_DEF  = 0;
var items_ATK = 0;




function Player_Health_Change() {
  if (player.Current_HP <= 0) {
    location.reload();
  }
  if (player.Current_HP >= player.Base_HP) {
    console.log("Full Health!")
    player.Current_HP = player.Base_HP;
  }
  player_health_bar.style.width = ((player.Current_HP / player.Base_HP) *100) + "%";
  Player_HP_Text.innerHTML = `HP: ${player.Current_HP} / ${player.Base_HP}`
}




function Player_Update() {
  player.Base_HP  = 10;
  player.Base_ATK  = 1;
  player.Base_DEF  = 1;


  items_DEF   = Armor_List[equipped_armor.selectedIndex].DEF + Weapon_List[equipped_weapon.selectedIndex].DEF;
  items_ATK   = Armor_List[equipped_armor.selectedIndex].ATK + Weapon_List[equipped_weapon.selectedIndex].ATK;

  player.Current_ATK = player.Base_ATK + items_ATK;
  player.Current_DEF = player.Base_DEF + items_DEF;

  Dis_Player_ATK.innerHTML = `ATK: ${player.Current_ATK}`;
  Dis_Player_DEF.innerHTML = `DEF:   ${player.Current_DEF}`;
}
