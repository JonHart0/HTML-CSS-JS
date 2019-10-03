////////////////////
////Store costs////
//////////////////

var silver_value = 100; //copper
var copper_sword_cost = 305; //copper

// Declare html constants
const purchase_copper_sword_press = document.getElementById("Purchase_Copper_Sword_Button");

function Currency_Check() {
  if (copper_buffer >= copper_sword_cost) {
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
function Purchase_Sword() {
  if (copper_buffer >= copper_sword_cost) {
    document.getElementById("Copper_Sword").style.display = "block";
    copper_buffer = copper_buffer - copper_sword_cost;
  }
}
