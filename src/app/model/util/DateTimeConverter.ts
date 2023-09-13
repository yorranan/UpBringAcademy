import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export default class DateTimeConverter{

    constructor(private datePipe: DatePipe){}

    convertDataTime(date: Date): string{
        const today = new Date;
        const tomorrow = new Date;
        const yesterday = new Date;
        const newDate = new Date(date);

        tomorrow.setDate(tomorrow.getDate()+1);
        yesterday.setDate(yesterday.getDate()-1);

        if(date.toDateString() === today.toDateString())
            return `Hoje ${date.getHours()}:${date.getMinutes()}`;
        if(date.toDateString === tomorrow.toDateString)
            return `Amanhã ${date.getHours()}:${date.getMinutes()}`;
        if(date.toDateString === yesterday.toDateString)
            return `Ontem ${date.getHours()}:${date.getMinutes()}`;

        return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }

    convertDate(date: Date): string{
        const formatedDate = this.datePipe.transform(date, 'yyyy-MM-dd');

        const partes = formatedDate.split('-');
        const year = +partes[0];
        const month = +partes[1];
        const day = +partes[2];

        return(`${day}/${month}/${year}`);
    }
}