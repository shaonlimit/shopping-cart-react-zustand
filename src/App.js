import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Product from './components/Product/Product';
import { FakeData } from './fakeData/FakeData';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <hr />
      <Header />
      <div className='all-products'>
        {FakeData.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
