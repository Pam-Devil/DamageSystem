import { DamageCore } from "../../cores/DamageCore";
import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class EnemyDamageListener implements IEventListeners {
   private Entity: string;
   constructor(Entity:string) {
   this.Entity = Entity;
    EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
 }
 onEvent(eventData:any){
    console.log("Enemy took damage! Damage amount:", eventData);
 }
}