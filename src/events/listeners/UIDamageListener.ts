import { EventData } from "../../Structs/eventData";
import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class UIDamageListener implements IEventListeners {
 constructor() {
    EventBus.getInstance().Subscribe('UIDamageListener','takeDamage', this.onEvent);
 }
 onEvent(eventData:any){
    console.log("UI Received new Damage data");
    console.log("damage data from:", "Bob");
 }
}

