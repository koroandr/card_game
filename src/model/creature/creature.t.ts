import interfaces = require('creature.i');

import ICreature = interfaces.ICreature;
import IAttackable = interfaces.IAttackable;
import ICreatureInstance = interfaces.ICreatureInstance;

class Creature implements interfaces.ICreature {
    getAttack():number {
        return undefined;
    }

    getHealth():number {
        return undefined;
    }

    createInstance():ICreatureInstance {
        return undefined;
    }

}
