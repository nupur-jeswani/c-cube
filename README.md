# Libraries used: 
--> react-router-dom : React Router is the most popular library for implementing routing for React apps. React Router, and dynamic, client-side routing, allows us to build a                            single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components,                          which display the appropriate information.

--> Hooks : The useState() is a Hook that allows you to have state variables in functional components. 

--> Bootstrap 5 : Bootstrap is used to make a webpage responsive and to style elements.


# File Structure of the project :
There are three components present:   
&nbsp;    1. Navbar  
&nbsp;    2. Page 1 :   
            &emsp;&emsp;- In Page 1, the main file here is Intro.js.   
            &emsp;&emsp;- ChapterBody.js is used to display the chapters present after the Logic Course introduction. I have used props to pass values                          (cardHeading, cardBody, image on the card) present on the cards and these values are passed to CardGenerate.js.  
            &emsp;&emsp;- CardGenerate.js is used to develop the cards (Warm up puzzles etc are cards).   
&nbsp;    3. Page 2 :  
            &emsp;&emsp;- Page 2 has only one file WarmUpPage.js which has the first page created of all the rounds.  
    App.js will control the routing by switching the pages when called.  
    
# How to navigate through the pages? 
  When the site loads, it will have the Intro page up and running. To see the Page 2 of this project, click on the Warmup puzzles card present in the Introduction section.
  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
