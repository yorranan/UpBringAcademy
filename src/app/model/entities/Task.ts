import UserParent from "./UserParent";
import UserChild from "./UserChild";
import DateTimeConverter from "../util/DateTimeConverter";

export default class Task{
    private _id: string;
    private _name: string;
    private _description: string;
    private _points: number;
    private _beginDateTime: Date;
    private _endDateTime: Date;
    private _conclusionDateTime: Date;
    private _parent: UserParent;
    private _child: UserChild;

    constructor(name: string, description: string, points: number, beginDateTime: Date, endDateTime: Date){
        this._name = name;
        this._description = description;
        this._points = points;
        this._beginDateTime = beginDateTime;
        this._endDateTime = endDateTime;
    }

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

    get conclusionDateTime(): Date{
        return this._conclusionDateTime;
    }

    set conclusionDateTime(conclusionDateTime: Date){
        this._conclusionDateTime = conclusionDateTime;
    }

    get parent(): UserParent{
        return this._parent;
    }

    set parent(parent: UserParent){
        this._parent = parent;
    }

    get child(): UserChild{
        return this._child;
    }

    set child(child: UserChild){
        this._child = child;
    }

    getBeginDateTimeConverted(): string{
        const converter = new DateTimeConverter();
        return converter.convert(this._beginDateTime);
    }

    getEndDateTimeConverted(): string{
        const converter = new DateTimeConverter();
        return converter.convert(this._endDateTime);
    }
}