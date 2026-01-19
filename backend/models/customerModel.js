import pool from '../config/database.js';

// Add a new customer
export const addCustomer = async (customerData) => {
  try {
    const { fullname, email, phone, gender, specifications, assignTo } = customerData;
    
    const [result] = await pool.execute(
      'INSERT INTO customers (fullname, email, phone, gender, specifications, assignTo) VALUES (?, ?, ?, ?, ?, ?)',
      [fullname, email, phone, gender, specifications, assignTo]
    );

    return {
      id: result.insertId,
      ...customerData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  } catch (error) {
    throw new Error(`Error adding customer: ${error.message}`);
  }
};

// Get all customers
export const getAllCustomers = async () => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM customers ORDER BY createdAt DESC'
    );
    return rows;
  } catch (error) {
    throw new Error(`Error fetching customers: ${error.message}`);
  }
};

// Get a customer by ID
export const getCustomerById = async (id) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM customers WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  } catch (error) {
    throw new Error(`Error fetching customer: ${error.message}`);
  }
};

// Update a customer
export const updateCustomer = async (id, customerData) => {
  try {
    const { fullname, email, phone, gender, specifications, assignTo } = customerData;
    
    const [result] = await pool.execute(
      'UPDATE customers SET fullname = ?, email = ?, phone = ?, gender = ?, specifications = ?, assignTo = ? WHERE id = ?',
      [fullname, email, phone, gender, specifications, assignTo, id]
    );

    if (result.affectedRows === 0) {
      return null;
    }

    return {
      id,
      ...customerData,
      updatedAt: new Date(),
    };
  } catch (error) {
    throw new Error(`Error updating customer: ${error.message}`);
  }
};

// Delete a customer
export const deleteCustomer = async (id) => {
  try {
    const [result] = await pool.execute(
      'DELETE FROM customers WHERE id = ?',
      [id]
    );
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(`Error deleting customer: ${error.message}`);
  }
};
