import { IEventBus } from "../interfaces/IEventBus";
import { IEventHandler } from "../interfaces/IEventHandler";

export type EventCallback<T> = (...args: T[]) => void;

export class EventBus implements IEventBus {
  private static instance: EventBus;
  private eventListeners: Record<string, EventCallback<any>[]> = {};

  private constructor() {}

  public static getInstance() {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  Subscribe<T>(event: string, callback: EventCallback<T>): void {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback);
    console.log("Subscribed new event:",event)
  }
  Unsubscribe<T>(event: string, callback: EventCallback<T>): void {
    const listeners = this.eventListeners[event];
    if (listeners) {
      this.eventListeners[event] = listeners.filter(
        (listeners) => listeners !== callback
      );
      console.log("Unsubscribed event:",event);
    }
  }

  DispatchSignal<T>(event: string, ...args: T[]): void {
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
