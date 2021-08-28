var cheese = 0;
var multiplier = 1;
var aMultiplier = 0;
var collectionInterval = 0;

// Dictionary
var clickUpgrades = {
    pickaxe:{
        price: 10,
        quantity: 0,
        multiplier: 1
    },
    spoons:{
        price: 20,
        quantity: 0,
        multiplier: 2
    }
};

var automaticUpgrades = {
    rovers:{
        price: 50,
        quantity: 0,
        multiplier: 10,
    },
    robots:{
        price: 100,
        quantity: 0,
        multiplier: 20,
    }
}

// Mining Functions
function mine(){
    if (multiplier > 1) {
        cheese += 1 * Math.round(multiplier);
    } else {
        Math.round(cheese += 1);
    }
    document.getElementById('cUpdate').innerText = cheese.toString();
}
function autoMine(){
    if(aMultiplier > 1){
        cheese += 1 * Math.round(aMultiplier);
    }
    document.getElementById('cUpdate').innerText = cheese.toString();
}

// Purchase Functions
function buyPickaxe(){
    if(cheese >= clickUpgrades.pickaxe.price){
        multiplier += clickUpgrades.pickaxe.multiplier;
        clickUpgrades.pickaxe.quantity += 1;
        document.getElementById("paUpdate").innerText = clickUpgrades.pickaxe.quantity.toString();
        document.getElementById("cUpdate").innerText = (cheese -= clickUpgrades.pickaxe.price).toString();
        document.getElementById("cMultiplier").innerText = multiplier.toString();
       clickUpgrades.pickaxe.price *= 2;
        document.getElementById("paCount").innerText = clickUpgrades.pickaxe.price.toString();
    }
}
function buySpoons(){
    if(cheese >= clickUpgrades.spoons.price){
        multiplier += clickUpgrades.spoons.multiplier;
        clickUpgrades.spoons.quantity += 1;
        document.getElementById("spUpdate").innerText = clickUpgrades.spoons.quantity.toString();
        document.getElementById("cUpdate").innerText = (cheese -= clickUpgrades.spoons.price).toString();
        document.getElementById("cMultiplier").innerText = multiplier.toString();
        clickUpgrades.spoons.price *= 3;
        document.getElementById("spCount").innerText = clickUpgrades.spoons.price.toString();
    }
}
function buyRovers(){
    if(cheese >= automaticUpgrades.rovers.price){
        aMultiplier += automaticUpgrades.rovers.multiplier;
        automaticUpgrades.rovers.quantity += 1;
        document.getElementById("roUpdate").innerText = automaticUpgrades.rovers.quantity.toString();
        document.getElementById("cUpdate").innerText = (cheese -= automaticUpgrades.rovers.price).toString();
        document.getElementById("acMultiplier").innerText = aMultiplier.toString();
        automaticUpgrades.rovers.price *= 4;
        document.getElementById("roCount").innerText = automaticUpgrades.rovers.price.toString();
    }
}
function buyRobots(){
    if(cheese >= automaticUpgrades.robots.price){
        aMultiplier += automaticUpgrades.robots.multiplier;
        automaticUpgrades.robots.quantity += 1;
        document.getElementById("rbUpdate").innerText = automaticUpgrades.robots.quantity.toString();
        document.getElementById("cUpdate").innerText = (cheese -= automaticUpgrades.robots.price).toString();
        document.getElementById("acMultiplier").innerText = aMultiplier.toString();
        automaticUpgrades.robots.price *= 6;
        document.getElementById("rbCount").innerText = automaticUpgrades.robots.price.toString();
    }
}

// Timer
function timer(type) {
    if (type === 'rovers') {
        clearInterval(collectionInterval);
        buyRovers();
    } else if (type === 'robots') {
        clearInterval(collectionInterval);
        buyRobots();
    } 
    startInterval();
}
function startInterval() {
    collectionInterval = setInterval(autoMine, 3000);
  }