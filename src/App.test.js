import { render, screen } from '@testing-library/react';
import App from './App';

describe("testing mailBoxClient",()=>{
  test('renders mailboxclient', () => {
  render(<App />);
  const linkElement = screen.getByText("Mail Box Client");
  expect(linkElement).toBeInTheDocument();
}),test(" renders welcomPage",()=>{
  render(<App/>)
  expect(screen.getByRole('login')).toBeInTheDocument("WelcomePage")
})})
