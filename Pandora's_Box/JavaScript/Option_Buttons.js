//////////////////////////////////
////Show-Hide panel functions////
////////////////////////////////

//Swap the Inventory panel from .display: none; to .display: block
function Inventory() {
    if (Inventory_Panel.style.display == "block") {
        Inventory_Panel.style.display = "none";
    } else {
        Inventory_Panel.style.display = "block";
    }
}

//Swap the Store panel from .display: none; to .display: block


function Explore() {
  console.log(Inventory_Panel.style.display)
    if (Explore_Panel.style.display =="none" && Town_Panel.style.display == "none") {
        Explore_Panel.style.display = "block";
        Town_Button.style.display ="none";
        Explore_Button.innerHTML = "Back to Town"
    } else {
        Explore_Panel.style.display = "none";
        Town_Button.style.display ="inline-block";
        Explore_Button.innerHTML = "Explore"
    }
}


function Debug() {
    if (Debug_Panel.style.display == "block") {
        Debug_Panel.style.display = "none";
    } else {
        Debug_Panel.style.display = "block";
    }
}

function Town() {
    if (Explore_Panel.style.display == "none" && Town_Panel.style.display == "none") {
      Explore_Button.style.display = "none";
      Town_Panel.style.display = "inline-block"
      Town_Button.innerHTML ="Leave Town"
    } else {
      Town_Panel.style.display = "none"
      Explore_Button.style.display = "inline-block"
      Town_Button.innerHTML ="Town"
      Armory_Panel.style.display = "none"
      Apothecary_Panel.style.display = "none"
      Town_Inn_Panel.style.display = "none"
    }
  }

  function Armory() {
      if (Armory_Panel.style.display == "none" && Town_Inn_Panel.style.display == "none" && Apothecary_Panel.style.display == "none"){
          Enter_Place("Armory")
      } else {
          Leave_Place("Armory")
      }
  }
  function Town_Inn() {
    if (Town_Inn_Panel.style.display == "none" && Armory_Panel.style.display == "none"  && Apothecary_Panel.style.display == "none") {
          Enter_Place("Town_Inn")
    } else {
          Leave_Place("Town_Inn")
    }
}

function Apothecary() {
  if (Apothecary_Panel.style.display == "none" && Armory_Panel.style.display == "none" && Town_Inn_Panel.style.display == "none") {
        Enter_Place("Apothecary")
  } else {
        Leave_Place("Apothecary")
  }
}


function Enter_Place(room) {
switch (room) {
  case "Armory":
    Armory_Panel.style.display = "block"
    Town_Inn_Button.style.display = "none"
    Apothecary_Button.style.display = "none"
    Town_Button.style.display = "none"
    Armory_Button.innerHTML = "Leave Armory"
    break;

    case "Apothecary":
    Apothecary_Panel.style.display = "block"
    Town_Inn_Button.style.display = "none"
    Armory_Button.style.display = "none"
    Town_Button.style.display = "none"
    Apothecary_Button.innerHTML = "Leave Apothecary"
      break;

    case "Town_Inn":
      Town_Inn_Button.style.display = "inline-block"
      Town_Inn_Panel.style.display = "block"
      Armory_Button.style.display = "none"
      Apothecary_Button.style.display = "none"
      Town_Button.style.display = "none"
      Town_Inn_Button.innerHTML = "Leave Town Inn"
      Health_Panel.style.display = "block"
      break;
  default:
    }

}

function Leave_Place(room) {
switch (room) {
  case "Armory":
    Armory_Panel.style.display = "none"
    Town_Inn_Button.style.display = "inline-block"
    Apothecary_Button.style.display = "inline-block"
    Town_Button.style.display = "inline-block"
    Armory_Button.innerHTML = "Armory"
    break;

  case "Apothecary":
  Apothecary_Panel.style.display = "none"
  Town_Inn_Button.style.display = "inline-block"
  Armory_Button.style.display = "inline-block"
  Town_Button.style.display = "inline-block"
  Apothecary_Button.innerHTML = "Apothecary"

    break;

  case "Town_Inn":
    Town_Inn_Panel.style.display = "none"
    Armory_Button.style.display = "inline-block"
    Apothecary_Button.style.display = "inline-block"
    Town_Button.style.display = "inline-block"
    Town_Inn_Button.innerHTML = "Town Inn"
    break;
  default:
    }

}









////////////////////
////Debug Panel////
//////////////////


function Beg() {
    gold = 99;
}

function Take() {
    copper = 0;
    silver = 0;
    gold = 0;
}

function Heal_Player() {
  player.HP += 1;
  Player_Update()
}

function Damage_Player() {
  player.HP -= 5;
  Player_Update()
}

function No_CoolDown() {
  if (timeroff == false) {timeroff = true}
  else {timeroff = false}
}

function Force_Level() {
  player.EXP += level_req[player.LVL];
  Player_Level_Check();

}
