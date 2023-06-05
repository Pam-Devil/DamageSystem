"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventBus_1 = require("./events/eventBus");
const eventHandler1 = (data) => {
    console.log("Event1 received:", data);
};
const eventHandler2 = (data) => {
    console.log("Event2 received:", data);
};
eventBus_1.EventBus.getInstance().Subscribe('Example Event1', eventHandler1);
eventBus_1.EventBus.getInstance().Subscribe('Example Event2', eventHandler2);
eventBus_1.EventBus.getInstance().DispatchSignal("Example Event2", "Hello event");
eventBus_1.EventBus.getInstance().Unsubscribe("Example Event2", eventHandler2);
