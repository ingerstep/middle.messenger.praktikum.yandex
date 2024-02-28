# Описание

Проект состоит из основных экранов, реализующих функциональность мессенджера.
Экраны сверстаны с помощью шаблонизатора Handlebars, компонентного подхода и использованием рендеринга на стороне клиента.
В проекте используется паттерн Event Bus с реализацией класса Component,
от которого наследуются остальные компоненты.
Компоненты и их массивы можно передавать в props. 
Страницы (pages) являются композиционными классами.
Для использования CRUD операций добавлен кастомный класс Fetch, реализованый с помощью XHR.
Для написания стилей css используется препроцессор Sass.
Стили декомпозированы по компонентам.
Локальный запуск с раздачей статики реализованы настройками сервера Express js.
Разработка в dev режиме cо сборщиком Vite ускоряет написание кода с Hot Module Replacement (HMR).

# Запуск проекта

- `npm install` — установка зависимостей,
- `npm run start` — сборка и запуск,
- `npm run dev` — для запуска в режиме разработки,
- `npm run lint` — для запуска проверки eslint,
- `npm run stylelint` — для запуска проверки stylelint.

# Ссылки

[Домен Netlify](https://deploy--subtle-gingersnap-4c80f7.netlify.app/)

Экраны:

-[авторизация](https://www.figma.com/file/buMrjuDILmy0L8vLTmOu24/Chat_external_link?type=design&node-id=1-600&mode=design&t=Blw63sVPrYMunR14-4),

-[регистрация](https://www.figma.com/file/buMrjuDILmy0L8vLTmOu24/Chat_external_link?type=design&node-id=1-658&mode=design&t=Blw63sVPrYMunR14-4),

-[список чатов](https://www.figma.com/file/buMrjuDILmy0L8vLTmOu24/Chat_external_link?type=design&node-id=1-2&mode=design&t=Blw63sVPrYMunR14-4),

-[настройки пользователя](https://www.figma.com/file/buMrjuDILmy0L8vLTmOu24/Chat_external_link?type=design&node-id=1-498&mode=design&t=Blw63sVPrYMunR14-4),

-[страница 404](https://www.figma.com/file/buMrjuDILmy0L8vLTmOu24/Chat_external_link?type=design&node-id=1-612&mode=design&t=Blw63sVPrYMunR14-4),

-[страница 500](https://www.figma.com/file/buMrjuDILmy0L8vLTmOu24/Chat_external_link?type=design&node-id=1-616&mode=design&t=Blw63sVPrYMunR14-4).

[Макет](https://www.figma.com/file/buMrjuDILmy0L8vLTmOu24/Chat_external_link?type=design&node-id=0-1&mode=design&t=qC3uqijGIFSl3bCL-0)
