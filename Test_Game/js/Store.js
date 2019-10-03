////////////////////
////Store costs////
//////////////////
var copper_sword_cost = 105; //copper

// Declare html constants
const purchase_copper_sword_press = document.getElementById("Purchase_Copper_Sword_Button");
const copper_sword = document.getElementById("Copper_Sword");

///////////////////////////
////PURCHASE FUNCTIONS////
/////////////////////////

function Currency_Check() {
    if (total_copper >= copper_sword_cost) {
        purchase_copper_sword_press.style.display = "block";
        purchase_copper_sword_press.style.backgroundColor = '#006000';
    } else {
        purchase_copper_sword_press.style.backgroundColor = '#700000';
    }
}

setInterval(function() {Currency_Check()}, 100);

//If the player has enough DOLLARS to purchase SWORD, Show SWORD in INVENTORY
//Subtract the cost and update DOLLARS
function Purchase_Copper_Sword() {
    if (total_copper >= copper_sword_cost){
      if (weapon_array[0] === 0) {
          Purchase(copper_sword_cost,copper_sword);
          weapon_array[0] = 1;
        }
    }
}

function Purchase(purchase_value,purchased_item) {
    var purchase_buffer = purchase_value;
    while (purchase_buffer > 0) {
          gold -= Math.floor(purchase_buffer/10000);
          purchase_buffer -= Math.floor(purchase_value/10000)*10000;
          silver -= Math.floor(purchase_buffer/100);
          purchase_buffer -= Math.floor(purchase_value/100)*100;
          copper -= purchase_buffer;
          purchase_buffer = 0;
            purchased_item.style.display = "block";
    }
}