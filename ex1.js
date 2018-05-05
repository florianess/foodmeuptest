const units = require('./units.json');

//fonction récursive pour obtenir le facteur
function convertUnit(unit1,unit2,quantity = 1) {
  //unit1 = testG(unit1);
  //unit2 = testG(unit2);

  //condition d'arrêt de la fonction récursive
  if (unit1.referenceUnit === unit2.referenceUnit) {
    console.log("Le facteur est: "+ (unit1.quantity/unit2.quantity) * quantity );
  } else {
    quantity = quantity*unit1.quantity;
    unit1 = deepUnit(unit1);
    unit2 = deepUnit(unit2);
    //compare les 2 nouvelles unités (récursivité)
    convertUnit(unit1,unit2,quantity);
  }
};

//Permet d'obtenir l'unité plus "profonde" ex: 3pce -> pce -> kg
function deepUnit(unit) {
  if (unit.referenceUnit !== "g") {
    return units.filter(u => u.id === unit.referenceUnit)[0];
  } else {
    return unit
  }
};

/*Inutile si on modifie l'Unit g directement
function testG(unit) {
  if (unit.id === "g"){
    return {id:"g",
    name:"g",
    quantity:1,
    referenceUnit:"g"}
  } else {
    return unit
  }
}*/

const unit1 = units[2]; //4PCE
const unit2 = units[6]; //g
convertUnit(unit1,unit2); //4 pièces en grammes
