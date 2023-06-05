import { EventCallback } from "../events/eventBus";
import { IEventHandler } from "./IEventHandler";

export interface IEventBus {
     Subscribe<T>(event: String, callback: EventCallback<T>): void;
     Unsubscribe<T>(event: String, callback: EventCallback<T>): void;
     DispatchSignal<T>(event: String, ...args: T[]): void;
}