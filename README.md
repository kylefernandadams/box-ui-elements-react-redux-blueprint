Box UI Elements React Redux Blueprint
=====================================
This is a Box UI Elements starter project that levarages the `box-node-sdk` with an express backend and a React/Redux frontend.

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
5) Change directory to `box-ui-elements-react-redux-blueprint` directory.
```
cd /box-ui-elements-react-redux-blueprint
```
6) Install the client tier and server tier dependencies.
```
yarn install-all
```
7) Start the project.
```
yarn dev
```