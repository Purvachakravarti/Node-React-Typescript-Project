# Node-React-Typescript-Project

## Project Setup

### Backend

#### Technologies:

- Node.js with NestJS
- TypeScript
- PostgreSQL with Prisma ORM
- Zod or Class Validator for DTO validation

#### API Endpoints:

- `POST /auth/login`: Authenticate a user and return an authentication token.
- `GET /invoices`: Retrieve all invoices.
- `GET /invoices/:id`: Retrieve details of a specific invoice for modal display.
- `GET /invoices/total`: Retrieve a data aggregation of the total amount due by due date.

#### Setup Instructions:

1. Initialize a new backend server project.
2. Connect your backend to a PostgreSQL database.
3. Define database schemas/models for users and invoices.
4. Implement the API routes as described.
5. Ensure proper error handling and authentication mechanisms are in place.

### Frontend

#### Technologies:

- React with TypeScript
- @vite for building
- Redux Toolkit for state management
- React Query
- Zod for validation

#### Main Features:

- Login page
- Invoices page with a list of invoices
- Popup/modal to display details of an invoice

#### Setup Instructions:

1. Initialize a new React application using @vite.
2. Setup Redux Toolkit for state management.
3. Implement routing using React Router.
4. Create UI components based on the provided mock-up.
5. Connect components to the Redux store and the backend API.

### Running the Project

Ensure you have Docker installed and use the provided `docker-compose.yml` to set up the required services.
