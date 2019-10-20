//Currency
var copper  = 0;
var silver  = 0;
var gold    = 0;

var copper_value = 1;
var silver_value = 100;
var gold_value = 10000;

var total_copper = 0;

//Equipment
var weapon_array = [1,0,0,0];
var armor_array = [1,0,0,0];

////////////////////
////Money Maker////
//////////////////

setInterval(function() {copper++;},1000);

/////////////////////////
////Currency Updater////
///////////////////////


setInterval(function() {
        total_copper = copper + (silver * silver_value) + (gold * gold_value);
        Dis_Copper.innerHTML = `Copper: ${copper}`;
        Dis_Silver.innerHTML = `Silver: ${silver}`;
        Dis_Gold.innerHTML = `Gold:   ${gold}`;
        Dis_Player_HP.innerHTML = `HP: ${player_HP}`;
        Dis_Player_ATK.innerHTML = `ATK: ${player_ATK}`;
        Dis_Player_DEF.innerHTML = `DEF:   ${player_DEF}`;


    },100);


function Currency_Conversion() {
    if (copper >= silver_value) {

        silver += Math.floor(copper / 100);
        copper -= 100 * Math.floor(copper / 100);
    }
    if ((copper + (silver * silver_value)) >= gold_value) {
        gold += Math.floor(silver / 100);
        silver -= 100 * Math.floor(silver / 100);
    }
}

setInterval(function() {Currency_Conversion()}, 1000);

////////////////////////
////Inventory Items////
//////////////////////



//////////////////
////Equipment////
////////////////


function Equip_Armor_Store(Equip) {
    equipped_armor_array[last_armor_equipped] = 0;
    last_armor_equipped = Equip.Slot;
    equipped_armor_array[Equip.Slot] = 1;
    equipped_armor.selectedIndex = Equip.Slot;
    current_armor_image.src = Equip.Image;
    equipped_armor.title = Equip.Description;
    Equip.Drop.title = Equip.Stats;
    console.log(armor_array);
    console.log(equipped_armor_array);
    Player_Update()

  }
function Equip_Weapon_Store(Equip) {
    equipped_weapon_array[last_weapon_equipped] = 0;
    last_weapon_equipped = Equip.Slot;
    equipped_weapon_array[Equip.Slot] = 1;
    equipped_weapon.selectedIndex = Equip.Slot;
    current_weapon_image.src = Equip.Image;
    equipped_weapon.title = Equip.Description;
    Equip.Drop.title = Equip.Stats;
    console.log(weapon_array);
    console.log(equipped_weapon_array);
    Player_Update()
  }

function Equip_Armor_Select(Equip) {
    equipped_armor_array[last_armor_equipped] = 0;
    last_armor_equipped = equipped_armor.selectedIndex;
    equipped_armor_array[equipped_armor.selectedIndex] = 1;
    current_armor_image.src = Armor_List[equipped_armor.selectedIndex].Image;
    equipped_armor.title = Armor_List[equipped_armor.selectedIndex].Description;
    console.log(armor_array);
    console.log(equipped_armor_array);
    Player_Update()
  }



function Equip_Weapon_Select(Equip) {
    equipped_weapon_array[last_weapon_equipped] = 0;
    last_weapon_equipped = equipped_weapon.selectedIndex;
    equipped_weapon_array[equipped_weapon.selectedIndex] = 1;
    current_weapon_image.src = Weapon_List[equipped_weapon.selectedIndex].Image;
    equipped_weapon.title = Weapon_List[equipped_weapon.selectedIndex].Description;
    console.log(armor_array);
    console.log(equipped_armor_array);
    Player_Update();
    }
