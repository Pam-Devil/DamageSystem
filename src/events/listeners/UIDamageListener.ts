import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class UIDamageListener implements IEventListeners {
 constructor() {
    EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
 }
 onEvent(eventData:any){
    console.log("UI Received new Damage data");
    console.log("damage data is:",eventData);
 }
}

