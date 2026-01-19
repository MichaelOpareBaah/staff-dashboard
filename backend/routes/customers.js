import express from 'express';
import * as customerController from '../controllers/customerController.js';

const router = express.Router();

// Create a new customer
router.post('/', customerController.createCustomer);

// Get all customers
router.get('/', customerController.getAllCustomers);

// Get a customer by ID
router.get('/:id', customerController.getCustomerById);

// Update a customer
router.put('/:id', customerController.updateCustomer);

// Delete a customer
router.delete('/:id', customerController.deleteCustomer);

export default router;
