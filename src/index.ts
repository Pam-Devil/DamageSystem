import { Readline } from "readline/promises";
import { Slime } from "./Entity/Enemies/Slime";
import { Player } from "./Entity/Player";
import { DamageCore } from "./cores/DamageCore";
import { EventBus } from "./events/eventBus";
import { EnemyDamageListener } from "./events/listeners/EnemyDamageListener";
import { UIDamageListener } from "./events/listeners/UIDamageListener";
import * as readline from "readline";
import { promisify } from "util";
import { InputSystem } from "./InputSystem";
import { PlayerDamageListener } from "./events/listeners/PlayerDamageListener";
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
  const PlayerListener = new PlayerDamageListener(player); 
  const damage: number = 500;
  const slime = new Slime("Bob", 50, { x: 20, y: 50 }, 6);
// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Event listener for keyboard input
  rl.on('line', (input) => {
    if (input === 'a') {
      // Trigger attack event
        slime.Attack(damageCore, slime.Attributes)
      // Call your attack logic here
    } else {
      // Reset the game or perform other actions
      console.log('Game reset.');
      // Call your game reset logic here
    }
  });
  
  // Start listening for input
  console.log('Press "a" to attack or any other key to reset the game.');
  
  // Cleanup function to handle program termination
  const cleanup = () => {
    rl.close();
    process.exit();
  };
  
  // Listen for program termination
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
 }
Main();
