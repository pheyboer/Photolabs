# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. We used a pre-existing API to build a frontend user experience for users to interact with photos! The frontend is built with React (using Create React App), and the backend is powered by Node.js and Express with a PostgreSQL database.

Courtesy to [Lighthouse Labs](https://www.lighthouselabs.ca), the project was done as part of the React Programming Module.

## Tech Stack
<p align='center'>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,js,express,nodejs,postgres,webpack,babel,sass" />
  </a>
</p>

## Features
- Browse a collection of photos
- Favorite/unfavorite photos
- View topics and filter photos by topic
- Responsive design

## User Stories
- A user can view photos from the homepage loaded from the API.
- The user can navigate to different photo categories, also called topics.
- The user can click on a photo to view a larger version of the photo and relevant / similar photos.
- The user can like a photo from anywhere within the application where the photo is displayed.
- The user can view a heart icon with a notification in the navigation if there are liked photos.
- The navigation will consist of different topics and heart icon.
- The client-side application will make API requests to load data.


## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## API Endpoints
- Get all topics: GET /api/topics
- Get all photos: GET /api/photos
- Get photos by topic: GET /api/topics/photos/:id

## Screenshots
!["Photolabs](https://github.com/pheyboer/Photolabs/blob/main/photolabs1.png)
!["Photolabs Modal Window](https://github.com/pheyboer/Photolabs/blob/main/photolabs2png.png)

## Dependencies
  ### Frontend
    - React
    - React-dom
    - React-scripts
    - Sass
  ### Backend
    - Express
    - pg
    - dotenv
    - cors
    - helmet
  ### devDepdendencies
    - Jest
    - Supertest
    - Sass