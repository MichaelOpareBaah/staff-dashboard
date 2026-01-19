# Staff Dashboard API

Express.js CRUD API for managing customers.

## Installation

```bash
npm install
```

## Environment Setup

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

## Running the Server

### Development (with auto-reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Customers

- **GET** `/api/customers` - Get all customers
- **POST** `/api/customers` - Create a new customer
- **GET** `/api/customers/:id` - Get a customer by ID
- **PUT** `/api/customers/:id` - Update a customer
- **DELETE** `/api/customers/:id` - Delete a customer

## Customer Schema

```json
{
  "fullname": "string (required)",
  "email": "string (required, valid email format)",
  "phone": "string (required, 10 digits)",
  "gender": "string (required, 'male' or 'female')",
  "specifications": "string (required)",
  "assignTo": "string (required)"
}
```

## Example Requests

### Create a Customer
```bash
curl -X POST http://localhost:5000/api/customers \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": "Michael Opare",
    "email": "mike@example.com",
    "phone": "0500000000",
    "gender": "male",
    "specifications": "Needs a website redesign",
    "assignTo": "Designer"
  }'
```

### Get All Customers
```bash
curl http://localhost:5000/api/customers
```

### Get a Customer by ID
```bash
curl http://localhost:5000/api/customers/1
```

### Update a Customer
```bash
curl -X PUT http://localhost:5000/api/customers/1 \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": "Michael Opare Updated",
    "email": "mike.updated@example.com",
    "phone": "0500000000",
    "gender": "male",
    "specifications": "Updated specifications",
    "assignTo": "Manager"
  }'
```

### Delete a Customer
```bash
curl -X DELETE http://localhost:5000/api/customers/1
```

## Project Structure

```
backend/
├── controllers/
│   └── customerController.js
├── models/
│   └── customerModel.js
├── routes/
│   └── customers.js
├── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Notes

- Currently uses in-memory storage. For production, integrate with MongoDB, PostgreSQL, or another database.
- CORS is enabled for frontend integration.
- Input validation is implemented for customer data.
