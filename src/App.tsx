import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Home from './pages/Home';
import Book from './pages/Book';
import store from './redux/store';
import './App.css';
import Orders from './pages/Orders';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/books/:title" element={<Book />} />
        </Routes>
        <Toaster />
      </Router>
    </Provider>
  );
}

export default App;
