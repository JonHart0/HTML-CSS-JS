// Declare html constants



const purchase_stick_sword_button_press  = document.getElementById("Purchase_Stick_Sword_Button");
const purchase_wooden_sword_button_press = document.getElementById("Purchase_Wooden_Sword_Button");
const purchase_copper_sword_button_press = document.getElementById("Purchase_Copper_Sword_Button");

const purchase_bark_chest_button_press   = document.getElementById("Purchase_Bark_Chest_Button");
const purchase_wooden_chest_button_press = document.getElementById("Purchase_Wooden_Chest_Button");
const purchase_copper_chest_button_press = document.getElementById("Purchase_Copper_Chest_Button");


////////////////
////Weapons////
//////////////

const equipped_weapon = document.getElementById("Equipped_Weapon");

const stick_sword   = document.getElementById("Stick_Sword");
const wooden_sword  = document.getElementById("Wooden_Sword");
const copper_sword  = document.getElementById("Copper_Sword");

var stick_sword_cost   = 25;
var wooden_sword_cost  = 100;
var copper_sword_cost  = 500;

//Function takes in weapon and currency information to check if item is already owned and changed icon accordingly
function Purchase_Item_Weapon(Total_Currency,Item_Cost,Item_Name,Item_Slot) {
  if (Total_Currency >= Item_Cost){
    if (weapon_array[Item_Slot] === 0) {
        Purchase_Spend_Currency(Item_Cost,Item_Name);
        weapon_array[Item_Slot] = 1;
        equipped_weapon.selectedIndex = Item_Slot;
        current_weapon_image.src = equipped_weapon.value;

          }
     }
}


///////////////
////Armors////
/////////////

const equipped_armor = document.getElementById("Equipped_Armor");

const bark_chest    = document.getElementById("Bark_Chest");
const wooden_chest  = document.getElementById("Wooden_Chest");
const copper_chest  = document.getElementById("Copper_Chest");

var bark_chest_cost    = 50;
var wooden_chest_cost  = 200;
var copper_chest_cost  = 1000;

//Function takes in armor and currency information to check if item is already owned and changed icon accordingly
function Purchase_Item_Armor(Total_Currency,Item_Cost,Item_Name,Item_Slot) {
  if (Total_Currency >= Item_Cost){
    if (armor_array[Item_Slot] === 0) {
        Purchase_Spend_Currency(Item_Cost,Item_Name);
        armor_array[Item_Slot] = 1;
        equipped_armor.selectedIndex = Item_Slot;
        current_armor_image.src = equipped_armor.value;

          }
     }
}

///////////////////////////
////PURCHASE FUNCTIONS////
/////////////////////////

function Purchase_Spend_Currency(purchase_value,purchased_item) {
    var purchase_buffer = purchase_value;
    gold -= Math.floor(purchase_buffer/10000);
    purchase_buffer -= Math.floor(purchase_buffer/10000)*10000;
    silver -= Math.floor(purchase_buffer/100);
    purchase_buffer -= Math.floor(purchase_buffer/100)*100;
    copper -= purchase_buffer;
    purchased_item.style.display = "block";
    //armor_a.innerHTML = [gold,silver,copper,purchase_buffer];

    if (copper < 0 && silver > 0) {
        silver--
        copper += 100;}

    if (copper < 0 && gold > 0){
        gold--
        silver += 100;}

    if (silver < 0 && gold > 0){
        gold--
        silver += 100;}
}




///////////////////////////////////
////STORE ITEM DISPLAY CHECKER////
/////////////////////////////////

//Function checks the players total money and unlockes items as they
//gain more money. If the player has enough money and doesnt own the items
//the button turns green, red if not enough money, and black if already purchased
function Currency_Check() {

  //STICK SWORD
  if (weapon_array[1] === 0) {
      if (total_copper >= stick_sword_cost) {
          purchase_stick_sword_button_press.style.display = "block";
          purchase_stick_sword_button_press.style.backgroundColor = '#006000';
    }else{purchase_stick_sword_button_press.style.backgroundColor = '#700000';
         }
  }else{purchase_stick_sword_button_press.style.backgroundColor = '#202020'
      purchase_stick_sword_button_press.style.color = '#ffffff'}

  //WOODEN SWORD
  if (weapon_array[2] === 0) {
      if (total_copper >= wooden_sword_cost) {
          purchase_wooden_sword_button_press.style.display = "block";
          purchase_wooden_sword_button_press.style.backgroundColor = '#006000';
    }else{purchase_wooden_sword_button_press.style.backgroundColor = '#700000';
         }
  }else{purchase_wooden_sword_button_press.style.backgroundColor = '#202020'
        purchase_wooden_sword_button_press.style.color = '#ffffff'}

//COPPER SWORD
  if (weapon_array[3] === 0) {
      if (total_copper >= copper_sword_cost) {
          purchase_copper_sword_button_press.style.display = "block";
          purchase_copper_sword_button_press.style.backgroundColor = '#006000';
    }else{purchase_copper_sword_button_press.style.backgroundColor = '#700000';
         }
  }else{purchase_copper_sword_button_press.style.backgroundColor = '#202020'
        purchase_copper_sword_button_press.style.color = '#ffffff'}

 //BARK CHEST
 if (armor_array[1] === 0) {
      if (total_copper >= bark_chest_cost) {
          purchase_bark_chest_button_press.style.display = "block";
          purchase_bark_chest_button_press.style.backgroundColor = '#006000';
    }else{purchase_bark_chest_button_press.style.backgroundColor = '#700000';
         }
  }else{purchase_bark_chest_button_press.style.backgroundColor = '#202020'
        purchase_bark_chest_button_press.style.color = '#ffffff'}

//WOODEN CHEST
  if (armor_array[2] === 0) {
    if (total_copper >= wooden_chest_cost) {
        purchase_wooden_chest_button_press.style.display = "block";
        purchase_wooden_chest_button_press.style.backgroundColor = '#006000';
    }else{purchase_wooden_chest_button_press.style.backgroundColor = '#700000';
         }
  }else{purchase_wooden_chest_button_press.style.backgroundColor = '#202020'
        purchase_wooden_chest_button_press.style.color = '#ffffff'}

//COPPER CHEST
  if (armor_array[3] === 0) {
      if (total_copper >= copper_chest_cost) {
          purchase_copper_chest_button_press.style.display = "block";
          purchase_copper_chest_button_press.style.backgroundColor = '#006000';
    }else{purchase_copper_chest_button_press.style.backgroundColor = '#700000';
         }
  }else{purchase_copper_chest_button_press.style.backgroundColor = '#202020'
          purchase_copper_chest_button_press.style.color = '#ffffff'}
}




setInterval(function() {Currency_Check()}, 100);
