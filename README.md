# Bassopedia

An application that shows different bassists and their respective genre of music that they play. Users can click on a genre, then click on a bassist from that genre, see its details.

## Demo

https://www.youtube.com/watch?v=M8s6HRDLdW8&feature=youtu.be

### APIs

Genres: https://floating-chamber-81210.herokuapp.com/genres/

Bassists: https://floating-chamber-81210.herokuapp.com/bassists/

### Component Hierarchy

                                App.js
__________________________________|_____________________________________
                        |           |
                   Bassist.js     Genres.js
                                    |
                                  Genre.js

### Screenshots

Home Page

![Screen Shot 2020-12-11 at 5 32 57 PM](https://user-images.githubusercontent.com/62581000/101961610-12d73300-3bd8-11eb-9aa4-ccf32bcca561.png)

When you click on Genres

![Screen Shot 2020-12-11 at 5 43 31 PM](https://user-images.githubusercontent.com/62581000/101961785-75303380-3bd8-11eb-9f44-bb8a52ea52e0.png)

Code used (Located in App.js)

![Screen Shot 2020-12-11 at 5 53 35 PM](https://user-images.githubusercontent.com/62581000/101962312-d7d5ff00-3bd9-11eb-927c-c654bff5d745.png)

When you click on one of the genres listed

![Screen Shot 2020-12-11 at 5 45 05 PM](https://user-images.githubusercontent.com/62581000/101961898-be808300-3bd8-11eb-97d1-b43b2a368f02.png)

Code used (Located in Genres.js)

![Screen Shot 2020-12-11 at 5 58 35 PM](https://user-images.githubusercontent.com/62581000/101962564-8417e580-3bda-11eb-9797-cb6557ca1f5e.png)

When you click on one of the bassists listed (Located in Genre.js)

![Screen Shot 2020-12-11 at 5 47 23 PM](https://user-images.githubusercontent.com/62581000/101962074-2df67280-3bd9-11eb-9bec-f0b1f14f797e.png)

Code used (Located in Bassist.js)

![Screen Shot 2020-12-11 at 6 00 27 PM](https://user-images.githubusercontent.com/62581000/101962671-c7725400-3bda-11eb-81e2-246474f6bb60.png)

## Technologies Used

### Frontend

Programming Languages: HTML, CSS, and JavaScript

Frameworks/Libraries: React.js, bootstrap.js

### Backend

Programming Language: Python

Framework: Django

Deployed with Heroku

https://bassopedia.herokuapp.com/

Everything else below is the available scripts that you can use after installing create-react-app along with other documentation that you might find useful.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
