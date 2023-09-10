import User from "./User";
import UserParent from "./UserParent";

export default class UserChild extends User{
    private _points: number;
    private _parentId: string;
    
    get points(): number{
        return this._points;
    }

    set points(points: number){
        this._points = points;
    }

    get parentId(): string{
        return this._parentId;
    }

    set parentId(parentId: string){
        this._parentId = parentId;
    }
}