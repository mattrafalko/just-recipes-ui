### `tailwindcss install`

These are the steps required to install the css framework tailwindcss

1. yarn add tailwindcss (this adds tailwindcss to the package.json file)
2. app.css can be deleted for clenliness
3. index.css can be cleared out but file should be kept.
4. Insert tailwind CSS:
   - @tailwind base;
   - @tailwind components;
   - @tailwind utilities;
5. Create tailwind config file:
   - npx tailwindcss init
   - This will create a tailwind.config.js file in the root project directory (no changes required)
6. Create postcss.config file (compiles the tailwind styles into usable css)
   - module.exports = {
     plugins: [
     require('tailwindcss'),
     require('autoprefixer'),
     ]
     }
7. Add build and watch commands to the package.json to make sure that styles are created on a build
   - "build:css": "postcss src/index.css -o src/tailwind.css"
   - "watch:css": "postcss src/index.css -o src/tailwind.css -w"
8. Change the start and build lines of the "scripts" section in the package.json file from:
   - "start": "react-scripts start",
   - "build": "react-scripts build",
     To:
   - "start": "yarn build:css && react-scripts start",
   - "build": "yarn build:css && react-scripts build",
9. Once tailwind.css file is built, make sure to change all references of app.css to tailwind.css

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
