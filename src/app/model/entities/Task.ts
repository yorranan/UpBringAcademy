import DateReference from "../util/DateReference";

export default class Task {
  private _id: string;
  private _name: string;
  private _description: string;
  private _points: number;
  private _beginDateTime: Date;
  private _endDateTime: Date;
  private _parentId: string;
  private _conclusionDateTime: DateReference[];

  // constructor(name: string, description: string, points: number, beginDateTime: Date, endDateTime: Date){
  //     this._name = name;
  //     this._description = description;
  //     this._points = points;
  //     this._beginDateTime = beginDateTime;
  //     this._endDateTime = endDateTime;
  // }

  set id(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set description(description: string) {
    this._description = description;
  }

  get description(): string {
    return this._description;
  }

  set points(points: number) {
    this._points = points;
  }

  get points(): number {
    return this._points;
  }

  set beginDateTime(beginDateTime: Date) {
    this._beginDateTime = beginDateTime;
  }

  get beginDateTime(): Date {
    return this._beginDateTime;
  }

  set endDateTime(endDateTime: Date) {
    this._endDateTime = endDateTime;
  }

  get endDateTime(): Date {
    return this._endDateTime;
  }

  set conclusionDateTime(conclusionDateTime: DateReference[]) {
    this._conclusionDateTime = conclusionDateTime;
  }

  get conclusionDateTime(): DateReference[] {
    return this._conclusionDateTime;
  }

  set parentId(parentId: string) {
    this._parentId = parentId;
  }

  get parentId(): string {
    return this._parentId;
  }

}
