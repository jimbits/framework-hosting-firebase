# Nextjs SSR and Google Cloud Functions
I am really enjoying working with Firebase right now and have moved many of my domains over to Firebase Hosting. I was curious to see if I could get some React, Next and Gatsby projects that I have worked on integrated into the Firebase platform.

## next-with-gcf
Inside the this folder is an example of how to host a NEXT.js project with **Firebase Hosting & Google Cloud Functions**

Download or clone the project. Inside the source folder run npm install on the _app_ and _functions_ directories. 
```bash
.
├── README.md
└── next-with-gcf
    ├── firebase.json
    └── src
        ├── app
        │   ├── components
        │   ├── css
        │   ├── jim.next.config.js
        │   ├── node_modules
        │   ├── package.json
        │   ├── pages
        │   └── public
        ├── functions
        │   ├── components
        │   ├── css
        │   ├── index.js
        │   ├── next
        │   ├── node_modules
        │   ├── package-lock.json
        │   ├── package.json
        │   └── pages
        └── public
            └── 404.html

```
### Edit The firebase.json File
Open the _firebase.json_ file and change the config to match your firebase app project name
```json
{
  "projects": {
    "default": "XXX-XXXXXX"
  }
}

```

### Run NEXTjs Project Locally
From inside the src/app directory run the following command
```npm
// run from the directory src/app
  npm run dev
```

If you want to make changes to the next project you will have to build the project and then transfer the components css pages and the .next file to the functions directory. To Lazy to build a gulpfile to do this at the moment. Remove the folder next from inside the functions folder. Rename the .next file to next. Then run firebase deploy.

   1. Create a production build of NEXT.js
```npm
 npm run build
 // run build command from src/app          
```

   1. Move the following files to the root of the functions folder
```bash
.
├── .next
├── components
├── css
├── pages
└── public
```

   1. The functions directory should now now contain you next project
```bash
.
├── components
├── css
├── index.js
├── next
├── node_modules
├── package-lock.json
├── package.json
├── pages
└── public
```

 1. To deploy to Firebase run 
 ```npm
 firebase deply
 // run this command from inside the functions directory    
```