export default class UserRequestDTO{
    private _name: string;
    private _email: string;
    private _password: string;
    private _age: Date;

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
}