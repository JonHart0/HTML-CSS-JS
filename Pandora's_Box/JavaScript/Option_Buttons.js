//////////////////////////////////
////Show-Hide panel functions////
////////////////////////////////

//Swap the Inventory panel from .display: none; to .display: block
function Inventory() {
    if (Inventory_Panel.style.display === "block") {
        Inventory_Panel.style.display = "none";
    } else {
        Inventory_Panel.style.display = "block";
    }
}

//Swap the Store panel from .display: none; to .display: block
function Store() {
    if (Store_Panel.style.display === "block") {
        Store_Panel.style.display = "none";
    } else {
        Store_Panel.style.display = "block";
    }
}

function Explore() {
    if (Explore_Panel.style.display === "block") {
        Explore_Panel.style.display = "none";
    } else {
        Explore_Panel.style.display = "block";
    }
}


function Debug() {
    if (Debug_Panel.style.display === "block") {
        Debug_Panel.style.display = "none";
    } else {
        Debug_Panel.style.display = "block";
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
