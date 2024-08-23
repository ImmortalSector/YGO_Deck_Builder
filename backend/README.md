# Backend Directory

* **`src/`:** Contains the core backend code.

  * **`controllers/`:** Logic for handling requests, validating data, and interacting with services.
  * **`models/`:** Database schemas and models (e.g., `Deck.js` for deck data, `User.js` for user data).
  * **`routes/`:** API endpoints that map routes to controller functions.
  * **`services/`:** Business logic for interacting with the database and performing other tasks.
  * **`utils/`:** Utility functions like database connection (`db.js`) and data validation (`validation.js`).
  * **`app.js`:** Main application setup, middleware, and route loading.
  * **`server.js`:** Starts the server and listens on the specified port.
* **`config/`:** Configuration files for different environments (development, production, etc.).
* **`tests/`:** Unit and integration tests for the backend.


#### **Docker and Environment Files**

* **`Dockerfile`:** Each service (frontend, backend) has its own Dockerfile, defining how to build the Docker image.
* **`.env`:** Environment variables for local development (different from the `config/` directory, which is more about app-specific configuration).
* **`.gitignore`:** Specifies files and directories to be ignored by Git.
