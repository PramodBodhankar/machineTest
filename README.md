# Ecoomerce site

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

Template Link: http://www.templatemonsterpreview.com/demo/80237.html?_ga=2.230919126.892743561.1599229842-1913920166.1599229842

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Implementation Details
For now i have created mockapiio link which return me list of pizzas in json structure. All user interaction with filters is handled at front end side only as i was not able to that logic at mockapi side but we can move the filters logic at backend side where in get call of list i will pass that lstFilters array from pizzaservice to api body and according to that api will return me the list.
If somehow you are unable to acces mocapi link you can use pizzalist.json present inside pizzamenu component folder for input.
