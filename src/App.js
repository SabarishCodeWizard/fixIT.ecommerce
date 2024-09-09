import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';


function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      <div>
        <HomePage></HomePage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
