import  Counter  from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';

function App() {
  return (
  <div className="App" >
    <Counter>
       <ProductList></ProductList>
    </Counter>
  </div>
  );
}

export default App;
