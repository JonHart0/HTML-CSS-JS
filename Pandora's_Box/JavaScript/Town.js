function Rest() {
  if (total_copper >= 25 && player.HP < player.Max_HP) {
    Spend_Currency(25)
    player.HP += 5;
    if (player.HP > player.Max_HP) {player.HP = player.Max_HP}
    Player_Update()
  }
}

function Buy_Potion() {
  if (total_copper >= 50 && player.Potions < player.Max_Potions) {
    Apothecary_Text.style.display ="none";
    Spend_Currency(50)
    player.Potions += 1
    Player_Update()
  }
}
