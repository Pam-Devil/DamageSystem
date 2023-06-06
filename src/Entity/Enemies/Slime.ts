import { DamageCore } from "../../cores/DamageCore";
import { Attributes } from "../../Structs/Attributes";
import { IEntity } from "../../interfaces/IEntity";


export class Slime implements IEntity {
    public name:string;
    private currentLevel:number;
    private position:object;
    private attributes:Attributes; 
    
    constructor(name:string, currentLevel:number, position:object){
        this.name = name;
        this.currentLevel = currentLevel;
        this.position = position;
        const attributes = this.setAttributes()
        this.attributes = attributes;
    }
    private setAttributes():Attributes{
        return {
            Slash:30,
            Impact: 20,
            Piercing: 60
        }
    }
    public getAttributes():Attributes {
        return this.attributes;
    }
    public walk(delta: number, Vector3D: object): void {
        console.log("Slime is walking!");
    }
    public Attack(damageCore: DamageCore, attributes: Attributes): void {
       this.name 
    }
}