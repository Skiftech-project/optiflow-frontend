import dayjs from 'dayjs';

export function generateMetaData(format = '[Дата:] DD.MM.YYYY, [Час:] HH:mm') {
    return dayjs().format(format);
}
