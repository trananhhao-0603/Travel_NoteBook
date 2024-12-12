# Travel NoteBook

This is our Travel NoteBook App.


## Table of Contents

1. [Introduction](#1-introduction)
2. [System Requirements](#2-system-requirements)
3. [Installation](#3-installation)
   - [4.1 Backend Installation (Laravel)](#31-backend-installation-laravel)
   - [4.2 Frontend Installation (React)](#32-frontend-installation-react)
4. [Usage](#4-usage)
5. [Testing](#5-testing)
6. [Configuration](#6-configuration)
7. [Contributing](#7-contributing)
8. [Contact](#8-contact)
---

## 1. Introduction


Travel Notebook is an application that helps you discover top tourist attractions in every destination you visit. Additionally, the app supports hotel booking to make your trips more convenient. Our application is built using React Native for the frontend and Node.js for the backend.



## 2. System Requirements

To run this project, you need to have the following software installed:

- React >= 18
- Node.js >= 16.0
- NPM or Yarn

## 4. Installation

### 4.1 Backend Installation (Laravel)

1. Clone the repository.

    ```bash
    git clone https://github.com/awesome-academy/NAITEI-PHP-BATCH1-T6.git
    cd BackEnd/
    ```

2. Install Composer packages.

    ```bash
    composer install
    ```

3. Create the `.env` file by copying from `.env.example` and **configure your database information**

    ```bash
    cp .env.example .env
    ```

4. Generate the application key.

    ```bash
    php artisan key:generate
    ```

5. Run migration and seed data.

    ```bash
    php artisan migrate --seed
    ```

6. Start the server.

    ```bash
    php artisan serve
    ```
**Note: Remember to create database in RDBMS (MySQL...) and change name of DB_DATABASE in .env file
### 4.2 Frontend Installation (React)

1. Navigate to the `FrontEnd` directory.

    ```bash
    cd frontend/
    ```

2. Install npm packages.

    ```bash
    npm install
    ```

3. Start the React application.

    ```bash
    npm start
    **or**
    npm run dev
    ```

## 5. Usage

After successful installation, you can access the application at `http://localhost:8000` for the backend and `http://localhost:5173` for the frontend. Key features include:

- Product management: Add, edit, delete, and view product details.
- User management: Register, log in, and manage user accounts.
- Ordering: Add products to the cart, place orders, and track orders.
- Daily Statistics


## 6. Testing

To run tests for the backend, use the following command:

```bash
php artisan test
```


## 7. Configuration

Below are my example .env file:

```bash
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:YOUR_APP_KEY_HERE
APP_DEBUG=true
APP_TIMEZONE=Asia/Ho_Chi_Minh
APP_URL=http://localhost:8000
APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US
APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database
BCRYPT_ROUNDS=12
LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=shoes_database
DB_USERNAME=root
DB_PASSWORD=12345
SESSION_DRIVER=file
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null
BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database
CACHE_STORE=database
CACHE_PREFIX=
MEMCACHED_HOST=127.0.0.1
REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=9a7437dbd7c9d8
MAIL_PASSWORD=8d154693844d79
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false
VITE_APP_NAME="${APP_NAME}"
```


## 8. Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request once you’ve completed your work.
