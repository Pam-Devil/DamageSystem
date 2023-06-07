import { Slime } from "./Entity/Enemies/Slime";
import { Player } from "./Entity/Player";
import { DamageCore } from "./cores/DamageCore";
import { UIDamageListener } from "./events/listeners/UIDamageListener";
import { Pointer } from "./Structs/Reference";

function Main(): void{ 
  console.log("Welcome to this shitty game!!");
  const playerRef:Pointer<Player> = {
    value: new Player()
  }  
  const slime = new Slime("Bob", 50, { x: 20, y: 50 }, 6);

  slime.Attack(new DamageCore(), slime.Attributes, playerRef);
}
Main();
