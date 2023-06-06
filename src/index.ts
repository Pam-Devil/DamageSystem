import { Readline } from "readline/promises";
import { Slime } from "./Entity/Enemies/Slime";
import { Player } from "./Entity/Player";
import { DamageCore } from "./cores/DamageCore";
import { EventBus } from "./events/eventBus";
import { EnemyDamageListener } from "./events/listeners/EnemyDamageListener";
import { UIDamageListener } from "./events/listeners/UIDamageListener";
import * as readline from "readline";
function Main(): void{
  console.log("Welcome to this shitty game!!");
  const player = new Player();
  const eventHandler1 = (data: String) => {
    console.log("Event1 received:", data);
  };

  const eventHandler2 = (data: String) => {
    console.log("Event2 received:", data);
  };

  const takeDamage = () => {
    console.log("Enemy took damage");
  };
  const damageCore = new DamageCore();
  const UI = new UIDamageListener();
  const Enemy = new EnemyDamageListener("Slime");
  const damage: number = 500;
  const slime = new Slime("Bob", 50, { x: 20, y: 50 }, 6);
  while (player.PlayerHealth > 0) {
    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    input.question('What the slime should do?',(answer)=> {
        if(answer == "attack"){
            slime.Attack(damageCore, slime.Attributes);
            input.close();
        }
        input.close();
    })
  }
}
Main();
