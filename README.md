# Placebook🌍 [🔗Live Link](http://www.placebook.co.in)

<!-- An online judge is an online system to test programs in programming contests or for practicing Data structure & Algorithms’ knowledge through problems. The system can compile and execute your code, and test your code with pre-constructed data called test-cases. Submitted code may be run with restrictions, including time limit, memory limit, security restriction, and so on. The output of the code will be captured by the system, and compared with the standard output. The system will then return the verdict as Accepted, Wrong Answer or different message based on evaluation. -->

Placebook is platform to share the places/locations.
It is similar to various social-medias' feature of sharing information via post and in this user can share a place.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Allow users to create accounts and log in securely.
- Display places-list, place details.
- Allow users to add places.
  <!-- - Validate code submissions for syntax errors. -->
  <!-- - Evaluate submitted code against multiple test cases. -->
  <!-- - Compile and execute submitted code in isolated environments. -->

## Technologies Used

- MERN STACK
- MongoDB
- Express.js: 4.18.2
- React: 18.2.0
- Node.js: 18.17.0

## Folder Structure

- Project has 3 folders:
- a) Frontend - handles as name suggests UI part😊
- b) Server - all backend routes

## Installation

- Clone this repository to your local machine.
- Navigate to the project directory.
- Install **frontend** dependencies.

  ```
  cd frontend
  npm install
  ```

- Install **backend** dependencies.

  ```
  cd backend
  npm install
  ```

- Configure **environment** variables.
  - Create a `.env` file in the `backend` & `frontend` directory.
  - Add necessary environment variables (e.g., database URI, JWT secret, port-number).
- Start the server
  ```
  cd backend
  npm start
  ```
- Start the client.
  ```
  cd frontend
  npm start
  ```
- Open your browser and go to `http://localhost:3000` to use the app.

## Usage

- Register or Log in to your account.
- Users can view the places added by them and other users.
- Users can perform **CRUD** operations over places API i.e. they can add places, update the place details and even delete the added place.
