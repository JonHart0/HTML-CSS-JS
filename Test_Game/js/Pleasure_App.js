//Declare html constants to save processing power
const store_panel_press = document.getElementById("Store_Panel");
const inventory_panel_press = document.getElementById("Inventory_Panel");


//////////////////////////////////
////Show-Hide panel functions////
///////////////////////////////

//Swap the Inventory panel from .display: none; to .dispaly: block
function Inventory() {
    if (inventory_panel_press.style.display === "block") {
        inventory_panel_press.style.display = "none";
    } else {
        inventory_panel_press.style.display = "block";
    }
}

//Swap the Store panel from .display: none; to .dispaly: block
function Store() {
    if (store_panel_press.style.display === "block") {
        store_panel_press.style.display = "none";
    } else {
        store_panel_press.style.display = "block";
    }
}

function Give() {
    copper += 100;
    silver += 0;
    gold += 0;
}

function Take() {
    copper = 0;
    silver = 0;
    gold = 0;
}
