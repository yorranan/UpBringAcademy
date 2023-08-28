import UserChild from "./UserChild";
import User from "./User";

export default class UserParent extends User{
    private _children: UserChild[];

    get children(): UserChild[]{
        return this._children;
    }

    set children(children: UserChild[]){
        this._children = children;
    }
}