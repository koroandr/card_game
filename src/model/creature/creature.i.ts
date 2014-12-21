import common_i = require('../common.i');

export interface ICreature {
    getAttack():number;
    getHealth():number;

    createInstance():ICreatureInstance;
}

export interface ICreatureInstance extends common_i.IAttackable {
    getAttack():number;
    getHealth():number;

    isDead(): boolean;

    damage(amount:number);
    heal(amount:number);
}
