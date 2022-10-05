## Available Scripts

In the project directory, you can run:

### `npm install` 
When you clone the repo, you should run the install command once to install necessary packages required to run the FE. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<br/>
<br/>

## Navigating through the src folder

- Entry Point to the FE - is the `index.js`
- Main Component File - `App.js`
  - Add your components into the App.js, there's already Login Component available.

```
src
│
└───assets
│   │
│   └───- all logos, images/icons go here in this folder
│
└───pages
│   │   - All main pages would need to be created here
│   └───- Login.js - is available here already
│
│
└───components
│   - The reusable components are created in this folder.
│   └───- Login - components for Login Page
│         │
│         └───- InputField.js (for example)
│
└───context
│   │ - Any API/fetch hooks helpers would be created here.
│
│
└───styles
│   └───- global.css - has all global styling (fonts, colors, etc)
│   │
│   └───- login.css - stylesheet for Login Page
```

## Remember D.R.Y. (Don't Repeat Yourself) - try to reuse code, components wherever applicable and Keep it Simple! :)
<br />
<br />
<br />

## Creating the Firebase Auth - 
- Create a .env.local file in the project root, there's a .env.example available for your reference. Add your Firebase Config to the .env.local file.
- How to set up the Firebase Auth - You can use [this Notion Doc](https://www.notion.so/FE-Firebase-Auth-Setup-Steps-e5b38041c3fb4fa5a5d7c55d6129405f) for steps on creating and setting up Firebase Auth. 

<br />