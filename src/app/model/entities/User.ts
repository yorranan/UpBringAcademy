export default class User{
    private _id: number;
    private _admin: boolean;
    private _name: string;
    private _email: string;

    constructor(name: string){
        this._name = name;
    }

    get id(): number{
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    get admin(): boolean{
        return this._admin;
    }

    set admin(admin: boolean){
        this._admin = admin;
    }

    get name(): string{
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

    get email(): string{
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

}