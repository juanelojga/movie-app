# Movie Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installation and Setup Instructions

### Install dependencies

In the root of the project run the following command:

```sh
yarn install
```

### Environment variables

In order to be able to use the movie database api, you should generate a `Bearer Token`, see: [https://developers.themoviedb.org/3/getting-started/authentication](https://developers.themoviedb.org/3/getting-started/authentication)

Then, in the root of the project, create a file called `.env`, and define de following variable and its value:

```sh
REACT_APP_MOVIE_DB_API_TOKEN=<REPLACE_TOKEN_VALUE>
```

This value is required by the application to perform queries.

#### Run the project

In the root of the project run the following command:

```sh
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
