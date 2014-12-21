import card_i = require('../card/card.i');
import creature_i = require('../creature/creature.i');
import common_i = require('../common.i');

export interface IDeck {
    getCount():number;
    takeCard(): ICard;
    showTopCards(num: number): ICard[];
    shuffle();
}

export interface IManaPool {
    getCapacity(): number;
    getMana(): number;
    useMana(count: number);
}

export interface ICardWrapper {
    getCard(): ICard;
    canCast(): boolean;
}

export interface ICreatureInstanceWrapper {
    getCreatureInstance(): ICreatureInstance;
    canAttack(): boolean;
    resetCanAttack(): boolean;
}

export interface IPlayer extends IAttackable {
    getHand(): ICardWrapper[];
    getCreatureInstances(): ICreatureInstanceWrapper[];
    getManaPool(): IManaPool;
    getDeck(): IDeck;

    getHealth():number;
}

export interface IEngine {
    getActivePlayer(): IPlayer;
    getPassivePlayer(): IPlayer;
    //Разыгрывает карту активного игрока
    castCard(card: ICardWrapper);
    //Атакует существом одного игрока существо другого игрока
    //Если второй аргумент не указан, то атакует самого игрока
    attack(source: ICreatureInstanceWrapper, target?: ICreatureInstanceWrapper);

    finishTurn();
}


export interface IAttackable extends common_i.IAttackable {}
export interface ICard extends card_i.ICard {}
export interface ICreatureInstance extends creature_i.ICreatureInstance {}
