![2](https://github.com/conquererabhi25/starwarsServer/assets/62076788/4c34c5f0-8a59-4269-9130-3b6b07f189f3)# Fresher MERN Stack Assignment

![4](https://github.com/conquererabhi25/starwarsServer/assets/62076788/dab02b81-3ac6-4e3e-90e2-c79971f9261b)
![1](https://github.com/conquererabhi25/starwarsServer/assets/62076788/578c496b-cd5d-4d87-bf02-c8b077d51ca6)
![6](https://github.com/conquererabhi25/starwarsServer/assets/62076788/b650c454-dbc7-4691-8199-44260a4b5d7c)
![5](https://github.com/conquererabhi25/starwarsServer/assets/62076788/4ac8d819-d2da-4875-841c-80d5eacf1aaf)
![3](https://github.com/conquererabhi25/starwarsServer/assets/62076788/bf61e678-dc5f-46eb-a3e7-2d6f73a307ad)
![4](https://github.com/conquererabhi25/starwarsServer/assets/62076788/fb3cf713-2fd5-4fa2-92bc-727cfebe7993)
![3](https://github.com/conquererabhi25/starwarsServer/assets/62076788/cb5dc3db-12f3-40ac-bc2f-be95cf9ef99b)
![2](https://github.com/conquererabhi25/starwarsServer/assets/62076788/f8da06d9-6aa8-4d0a-b92b-1e412837dae2)

This project is a MERN stack application that includes user authentication (signup, signin, forgot password) using JWT tokens and integrates with the Star Wars API to list characters with pagination. The app is responsive, uses a state management library to handle data, and implements protected routes.

## Table of Contents

- [Objective](#objective)
- [Requirements](#requirements)
- [Detailed Steps](#detailed-steps)
  - [Setup and Configuration](#setup-and-configuration)
  - [User Authentication](#user-authentication)
  - [Star Wars Characters API Integration](#star-wars-characters-api-integration)
  - [State Management](#state-management)
  - [Protected Routes](#protected-routes)
  - [Styling and Responsiveness](#styling-and-responsiveness)
  - [Deployment](#deployment)
  - [Version Control](#version-control)
- [Notes](#notes)
- [Submission](#submission)
- [Links](#links)
- [Installation and Running Locally](#installation-and-running-locally)
- [Contact](#contact)

## Objective

Create a MERN stack application that includes user authentication (signup, signin, forgot password) using JWT tokens and integrates with the Star Wars API to list characters with pagination. The app should be responsive and hosted on a free server. Utilize a state management library to handle data and ensure protected routes are implemented.

## Requirements

1. **Authentication System**:
   - Implement user signup, signin, and forgot password functionality using JWT tokens.
   - Use bcrypt for password hashing.
   - Validate user inputs and handle errors appropriately.
2. **Star Wars Characters Listing**:
   - Fetch and display Star Wars characters from the SWAPI using pagination.
   - Use a table or modal view to list only the necessary details of characters.
   - Provide internal pages for each character showing detailed information.
3. **State Management**:
   - Use a state management library like Redux, Redux Toolkit, or Zustand to manage the application state.
4. **Responsive Design**:
   - Ensure the app is responsive and works well on various screen sizes.
   - Use a CSS library like Tailwind CSS, Bootstrap, Ant Design, Material UI, or core CSS for styling.
5. **Hosting**:
   - Host the application on a free server like Vercel or Netlify.
   - Share the code repository via GitHub, GitLab, or Bitbucket.

## Detailed Steps

### Setup and Configuration

- Initialize a new React project using Create React App or a similar tool.
- Set up a backend server with Node.js and Express.
- Configure MongoDB for the database.

### User Authentication

- **Signup**:
  - Create a signup form with fields for username, email, and password.
  - Validate inputs and store hashed passwords in MongoDB.
  - Generate and return a JWT token upon successful signup.
- **Signin**:
  - Create a signin form with fields for email and password.
  - Authenticate users and return a JWT token.
- **Forgot Password**:
  - Implement a forgot password flow to send password reset links to users.
  - Allow users to reset their password using a token.

### Star Wars Characters API Integration

- Fetch characters from the SWAPI (https://swapi.dev/api/people).
- Implement pagination using the provided "next" and "previous" links from the API.
- Display character details in a table or modal view, showing only necessary information.

### State Management

- Use Redux, Redux Toolkit, or Zustand to manage global state.
- Create slices or stores for user authentication and Star Wars characters data.
- Use hooks to connect components to the state.![1](https://github.com/conquererabhi25/starwarsServer/assets/62076788/f7062556-0969-4912-95ab-18e49eda0ab4)
![6](https://github.com/conquererabhi25/starwarsServer/assets/62076788/a4bdd1a0-82e7-4c31-849b-bfd1db373a88)
![5](https://github.com/conquererabhi25/starwarsServer/assets/62076788/e8c47ab2-7881-4a98-b531-64b7e931d19f)


### Protected Routes

- Implement protected routes that can only be accessed by authenticated users.
- Redirect unauthenticated users to the signin page.

### Styling and Responsiveness

- Use a CSS library like Tailwind CSS, Bootstrap, Ant Design, Material UI, or core CSS to style the app.
- Ensure the app is responsive and looks good on different devices.

### Deployment

- Deploy the frontend and backend to a free hosting service like Vercel or Netlify.
- Ensure the app is accessible and functioning correctly.

### Version Control

- Use Git for version control.
- Push the code to a repository on GitHub, GitLab, or Bitbucket.
- Ensure the repository is public and provide a README file with instructions for running the app locally.

## Notes

1. Comment your code where necessary to explain the functionality.
2. Use React hooks to manage state and side effects.
3. Ensure protected routes are implemented to restrict access to authenticated users only.

## Submission

- Provide the link to the hosted application.
- Share the repository link from GitHub, GitLab, or Bitbucket.

## Links

- **Frontend Repository**: [Starwars-Client](https://github.com/conquererabhi25/Starwars-Client)
- **Backend Repository**: [StarwarsServer](https://github.com/conquererabhi25/starwarsServer)
- **Live Site URL**: [Starwars Client](https://starwars-client-woad.vercel.app/)

## Installation and Running Locally

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm (or yarn)
- MongoDB

### Steps

1. Clone the frontend and backend repositories:
   ```sh
   git clone https://github.com/conquererabhi25/Starwars-Client.git
   git clone https://github.com/conquererabhi25/starwarsServer.git
