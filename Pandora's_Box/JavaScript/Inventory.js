//Currency
var copper  = 0;
var silver  = 0;
var gold    = 1;

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

setInterval(function() {Currency_Conversion()}, 1);

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
    Equipped_Armor.selectedIndex = Equip.Slot;
    Current_Armor_Image.src = Equip.Image;
    Equipped_Armor.title = Equip.Description;
    Equip.Drop.title = Equip.Stats;
    Player_Update()

  }
function Equip_Weapon_Store(Equip) {
    equipped_weapon_array[last_weapon_equipped] = 0;
    last_weapon_equipped = Equip.Slot;
    equipped_weapon_array[Equip.Slot] = 1;
    Equipped_Weapon.selectedIndex = Equip.Slot;
    Current_Weapon_Image.src = Equip.Image;
    Equipped_Weapon.title = Equip.Description;
    Equip.Drop.title = Equip.Stats;
    Player_Update()
  }

function Equip_Armor_Select(Equip) {
    equipped_armor_array[last_armor_equipped] = 0;
    last_armor_equipped = Equipped_Armor.selectedIndex;
    equipped_armor_array[Equipped_Armor.selectedIndex] = 1;
    Current_Armor_Image.src = Armor_List[Equipped_Armor.selectedIndex].Image;
    Equipped_Armor.title = Armor_List[Equipped_Armor.selectedIndex].Description;
    Player_Update()
  }



function Equip_Weapon_Select(Equip) {
    equipped_weapon_array[last_weapon_equipped] = 0;
    last_weapon_equipped = Equipped_Weapon.selectedIndex;
    equipped_weapon_array[Equipped_Weapon.selectedIndex] = 1;
    Current_Weapon_Image.src = Weapon_List[Equipped_Weapon.selectedIndex].Image;
    Equipped_Weapon.title = Weapon_List[Equipped_Weapon.selectedIndex].Description;
    Player_Update();
    }
