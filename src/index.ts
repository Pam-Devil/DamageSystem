import { EventBus } from "./events/eventBus";
import { EnemyDamageListener } from "./events/listeners/EnemyDamageListener";
import { UIDamageListener } from "./events/listeners/UIDamageListener";
const eventHandler1 = (data:String) => {
    console.log("Event1 received:",data);
};

const eventHandler2 = (data:String) => {
    console.log("Event2 received:",data);
};

const takeDamage = () => {
    console.log("Enemy took damage");
}

const UI = new UIDamageListener();
const Enemy = new EnemyDamageListener();

console.log("------------ First dispatch ------------------")
EventBus.getInstance().DispatchSignal("takeDamage");
console.log("------------ Second dispatch ------------------")
EventBus.getInstance().DispatchSignal("takeDamage");

