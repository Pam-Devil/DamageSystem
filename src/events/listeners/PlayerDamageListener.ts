import { Player } from "../../Entity/Player";
import { DamageCore } from "../../cores/DamageCore";
import { IEntity } from "../../interfaces/IEntity";
import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class PlayerDamageListener implements IEventListeners {
   private player: Player;
   constructor(Player:Player) {
      this.player = Player;
      EventBus.getInstance().Subscribe('takeDamage',this.onEvent);
 }
 onEvent(eventData:any){
   console.log("Player took damage! Damage amount:", eventData);
   //TODO: Fix this weird shit.
   const new_health = this.player.PlayerHealth - eventData;
   this.player.setPlayerHealth(new_health);
   console.log("new player health",this.player.PlayerHealth);
 }
}