////////////////
////Weapons////
//////////////

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


////////////////////////////
////PURCHASE HOVER COST////
//////////////////////////

purchase_stick_sword_button_press.title = Purchase_Button_Hover(stick_sword_cost);
purchase_wooden_sword_button_press.title = Purchase_Button_Hover(wooden_sword_cost);
purchase_copper_sword_button_press.title = Purchase_Button_Hover(copper_sword_cost);

purchase_bark_chest_button_press.title = Purchase_Button_Hover(bark_chest_cost);
purchase_wooden_chest_button_press.title = Purchase_Button_Hover(wooden_chest_cost);
purchase_copper_chest_button_press.title = Purchase_Button_Hover(copper_chest_cost);

  function Purchase_Button_Hover(Item_Cost) {
  var cost_array = [0,0,0]
  cost_array[0] = Math.floor(Item_Cost/10000);
  Item_Cost -= Math.floor(Item_Cost/10000)*10000;
  cost_array[1] = Math.floor(Item_Cost/100);
  Item_Cost -= Math.floor(Item_Cost/100)*100;
  cost_array[2] = Item_Cost;

if (cost_array[0] == 0 && cost_array[1] == 0 & cost_array[2] > 0) {
  cost_array[3] = `${cost_array[2]} Copper`
}
if (cost_array[0] == 0 && cost_array[1] > 0 & cost_array[2] == 0) {
  cost_array[3] = `${cost_array[1]} Silver`
}
if (cost_array[0] == 0 && cost_array[1] > 0 & cost_array[2] > 0) {
  cost_array[3] = `${cost_array[1]} Silver, ${cost_array[2]} Copper`
}
if (cost_array[0] > 0 && cost_array[1] == 0 & cost_array[2] == 0) {
  cost_array[3] = `${cost_array[0]} Gold`
}
if (cost_array[0] > 0 && cost_array[1] == 0 & cost_array[2] > 0) {
  cost_array[3] = `${cost_array[0]} Gold, ${cost_array[2]} Copper`
}
if (cost_array[0] >0 && cost_array[1] > 0 & cost_array[2] > 0) {
  cost_array[3] = `${cost_array[0]} Gold, ${cost_array[1]} Silver, ${cost_array[2]} Copper`
}
  return cost_array[3];
}


///////////////////////////////////
////STORE ITEM DISPLAY CHECKER////
/////////////////////////////////


//Function checks the players total money and unlockes items as they
//gain more money. If the player has enough money and doesnt own the items
//the button turns green, red if not enough money, and black if already purchased
function Currency_Check() {

//STICK SWORD
  Currency_Check_Display_Weapon(purchase_stick_sword_button_press,stick_sword_cost,1);

//WOODEN SWORD
  Currency_Check_Display_Weapon(purchase_wooden_sword_button_press,wooden_sword_cost,2);

//COPPER SWORD
  Currency_Check_Display_Weapon(purchase_copper_sword_button_press,copper_sword_cost,3);

//BARK CHEST
  Currency_Check_Display_Armor(purchase_bark_chest_button_press,bark_chest_cost,1);

//WOODEN CHEST
  Currency_Check_Display_Armor(purchase_wooden_chest_button_press,wooden_chest_cost,2);

//COPPER CHEST
  Currency_Check_Display_Armor(purchase_copper_chest_button_press,copper_chest_cost,3);
}


function Currency_Check_Display_Armor(Purchase_Button_Press,Item_Cost,Item_Number) {
  if (armor_array[Item_Number] == 0){
      if (total_copper >= Item_Cost) {
          Purchase_Button_Press.style.display = "block";
          Purchase_Button_Press.style.backgroundColor = '#006000';
      }else{Purchase_Button_Press.style.backgroundColor = '#700000';
     }
  }else{Purchase_Button_Press.className = 'store-items-purchased';
        Purchase_Button_Press.style.backgroundColor = '#202020';}
}

function Currency_Check_Display_Weapon(Purchase_Button_Press,Item_Cost,Item_Number) {
  if (weapon_array[Item_Number] == 0){
      if (total_copper >= Item_Cost) {
          Purchase_Button_Press.style.display = "block";
          Purchase_Button_Press.style.backgroundColor = '#006000';
      }else{Purchase_Button_Press.style.backgroundColor = '#700000';
     }
  }else{Purchase_Button_Press.className = 'store-items-purchased';
        Purchase_Button_Press.style.backgroundColor = '#202020';}
}


setInterval(function() {Currency_Check() }, 100);
