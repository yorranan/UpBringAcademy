import DateReference from "../util/DateReference";

export default class Gratification{
    private _id: string;
    private _name: string;
    private _description: string;
    private _points: number;
    private _quantity: number;
    private _parentId: string;
    private _redeemDateTime: DateReference[];

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

    set description(desciption: string){
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

    get parentId(): string{
        return this._parentId;
    }

    set parentId(parentId: string){
        this._parentId = parentId;
    }

    get redeemDateTime(): DateReference[]{
        return this._redeemDateTime;
    }

    set redeemDateTime(redeemDateTime: DateReference[]){
        this._redeemDateTime = redeemDateTime;
    }
}