import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import FAQ from '../Component/FAQ'; 
import { MemoryRouter } from 'react-router-dom';

describe('FAQ Component', () => {
  test('renders the correct FAQ questions', () => {
    render(
      <MemoryRouter>
        <FAQ />
      </MemoryRouter>
    );


    const question1 = screen.getByText((content, element) => 
      content.includes('What is ParkrO')
    );
    const question2 = screen.getByText((content, element) =>
      content.includes('What are the main features of ParKro')
    );

    
    expect(question1).toBeInTheDocument();
    expect(question2).toBeInTheDocument();
  });
});
