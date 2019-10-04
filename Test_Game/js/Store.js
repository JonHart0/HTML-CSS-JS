////////////////////
////Store costs////
//////////////////
var stick_sword_cost   = 25;
var wooden_sword_cost  = 100;
var copper_sword_cost  = 500;

var bark_chest_cost    = 50;
var wooden_chest_cost  = 200;
var copper_chest_cost  = 1000;


// Declare html constants
const equiped_weapon = document.getElementById("Equiped_Weapon");
const equiped_armor = document.getElementById("Equiped_Armor");

const purchase_stick_sword_press  = document.getElementById("Purchase_Stick_Sword_Button");
const purchase_wooden_sword_press = document.getElementById("Purchase_Wooden_Sword_Button");
const purchase_copper_sword_press = document.getElementById("Purchase_Copper_Sword_Button");

const purchase_bark_chest_press   = document.getElementById("Purchase_Bark_Chest_Button");
const purchase_wooden_chest_press = document.getElementById("Purchase_Wooden_Chest_Button");
const purchase_copper_chest_press = document.getElementById("Purchase_Copper_Chest_Button");


///////////////
////Weapons////
/////////////
const stick_sword   = document.getElementById("Stick_Sword");
const wooden_sword  = document.getElementById("Wooden_Sword");
const copper_sword  = document.getElementById("Copper_Sword");


function Purchase_Stick_Sword() {
    if (total_copper >= stick_sword_cost){
      if (weapon_array[1] === 0) {
          Purchase(stick_sword_cost,stick_sword);
          weapon_array[1] = 1;
          equiped_weapon.selectedIndex = 1;
          current_weapon_image.src = equiped_weapon.value;
        }
    }
}

function Purchase_Wooden_Sword() {
    if (total_copper >= wooden_sword_cost){
      if (weapon_array[2] === 0) {
          Purchase(wooden_sword_cost,wooden_sword);
          weapon_array[2] = 1;
          equiped_weapon.selectedIndex = 2;
          current_weapon_image.src = equiped_weapon.value;
        }
    }
}

function Purchase_Copper_Sword() {
    if (total_copper >= copper_sword_cost){
      if (weapon_array[3] === 0) {
          Purchase(copper_sword_cost,copper_sword);
          weapon_array[3] = 1;
          equiped_weapon.selectedIndex = 3;
          current_weapon_image.src = equiped_weapon.value;

        }
    }
}

///////////////
////Armors////
////////////
const bark_chest    = document.getElementById("Bark_Chest");
const wooden_chest  = document.getElementById("Wooden_Chest");
const copper_chest  = document.getElementById("Copper_Chest");

function Purchase_Bark_Chest() {
    if (total_copper >= bark_chest_cost){
      if (armor_array[1] === 0) {
          Purchase(bark_chest_cost,bark_chest);
          armor_array[1] = 1;
          equiped_armor.selectedIndex = 1;
          current_armor_image.src = equiped_armor.value;
        }
    }
}

function Purchase_Wooden_Chest() {
    if (total_copper >= wooden_chest_cost){
      if (armor_array[2] === 0) {
          Purchase(wooden_chest_cost,wooden_chest);
          armor_array[2] = 1;
          equiped_armor.selectedIndex = 2;
          current_armor_image.src = equiped_armor.value;
        }
    }
}

function Purchase_Copper_Chest() {
    if (total_copper >= copper_chest_cost){
      if (armor_array[3] === 0) {
          Purchase(copper_chest_cost,copper_chest);
          armor_array[3] = 1;
          equiped_armor.selectedIndex = 3;
          current_armor_image.src = equiped_armor.value;
        }
    }
}

///////////////////////////
////PURCHASE FUNCTIONS////
/////////////////////////

function Purchase(purchase_value,purchased_item) {
    var purchase_buffer = purchase_value;
    gold -= Math.floor(purchase_buffer/10000);
    purchase_buffer -= Math.floor(purchase_buffer/10000)*10000;
    silver -= Math.floor(purchase_buffer/100);
    purchase_buffer -= Math.floor(purchase_buffer/100)*100;
    copper -= purchase_buffer;
    purchased_item.style.display = "block";
    armor_a.innerHTML = [gold,silver,copper,purchase_buffer];

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

function Currency_Check() {
    if (total_copper >= stick_sword_cost) {
        purchase_stick_sword_press.style.display = "block";
        purchase_stick_sword_press.style.backgroundColor = '#006000';
    } else {
        purchase_stick_sword_press.style.backgroundColor = '#700000';
    }

    if (total_copper >= wooden_sword_cost) {
        purchase_wooden_sword_press.style.display = "block";
        purchase_wooden_sword_press.style.backgroundColor = '#006000';
    } else {
        purchase_wooden_sword_press.style.backgroundColor = '#700000';
    }

    if (total_copper >= copper_sword_cost) {
        purchase_copper_sword_press.style.display = "block";
        purchase_copper_sword_press.style.backgroundColor = '#006000';
    } else {
        purchase_copper_sword_press.style.backgroundColor = '#700000';
    }


    if (total_copper >= bark_chest_cost) {
        purchase_bark_chest_press.style.display = "block";
        purchase_bark_chest_press.style.backgroundColor = '#006000';
    } else {
        purchase_bark_chest_press.style.backgroundColor = '#700000';
    }


    if (total_copper >= wooden_chest_cost) {
        purchase_wooden_chest_press.style.display = "block";
        purchase_wooden_chest_press.style.backgroundColor = '#006000';
    } else {
        purchase_wooden_chest_press.style.backgroundColor = '#700000';
    }

    if (total_copper >= copper_chest_cost) {
        purchase_copper_chest_press.style.display = "block";
        purchase_copper_chest_press.style.backgroundColor = '#006000';
    } else {
        purchase_copper_chest_press.style.backgroundColor = '#700000';
    }
    }




setInterval(function() {Currency_Check()}, 100);
