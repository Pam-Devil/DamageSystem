import { Pointer } from "../Structs/Reference";
import { EventData } from "../Structs/eventData";
import { EventBus } from "../events/eventBus";
import { EntityDamageListener } from "../events/listeners/EntityDamageListener";
import { UIDamageListener } from "../events/listeners/UIDamageListener";
import { IEntity } from "../interfaces/IEntity";

export class DamageCore { 
    constructor(){
    }
    public doDamage(Entity:string, Attributes:{[index:string]:any}, target:Pointer<IEntity>): void{
        new EntityDamageListener() 
        new UIDamageListener() 
        console.log(`${Entity} is doing damage.`);
        for(const k in Attributes){
            const print = Attributes[k];
            console.log(`${print} points of ${k.toLowerCase()} damage`);
        }
        const result = this.basicDamageCalc(Attributes);
        const eventData: EventData = {
            event:"takeDamage",
            data:{
                targetRef:target,
                who:"Player",
                damageAmount:result
                }
            }   
        EventBus.getInstance().DispatchSignal('takeDamage', eventData);
    }

    public basicDamageCalc(Attributes:{[index:string]:any}){
        return Object.values(Attributes).reduce((a,b)=>a+b, 0) * 0.5
    }
}