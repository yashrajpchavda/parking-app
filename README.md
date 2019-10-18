# Parking App

Application created to let the users of Zimbra know who has parked where, and allow them to occupy or vacate the parking spot.

### Structure of the application

The client side is created using PreactX and resides in client folder. The rest is server side code.

### As a developer

Please install node modules by doing `npm i` in `packing-app` and `parking-app/client` folder. You need to start two servers, one for client and one for backend code (graphql).

#### Install mongodb locally

Please install it by following the commands available at

[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Download and install Studio 3T to view the database locally

[https://studio3t.com/download-now/](https://studio3t.com/download-now/)

#### To start a server for backend (graphql)

Go to `parking-app` and execute the following command to start the server

    npm start

To start the server in watch mode

    npm run dev

#### Access graphql server playground

    http://localhost:8000/graphql

#### To start a server for client code

Go to `parking-app/client` and execute the following command to start the server

    npm start

To start server in watch mode

    npm run dev

#### To build the client code

Go to `parking-app/client` and execute

    npm run build

This will create the build folder and move it to `parking-app/public` folder which is served as a static folder in express by visiting `/` route after starting the server.