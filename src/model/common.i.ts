export interface IAttackable {
    attackBy(attacker: IAttackable);

    damage(amount:number);
    getAttack():number;
}
