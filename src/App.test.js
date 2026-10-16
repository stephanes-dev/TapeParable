// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TapeParable title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TapeParable/i);
    expect(titleElement).toBeInTheDocument();
});
