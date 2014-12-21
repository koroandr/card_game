import common_i = require('../common.i');

export interface ICreature {
    getAttack():number;
    getHealth():number;
}

export interface ICreatureInstance extends IAttackable {
    getAttack():number;
    getHealth():number;

    isDead(): boolean;

    damage(amount:number);
    heal(amount:number);
}

export interface IAttackable extends common_i.IAttackable {}
