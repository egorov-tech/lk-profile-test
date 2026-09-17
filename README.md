# Avanti — Personal Data Form

Тестовое задание: адаптивное окно личного кабинета по Figma. Реализовано на Vue 3 Composition API и подготовлено для подключения к Laravel через Blade + Vite.

## Стек

- Vue 3 + Composition API;
- Vite;
- CSS без inline-стилей;
- Vitest.

## Структура

- `resources/js/components/account/` — переиспользуемые UI-компоненты;
- `resources/js/pages/` — экран личного кабинета;
- `resources/css/account/` — токены, layout и стили экрана;
- `resources/views/` — Blade-шаблон для Laravel;
- `tests/` — поведенческие проверки элементов формы.

## Локальный запуск

```bash
npm install
npm run dev
```

Проверки:

```bash
npm test
npm run build
```

## Проверки

```bash
npm test
npm run build
```

## Laravel

Подключите `resources/views/account-profile.blade.php` и Vite entry `resources/js/app.js`. Демо-форма не отправляет сетевой запрос: она показывает локальное успешное состояние, а серверная обработка остаётся Laravel-контроллеру.

## GitHub Pages

После пуша в ветку `codex/lk-profile-test` GitHub Actions собирает и публикует приложение в Pages. Адрес публикации: `https://egorov-tech.github.io/lk-profile-test/`.

## Vercel

Для Vercel уже добавлен `vercel.json`: команда сборки — `npm run build`, каталог публикации — `public/build`.
