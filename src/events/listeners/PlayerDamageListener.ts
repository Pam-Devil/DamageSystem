import { Player } from "../../Entity/Player";
import { DamageCore } from "../../cores/DamageCore";
import { IEntity } from "../../interfaces/IEntity";
import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class PlayerDamageListener implements IEventListeners {
   private Entity: string;
   constructor(Entity:string) {
      EventBus.getInstance().Subscribe('takeDamage',this.onEvent);
   this.Entity = Entity;
    EventBus.getInstance().Subscribe('takeDamage', this.onEvent);
 }
 onEvent(eventData:any){
   const player = new Player();
   console.log("Player took damage! Damage amount:", eventData);
   const new_health = player.PlayerHealth - eventData;
   player.setPlayerHealth(new_health);
   console.log("new player health",player.PlayerHealth);
 }
}