import User from "./User";
import UserParent from "./UserParent";

export default class UserChild extends User{
    private _points: number;
    private _parent: UserParent;
    
    get points(): number{
        return this._points;
    }

    set points(points: number){
        this._points = points;
    }

    get parent(): UserParent{
        return this._parent;
    }

    set parent(parent: UserParent){
        this._parent = parent;
    }
}