# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Production Build

Run `npm run build:prod` to build the production ready build of project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## What to improve
As I have covered many scenarios of the login feature application but still there is the scope of improvements.
1. Max length should be given for the username and password as well so should restrict user to type only that limited characters
2. Password encryption should be used while submitting to the backend service post request.
3. If user is logged in and trying to go to login page then it should take to the dashboard page instead of going to login screen.
4. Instead of hard coding routes & validation constraints those should come from the application configuration. i.e. we can create any CONFIG constrants like app.config.ts
5. While storing the value into sessionStorage, should be decrypted that value.
6. keys of the session storage should be defined in the app configuration files (app.config.ts)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
