"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyDamageListener = void 0;
const eventBus_1 = require("../eventBus");
class EnemyDamageListener {
    constructor() {
        eventBus_1.EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
    }
    onEvent(eventData) {
        console.log("Enemy Received new Damage data");
    }
}
exports.EnemyDamageListener = EnemyDamageListener;
