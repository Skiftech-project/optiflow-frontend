import dayjs from 'dayjs';
import { saveAs } from 'file-saver';

export function saveToMarkdownFile(data = {}) {
    const meta = dayjs().format('[Дата:] DD.MM.YYYY, [Час:] HH:mm');
    const mdTemplate = `
Ваші збережені розрахунки:

==Файл було збережно: ${meta}==

| Параметр | Значення   |
| ----- | ------- |
| Кут ширини  | ${data?.angleWidth} |
| Кут висоти | ${data?.angleHeight} |
| Ширина плями | ${data?.plumeWidth} |
| Висота плями | ${data?.plumeHeight} |
| Мінімальна дистанція | ${data?.minDistance} |
| Максимальна гарантована дистанція передачі даних | ${data?.maxDistance} |

`;
    const blob = new Blob([mdTemplate], { type: 'text/markdown' }),
        filename = `calculations-${dayjs().format('HH-mm-ss')}.md`;

    saveAs(blob, filename);
}
