import React from "react";
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="dc">
      <Header />

      <main className="py-3">
        <Container>

        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
