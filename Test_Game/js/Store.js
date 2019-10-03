////////////////////
////Store costs////
//////////////////

var copper_sword_cost = 305; //copper

// Declare html constants
const purchase_copper_sword_press = document.getElementById("Purchase_Copper_Sword_Button");

function Currency_Check() {
  if (total_copper >= copper_sword_cost) {
    purchase_copper_sword_press.style.display = "block";
    purchase_copper_sword_press.style.backgroundColor ='#006000';
  } else {
    purchase_copper_sword_press.style.backgroundColor ='#700000';
  }
}
setInterval(function(){Currency_Check()},100);


///////////////////////////
////PURCHASE FUNCTIONS////
/////////////////////////

//If the player has enough DOLLARS to purchase SWORD, Show SWORD in INVENTORY
//Subtract the cost and update DOLLARS
function Purchase_Copper_Sword() {
  if (copper >= copper_sword_cost) {
    document.getElementById("Copper_Sword").style.display = "block";
    Purchase(copper_sword_cost);
  }
}

function Purchase(purchase_value) {
  var purchase_buffer = purchase_value;
  if total_copper >= purchase_value {
    gold -= Math.floor(purchase/10000);
    purchase_buffer -= Math.floor(purchase/10000);
    silver -= Math.floor(purchase/100);
    purchase_buffer -= Math.floor(purchase/100);
    copper -= purchase_buffer;
  }
}
