import './App.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      <Nav/>
      {/* banner */}
      {/* <Banner/> */}
      
      <Category/>
      {/* categories, by1get1 */}
      {/* new arrivals, view by brand */}
      {/* phone,laptop,tablet */}
      {/* footer */}
      <Footer/>
      <h4 className='place-content-center p-5 text-center'>All rights reserved.Made with all the love in ShopDoora Co.,ltd.</h4>
    </div>
  );
}

export default App;
