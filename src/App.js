import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import logo from "./assets/logo.png"

function App() {
  return (
    <>
    <Header>
      <img src = {logo} alt="Little Lemon Logo"/>
    </Header>
    <Nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </Nav>
    <Main></Main>
    <Footer>
    <img src = {logo} alt="Little Lemon Logo"/>
    <ul>
      <li>Doormat Navigation</li>
      <li>Contact</li>
      <li>Social Media Links</li>
    </ul>
    </Footer>
    </>
  );
}

export default App;
