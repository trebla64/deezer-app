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

## Running the tests

- Run `yarn nx run wyzetalk-assessment:test`

## Structure of the project

The Angular part of the project has three components: The artists component and the artist details component and the main app component. The app component decides whether
to display information for the artists or details for an artist. It uses a <router-outlet> element to achieve this. The toolbar that includes the search input and the menu
button is part of the app component so it is global across other components.

## Other notes

- For some reason I did not require an API key to access the Deezer API, so the back-end doesn't use an API key
- Some things don't look the same as the examples. The font used differs and some styling couldn't be replicated especially on the card images. So the cards look different
- The top-left menu button opens a sidebar, but the button in the sidebar isn't linked to a route, so it does nothing but throw an error when clicking on the "Home" button
