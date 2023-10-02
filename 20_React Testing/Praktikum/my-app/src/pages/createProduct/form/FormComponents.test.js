import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormComponents from './FormComponents';

describe('FormComponents', () => {
  // ... Test cases as before ...

  it('saves and displays selected form choices correctly', async () => {
    render(<FormComponents />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Product Name'), {
      target: { value: 'Sample Product' },
    });

    fireEvent.change(screen.getByLabelText('Product Category'), {
      target: { value: 'Baju' },
    });

    fireEvent.change(screen.getByLabelText('Product Freshness'), {
      target: { value: 'Brand New' },
    });

    fireEvent.change(screen.getByLabelText('Product Price'), {
      target: { value: '10' },
    });

    // Add similar fireEvent calls for other form fields
    
    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Ensure that the selected choices are displayed correctly in the table
    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('Baju')).toBeInTheDocument();
    expect(screen.getByText('Brand New')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    // Add more assertions as needed
  });

  it('validates that Product Name is not empty', async () => {
    render(<FormComponents />);

    // Leave Product Name field empty

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Ensure that the validation error message is displayed
    expect(screen.getByText('Input Product Name')).toBeInTheDocument();
  });

  it('validates that Product Name does not contain special characters', async () => {
    render(<FormComponents />);

    // Simulate user input with special characters
    fireEvent.change(screen.getByLabelText('Product Name'), {
      target: { value: 'Sample@Product' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Ensure that the validation error message is displayed
    expect(screen.getByText('Input only alphabet and space')).toBeInTheDocument();
  });

  it('validates that Product Name does not exceed 25 characters', async () => {
    render(<FormComponents />);

    // Simulate user input with more than 25 characters
    fireEvent.change(screen.getByLabelText('Product Name'), {
      target: { value: 'This is a very long product name exceeding 25 characters' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Ensure that the validation error message is displayed
    expect(screen.getByText('Input Product Name')).toBeInTheDocument();
  });

  it('validates that all form fields are not empty', async () => {
    render(<FormComponents />);

    // Leave all form fields empty

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Ensure that validation error messages for all fields are displayed
    expect(screen.getByText('Input Product Name')).toBeInTheDocument();
    expect(screen.getByText('Input Product Category')).toBeInTheDocument();
    expect(screen.getByText('Input Image Product')).toBeInTheDocument();
    expect(screen.getByText('Select Product Freshness')).toBeInTheDocument();
    expect(screen.getByText('Input Additional Description')).toBeInTheDocument();
    expect(screen.getByText('Input Price')).toBeInTheDocument();
  });
});
