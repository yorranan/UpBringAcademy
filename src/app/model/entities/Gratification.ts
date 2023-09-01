import UserParent from "./UserParent";

export default class Gratification{
    private _id: number;
    private _name: string;
    private _description: string;
    private _points: number;
    private _userParent: UserParent;

    get id(): number{
        return this._id;
    }

    set id(id: number){
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

    get userParent(): UserParent{
        return this._userParent;
    }

    set userParent(userParent: UserParent){
        this._userParent = userParent;
    }
}