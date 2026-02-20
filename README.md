# PlaywrightDemoOfTodoVC

## 🚀 Установка проекта

```bash
git clone <repo-url>
cd <project-folder>
npm install

После установки Husky автоматически активирует Git hooks благодаря скрипту "prepare": "husky install" в package.json.


📦 Дополнительно установлено
- env — управление окружением
- prettier — автоформатирование кода
- eslint (lint) — линтер с интеграцией Prettier
- husky — Git hooks

🧹 Команды
- npm run lint — запуск линтера (включает проверку Prettier)
- npm run test — запуск всех Playwright тестов
- npm run prettier:check — проверка форматирования отдельно
- npm run format — автоисправление форматирования

Husky Hooks
Файл: .husky/pre-push
- При git push запускается линтер и тесты.
- Линтер включает проверку Prettier.
- Если есть ошибки → push блокируется.
- Если всё чисто → push проходит.


⚙️ CI/CD — GitHub Actions
Файл: .github/workflows/playwright.yml
Workflow делает следующее:
- Запускается при push/PR в main/master.
- Поднимает Ubuntu‑окружение с Node LTS.
- Кэширует зависимости → ускоряет CI.
- Ставит пакеты (npm ci).
- Проверяет код линтером (npm run lint).
- Ставит браузеры Playwright (npx playwright install --with-deps).
- Гоняет тесты (npx playwright test).
- Сохраняет отчёт (playwright-report/) и результаты тестов (test-results/) как артефакты.

Артефакты тестов
- playwright-report — HTML‑отчёт о тестах (хранится 30 дней).
- test-results — скриншоты, видео и логи (хранятся 7 дней).

🖥️ Настройки IDE
Для VS Code:
- Установи расширения ESLint и Prettier.
- Включи автоформатирование:

📂 Структура проекта
- .husky/ — Git hooks (pre-push)
- .github/workflows/ — CI/CD конфигурация
- tests/ — Playwright тесты
- playwright-report/ — отчёты тестов
- test-results/ — результаты тестов (скриншоты, видео)
- package.json — скрипты и зависимости
- .eslintrc, .prettierrc — конфиги линтера и форматтера

Переменные для теста находятся в tests/imdbActionsTestData/imdbActionsTestData.json
```
