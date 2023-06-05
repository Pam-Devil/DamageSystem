import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class EnemyDamageListener implements IEventListeners {
 constructor() {
    EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
 }
 onEvent(eventName:string, eventData:any){
    console.log("Enemy Received new Damage data");
 }
}