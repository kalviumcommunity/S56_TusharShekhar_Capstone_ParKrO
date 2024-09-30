import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import QRcode from '../Component/QRcode'; 
import QRCode from 'qrcode';
import "@testing-library/jest-dom";


jest.mock('qrcode', () => ({
  toDataURL: jest.fn(),
}));

describe('QRcode Component', () => {
  beforeEach(() => {
    QRCode.toDataURL.mockClear();
  });

  test('renders input fields correctly', () => {
    render(<QRcode />);


    expect(screen.getByPlaceholderText('Your Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Vehicle Type')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Mobile Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Vehicle Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument();
  });

  test('updates input fields when user types', () => {
    render(<QRcode />);

    
    const nameInput = screen.getByPlaceholderText('Your Full Name');
    const vehicleNoInput = screen.getByPlaceholderText('Vehicle Number');

    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(vehicleNoInput, { target: { value: 'AB1234' } });

    
    expect(nameInput.value).toBe('John Doe');
    expect(vehicleNoInput.value).toBe('AB1234');
  });

  test('shows error alert if full name or vehicle number is missing', () => {
    render(<QRcode />);

    
    const generateButton = screen.getByText('Generate');
    window.alert = jest.fn();

    fireEvent.click(generateButton);

    
    expect(window.alert).toHaveBeenCalledWith(
      'Please provide both Full Name and Vehicle Number to generate a QR code.'
    );
  });

  test('generates QR code with valid input', async () => {
    render(<QRcode />);


    const mockQRCode = 'data:image/png;base64,mockedQRcodeImage';
    QRCode.toDataURL.mockResolvedValue(mockQRCode);

    
    fireEvent.change(screen.getByPlaceholderText('Your Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Vehicle Number'), { target: { value: 'AB1234' } });

    
    const generateButton = screen.getByText('Generate');
    fireEvent.click(generateButton);


    await waitFor(() => {
      expect(QRCode.toDataURL).toHaveBeenCalledWith('Full Name: John Doe, Vehicle Number: AB1234');
      expect(screen.getByAltText('Generated QR Code')).toBeInTheDocument();
      expect(screen.getByAltText('Generated QR Code').src).toBe(mockQRCode);
    });
  });

  
});
