# Welcome to TidyHive!

You can find the deployed project at [TidyHive](https://stage-homerun-fe.herokuapp.com/).

## Contributors

### Current

| [Adam Monast - TL](https://github.com/Adammonast) | [Batuhan Balta](https://github.com/baltabatuhan) | [Benjamin Hall](https://github.com/BenHall-7) | [Joshua Rieth](https://github.com/Bobj2018) |
| :---: | :---: | :---: | :---: |
| <img alt="Adam Monast" src="https://avatars2.githubusercontent.com/Adammonast" width=100 height=100/> | <img alt="Batuhan Balta" src="https://avatars2.githubusercontent.com/baltabatuhan" width=100 height=100/> | <img alt="Benjamin Hall" src="https://avatars2.githubusercontent.com/BenHall-7" width=100 height=100/> | <img alt="Joshua Rieth" src="https://avatars2.githubusercontent.com/Bobj2018" width=100 height=100/> |

| [Mike Padiernos](https://github.com/mikepadiernos) | [Nick Hansen](https://github.com/Hansen-Nick) | [Tauan Longaretti](https://github.com/tauanlongaretti) |
| :---: | :---: | :---: |
| <img alt="Mike Padiernos" src="https://avatars2.githubusercontent.com/mikepadiernos" width=100 height=100/> | <img alt="Nick Hansen" src="https://avatars2.githubusercontent.com/Hansen-Nick" width=100 height=100/> | <img alt="Tauan Longaretti" src="https://avatars2.githubusercontent.com/tauanlongaretti" width=100 height=100/> |

### Past

[Heather Ridgill](https://github.com/Heather-Ridgill), [Micah Jank](https://github.com/MicahJank), [Katrina Roaix](https://github.com/kroaix), [Yankho Trumble](https://github.com/Mayankho), [Zach Taylor ](https://github.com/zbtaylor), [Vinni Hoke](https://github.com/vinnihoke), [Brandon Dresselle - TL](https://github.com/BDesselle)

# Team/Project Badges

[![Maintainability](https://api.codeclimate.com/v1/badges/9d4df6969072940d2a54/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/homerun-fe/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/9d4df6969072940d2a54/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/homerun-fe/test_coverage)

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg) 

![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)

![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


<!-- 🚫 more info on using badges [here](https://github.com/badges/shields) -->

## Project Overview

[Trello Board](https://trello.com/b/dUO3ZNeC/labspt7-homerun)

[Product Canvas](https://www.notion.so/3aace866789645e28bf7201e51caf7ab?v=6f422e13816b4053ba28a617be2fc9d7)

[PVD](https://www.notion.so/Home-Run-12ed145a14c1426492108b0558e6d64b)


# Intro

TidyHive simplifies home management with an easy-to-use interface and a robust feature set allowing you organize everything in your home from day-to-day tasks to larger projects. 


## Key Features

-    TidyHive gives you the ability to organize and manage your todos in a simple and easy way.
-    Manage and share household todos from any device.
-    Assign todos to household members manually, automatically, or randomly.
-    DownloadTidyHive to your mobile device for use offline.
-    Time-blocking
-    When a user completes a task and swips it complete - there is animation (confetti) to emulate the feeling of crossing off a list.

# Tech Stack

## Front-end built using:

## [React](https://reactjs.org/)


-    We are able to use a "virtual browser" that is more friendly than a real browser (Virtual DOM)
-    Reusable components 

## [Redux Toolkit](https://redux-toolkit.js.org/)
-    Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more. Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in.

## [Semantic-UI](https://react.semantic-ui.com/)
-    Includes a varity of objects and elements to incorporate into our app.

## [React-Router](https://reacttraining.com/react-router/)
-    React Router is a collection of navigational components that compose declaratively with your application.


## [OAuth](https://www.okta.com/resources/whitepaper-pre-built-identity-solution/?utm_campaign=search_google_amer_multiple_ao_ciam_exact&utm_medium=cpc&utm_source=google&utm_term=oauth&utm_page={url}&gclid=CjwKCAjw7e_0BRB7EiwAlH-goM5hGQ3CoE8czHcm1fEVW-DV78Lcn-jU4aA2l-_qhJ5utpy7u6LgPhoCrJgQAvD_BwE)

Google Sign in

-    For easy access
-    From user research, most users like to use social media as an easy and fast way to sign in quickly. 


## Front end deployed to [Heroku](www.heroku.com)

# [Back-end](https://github.com/Lambda-School-Labs/homerun-be) built using:

## [Node.JS](https://nodejs.org/en/)

-    As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

## [Postgres](https://www.postgresql.org/)

-    PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

## [Knex](https://www.npmjs.com/package/knex)
-    Knex can be built using a JavaScript build tool such as browserify or webpack. In fact, this documentation uses a webpack build which includes knex. View source on this page to see the browser build in-action (the global knex variable).
<!-- 
<!-- PRIVATE -->
<!-- #  Environment Variables 

<!-- In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  BASE_URL=http://localhost:3000 
    *  FE_URL=http://localhost:3001
    *  OAUTH_URL=localhost:3000
    *  OAUTH_PROTOCOL=http
    *  DEV_LOCAL=postgresql://postgres:Test1234@localhost/postgres
    *  SG_USER=apikey
    *  SG_PASS=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
    *  ALGO=aes-256-cbc
    *  CRYPTO_KEY=True nobility is being superior to your former self.
    *  SESSION_KEY=this is a session key
    *  G_CLIENT_ID=1050964061778-o501f0usfcgqtapvsmhvs89eebtndv9m.apps.googleusercontent.com
    *  G_CLIENT_SECRET=G1tKjOJDY5srwnyMPf8bJbvk
    *  F_CLIENT_ID=200338417844322
    *  F_CLIENT_SECRET=7a99ae1f44e01f370261b55b9e37d45f --> 
<!-- 
#  Content Licenses


| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
|   |  |  |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             | -->

# Testing

## [Jest](https://jestjs.io/docs/en/tutorial-react)
-    Jest allows us to create mock functions with almost zero configuration and provides a really nice set of matchers that makes assertions easier to read.

## [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
-    This library encourages your applications to be more accessible and allows you to get your tests closer to using your components the way a user will, which allows your tests to give you more confidence that your application will work when a real user uses it.

# Installation Instructions

- NPM i
- NPM Start


# Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/homerun-be/blob/master/README.md) for details on the backend of our project.


<!-- # Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426). -->

