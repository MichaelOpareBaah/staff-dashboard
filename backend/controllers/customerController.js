import * as customerModel from '../models/customerModel.js';

// Create a new customer
export const createCustomer = async (req, res) => {
  try {
    const { fullname, email, phone, gender, specifications, assignTo } = req.body;

    // Validation
    if (!fullname || !email || !phone || !gender || !specifications || !assignTo) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Phone validation (basic)
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      return res.status(400).json({ message: 'Invalid phone number' });
    }

    const customer = await customerModel.addCustomer({ fullname, email, phone, gender, specifications, assignTo });
    res.status(201).json({ message: 'Customer created successfully', data: customer });
  } catch (error) {
    // Handle duplicate email error
    if (error.message.includes('Duplicate entry')) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Error creating customer', error: error.message });
  }
};

// Get all customers
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await customerModel.getAllCustomers();
    res.status(200).json({ data: customers });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers', error: error.message });
  }
};

// Get a customer by ID
export const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await customerModel.getCustomerById(id);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json({ data: customer });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customer', error: error.message });
  }
};

// Update a customer
export const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, phone, gender, specifications, assignTo } = req.body;

    // Validation
    if (!fullname || !email || !phone || !gender || !specifications || !assignTo) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Phone validation (basic)
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      return res.status(400).json({ message: 'Invalid phone number' });
    }

    const customer = await customerModel.updateCustomer(id, { fullname, email, phone, gender, specifications, assignTo });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json({ message: 'Customer updated successfully', data: customer });
  } catch (error) {
    // Handle duplicate email error
    if (error.message.includes('Duplicate entry')) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Error updating customer', error: error.message });
  }
};

// Delete a customer
export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const success = await customerModel.deleteCustomer(id);

    if (!success) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting customer', error: error.message });
  }
};
