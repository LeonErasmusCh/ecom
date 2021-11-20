import React from 'react'
import {
  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreens from '../src/screens/ProductScreens';



const App = () => {
  return (
    
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/product/:id' element={<ProductScreens />}  />

          </Routes>
        </Container >
      </main>
      <Footer />
      </Router>

  );
}

export default App;
