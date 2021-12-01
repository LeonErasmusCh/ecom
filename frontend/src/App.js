import React from 'react'
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreens from '../src/screens/ProductScreens';
import CartScreen from '../src/screens/CartScreen';



const App = () => {
  return (

    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreens />} />
            <Route path='cart/:id?' element={<CartScreen />} />
          </Routes>
        </Container >
      </main>
      <Footer />
    </Router>

  );
}

export default App;
