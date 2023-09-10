export default class DateTimeConverter{
    convertDataTime(date: Date): string{
        const today = new Date();
        const tomorrow = new Date()
        const yesterday = new Date()

        tomorrow.setDate(tomorrow.getDate()+1);
        yesterday.setDate(yesterday.getDate()-1);

        if(date.toDateString() === today.toDateString())
            return `Hoje ${date.getHours()}:${date.getMinutes()}`;
        if(date.toDateString() === tomorrow.toDateString())
            return `Amanhã ${date.getHours()}:${date.getMinutes()}`;
        if(date.toDateString() === yesterday.toDateString())
            return `Ontem ${date.getHours()}:${date.getMinutes()}`;

        return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }

    convertDate(date: Date): string{
        return `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
    }
}