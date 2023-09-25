import React from "react";
import './App.css';
import Header from "./components/Header.js"
import Nav from "./components/Nav.js"
import Main from "./components/Main.js"
import Footer from "./components/Footer.js"

function App() {
  return (
      <div className = "container">
      <header class="header">
      <Header></Header>
      </header>
      <main>
        <Main></Main>
      </main>
      <div class="nav">
        <Nav></Nav>
      </div>
      <footer class="footer">
        <Footer></Footer>
      </footer>
      </div>
  );
}

export default App;
