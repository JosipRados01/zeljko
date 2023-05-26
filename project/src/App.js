import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import BestSellers from './components/bestsellers/BestSellers';

import bestSellersArray from "./components/bestsellers/bestSellersArray.json"
import ImageGallery from './components/imageGallery/ImageGallery';
import Products from './components/products/Products';
import CupExperience from './components/cupExperience/CupExperience';
import Sponsors from './components/sponsors/Sponsors';
import FreshGrounds from "./components/FreshGrounds/FreshGrounds"
import BrewGuides from './components/brewGuides/BrewGuides';
import YourPour from './components/yourPour/YourPour';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <BestSellers array={bestSellersArray} ></BestSellers>
      <ImageGallery></ImageGallery>
      <Products></Products>
      <CupExperience></CupExperience>
      <Sponsors></Sponsors>
      <FreshGrounds></FreshGrounds>
      <BrewGuides></BrewGuides>
      <YourPour></YourPour>
      <Footer></Footer>
    </div>
  );
}

export default App;
