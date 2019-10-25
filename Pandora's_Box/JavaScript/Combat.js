////////////////////////
////Finding Enemies////
//////////////////////

//Function to find the text target, currently not randomized
//copies selected enemies stats into a holding varaible 'current_Enemy'
function Search() {
  current_Enemy = Object.assign({}, rat_Enemy)
  current_Enemy.Current_HP = current_Enemy.HP
  Enemy_Name.innerHTML = current_Enemy.Name;
  Enemy_Health_Panel.style.display = "block";
  enemy_health_bar.style.width = 100 + "%";
  Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.Current_HP} / ${current_Enemy.HP}`
  Find_Enemy_Button.style.display = "none";
  console.log(current_Enemy)
}


/////////////////////////
////Fighting Enemies////
///////////////////////

//If target has more than 0 HP subtract HP from enemy and update visuals
//If target has 0 or less HP reveal search button and update attack visual
function Attack() {
  if (current_Enemy.Current_HP > 0) {

    if ((player.Current_ATK - current_Enemy.DEF) <= 0) {current_Enemy.Current_HP -= 0}
    else {current_Enemy.Current_HP -= (player.Current_ATK - current_Enemy.DEF);}

    if ((current_Enemy.ATK - player.Current_DEF) <= 0) {player.Current_HP -= 0}
    else {player.Current_HP -= (current_Enemy.ATK - player.Current_DEF);}

    enemy_health_bar.style.width = ((current_Enemy.Current_HP / current_Enemy.HP) *100) + "%";
    Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.Current_HP} / ${current_Enemy.HP}`

    Player_Health_Change() }

  if (current_Enemy.Current_HP <= 0) {
    Find_Enemy_Button.style.display = "inline-block"
    Enemy_HP_Text.innerHTML = "---Dead---"
    Combat_Message.innerHTML = "Target Dead"
    enemy_health_bar.style.width = 0;
    window.setTimeout(function(){Combat_Message.innerHTML = ''}, 1000); }
}
