# ProductsupCaseStudy

Hi all!,

For the most part the case study has been completed as much as it could be considering I only spent few hours on it.
It hasn't been extensively tested nor was much attention put into the design, but I believe it should functionally enough.

The things that I would do different would for sure be some of these:
- add better type and form validations
- error/exception handling is missing
- make an even better distribution of functions from component to service
- introduce better interfaces
- move filters and some data to Local storage
- create local storage service
- etc.

I've used `http.get` since it was mentioned that we should work as if the data comes over an api
and it gives us a better control over our data.

I've also used PrimeNG table for the sole reason of visual simplicity and not I also don't believe that the point was to make tables from scratch since
that is hardly ever the case in live development.

Two quality of life features from primeNG are:
- column selection that I felt was needed due to number of headers and potentially even more with some other files (limited visibility to 6)
- pagination, which could've been done by slicing jsonData and achieve fast load times same as now, but this was a better option considering my available time

Other than that, there are no other functional plugins, every other primeNG component is here as just for cosmetics.

I'm looking forward to the review and thank you in advance! :)

Clone and `ng s`


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
