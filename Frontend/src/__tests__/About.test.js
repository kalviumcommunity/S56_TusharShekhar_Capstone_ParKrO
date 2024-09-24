import React from 'react'; // Ensure React is imported
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import "@testing-library/jest-dom";
import About from '../Component/About'; // Adjust the import based on your directory structure

describe('About Component', () => {
  beforeEach(() => {
    // Wrap About component in Router
    render(
      <Router>
        <About />
      </Router>
    );
  });

  // Uncomment the test case that is failing to see if it works
  test('renders the main about image', () => {
    const aboutImage = screen.getByAltText('About Image');
    expect(aboutImage).toBeInTheDocument();
  });

  test('renders the footer with contact button', () => {
    const contactButtons = screen.getAllByText('Contact Us');
    expect(contactButtons.length).toBeGreaterThan(0); // Check if there are any Contact Us buttons
    expect(contactButtons[0]).toBeInTheDocument(); // Check the first Contact Us button
  });
});
