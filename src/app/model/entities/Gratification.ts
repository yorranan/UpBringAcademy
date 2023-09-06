import UserParent from "./UserParent";
import UserChild from "./UserChild";

export default class Gratification{
    private _id: string;
    private _name: string;
    private _description: string;
    private _points: number;
    private _quantity: number;
    private _parent: UserParent;
    private _redeemDateTime: RedeemDateTime[];

    get id(): string{
        return this._id;
    }

    set id(id: string){
        this._id = id;
    }

    get name(): string{
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

    get description(): string{
        return this._description;
    }

    set desciption(desciption: string){
        this._description = desciption;
    }

    get points(): number{
        return this._points;
    }

    set points(points: number){
        this._points = points;
    }

    get quantity(): number{
        return this._quantity;
    }

    set quantity(quantity: number){
        this._quantity = quantity;
    }

    get parent(): UserParent{
        return this._parent;
    }

    set parent(parent: UserParent){
        this._parent = parent;
    }

    get redeemDateTime(): RedeemDateTime[]{
        return this._redeemDateTime;
    }

    set redeemDateTime(redeemDateTime: RedeemDateTime[]){
        this._redeemDateTime = redeemDateTime;
    }
}

class RedeemDateTime{
    private _child: UserChild;
    private _dateTime: Date;

    get child(): UserChild{
        return this._child;
    }

    set child(child: UserChild){
        this._child = child;
    }

    get dateTime(): Date{
        return this._dateTime;
    }

    set dateTime(dateTime: Date){
        this._dateTime = dateTime;
    }
}