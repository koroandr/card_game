import interfaces = require('creature.i');

import ICreature = interfaces.ICreature;
import IAttackable = interfaces.IAttackable;
import ICreatureInstance = interfaces.ICreatureInstance;

class CreatureInstance implements ICreatureInstance {
    constructor(private creature: ICreature) {
        this.attack = creature.getAttack();
        this.health = creature.getHealth();
    }

    attackBy(attacker:IAttackable) {
        attacker.damage(this.getAttack());
        this.damage(attacker.getAttack());
    }

    damage(amount:number) {
        this.health -= amount;
    }

    getAttack():number {
        return this.attack;
    }

    getHealth():number {
        return this.health;
    }

    isDead():boolean {
        return this.getHealth() <= 0;
    }

    heal(amount:number) {
        this.health = Math.min(this.health + amount, this.creature.getHealth());
    }

    private attack: number;
    private health: number;
}

export = CreatureInstance;
