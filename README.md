
[![Maintainability](https://api.codeclimate.com/v1/badges/46a0ec408cc56a68bc10/maintainability)](https://codeclimate.com/github/VaniaFed/on-my-bookshelf/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/46a0ec408cc56a68bc10/test_coverage)](https://codeclimate.com/github/VaniaFed/on-my-bookshelf/test_coverage)

Для запуска локального инстанса запустить скрипт start.

По умолчанию работа идет с удаленным сервером на Vercel.
В случае необходимости локального сервера:

1. запустить скрипт json-server:start
2. поменять путь до сервера API, как указано в файле reduxx/api.ts
   const API = 'http://localhost:3001';

