"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DamageCore = void 0;
const eventBus_1 = require("../events/eventBus");
class DamageCore {
    constructor() { }
    doDamage(Entity, Attributes) {
        console.log(`${Entity} is doing damage.`);
        console.log(`${Attributes.Slash} points of slash damage`);
        console.log(`${Attributes.Impact} points of impact damage`);
        console.log(`${Attributes.Piercing} points of piercing damage`);
        eventBus_1.EventBus.getInstance().DispatchSignal("takeDamage", Attributes);
    }
}
exports.DamageCore = DamageCore;
