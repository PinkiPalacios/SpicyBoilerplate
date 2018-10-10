# Overview

### Scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn server`

Runs the app in devopment mode using serverside rendering

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `docker-compose up -d --build`

Builds a docker image and fire up a docker container serving the app in development mode.

### `docker-compose -f docker-compose-prod.yml up -d --build`

Builds a docker image and fire up a docker container serving the app in production mode using nginx.
