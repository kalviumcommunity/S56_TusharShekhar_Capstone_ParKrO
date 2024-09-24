// src/__tests__/FAQ.test.js
import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import FAQ from '../Component/FAQ'; // Ensure this path is correct
import { MemoryRouter } from 'react-router-dom';

describe('FAQ Component', () => {
  test('renders the correct FAQ questions', () => {
    // Wrap the FAQ component in MemoryRouter to provide routing context
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    );

    // Use a function matcher to allow flexibility in how the text appears
    const question1 = screen.getByText((content, element) => 
      content.includes('What is ParkrO')
    );
    const question2 = screen.getByText((content, element) =>
      content.includes('What are the main features of ParKro')
    );

    // Assertions to check if the questions are present in the DOM
    expect(question1).toBeInTheDocument();
    expect(question2).toBeInTheDocument();
  });
});
