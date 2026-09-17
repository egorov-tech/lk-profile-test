# Avanti — Personal Data Form

Тестовое задание: один экран личного кабинета из Figma, реализованный на Vue 3 Composition API и подготовленный для Laravel через Blade + Vite.

## Что готово

- точная desktop-реализация экрана `Personal Data Form` Avanti;
- адаптация для 390px без горизонтального скролла;
- отдельные переиспользуемые компоненты: поля, выбор пола, селект документа, навигация шага, бренд и информационная строка;
- никаких inline CSS и inline JavaScript;
- Vitest-проверки и production build.

## Запуск

```bash
npm install
npm run dev
```

Проверки:

```bash
npm test
npm run build
```

## Laravel

Подключите `resources/views/account-profile.blade.php` и Vite entry `resources/js/app.js`. Демо-форма не отправляет сетевой запрос: она показывает локальное успешное состояние, а серверная обработка остаётся Laravel-контроллеру.
