//////////////
////Stats////
////////////

var player_HP_base  = 10;
var player_ATK_base  = 1;
var player_DEF_base = 1;

//Used to remove the item equipped from the equipped arrays
var last_armor_equipped  = 0;
var last_weapon_equipped = 0;

var equipped_weapon_array = [1,0,0,0]
var equipped_armor_array  = [1,0,0,0]

var items_DEF  = 0;
var items_ATK = 0;

var player_HP = player_HP_base;
var player_ATK = player_ATK_base;
var player_DEF = player_DEF_base;





function Player_Update() {
  player_HP_base   = 10;
  player_ATK_base  = 1;
  player_DEF_base  = 1;


  items_DEF   = Armor_List[equipped_armor.selectedIndex].DEF + Weapon_List[equipped_weapon.selectedIndex].DEF;
  items_ATK   = Armor_List[equipped_armor.selectedIndex].ATK + Weapon_List[equipped_weapon.selectedIndex].ATK;

  player_HP = player_HP_base;
  player_ATK = player_ATK_base + items_ATK;
  player_DEF = player_DEF_base + items_DEF;

}
