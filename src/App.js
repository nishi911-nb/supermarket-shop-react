import './App.css';
import Blogs from './components/Blogs';
import Carousels from './components/Carousels';
import Category from './components/Category';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewArrivals from './components/NewArrivals';
import Sale from './components/Sale';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Carousels />
      <Features />
      <Category />
      <NewArrivals />
      <Sale />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
