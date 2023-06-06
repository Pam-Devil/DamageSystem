import { Attributes } from "../Structs/Attributes";

export class DamageCore {
    
    constructor(){}
    public doDamage(Entity:string, Attributes:Attributes): void{
        console.log(`${Entity} is doing damage.`);
        console.log(`${Attributes.Slash} points of slash damage`);
        console.log(`${Attributes.Impact} points of impact damage`);
        console.log(`${Attributes.Piercing} points of piercing damage`);
    }
}