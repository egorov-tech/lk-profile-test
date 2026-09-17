# Тестовое окно ЛК — «Мой профиль»

Vue 3-реализация адаптивного окна личного кабинета. Компоненты написаны на Composition API через `<script setup>`, названы с префиксом `account_` и не содержат inline CSS.

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

## Структура

```text
resources/js/components/account/  # переиспользуемые Vue-компоненты
resources/js/pages/               # собирает окно ЛК
resources/css/account/            # токены, shell и стили профиля
resources/views/account-profile.blade.php
```

## Laravel

Скопируйте `resources/` в Laravel-проект, подключите маршрут к `account-profile.blade.php` и передайте `$profile` с ключами `firstName`, `lastName`, `email`, `phone`. Blade помещает JSON в `data-profile`, поэтому inline JavaScript не используется. `@vite('resources/js/app.js')` уже находится в шаблоне.

## Поведение демо

Кнопка «Сохранить изменения» не отправляет сетевой запрос: она демонстрирует успешное состояние через toast. API-интеграция намеренно оставлена Laravel-контроллеру.
