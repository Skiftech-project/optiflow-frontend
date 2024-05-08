import { saveAs } from 'file-saver';

import { generateMetaData } from '../utils';

const useSaveToFileService = () => {
    const saveTableToMarkdownFile = (data = {}) => {
        const mdTemplate = `
Ваші збережені розрахунки:

==Файл було збережно: ${generateMetaData()}==

| Параметр                                         | Значення |
|:------------------------------------------------ |:--------:|
| Кут ширини                                       | ${data?.angle_width} |
| Кут висоти                                       | ${data?.angle_height} |
| Ширина плями                                     | ${data?.plume_width_module3} |
| Висота плями                                     | ${data?.plume_height_module3} |
| Мінімальна дистанція                             | ${data?.min_distance} |
| Максимальна гарантована дистанція передачі даних | ${data?.max_distance} |
`;
        const blob = new Blob([mdTemplate], { type: 'text/markdown' });
        const filename = `calculations-${generateMetaData('HH-mm-ss')}.md`;

        saveAs(blob, filename);
    };

    return { saveTableToMarkdownFile };
};

export default useSaveToFileService;
