////////////////////////
////Finding Enemies////
//////////////////////


function Search() {
  if (timeroff == false) {CoolDown(Search_Button,3)}
  encounter_index = Encounters();
  switch (encounter_index){
    case '0':
    console.log("TEST")
    enemy = Weighted_Zone_Spawn(zone_one_enemies);
    Enemy_Found(enemy)
      break;

    case '1':
    found_reward = Math.floor(Math.random()*20)
    copper += found_reward;
    Combat_Message.innerHTML = `Found ${found_reward} Copper!`
    window.setTimeout(function(){Combat_Message.innerHTML = ''}, 2000);
      break;

    case '2':
    Combat_Message.innerHTML = "Nothing Found"
    window.setTimeout(function(){Combat_Message.innerHTML = ''}, 2000);
      break;
  }
}

function Encounters() {
  //0: Enemy, 1:Money, 2:Nothing
  var search_encounters = {0: 0.5, 1: 0.1, 2: 0.4}
  let i = 0, prob=0, random=Math.random();
  for (i in search_encounters) {
   prob += search_encounters[i];
   if (random <= prob) {return i; }
  }
}

//Checks the probability of the first array element and compares it to the random number generated.
//if that random number is lessthan or equal to that probability, return the corresponding array selectedIndex
//continue through array until random number is lessthan or equal to (probabilty sums to 1 which is upper limit of Math.random())
function Weighted_Zone_Spawn(zone) {
  let i, spawn_rate = [];
  for (i in zone){
    spawn_rate[i] = zone[i].Spawn_Rate
  }
  let j, total_prob=0, random=Math.random();
  for (j in spawn_rate) {
    total_prob += spawn_rate[j];
    if (random <= total_prob) return zone[j];
  }
}

/////////////////////////
////Fighting Enemies////
///////////////////////

function Enemy_ATK() {
  if ((current_Enemy.ATK - player.DEF) <= 0) {player.HP -= 0}
  else {player.HP -= (current_Enemy.ATK - player.DEF);}
}

function Player_ATK() {
  if ((player.ATK - current_Enemy.DEF) <= 0) {current_Enemy.HP -= 0}
  else {current_Enemy.HP -= (player.ATK - current_Enemy.DEF);}
}

//If target has more than 0 HP subtract HP from enemy and update visuals
//If target has 0 or less HP reveal search button and update attack visual
function Attack() {
  if (current_Enemy.HP > 0) {
    Player_ATK()
    Enemy_ATK()
    Enemy_Health_Bar.style.display = "block";
    Enemy_Health_Bar.style.width = ((current_Enemy.HP / current_Enemy.Max_HP) *100) + "%";
    Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.HP} / ${current_Enemy.Max_HP}`

    Player_Update() }

  if (current_Enemy.HP <= 0) {
    Enemy_Dead()
    Enemy_Reward(enemy)
  }
  if (timeroff == false) {CoolDown(Attack_Button,1)};
}

function Enemy_Found(enemy) {
  player.InCombat = true;
  Explore_Button.style.display = "none"
  current_Enemy = Object.assign({}, enemy)

  Attack_Button.style.display = "inline-block";
  Run_Button.style.display = "inline-block";
  Potion_Button.style.display = "inline-block";

  Enemy_Name.innerHTML = current_Enemy.Name;
  Enemy_Name.style.display = "block";

  Enemy_Health_Panel.style.display = "block";
  Enemy_Health_Bar.style.width = 100 + "%";
  Enemy_Health_Bar.style.display = "block";

  Run_Button.title = `${(current_Enemy.Esc_Rate)*100}%`

  Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.HP} / ${current_Enemy.Max_HP}`
  Search_Button.style.display = "none";
  Enemy_Name.title = current_Enemy.Description; //Change the hover text on the name of the enemy
}

function Enemy_Dead() {
  Enemy_HP_Text.innerHTML = "Dead"
  Combat_Message.innerHTML = "Target Dead"
  Enemy_Name.style.display = "none"; //Hides the Enemies name plate
  Enemy_Health_Bar.style.display = "none"; //Hides the enemies health bar

  Attack_Button.style.display = "none";
  Run_Button.style.display = "none";
  Potion_Button.style.display = "none";
  Explore_Button.style.display = "inline-block"

  player.InCombat = false;
  Search_Button.style.display = "inline-block"
  window.setTimeout(function(){Combat_Message.innerHTML = ''; Enemy_Health_Panel.style.display = "none";}, 1000);
}


function Enemy_Reward(enemy) {
  player.EXP += current_Enemy.EXP;
  Player_Level_Check()
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
  }
}


function Run() {
  esc_random = Math.random()
  if (esc_random <= current_Enemy.Esc_Rate) {
    Enemy_Dead()
    Enemy_HP_Text.innerHTML = "Escaped"
    Combat_Message.innerHTML = "You got away!"
  } else {
    Enemy_ATK()
    Player_Update()
    if (timeroff == false) {CoolDown(Run_Button,2)};
  }
}




////timer////
timeroff = false;

function CoolDown(Button,cooldown_time,test = true) {
  Button.disabled = true;

  if (cooldown_time < 10) {
    Button.innerHTML = "0" + cooldown_time;
  } else {
    Button.innerHTML = cooldown_time;
  }
  if (cooldown_time <= 0) {
    Button.disabled = false;
    switch (Button) {
      case Search_Button:
        Button.innerHTML = "Search"
        break;
      case Attack_Button:
        Button.innerHTML = "Attack"
        break;

      case Run_Button:
        Button.innerHTML = "Run"
        break;

    }
    return;
  }
  cooldown_time -= 1;
  setTimeout(function(){ CoolDown(Button,cooldown_time,false) }, 1000);
}

function Potion() {

  if (player.Potions > 0 && player.HP < player.Max_HP) {
    player.Potions -= 1;
    player.HP += 5;
    Player_Update()
  }

}
