import { DamageCore } from "../../cores/DamageCore";
import { Attributes } from "../../Structs/Attributes";
import { IEntity } from "../../interfaces/IEntity";
import { RNGessus } from "../../cores/RNGessus";
import { Pointer } from "../../Structs/Reference";


export class Slime implements IEntity {
    public name:string;
    private _currentLevel:number;
    private _position:object;
    private _attributes:Attributes; 
    private _accuracy: number;
    
    constructor(name:string, currentLevel:number, position:object, accuracy:number){
        this.name = name;
        this._currentLevel = currentLevel;
        this._position = position;
        this._attributes = this.setAttributes();
        this._accuracy = accuracy;
    }
    private setAttributes():Attributes{
        return {
            Slash:30,
            Impact: 20,
            Piercing: 60
        }
    }
    public get Attributes():Attributes {
        return this._attributes;
    }
    public walk(delta: number, Vector3D: object): void {
        console.log("Slime is walking!");
        return;
    }
    public Attack(damageCore: DamageCore, attributes: Attributes, target:Pointer<IEntity>): void {
        console.log(`${this.name} is attacking!`);
        const hit = this.AccuracyCheck(this._accuracy)
        if (hit) {
            console.log(`${this.name} landed his attack. calculating the damage dealt`);
            damageCore.doDamage(this.name, this.Attributes, target);
            return;
        }
        console.log(`${this.name} missed his attack.`)
    }
    private AccuracyCheck(accuracy:number):boolean{
        const RNG = new RNGessus()
        const attempt = RNG.attackEvent(accuracy);
        return attempt <= accuracy
    }
}