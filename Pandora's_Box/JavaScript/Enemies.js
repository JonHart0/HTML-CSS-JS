var current_Enemy = {Name: "None", HP: 0, ATK: 0,  DEF:0};

const punching_bag_Enemy = {Name: "Punching Bag", Max_HP: 10, ATK: 0,  DEF:0}

///////////////////////
////Zone 0 Enemies////
/////////////////////

const rat_Enemy =  {Description: "A small rat minding its own business" , Name: "Rat",      Max_HP: 4,  HP: 4,  ATK: 2,  DEF:0, Reward_Type: "Copper", Reward_Amount: 5};
const rabbit_Enemy =  {Description: "Eh, what's up Doc?" ,                Name: "Rabbit",   Max_HP: 6,  HP: 6,  ATK: 3,  DEF:1, Reward_Type: "Copper", Reward_Amount: 15};
const fly_Enemy =  {Description: "Just a harmless fly...right?" ,         Name: "Fly",      Max_HP: 1,  HP: 1,  ATK: 0,  DEF:0, Reward_Type: "Copper", Reward_Amount: 1};
const zone_one_enemies =[rat_Enemy, rabbit_Enemy, fly_Enemy];


/////////////////
////Zone TBD////
///////////////

const wolf_Enemy = {Name: "Wolf", Max_HP: 15, HP: 15, ATK: 4,  DEF:2}
const bear_Enemy = {Name: "Bear", Max_HP: 25, HP: 25, ATK: 6,  DEF:5}
