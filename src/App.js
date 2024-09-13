import './App.css';
import Landing from './screens/Landing'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';



function App() {
  return (
    <CartProvider>
      <Landing/>
      </CartProvider>
  );
}

export default App;
