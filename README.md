
# drip-ui

Drip-UI is a UI component library built with React and styled-components. It is currently an early stage WIP (Work In Progress), but I aim to create a full-fledged library of generic and theme-able UI components in React to act as a multi-purpose, highly customisable UI library.

The library is managed with [lerna](https://github.com/lerna/lerna) to enable the bundling and packaging of individual component modules. They are built into packages of their own to be imported into an application as needed (eg: `@drip-ui/input`), and also with a full bundle `@drip-ui/components`.

## How to use

The packages are not yet released onto any package managers. If you wish to download and experiment with the setup, please see below.

## Development

Install root dependencies
```
npm install
```

To get started quickly, you can simply build the individual components and be ready to use them in storybook.
```
npm run build:subcomponents
```
OR
```
npm run watch:subcomponents
```

Storybook
```
npm run storybook
```

Tests
```
npm test
```
Tests are running on mocha with chai, sinon and enzyme.
