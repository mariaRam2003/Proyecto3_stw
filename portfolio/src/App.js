import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Nav/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;