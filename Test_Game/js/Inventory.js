var copper = 99;
var silver = 2;
var copper_buffer = 0;
var silver_buffer = 0;

function Currency_Conversion() {
  if (copper >= silver_value) {
    silver++
    copper = copper - 100;
  }

  silver_buffer = silver;
  copper_buffer = silver_value * silver + copper + 1;
  
}
setInterval(function(){Currency_Conversion()},100);

setInterval(function(){copper++;
  Dis_Copper.innerHTML  = `Copper: ${copper} (${copper_buffer})`;
  Dis_Silver.innerHTML  = `Silver: ${silver} (${silver_buffer})`;
  Dis_Gold.innerHTML    = "Gold: "   + gold;},
  1000);
