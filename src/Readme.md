## Navigating through the src folder

- Entry Point to the FE - is the index.js
- Main File - App.js
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
