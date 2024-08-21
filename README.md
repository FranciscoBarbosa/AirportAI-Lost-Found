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
Using the Lost & found API.postman_collection.json file it is possible to test our API with the following use cases:

- create user with agent,passenger and admin roles (as admin)
- get all users (as admin)
- create products (as admin/agent or passenger)
- get products (as admin/agent or passenger):
    - all products
    - product by Id
    - products by brand or type
    - products lost in a range interval (minLostTime and maxLostTime)
    - products by message (using Full text search)
- delete products (as admin or agent)

Future Improvements:
- Add Login endpoint that returns JWT token
- Use token in the endpoints instead of basic authentication
- Add endpoint for passengers to report a loss
- Add an endpoint to product so a passenger can claim a specific product as his own.