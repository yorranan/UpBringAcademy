export default class User{
    private _id: string;
    private _name: string;
    private _email: string;
    private _password: string;
    private _age: Date;
    private _registerDate: Date;
    private _inactivateDate: Date;

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

    get email(): string{
        return this._email;
    }

    set email(email: string){
        this._email = email;
    }

    get password(): string{
        return this._password;
    }

    set password(password: string){
        this._password = password;
    }

    get age():Date{
        return this._age;
    }

    set age(age: Date){
        this._age = age;
    }

    get registerDate(): Date{
        return this._registerDate;
    }

    set registerDate(registerDate: Date){
        this._registerDate = registerDate;
    }

    get inactivateDate(): Date{
        return this._inactivateDate;
    }

    set inactivateDate(inactivateDate: Date){
        this._inactivateDate = inactivateDate;
    }
}