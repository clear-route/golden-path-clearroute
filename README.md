# nodejs-golden-path

Node.js application with a "Hello World" interface and a modal popup that displays the current time along with a welcome message. This project serves as a golden path example for a simple Node.js web application.

## Project Overview

This application is built using Node.js and the Express.js framework. It serves a single HTML page (`public/index.html`) which includes:

- A "Hello World" heading.
- A button labeled "Show Details".
- Clicking the button triggers a modal dialog.
- The modal displays a welcome message ("Welcome to the application!") and the current time in HH:MM:SS format.
- The frontend is implemented with plain HTML, CSS, and JavaScript, with static assets served from the `public` directory.

## Setup

1.  **Prerequisites:**

    - Node.js (which includes npm) installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2.  **Clone the repository (if you haven't already):**

    ```bash
    git clone https://github.com/clear-route/nodejs-golden-path.git
    ```

3.  **Navigate to the project directory:**

    ```bash
    cd nodejs-golden-path
    ```

4.  **Install dependencies:**
    From the project's root directory, run the following command to install the necessary Node.js packages (like Express) defined in `package.json`:
    ```bash
    npm install
    ```

## Running the Application

Once the setup is complete, you can start the application server using one of the following methods:

1.  **Using Node directly:**

    ```bash
    node app.js
    ```

2.  **Using the npm start script (Recommended):**
    We will add a `start` script to `package.json` for convenience. After that, you can run:
    ```bash
    npm start
    ```

The server will start, and you should see a message in your console:
`Server is listening on port 3000`
`Access the app at http://localhost:3000`

Open your web browser and navigate to `http://localhost:3000` to view the application.
