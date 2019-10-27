//Declare html constants to save processing power
const store_panel_press = document.getElementById("Store_Panel");
const inventory_panel_press = document.getElementById("Inventory_Panel");
const combat_panel_press = document.getElementById("Combat_Panel")
const debug_panel_press = document.getElementById("Debug_Panel");

//////////////////////////////////
////Show-Hide panel functions////
////////////////////////////////

//Swap the Inventory panel from .display: none; to .display: block
function Inventory() {
    if (inventory_panel_press.style.display === "block") {
        inventory_panel_press.style.display = "none";
    } else {
        inventory_panel_press.style.display = "block";
    }
}

//Swap the Store panel from .display: none; to .display: block
function Store() {
    if (store_panel_press.style.display === "block") {
        store_panel_press.style.display = "none";
    } else {
        store_panel_press.style.display = "block";
    }
}

function Combat() {
    if (combat_panel_press.style.display === "block") {
        combat_panel_press.style.display = "none";
    } else {
        combat_panel_press.style.display = "block";
    }
}


function Debug() {
    if (debug_panel_press.style.display === "block") {
        debug_panel_press.style.display = "none";
    } else {
        debug_panel_press.style.display = "block";
    }
}


////////////////////
////Debug Panel////
//////////////////


function Beg() {
    copper += 100;
}

function Take() {
    copper = 0;
    silver = 0;
    gold = 0;
}

function Heal_Player() {
  player.HP += 1;
  Player_Health_Change()
}

function Damage_Player() {
  player.HP -= 1;
  Player_Health_Change()
}
