////////////////////////
////Finding Enemies////
//////////////////////

//Function to find the text target, currently not randomized
//copies selected enemies stats into a holding varaible 'current_Enemy'
function Search() {
search_number = (Math.floor(Math.random()*2.99));
  switch (search_number) {
    case 0:
    Random_Enemy(zone_one_enemies)
    Enemy_Found(enemy)
      break;

    case 1:
    Combat_Message.innerHTML = "Found 10 Copper!"
    window.setTimeout(function(){Combat_Message.innerHTML = ''}, 1000);
    copper += 10;
      break;

    case 2:
    Combat_Message.innerHTML = "Nothing Found"
    window.setTimeout(function(){Combat_Message.innerHTML = ''}, 1000);
      break;
  }

}


/////////////////////////
////Fighting Enemies////
///////////////////////

//If target has more than 0 HP subtract HP from enemy and update visuals
//If target has 0 or less HP reveal search button and update attack visual
function Attack() {
  if (current_Enemy.HP > 0) {

    if ((player.ATK - current_Enemy.DEF) <= 0) {current_Enemy.HP -= 0}
    else {current_Enemy.HP -= (player.ATK - current_Enemy.DEF);}

    if ((current_Enemy.ATK - player.DEF) <= 0) {player.HP -= 0}
    else {player.HP -= (current_Enemy.ATK - player.DEF);}

    Enemy_Health_Bar.style.width = ((current_Enemy.HP / current_Enemy.Max_HP) *100) + "%";
    Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.HP} / ${current_Enemy.Max_HP}`

    Player_Health_Change() }

  if (current_Enemy.HP <= 0) {
    Enemy_Dead()
    Enemy_Reward(enemy)
}


function Enemy_Dead() {
  Enemy_HP_Text.innerHTML = "Dead"
  Combat_Message.innerHTML = "Target Dead"
  Enemy_Name.style.display = "none"; //Hides the Enemies name plate
  Enemy_Health_Bar.style.display = "none"; //Hides the enemies health bar

  player.InCombat = "False";
  Find_Enemy_Button.style.display = "inline-block"
  window.setTimeout(function(){Combat_Message.innerHTML = ''}, 1000); }
}

function Enemy_Found(enemy) {
  player.InCombat = "True";
  current_Enemy = Object.assign({}, enemy)

  Enemy_Name.innerHTML = current_Enemy.Name;
  Enemy_Name.style.display = "block";

  Enemy_Health_Panel.style.display = "block";
  Enemy_Health_Bar.style.width = 100 + "%";
  Enemy_Health_Bar.style.display = "block";

  Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.HP} / ${current_Enemy.Max_HP}`
  Find_Enemy_Button.style.display = "none";
  Enemy_Name.title = current_Enemy.Description; //Change the hover text on the name of the enemy
}

function Random_Enemy(zone) {
 enemy_number = (Math.floor(Math.random()*2.99));
 console.log(enemy_number)
 enemy = zone[enemy_number]
 return enemy;
}

function Enemy_Reward(enemy) {
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
