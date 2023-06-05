"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const UI = new UIDamageListener_1.UIDamageListener();
const Enemy = new EnemyDamageListener_1.EnemyDamageListener();
const damage = 500;
console.log("------------ First dispatch ------------------");
eventBus_1.EventBus.getInstance().DispatchSignal("takeDamage");
console.log("------------ Second dispatch ------------------");
eventBus_1.EventBus.getInstance().DispatchSignal("takeDamage", damage);
