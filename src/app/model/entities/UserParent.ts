import UserChild from "./UserChild";
import User from "./User";

export default class UserParent extends User{
    private _childrenId: string[];

    get childrenId(): string[]{
        return this._childrenId;
    }

    set childrenId(childrenId: string[]){
        this._childrenId = childrenId;
    }
}