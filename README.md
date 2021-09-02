# MERN Shopping List

Shopping list app built with the MERN stack along with Redux for state management, Reactstrap and react-transition-group.

## Quick Start

Add your mongoURI to the .env file. Make sure you set an env var for both mongoURI and jwtSecret for deployment

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Deployment

Deployed to Heroku [here](https://guarded-cove-78116.herokuapp.com/)

To get started, download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line).

```bash
# Log in to your Heroku account
heroku login

# Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git,
dont forget to add remote access.

git add .
git commit -am "your comment"
git push heroku master

A more elegant way to deploy to heroku is to setup automatic deployment...
```

## App Info

### Author

Ivan Chan
[Github](https://github.com/IvanCMC37/)

### Version

1.0.0

### License

This project is licensed under the MIT License
