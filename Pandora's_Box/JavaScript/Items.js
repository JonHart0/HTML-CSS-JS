var empty_handed_Item   = {Drop: document.getElementById("Empty_Handed"),                                                                   Slot:0,  Cost:0,     ATK:0, DEF:0, Stats: "ATK : 0 | DEF : 0",  Image: "images/Empty_Handed.png",  Description: "Fist to cuffs like a real man (+0 Dmg)"};
var stick_sword_Item    = {Drop: document.getElementById("Stick_Sword"),  Button: document.getElementById("Purchase_Stick_Sword_Button"),   Slot:1,  Cost:25,    ATK:2, DEF:0, Stats: "ATK : 2 | DEF : 0",  Image: "images/Stick_Sword.png",   Description: "Its a stick, What did you expect (+1 Dmg)"};
var wooden_sword_Item   = {Drop: document.getElementById("Wooden_Sword"), Button: document.getElementById("Purchase_Wooden_Sword_Button"),  Slot:2 , Cost:100,   ATK:4, DEF:0, Stats: "ATK : 4 | DEF : 0",  Image: "images/Wooden_Sword.png",  Description: "Not quite a sword, but better than a stick (+3 Dmg)"};
var copper_sword_Item   = {Drop: document.getElementById("Copper_Sword"), Button: document.getElementById("Purchase_Copper_Sword_Button"),  Slot:3 , Cost:500,   ATK:8, DEF:0, Stats: "ATK : 8 | DEF : 0",  Image: "images/Copper_Sword.png",  Description: "Babies first real weapon (+8 Dmg)"};

var bare_chest_Item     = {Drop: document.getElementById("Bare_Chest"),                                                                     Slot:0,  Cost:0,     ATK:0, DEF:0, Stats: "ATK : 0 | DEF : 0",  Image: "images/Bare_Chest.png",    Description: "Bare as the day you were born (+0 Def)"};
var bark_chest_Item     = {Drop: document.getElementById("Bark_Chest"),   Button: document.getElementById("Purchase_Bark_Chest_Button"),    Slot:1 , Cost:50,    ATK:0, DEF:2, Stats: "ATK : 0 | DEF : 2",  Image: "images/Bark_Chest.png",    Description: "You managed to tape some bark around your chest (+1 Def)"};
var wooden_chest_Item   = {Drop: document.getElementById("Wooden_Chest"), Button: document.getElementById("Purchase_Wooden_Chest_Button"),  Slot:2 , Cost:200,   ATK:0, DEF:4, Stats: "ATK : 0 | DEF : 4",  Image: "images/Wooden_Chest.png",  Description: "A hollow old log with two arm holes chizeled out (+3 Def)"};
var copper_chest_Item   = {Drop: document.getElementById("Copper_Chest"), Button: document.getElementById("Purchase_Copper_Chest_Button"),  Slot:3 , Cost:1000,  ATK:0, DEF:8, Stats: "ATK : 0 | DEF : 8",  Image: "images/Copper_Chest.png",  Description: "Beware of Lightning (+8 Def)"};

const Armor_List =  {0:bare_chest_Item,   1:bark_chest_Item , 2:wooden_chest_Item , 3:copper_chest_Item};
const Weapon_List = {0:empty_handed_Item, 1:stick_sword_Item, 2:wooden_sword_Item,  3:copper_sword_Item};

empty_handed_Item.Drop.title = empty_handed_Item.Stats;
bare_chest_Item.Drop.title = bare_chest_Item.Stats;

Equipped_Weapon.title = empty_handed_Item.Description;
Equipped_Armor.title = bare_chest_Item.Description;
