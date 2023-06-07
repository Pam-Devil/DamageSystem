import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class EntityDamageListener implements IEventListeners {
   constructor() {
    EventBus.getInstance().Subscribe('EntityDamageListener','takeDamage', this.onEvent);
 }
 onEvent(eventData:any){
    console.log(`${eventData.data.who} took damage! Damage amount:`,eventData.data.damageAmount);
    console.log(`${eventData.data.who} Current Health:`,eventData.data.targetRef.value.PlayerHealth);

   eventData.data.targetRef.value.takeDamage(eventData.data.damageAmount);
   EventBus.getInstance().Unsubscribe('EntityDamageListener', eventData.event, this.onEvent);
 }
}