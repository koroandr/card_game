import interfaces = require('creature.i');

import ICreature = interfaces.ICreature;
import IAttackable = interfaces.IAttackable;
import ICreatureInstance = interfaces.ICreatureInstance;

class Creature implements interfaces.ICreature {
    constructor(private attack: number, private health: number) {

    }
    getAttack():number {
        return this.attack;
    }

    getHealth():number {
        return this.health;
    }
}

export = Creature;
