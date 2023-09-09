export default class DateReference{

    private _childId: string;
    private _dateTime: Date;

    get childId(): string{
        return this._childId;
    }

    set childId(childId: string){
        this._childId = childId;
    }

    get dateTime(): Date{
        return this._dateTime;
    }

    set dateTime(dateTime: Date){
        this._dateTime = dateTime;
    }
}