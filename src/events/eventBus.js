"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
class EventBus {
    constructor() {
        this.eventListeners = {};
    }
    static getInstance() {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }
        return EventBus.instance;
    }
    Subscribe(event, callback) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(callback);
        console.log("Subscribed new event:", event);
    }
    Unsubscribe(event, callback) {
        const listeners = this.eventListeners[event];
        if (listeners) {
            this.eventListeners[event] = listeners.filter((listeners) => listeners !== callback);
            console.log("Unsubscribed event:", event);
        }
    }
    DispatchSignal(event, ...args) {
        const listeners = this.eventListeners[event];
        if (listeners && listeners.length > 0) {
            const listenersCount = listeners.length;
            console.log("Signal Dispatched!");
            for (let i = 0; i < listenersCount; i++) {
                listeners[i](...args);
            }
        }
    }
}
exports.EventBus = EventBus;
