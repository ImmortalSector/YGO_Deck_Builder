# YGO_Deck_Builder

A YGO Deck Builder App which allows the user to visualize and design strategies interactively. Instead of the casual way of building a deck using a grid, the players can drag and drop cards onto the whiteboard to visualize their deck layout while simultaneously draw and add text annotations to explain strategies or combos.

## Tech Stack:

### **Frontend:**

* **React.js**: For building a responsive and dynamic user interface.
* **HTML5 Canvas**: To handle the whiteboard interface, allowing for drag-and-drop and drawing features.
* **Tailwind CSS**: For styling the application.

### Backend:

* **Node.js with Express.js**: For handling API requests and server-side logic.
* **MongoDB**: To store user data, deck information, and other metadata.
* ~~***Socket.io**: If you implement real-time collaboration features.*~~

### APIs and External Resources:

* **YGOPRODeck API:** For fetching card data, including images, descriptions, and rulings.
* **Firebase:** For real-time data handling and user authentication.

### DevOps:

* **Docker**: For containerizing the application, making it easier to deploy and scale.
* **CI/CD Pipelines (***Github Actions or CircleCI***)**: To automate testing and deployment processes.



## To-Do

* **Caching API Responses**: To improve performance, we can cache the API responses to avoid hitting the YGOPRODeck API too often by implementing a simple caching mechanism using an in-memory store like Redis or by storing responses temporarily in your backend.
