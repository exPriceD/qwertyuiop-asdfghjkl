# Pult CRM

Статическая версия продуктового сайта для Vercel.

## Структура

- `index.html` - лендинг продукта.
- `demo/` - мобильное CRM-приложение, которое открывается с лендинга.
- `assets/`, `styles.css`, `script.js` - ресурсы лендинга.
- `vercel.json` - базовая конфигурация Vercel.

## Публикация через Vercel

1. Загрузите содержимое этой папки в GitHub-репозиторий.
2. Откройте [Vercel](https://vercel.com/).
3. Нажмите `Add New...` -> `Project`.
4. Выберите GitHub-репозиторий.
5. В настройках проекта оставьте:
   - Framework Preset: `Other`;
   - Build Command: пусто;
   - Output Directory: пусто;
   - Install Command: пусто.
6. Нажмите `Deploy`.

После публикации сайт будет доступен по адресу вида:

```text
https://PROJECT.vercel.app/
```

CRM открывается по кнопке на лендинге и напрямую по адресу:

```text
https://PROJECT.vercel.app/demo/
```
