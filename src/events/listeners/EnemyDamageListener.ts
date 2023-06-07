import { Player } from "../../Entity/Player";
import { DamageCore } from "../../cores/DamageCore";
import { IEntity } from "../../interfaces/IEntity";
import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class EnemyDamageListener implements IEventListeners {
   private Entity: string;
   constructor(Entity:string) {
   this.Entity = Entity;
    EventBus.getInstance().Subscribe('EnemyDamageListener','takeDamage', this.onEvent);
 }
 onEvent(eventData:any){
    console.log(`${eventData.data.who} took damage! Damage amount:`,eventData.data.damageAmount);
   console.log(
    eventData.data.targetRef.value.PlayerHealth
   )
 }
}