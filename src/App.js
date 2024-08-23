import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';


function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      <div>
        <HomePage></HomePage>
      </div>
      
    </div>
  );
}

export default App;
