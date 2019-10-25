////////////////////////
////Finding Enemies////
//////////////////////

//Function to find the text target, currently not randomized
//copies selected enemies stats into a holding varaible 'current_Enemy'
function Search() {
  current_Enemy = Object.assign({}, rat_Enemy)
  current_Enemy.Current_HP = current_Enemy.Base_HP
  Enemy_Name.innerHTML = current_Enemy.Name;
  Enemy_Health_Panel.style.display = "block";
  enemy_health_bar.style.width = 100 + "%";
  Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.Current_HP} / ${current_Enemy.Base_HP}`
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
    current_Enemy.Current_HP -= (player.Current_ATK - current_Enemy.Def)
    player.Current_HP -= (current_Enemy.ATK - player.Current_DEF)
    enemy_health_bar.style.width = ((current_Enemy.Current_HP / current_Enemy.Base_HP) *100) + "%";
    Enemy_HP_Text.innerHTML = `HP: ${current_Enemy.Current_HP} / ${current_Enemy.Base_HP}` }
    player_health_bar.style.width = ((player.Current_HP / player.Base_HP) *100) + "%";
    Player_HP_Text.innerHTML = `HP: ${player.Current_HP} / ${player.Base_HP}`

  if (current_Enemy.Current_HP <= 0) {
    Find_Enemy_Button.style.display = "inline-block"
    Enemy_HP_Text.innerHTML = "---Dead---"
    Combat_Message.innerHTML = "Target Dead"
    window.setTimeout(function(){Combat_Message.innerHTML = ''}, 1000); }
}
