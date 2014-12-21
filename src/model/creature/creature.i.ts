export interface ICreature {
    getAttack():number;
    getHealth():number;

    createInstance():ICreatureInstance;
}

export interface ICreatureInstance {
    getAttack():number;
    getHealth():number;

    damage(amount:number);
    heal(amount:number);
}
