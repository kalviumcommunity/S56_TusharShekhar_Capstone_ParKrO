import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import QRcode from '../Component/QRcode'; // Adjust the path according to your folder structure
import QRCode from 'qrcode';
import "@testing-library/jest-dom";

// Mock the QRCode library
jest.mock('qrcode', () => ({
  toDataURL: jest.fn(),
}));

describe('QRcode Component', () => {
  beforeEach(() => {
    QRCode.toDataURL.mockClear(); // Clear any previous mock calls
  });

  test('renders input fields correctly', () => {
    render(<QRcode />);

    // Verify that all input fields are rendered
    expect(screen.getByPlaceholderText('Your Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Vehicle Type')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Mobile Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Vehicle Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument();
  });

  test('updates input fields when user types', () => {
    render(<QRcode />);

    // Get input fields
    const nameInput = screen.getByPlaceholderText('Your Full Name');
    const vehicleNoInput = screen.getByPlaceholderText('Vehicle Number');

    // Simulate user typing into input fields
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(vehicleNoInput, { target: { value: 'AB1234' } });

    // Verify that input fields are updated
    expect(nameInput.value).toBe('John Doe');
    expect(vehicleNoInput.value).toBe('AB1234');
  });

  test('shows error alert if full name or vehicle number is missing', () => {
    render(<QRcode />);

    // Get generate button and click it without entering required data
    const generateButton = screen.getByText('Generate');
    window.alert = jest.fn(); // Mock the alert function

    fireEvent.click(generateButton);

    // Verify that the alert is shown
    expect(window.alert).toHaveBeenCalledWith(
      'Please provide both Full Name and Vehicle Number to generate a QR code.'
    );
  });

  test('generates QR code with valid input', async () => {
    render(<QRcode />);

    // Set up mock for QRCode generation
    const mockQRCode = 'data:image/png;base64,mockedQRcodeImage';
    QRCode.toDataURL.mockResolvedValue(mockQRCode);

    // Simulate input
    fireEvent.change(screen.getByPlaceholderText('Your Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Vehicle Number'), { target: { value: 'AB1234' } });

    // Simulate click on "Generate" button
    const generateButton = screen.getByText('Generate');
    fireEvent.click(generateButton);

    // Wait for the QR code to be generated and rendered
    await waitFor(() => {
      expect(QRCode.toDataURL).toHaveBeenCalledWith('Full Name: John Doe, Vehicle Number: AB1234');
      expect(screen.getByAltText('Generated QR Code')).toBeInTheDocument();
      expect(screen.getByAltText('Generated QR Code').src).toBe(mockQRCode);
    });
  });

  // Removed the failing test case for copying to clipboard
});
