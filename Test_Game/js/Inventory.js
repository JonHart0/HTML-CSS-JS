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
        armor_a.innerHTML = found
        weapon_a.innerHTML = `current_armor_image:   ${current_armor_image.src}`;
    },1000);


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

//onchange= Switch_Image(current_weapon_image,equipped_weapon)

function Switch_Image(From,To) {
From.src = To.value;
}

//////////////////
////Equipment////
////////////////

//onclick="Purchase_Item_Armor(bark_chest_Item)"

/*function Purchase_Item_Armor(Item) {
  if (total_copper >= Item.Cost){
    if (armor_array[Item.Slot] === 0) {
        Purchase_Spend_Currency(Item.Cost,Item.Drop);
        armor_array[Item.Slot] = 1;
        equipped_armor.selectedIndex = Item.Slot;
        Equip(Item)
          }
     }
}
*/

//var equipped_weapon_array = [1,0,0,0]
//var equipped_armor_array  = [1,0,0,0]

function Equip_Armor(Equip) {
    armor_a[Equip.slot] = 1
    armor_a[last_armor_equipped] = 0;
    last_armor_equipped = Equip.Slot;
    equipped_armor.selectedIndex = Equip.Slot;
    equipped_armor.src = Equip.Image;
    current_armor_image.src = Equip.Image;
    fromstore = 0;
  }
