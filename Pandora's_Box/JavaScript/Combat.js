////////////////////////
////Finding Enemies////
//////////////////////


function Search() {
  if (debug_timer == false) {CoolDown(Search_Button,1)}

  encounter_index = Encounters();

  switch (encounter_index){
    case '0':
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

    case '3':
        Enemy_Found(enemy)
      break;
  }

}

function Encounters() {

  if (player.Zone_cnt < 10) {
      var search_encounters = {0: 0.7, 1: 0.1, 2: 0.2} //0: Enemy, 1:Money, 2:Nothing
      let i = 0, prob=0, random=Math.random();
      for (i in search_encounters) {
           prob += search_encounters[i];
           if (random <= prob) {return i; }
    }
  }

  if (player.Zone_cnt == 10) {
    enemy = kobold_Enemy;
    return "3";
  }

  if (player.Zone_cnt > 10 && player.Zone_cnt < 15) {

    fly_Enemy.Spawn_Rate = 0;
    rat_Enemy.spawn_rate = 0.6;
    rabbit_Enemy.Spawn_Rate =0.4;

      var search_encounters = {0: 0.7, 1: 0.1, 2: 0.2} //0: Enemy, 1:Money, 2:Nothing
      let i = 0, prob=0, random=Math.random();
      for (i in search_encounters) {
           prob += search_encounters[i];
           if (random <= prob) {return i; }
    }
  }

  if (player.Zone_cnt >= 15) {
    Combat_Message.innerHTML = "Please stop, you've killed everything already"
    return 2;
  }

}



//Checks the probability of the first array element and compares it to the random number generated.
//if that random number is lessthan or equal to that probability, return the corresponding array selectedIndex
//continue through array until random number is lessthan or equal to (probabilty sums to 1 which is upper limit of Math.random())
function Weighted_Zone_Spawn(zone) {
  let i, spawn_rate = [];
  let j, total_prob = 0, random = Math.random();
    for (i in zone){
         spawn_rate[i] = zone[i].Spawn_Rate
  }
    for (j in spawn_rate) {
         total_prob += spawn_rate[j];
         if (random <= total_prob) return zone[j];
  }
}

///////////////////////
////Combat Actions////
/////////////////////

//If the current enemy is not dead, both player and enemy will Attack
//If the current enemy has no health combat ends and player is rewarded
//If the debug_timer is not enabled, attack action will go on cooldown
function Attack() {
  if (current_Enemy.HP > 0) {
     Player_ATK(); Enemy_ATK();
     Enemy_Health_Bar.style.width = ((current_Enemy.HP / current_Enemy.Max_HP) *100) + "%";
     Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.HP} / ${current_Enemy.Max_HP}`
     Player_Update()
  }

  if (current_Enemy.HP <= 0) {
    Enemy_Dead();
    Enemy_Reward(enemy);
  }

  if (debug_timer == false) {CoolDown(Attack_Button,1)};
}

//If the Enemy has higher attack than the player's defense, then the play will take the difference in damage
//if the player failes to escape, they take the full damage value of the enemy's attack
function Enemy_ATK(run_attempt = false)  {
  if (run_attempt == true) {
    player.HP -= current_Enemy.ATK
    return
  }

  if ((current_Enemy.ATK - player.DEF) <= 0) {
    player.HP -= 0

} else {
  player.HP -= (current_Enemy.ATK - player.DEF);
  }

}

//If the player has higher attack than the enemy's defense, tehn the enemy will take the differenece in damage
//If the enemy failes to escape, they take the full damage value of the player's attack
function Player_ATK(run_attempt = false) {
  if (run_attempt == true) {
    current_Enemy.HP -= player.ATK
    return
  }
  if ((player.ATK - current_Enemy.DEF) <= 0) {
    current_Enemy.HP -= 0

} else {
  current_Enemy.HP -= (player.ATK - current_Enemy.DEF);
  }

}

//If the randomly generated number is less than the enemy's escape change, the enemy is considered dead, but no reward is generated
//If not, the player will be hit by the full force of the enemy
function Run() {
  esc = Math.random()
  if (esc <= current_Enemy.Esc_Rate) {
      Enemy_Dead()
      Enemy_HP_Text.innerHTML = "Escaped"
      Combat_Message.innerHTML = "You got away!"
} else {
      Enemy_ATK(true)
      Player_Update()

  if (debug_timer == false) {CoolDown(Run_Button,2)};
  }

}

//If the player has discovered the potion, has a potion, and has less than max health, heals player
function Potion() {
  if (player.Potions > 0 && player.HP < player.Max_HP) {
      player.Potions -= 1;
      player.HP += 5;
      Player_Update()
  }
}


////////////////////////
////Action Cooldown////
//////////////////////

//Change this to disable all cooldown timers (Toggle in debug menu)
debug_timer = true;

//Disables the button use for the input amount of time, and changes the button name to match the countdown
//Renames the button based on input button after the timer reaches 0
//Self calling function until the timer reaches 0
function CoolDown(Button,cooldown_time,test = true) {
  Button.disabled = true;
    if (cooldown_time < 10) {Button.innerHTML = "0" + cooldown_time;}
    else {Button.innerHTML = cooldown_time;}

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


//Checks if the player is in combat and makes sure that the health bar is displayed
setInterval(function() {
  if (player.InCombat == true){
    Enemy_Health_Panel.style.display = "block"
    Enemy_Name.style.display = "block"
  }
}, 10);
