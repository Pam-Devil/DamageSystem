"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIDamageListener = void 0;
const eventBus_1 = require("../eventBus");
class UIDamageListener {
    constructor() {
        eventBus_1.EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
    }
    onEvent(eventName, eventData) {
        console.log("UI Received new Damage data");
    }
}
exports.UIDamageListener = UIDamageListener;
