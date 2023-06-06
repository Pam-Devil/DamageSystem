import { Attributes } from "../Structs/Attributes";
import { DamageCore } from "../cores/DamageCore";

export interface IEntity {
    walk(delta:number, Vector3D:object):void;
    Attack( damageCore:DamageCore, attributes:Attributes):void;
}