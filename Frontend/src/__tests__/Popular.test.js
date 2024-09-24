import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Popular from '../Component/Popular'; // Adjust the import based on your directory structure
import { BrowserRouter as Router } from 'react-router-dom';

describe('Popular Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Popular />
      </Router>
    );
  });

  test('renders the logo', () => {
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders the Popular section', () => {
    const popularText = screen.getByText('POPULAR');
    expect(popularText).toBeInTheDocument();
  });

  test('toggles dropdown on click', () => {
    const dropdownHeader = screen.getByText('Parking-Related Issue Reporting');
    fireEvent.click(dropdownHeader);
    
    // Check if the dropdown content is displayed
    const dropdownContent = screen.getByText(/Unique QR Code Generation/i);
    expect(dropdownContent).toBeInTheDocument();

    // Click again to close the dropdown
    fireEvent.click(dropdownHeader);
    
    // Check if the dropdown content is not displayed
    expect(dropdownContent).not.toBeVisible();
  });

  test('renders the footer with contact button', () => {
    const contactButton = screen.getByRole('button', { name: 'Contact Us' });
    expect(contactButton).toBeInTheDocument();
  });
  
  test('renders social media icons', () => {
    const youtubeIcon = screen.getByAltText('YouTube');
    const instagramIcon = screen.getByAltText('Instagram');
    const facebookIcon = screen.getByAltText('Facebook');
    const linkedInIcon = screen.getByAltText('LinkedIn');

    expect(youtubeIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
  });
});
