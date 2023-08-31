import UserParent from "./UserParent";
import DateTimeConverter from "../util/DateTimeConverter";

export default class Task{
    private _id: number;
    private _name: string;
    private _description: string;
    private _points: number;
    private _beginDateTime: Date;
    private _endDateTime: Date;
    private _userParent: UserParent;

    constructor(name: string, description: string, points: number, beginDateTime: Date, endDateTime: Date){
        this._name = name;
        this._description = description;
        this._points = points;
        this._beginDateTime = beginDateTime;
        this._endDateTime = endDateTime;
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

    get desciption(): string{
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

    get beginDateTime(): Date{
        return this._beginDateTime;
    }

    set beginDateTime(beginDateTime: Date){
        this._beginDateTime = beginDateTime;
    }

    get endDateTime(): Date{
        return this._endDateTime;
    }

    set endDateTime(endDateTime: Date){
        this._endDateTime = endDateTime;
    }

    get userParent(): UserParent{
        return this._userParent;
    }

    set userParent(userParent: UserParent){
        this._userParent = userParent;
    }

    getBeginDateTimeConvert(): string{
        const converter = new DateTimeConverter();
        return converter.convert(this._beginDateTime);
    }

    getEndDateTimeConvert(): string{
        const conversor = new DateTimeConverter();
        return conversor.convert(this._endDateTime);
    }
}