import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class UIDamageListener implements IEventListeners {
 constructor() {
    EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
 }
 onEvent(eventName:string, eventData:any){
    console.log("UI Received new Damage data");
 }
}

