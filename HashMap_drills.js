const HashMap = require('./hash-map');

function main() {
    const hashMapLOTR = new HashMap();

    hashMapLOTR.set("Hobbit", "Bilbo");
    hashMapLOTR.set("Hobbit", "Frodo");
    hashMapLOTR.set("Wizard", "Gandalf");
    hashMapLOTR.set("Human", "Aragorn");
    hashMapLOTR.set("Elf", "Legolas");
    hashMapLOTR.set("Maiar", "The Necromancer");
    hashMapLOTR.set("Maiar", "Sauron");
    hashMapLOTR.set("RingBearer", "Gollum");
    hashMapLOTR.set("LadyOfLight", "Galadriel");
    hashMapLOTR.set("HalfElven", "Arwen");
    hashMapLOTR.set("Ent", "Treebeard");

    return hashMapLOTR.get("Hobbit");
}

console.log(main());

/*
WhatDoesThisDo?
    Sets the same key with different values in two different hashmaps
*/

