import React from 'react'; 
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import "@testing-library/jest-dom";
import About from '../Component/About'; 

describe('About Component', () => {
  beforeEach(() => {
    
    render(
      <Router>
        <About />
      </Router>
    );
  });

  
  test('renders the main about image', () => {
    const aboutImage = screen.getByAltText('About Image');
    expect(aboutImage).toBeInTheDocument();
  });

  test('renders the footer with contact button', () => {
    const contactButtons = screen.getAllByText('Contact Us');
    expect(contactButtons.length).toBeGreaterThan(0); 
    expect(contactButtons[0]).toBeInTheDocument(); 
  });
});
