var pennies = 190;
var dollars = 0;
var sword_cost = 1; //Dollar
var dollar_cost = 100; // Pennies
const userScore_span = document.getElementById("Dis_Pennies");
const store_panel_press = document.getElementById("Store_Panel");
const inventory_panel_press = document.getElementById("Inventory_Panel");
const purchase_dollar_press = document.getElementById("Purchase_Dollar_Button")
const purchase_sword_press = document.getElementById("Purchase_Sword_Button")

setInterval(function(){pennies++; Dis_Pennies.innerHTML = pennies + ": Pennies"},1000);


//PURCHASE FUNCTIONS

function Purchase_Sword() {
  if (dollars >= sword_cost) {
    document.getElementById("Sword").style.display = "block";
    dollars = dollars - sword_cost;
    Dis_Dollars.innerHTML = dollars + ": Dollars";
  }
}

function Purchase_Dollar() {
  if (pennies >= dollar_cost) {
    dollars++;
    Dis_Dollars.innerHTML = dollars + ": Dollars";
    pennies = pennies - dollar_cost;

  }
}


//SHOW/HIDE FUNCTION
function Store() {
  if (store_panel_press.style.display === "block") {
    store_panel_press.style.display = "none";
  } else {
    store_panel_press.style.display = "block";
  }
}
function Inventory() {
  if (inventory_panel_press.style.display === "block") {
    inventory_panel_press.style.display = "none";
  } else {
    inventory_panel_press.style.display = "block";
  }
}



function Money_Check() {
  if (pennies >= dollar_cost) {
    purchase_dollar_press.style.display = "block";
    purchase_dollar_press.style.backgroundColor ='#006000';
  } else {
    purchase_dollar_press.style.backgroundColor ='#700000';
  }
  if (dollars >= sword_cost) {
    purchase_sword_press.style.display = "block";
    purchase_sword_press.style.backgroundColor ='#006000';
  } else {
    purchase_sword_press.style.backgroundColor ='#700000';
  }
}


setInterval(function(){Money_Check()},100);
