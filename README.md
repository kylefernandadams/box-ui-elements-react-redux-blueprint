Box UI Elements React Redux Blueprint
=====================================
This is a Box UI Elements starter project that levarages the [box-node-sdk](https://github.com/box/box-node-sdk) with an express backend, React frontend, and Redux for managing state.

Installation Instructions
-------------------------
1) Clone the repo.
```
git clone https://github.com/kylefernandadams/box-ui-elements-react-redux-blueprint.git
```
2) Create a Box Developer Application with [JWT authentication](https://developer.box.com/docs/setting-up-a-jwt-app#section-step-1-create-and-configure-a-jwt-application).
3) [Generated a Public/Private Keypair](https://developer.box.com/docs/setting-up-a-jwt-app#section-use-an-application-config-file).

4) [Rename the .json file](https://developer.box.com/docs/setting-up-a-jwt-app#section-use-an-application-config-file) to box_config.json
and move it to the [box-ui-elements-react-redux-blueprint/server](https://github.com/kylefernandadams/box-ui-elements-react-redux-blueprint/tree/master/server) folder.
5) Add `http://localhost:3000` to the CORS Domains' Allowed Origins section and save.
6) In the Box Admin Console (separate from the Dev Console), [authorize your JWT application](https://developer.box.com/docs/setting-up-a-jwt-app#section-step-3-grant-access-for-the-application-in-your-enterprise)
7) Change directory to `box-ui-elements-react-redux-blueprint` directory.
```
cd /box-ui-elements-react-redux-blueprint
```
8) Install the client tier and server tier dependencies.
```
yarn install-all
```
9) Start the project.
```
yarn dev
```
