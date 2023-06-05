"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIDamageListener = void 0;
const eventBus_1 = require("../eventBus");
class UIDamageListener {
    constructor() {
        eventBus_1.EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
    }
    onEvent(eventData) {
        console.log("UI Received new Damage data");
        console.log("damage data is:", eventData);
    }
}
exports.UIDamageListener = UIDamageListener;
