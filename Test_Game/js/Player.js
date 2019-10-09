//////////////
////Stats////
////////////

var player_ATK_base  = 1;
var player_DEF_base = 1;
var player_HP_base  = 10;

//Used to remove the item equipped from the equipped arrays
var last_armor_equipped  = 0;
var last_weapon_equipped = 0;

var equipped_weapon_array = [1,0,0,0]
var equipped_armor_array  = [1,0,0,0]

var armor_DEF  = 0;
var weapon_ATK = 0;
var player_ATK = 0;
var player_DEF = 0;




function Player_Update() {
  player_ATK_base  = 1;
  player_DEF_base  = 1;
  player_HP_base   = 10;

  armor_DEF  = Armor_List[equipped_armor.selectedIndex].DEF;
  weapon_ATK = Weapon_List[equipped_weapon.selectedIndex].ATK;

  player_ATK = player_ATK_base + weapon_ATK
  player_DEF = player_DEP_base + armor_DEF
}
