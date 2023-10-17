# React + Vite

Для початку клонуємо репозиторій на свою локальну машину:
```
git clone https://github.com/Skiftech-project/skiftech-frontend.git
```

Переходимо до папки з проектом:
```
cd ./skiftech-frontend
```
Інсталюємо всі залежності проекту запустивши у консолі команду:
```
npm i
```

Щоб запустити проект у режимі розробки треба ввести у консолі наступну команду:
```
npm run dev
```

У випадку якщо після запуску `vite-react` не відкрився браузер зі сторінкою проекту треба ввести в консоль:

```
o
```

Команда для збірки проекту після завершення розробки (збірка для хостинга):

```
npm run build`
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
