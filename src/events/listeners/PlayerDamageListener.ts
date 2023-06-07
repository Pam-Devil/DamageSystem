import { Player } from "../../Entity/Player";
import { Pointer } from "../../Structs/Reference";
import { EventData } from "../../Structs/eventData";
import { DamageCore } from "../../cores/DamageCore";
import { IEntity } from "../../interfaces/IEntity";
import { IEventListeners } from "../../interfaces/IEventListeners";
import { EventBus } from "../eventBus";

export class PlayerDamageListener implements IEventListeners {
   private player: Player;
   constructor(Player:Pointer<Player>) {
      this.player = Player.value;
      EventBus.getInstance().Subscribe('PlayerDamageListener','takeDamage',this.onEvent);
 }

 public onEvent(eventData:any){
   console.log("Player took damage! Damage amount:", eventData.data.damageAmount);
 }
}