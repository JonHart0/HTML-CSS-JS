var current_Enemy = {Name: "None", HP: 0, ATK: 0,  DEF:0};

const punching_bag_Enemy = {Name: "Punching Bag", Max_HP: 10, ATK: 0,  DEF:0}

///////////////////////
////Zone 0 Enemies////
/////////////////////
//{Description: "" ,  Name: "",      Max_HP: 0,  HP: 0,  ATK: 0,  DEF:0, Reward_Type: "Copper", Reward_Amount: 0, Spawn_Rate:0, Esc_Rate:1};
const fly_Enemy           = {Description: "Just a harmless fly...right?" ,          Name: "Fly",      Max_HP: 1,  HP: 1,  ATK: 0,  DEF:0, Reward_Type: "Copper", Reward_Amount: 1, Spawn_Rate:0.3,  Esc_Rate:0.9,  EXP: 1};
const rat_Enemy           = {Description: "A small rat minding its own business" ,  Name: "Rat",      Max_HP: 4,  HP: 4,  ATK: 2,  DEF:0, Reward_Type: "Copper", Reward_Amount: 15, Spawn_Rate:0.6, Esc_Rate:0.6,  EXP: 2};
const rabbit_Enemy        = {Description: "Eh, what's up Doc?" ,                    Name: "Rabbit",   Max_HP: 6,  HP: 6,  ATK: 4,  DEF:2, Reward_Type: "Copper", Reward_Amount: 50, Spawn_Rate:0.1, Esc_Rate:0.5,  EXP: 5};
const kobold_Enemy        = {Description: "That pesky kobold theif" ,  Name: "Kobold",     Max_HP: 12,  HP: 12,  ATK: 6,  DEF:2, Reward_Type: "PotionGet", Reward_Amount: 1, Spawn_Rate:0, Esc_Rate:0};

const zone_one_enemies =[fly_Enemy,rat_Enemy,rabbit_Enemy ,kobold_Enemy];


/////////////////
////Zone TBD////
///////////////

const wolf_Enemy = {Name: "Wolf", Max_HP: 15, HP: 15, ATK: 4,  DEF:2, Spawn_Rate:0.5}
const bear_Enemy = {Name: "Bear", Max_HP: 25, HP: 25, ATK: 6,  DEF:5, Spawn_Rate:0.5}

const zone_two_enemies = [wolf_Enemy, bear_Enemy]


////////////////////////////
////Enemies Encounters////
////////////////////////

//Once an enemy is encountered, a new object is made from the enemy's object data
//and all the nessecary displays are enabled
function Enemy_Found(enemy = punching_bag_Enemy) {
  //Hide buttons so user can't do none combat actions during fight
  Explore_Button.style.display = "none";
  Search_Button.style.display = "none";

  player.InCombat = true;
  current_Enemy = Object.assign({}, enemy); //Make a copy from the enemy object to create new temp Object

  //Display name and health bar
  Enemy_Name.innerHTML = current_Enemy.Name;
  Enemy_Name.style.display = "block";
  Enemy_Name.title = current_Enemy.Description; //Change the hover text on the name of the enemy
  Enemy_Health_Panel.style.display = "block";
  Enemy_Health_Bar.style.width = 100 + "%";
  Enemy_Health_Bar.style.display = "block";
  Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.HP} / ${current_Enemy.Max_HP}`;

  //Make Combat action button visible
  Attack_Button.style.display = "inline-block";
  Run_Button.style.display    = "inline-block";
  if (player.Has_Potion == true){Potion_Button.style.display = "inline-block";}

  Run_Button.title = `${(current_Enemy.Esc_Rate)*100}%`; //May remove in favor of bestiary knowledge

}

//Once the enemy's health reaches 0, all display are turned off and player is taken out of combat
function Enemy_Dead() {
  player.InCombat = false;

  Search_Button.style.display = "inline-block"
  Explore_Button.style.display = "inline-block"

  //inform user that enemy is dead
  Combat_Message.innerHTML = "Target Dead"
  Enemy_HP_Text.innerHTML = "Dead"
  Enemy_Health_Bar.style.display = "none";

  //Remove Combat buttons
  Attack_Button.style.display = "none";
  Run_Button.style.display    = "none";
  Potion_Button.style.display = "none";

  //Remove the combat text and enemy health bar after 1 second(s)
  window.setTimeout(function(){Combat_Message.innerHTML = ''; Enemy_Health_Panel.style.display = "none"; Enemy_Name.style.display = "none";}, 1000);
}


function Enemy_Reward(enemy) {
  player.Zone_cnt += 1;
  player.EXP += current_Enemy.EXP;
  Player_Level_Check();

  switch (enemy.Reward_Type) {

    case "Copper":
          copper += enemy.Reward_Amount;
        break;

    case "Silver":
          silver += enemy.Reward_Amount;
        break;

    case "Gold":
          gold += enemy.Reward_Amount;
        break;

    case "PotionGet":
          player.Has_Potion = true;
          player.Potions += enemy.Reward_Amount;
          Apothecary_Text.innerHTML ="Thank you adventurer, now I'll be able to make potions again"
        break;
  }
}
