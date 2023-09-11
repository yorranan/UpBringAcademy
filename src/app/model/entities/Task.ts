import DateReference from "../util/DateReference";

export default class Task{
    private _id: string;
    private _name: string;
    private _description: string;
    private _points: number;
    private _beginDateTime: Date;
    private _endDateTime: Date;
    private _parentId: string;
    private _conclusionDateTime: DateReference[];

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

    get conclusionDateTime(): DateReference[]{
        return this._conclusionDateTime;
    }

    set conclusionDateTime(conclusionDateTime: DateReference[]){
        this._conclusionDateTime = conclusionDateTime;
    }

    get parentId(): string{
        return this._parentId;
    }

    set parent(parentId: string){
        this._parentId = parentId;
    }

}