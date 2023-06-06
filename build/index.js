"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Slime_1 = require("./Entity/Enemies/Slime");
const DamageCore_1 = require("./cores/DamageCore");
const eventBus_1 = require("./events/eventBus");
const EnemyDamageListener_1 = require("./events/listeners/EnemyDamageListener");
const UIDamageListener_1 = require("./events/listeners/UIDamageListener");
const eventHandler1 = (data) => {
    console.log("Event1 received:", data);
};
const eventHandler2 = (data) => {
    console.log("Event2 received:", data);
};
const takeDamage = () => {
    console.log("Enemy took damage");
};
const damageCore = new DamageCore_1.DamageCore();
const UI = new UIDamageListener_1.UIDamageListener();
const Enemy = new EnemyDamageListener_1.EnemyDamageListener("Slime");
const damage = 500;
const slime = new Slime_1.Slime("Bob", 50, { x: 20, y: 50 }, 6);
console.log("------------ First dispatch ------------------");
eventBus_1.EventBus.getInstance().DispatchSignal("takeDamage");
console.log("------------ Second dispatch ------------------");
eventBus_1.EventBus.getInstance().DispatchSignal("takeDamage", damage);
console.log("------------ Second dispatch ------------------");
console.log("Testing bob attributes. attributes:", slime.Attributes);
slime.Attack(damageCore, slime.Attributes);
