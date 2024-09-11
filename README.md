# Airline

Airline is an Angular and Firebase based web application. Components were provided with Ant-Design (Ng-Zorro). With Angular18, currently used technologies such as standalone components, signals, inject and defer were used.

It was built with the latest version of Firebase, 10.13. Firebase's authentication, cloud database, cloud storage, functions, hosting, analytics were used.  

Less was used with Ant-Design for components.

> Demo:
https://airline-d6b0d.web.app/

> [!NOTE]
> Config files are in .gitignore. Therefore, you must create the necessary Firebase key to run it locally..

## Project Architecture
```shell
AIRLINE/
├── src/
│   └── app/
│       ├── core/            # Core module and services
│       ├── helpers/         # Utility functions and helpers
│       ├── layouts/         # Application layout components
│       ├── models/          # Data models and interfaces
│       ├── pages/           # Application pages (admin, customer, user)
│       ├── services/        # Angular & Firebase services (API, local storage, etc.)
│       └── shared/          # Shared components and modules


```

## Technologies

1. Angular
2. Firebase (Authentication, Cloud Database, Cloud Storage, Functions, Hosting, Analytics)
3. Ant-Design(Ng-Zorro)
4. ApexCharts
5. Ngx-Translate
6. pdfmake
7. xlsx

##  Installing the Module
Create an account with Firebase and get a Firebase Key. Then activate the fields used in the project in Firebase. Finally,

```shell
npm i
```

or

```shell
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Feedback

If you have any feedback, please contact us at anilyilmaz108@gmail.com.
