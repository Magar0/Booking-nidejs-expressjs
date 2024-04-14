# `Book My Show`

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)

## General info

<img src="https://github.com/Magar0/Booking-nodejs-expressjs/assets/35245789/5582c5b9-8cdb-4106-9208-27a283620284" height="350" >

- Developed a booking app where one can book movies and see their last booking details.
- Created a submit button that on click makes a booking if all the required data(movie name, slot, least one ticket) is selected.
- After the successful booking, all selection are cleared.
- If booking successful, then the last booking is updated without making a new GET request.
- Used localStorage to store temporary selection made by the user.

## Technologies

- MERN stack
- React JS.
- Mongo DB.
- Node JS., Express JS.

## Setup

1. Set up environment variables:

   - Create a `.env` file in the `src` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:

     ```
     MONGO_URI="your_MongoDb_uri"
     ```

   - Again Create a `.env` file in the `src/client` directory.
   - And again add:
     ```
     REACT_APP_URL="Your backend server url " (optional by default set to http://localhost:3000)
     ```

2. Install dependencies and run server:

#### Frontend

```
 cd src/client
 npm install
 npm start
```

#### Backend

```
cd src/
npm install
npm start
```

## API Endpoints

| Endpoint       | Description          | Method | Request Body                                                                                                   | Response Format (Example)           |
| -------------- | -------------------- | ------ | -------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `/api/booking` | last booking details | GET    | None                                                                                                           | JSON (movie, slot and seat details) |
| `/api/booking` | Book seat            | POST   | `{movie:string, slot:string, seats:{A1?:number , A2?:number, A3?:number, A4?:number, D1?:number, D2?:number}}` | JSON (movie, slot and seat details) |
