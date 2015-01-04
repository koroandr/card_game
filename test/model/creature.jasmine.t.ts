/// <reference path="../../DefinitelyTyped/jasmine/jasmine.d.ts" />
import interfaces = require('../../src/model/creature/creature.i');
import CreatureInstance = require('../../src/model/creature/creature_instance.t');
import Creature = require('../../src/model/creature/creature.t');

import ICreature = interfaces.ICreature;

describe('Creatures module', ()=>{
    describe('CreatureInstance', ()=>{
        var creature_mock: ICreature,
            creature: CreatureInstance;

        beforeEach(()=>{
            creature_mock = {
                getAttack: ()=>{
                    return 3;
                },
                getHealth: ()=>{
                    return 4;
                },
                createInstance: ()=>{
                    return undefined;
                }
            };

            creature = new CreatureInstance(creature_mock);
        });

        it("constructs with creature's attack and health", ()=>{
            expect(creature.getAttack()).toBe(3);
            expect(creature.getHealth()).toBe(4);
        });

        it("can attack other creature and take damage", ()=>{
            var second_creature:CreatureInstance = new CreatureInstance(creature_mock);
            creature.attackBy(second_creature);

            expect(creature.getHealth()).toBe(1);
            expect(second_creature.getHealth()).toBe(1);
        });

        it("can take damage", ()=>{
            creature.damage(2);
            expect(creature.getHealth()).toBe(2);
        });

        it("can take damage and die", ()=>{
            creature.damage(4);
            expect(creature.getHealth()).toBe(0);
            expect(creature.isDead()).toBe(true);
        });

        it("can be healed", ()=>{
            creature.damage(2);
            creature.heal(1);
            expect(creature.getHealth()).toBe(3);
        });

        it("cannot be healed over maximum", ()=>{
            creature.damage(2);
            creature.heal(3);
            expect(creature.getHealth()).toBe(4);
        });

        it("can attack and it's reset", ()=>{
            var second_creature:CreatureInstance = new CreatureInstance(creature_mock);
            expect(creature.canAttack()).toBe(true);
            second_creature.attackBy(creature);
            expect(creature.canAttack()).toBe(false);
            expect(second_creature.canAttack()).toBe(true);
            creature.resetBeforeTurn();
            expect(creature.canAttack()).toBe(true);
        });
    });

    describe("Creature", ()=>{
        it("constructs with correct params", ()=>{
            var creature = new Creature(5, 10);
            expect(creature.getHealth()).toBe(10);
            expect(creature.getAttack()).toBe(5);
        });
    });
});
