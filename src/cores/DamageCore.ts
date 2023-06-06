import { Player } from "../Entity/Player";
import { Attributes } from "../Structs/Attributes";
import { EventBus } from "../events/eventBus";

export class DamageCore { 
    constructor(){
    }
    public doDamage(Entity:string, Attributes:{[index:string]:any}): void{
        console.log(`${Entity} is doing damage.`);
        for(const k in Attributes){
            const print = Attributes[k];
            console.log(`${print} points of ${k.toLowerCase()} damage`);
            EventBus.getInstance().DispatchSignal('takeDamage',100);
        }
    }
}