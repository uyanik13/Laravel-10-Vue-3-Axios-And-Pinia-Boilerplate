# Laravel 10 & Vue 3 with Pinia and Axios | Boilerplate
This project is built using Laravel and PHP 8.2 as the backend framework and infrastructure, with Vue 3, Vite, and Tailwind CSS for a modern, responsive front-end. State management is handled by Pinia, and Axios is used for API requests. This application showcases a home page with dynamic forms, a functional todo application page, and a product fetching page demonstrating Axios usage.

## Features
```Laravel Backend:``` Utilizes Laravel for server-side logic, API creation, and database management.

Vue 3 and Vite: Leverages Vue 3 for a reactive user interface and Vite for efficient asset bundling and hot reloading.

* ```Tailwind CSS:``` Employs Tailwind CSS for utility-first styling to create a visually appealing and responsive design.
* ``Pinia State Management: ``Integrates Pinia for state management across Vue components, ensuring a predictable state container.
* ``Axios for API Calls:`` Uses Axios for making HTTP requests to fetch data dynamically, demonstrated in the product fetching page.
* ``Dynamic Forms: ``Features a home page with various forms to showcase form handling and validation in Vue.
* ``Todo App:`` Includes a todo application page to demonstrate CRUD operations and state management with Pinia.
* ``Product Fetching:`` Demonstrates the use of Axios for API calls by fetching and displaying products.


## Prerequisites

* PHP 8.2
* Composer
* Node.js and npm
* Laravel (compatible with PHP 8.2)
* A modern browser supporting ES6
* Installation

### Clone the Repository

```
git clone https://github.com/uyanik13/Laravel-10-Vue-3-Axios-And-Pinia-Boilerplate 
cd Laravel-10-Vue-3-Axios-And-Pinia-Boilerplate
``` 

### Install PHP Dependencies

```
composer install
```
### Set Up Environment Variables
Copy the ```.env.example``` file to ```.env``` and modify according to your environment:


```
cp .env.example .env
```

### Generate Laravel Key

```
php artisan key:generate
```

### Migrate and Seed the Database (if applicable)

```
php artisan migrate --seed
```

### Install NPM Dependencies

```
npm install
```

### Run Development Server

```
npm run dev # For Vite and Vue
php artisan serve # For Laravel
```


### Usage
Navigate to the application URL displayed after running ```php artisan serve``` to view the application in your browser.

### Screenshots
```Home Page with Forms```

![Home Page](/screens/home.png?raw=true "Home Page")

```Todo App Page```

![Todo App Page](/screens/todo.png?raw=true "Todo App Page")

```Axios Page Fetching Products```

![Axios Product Page](/screens/axios.png?raw=true "Axios Product Page")

### Contributing
Contributions are welcome! Please read our contributing guidelines on how to propose bug fixes, improvements, or new features.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.