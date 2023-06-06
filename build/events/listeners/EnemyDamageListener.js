"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyDamageListener = void 0;
const eventBus_1 = require("../eventBus");
class EnemyDamageListener {
    constructor(Entity) {
        this.Entity = Entity;
        eventBus_1.EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
    }
    onEvent(eventData) {
        console.log("Enemy took damage! Damage amount:", eventData);
    }
}
exports.EnemyDamageListener = EnemyDamageListener;
