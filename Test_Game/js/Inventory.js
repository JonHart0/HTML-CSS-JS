//Currency
var copper  = 0;
var silver  = 0;
var gold    = 0;

var copper_value = 1;
var silver_value = 100;
var gold_value = 10000

var total_copper = 0;

//Equipment
var weapon_array = [1,0,0,0];
var armor_array = [1,0,0,0];

////////////////////
////Money Maker////
//////////////////

setInterval(function() {copper++;},1000);

/////////////////////////
////Currency Updater////
///////////////////////

setInterval(function() {
        total_copper = copper + (silver * silver_value) + (gold * gold_value);
        Dis_Copper.innerHTML = `Copper: ${copper}`;
        Dis_Silver.innerHTML = `Silver: ${silver}`;
        Dis_Gold.innerHTML = `Gold:   ${gold}`;
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



function Switch_Image(From,To) {
From.src = To.value;
}

//////////////////
////Equipment////
////////////////
