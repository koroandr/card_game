import creature_i = require('../creature/creature.i');
import spell_i = require('../spell/spell.i');
import enums = require('../common.e');

import CardType = enums.CardType;

export interface ICard {
    getCost(): number;
    getType(): CardType;
}

export interface ISpellCard extends ICard {
    getSpell(): ISpell;
}

export interface ICreatureCard extends ICard {
    getCreature(): ICreature;
}

//======================================================================================================================

export interface ICreature extends creature_i.ICreature {}

export interface ISpell extends spell_i.ISpell {}
