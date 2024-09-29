import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Component/Login'; 
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Login Component', () => {
  const mockAxios = new MockAdapter(axios);

  beforeEach(() => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('renders logo and login text', () => {
    const logo = screen.getByAltText('Parkro Logo');
    const welcomeText = screen.getByText(/Welcome Back/i);
    expect(logo).toBeInTheDocument();
    expect(welcomeText).toBeInTheDocument();
  });

  test('renders error message when fields are empty', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Login/i })); 
    const errorMessage = await screen.findByText(/Please fill in all fields/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('stores token on successful login', async () => {
    mockAxios.onPost('http://localhost:3200/login').reply(200, {
      token: 'fakeToken',
    });

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'correctpassword' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Login/i })); 

    await waitFor(() => {
      expect(localStorage.getItem('token')).toEqual('fakeToken');
    });
  });

  test('navigates to Sign Up page', () => {
    fireEvent.click(screen.getByText(/Sign Up/i));
    expect(window.location.pathname).toBe('/signup');
  });
});
