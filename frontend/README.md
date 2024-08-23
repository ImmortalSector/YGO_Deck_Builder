# Frontend Directory

* **`public/`:** Static files served directly by the server (e.g., `index.html`).
* **`src/`:** Contains the core frontend code.

  * **`assets/`:** Images and other static assets.
  * **`components/`:** Reusable UI components, with specific directories for grouped components like `DeckBuilder/`.
  * **`contexts/`:** React Contexts for managing state like the deck and authentication across the app.
  * **`hooks/`:** Custom React hooks for abstracting repeated logic.
  * **`pages/`:** React components representing different pages/routes in the app.
  * **`services/`:** Functions that handle API calls and other side effects.
  * **`styles/`:** CSS files for styling the components.
  * **`App.js`:** Main React component that sets up the app’s routing and context providers.
  * **`index.js`:** Entry point for the React application.
  * **`setupTests.js`:** Configuration for setting up testing in the frontend.


#### **Docker and Environment Files**

* **`Dockerfile`:** Each service (frontend, backend) has its own Dockerfile, defining how to build the Docker image.
* **`.env`:** Environment variables for local development (different from the `config/` directory, which is more about app-specific configuration).
* **`.gitignore`:** Specifies files and directories to be ignored by Git.
