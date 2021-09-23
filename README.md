# Wyzetalk assessment

This is my attempt at the Wyzetalk assessment as described [here](https://github.com/Wyzetalk/full-stack-assessment). The project uses Nx to
allow for multiple apps in the same workspace. It includes an Angular 12 app and an API layer written using Express.

## Requirements

- A NodeJS installation. The code was tested with v14
- yarn (Install using npm)

## Running the project

- Clone this repository into a directory
- `cd` into the directory
- Run `yarn` to install needed packages
- Run both the express and angular app. The easiest way to do this is running: `yarn nx run-many --target=serve --projects=api,wyzetalk-assessment --parallel=true`
- Check that the API is online by going to `http://localhost:3333/healthcheck` in a browser
- Go to `http://localhost:4200/` in a browser to access the angular app
