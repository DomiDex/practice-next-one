// Form.tsx
'use client';

import React, { useState, FormEvent } from 'react';
import Input from './Input';

interface FormData {
  name: string;
  email: string;
  message: string;
}

/**
 * A reusable form component with input validation and submission handling.
 */
export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  /**
   * Handles changes to form inputs
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles form submission
   * @param {FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center  max-w-md mx-auto space-y-4'
    >
      <Input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
        required
        className='w-full'
      />
      <Input
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        required
        className='w-full'
      />
      <Input
        type='text'
        name='message'
        placeholder='Message'
        value={formData.message}
        onChange={handleChange}
        required
        className='w-full'
      />
      <button
        type='submit'
        className='w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md 
          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Submit
      </button>
    </form>
  );
}

/* Usage Example:
  <Form />
*/

/**
 * Example test cases:
 *
 * import { render, screen, fireEvent } from '@testing-library/react';
 *
 * describe('Form', () => {
 *   it('renders all input fields', () => {
 *     render(<Form />);
 *     expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
 *     expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
 *     expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
 *   });
 *
 *   it('updates input values on change', () => {
 *     render(<Form />);
 *     const nameInput = screen.getByPlaceholderText('Name');
 *     fireEvent.change(nameInput, { target: { value: 'John Doe' } });
 *     expect(nameInput.value).toBe('John Doe');
 *   });
 * });
 */
