# NodeJS Skeleton for Airport AI

This repository includes a NodeJS / Express / MongoDB skeleton app.

## Setup

### Requirements
Make sure you have MongoDB installed and running on your computer as well as NodeJS/NPM installed.

### Steps
On the root of this app, run the following command to install dependencies:
```
npm install
```

On the root of this app, run the following command to run the application:
```
npm start
```

If everything is ok, you should see a 'Hello world!' message when you go to 'http://localhost:3000/api/v1' on your browser.

By default the application creates an admin user (credentials configurable in .env file).
Then it is possible to test:
- creation of users with different roles (using POST with basic authentication and admin credentials).
  
- create, view, delete products with different permissions based on account role.
- search product per brand,color, date
- search product per message

TODO: improve readme and usecases mentioned above