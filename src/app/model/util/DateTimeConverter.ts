export default class DateTimeConverter{
    convert(data: Date): string{
        return `${data.getDay()}/${data.getMonth()}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
    }
}