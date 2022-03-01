# Quiz Game
## Vue 3, Pinia, Typescript, tailwind, Jest, Cypress

## Techs
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" width="100" height="100" /><img src="https://pinia.vuejs.org/logo.svg" width="100" height="100" /><img src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" width="100" height="100" /><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="100" height="100" />

This app was coded with Vue Cli

## Features

I decided to use a flux architecture using Pinia for state management, a new framework recommended by Vue core team, which includes two stores, one for the quiz game and another for users if authentication is needed. I developed this application using typescript, taking advantage of the types that javascript lacks.With the possibility of the application growing, many components can be reused, such as inputs, selects, and buttons.Each reusable component has its own unit test, and the use case has its own E2E test.Essentially, each entity in the application has its own model data, to which the service responds match.

## Tech

- [VueJS 3] - The Progressive JavaScript Framework
- [Typescript] - JavaScript with syntax for types
- [Tailwind] - A utility-first CSS
- [Vue Router, Pinia] - Vue utilities
- [Jest, Vue test utils] - Unit testing
- [Cypress] - end two end tests

## Development

Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd vue-quiz
yarn 
yarn serve
```

For production environments...

```sh
yarn
yarn build
```

For unit tests

```sh
yarn test:unit
```

For e2e tests

```sh
yarn test:e2e
```