import Child from "./UserChild";

export default class User{
    private _id: number;
    private _name: string;
    private _email: string;
    private _age: Date;

    constructor(name: string){
        this._name = name;
    }

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

    get email(): string{
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get age():Date{
        return this._age;
    }

    set age(age: Date){
        this._age = age;
    }

}