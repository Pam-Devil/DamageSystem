import { DamageCore } from "../cores/DamageCore";
import { Attributes } from "../Structs/Attributes";
import { IEntity } from "../interfaces/IEntity";

export class Player implements IEntity {
    
    private _PlayerHealth: number = 500

    constructor(){}

    public get PlayerHealth():number {
        return this._PlayerHealth;
    }
    public setPlayerHealth(new_health: number):void {
       this._PlayerHealth = new_health;
    }

    walk(delta: number, Vector3D: object): void {
        return;
    }
    Attack(damageCore: DamageCore, attributes: Attributes): void {
        return;
    }
}