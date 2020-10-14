import React from "react";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="dc">
        <Header />

        <main className="py-3">
          <Container>
            <Route path="/" component={HomePage} exact /> 
            <Route path="/product/:id" component={ProductDetailPage} /> 
            <Route path="/cart/:id?" component={CartPage} /> 
          </Container>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
