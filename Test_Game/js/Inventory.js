var copper = 10;
var silver = 1;
var gold = 1;

var copper_value = 1;
var silver_value = 100;
var gold_value = 10000;

var total_copper = 0;



setInterval(function() {
        copper++;
        total_copper = copper + (silver * silver_value) + (gold * gold_value);
        Dis_Copper.innerHTML = `Copper: ${copper}`;
        Dis_Silver.innerHTML = `Silver: ${silver}`;
        Dis_Gold.innerHTML = `Gold:   ${gold}`;
        weapon_a.innerHTML = weapon_array;

        //armor_a.innerHTML = armor_array;
    },1000);


function Currency_Conversion() {
    if (copper >= silver_value) {

        silver += Math.floor(copper / 100);
        copper -= 100 * Math.floor(copper / 100);
    }
    if ((copper + (silver * silver_value)) >= gold_value) {
        gold += Math.floor(silver / 100);
        silver -= 100 * Math.floor(silver / 100);
    }
}

setInterval(function() {Currency_Conversion()}, 1000);

////////////////////////
////Inventory Items////
//////////////////////
var weapon_array = [1,0,0,0];
var armor_array = [1,0,0,0];

const weapons = document.getElementById("Weapons");
const armors = document.getElementById("Armors");
