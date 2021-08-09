## Notes-App

A simple application to save and delete notes. The can be marked important and filtered by importance. The application is an example of a SPA or single-page-application.

### Tech-Stack

- Frontend
  - React
    - Functional components
    - Hooks
  - Axios
- Backend
  - Server
    - NodeJs (express)
      - custom middleware (errorHandler and Logger)
      - npm scripts to pseudo-automate deployment process
    - mongoose (to connect and interact with db)
  - Database
    - mongoDB

### The implementation

- The project is a sinlge-page-applicaiton that uses mongoDB to store data and handles request using express in Nodejs runtime.
- The application is hosted on Heroku and has a development and production environement so that I can develop the application locally and then push to Heroku when required.
- The project source is on Github and the folder structure tries to follow the best-practices in nodejs

### Learnings

- mongoDB is a document database, models, schemas and interacting with the javascript based database.
- Using 'dotenv' to safeguard application critical information
- Heroku CLI
- Debugging node application with 'morgan'
- Writing custom middleware to handle errors, custom morgan 'token'
- How to setup a local and production environment for a project
- Best-practice nodejs folder structure
- CRUD API or REST API
- Testing using POSTMAN, VS CODE REST CLIENT
- npm scripts to automate the deployment process

### Interact with the [live demo](https://floating-beach-67622.herokuapp.com/)
