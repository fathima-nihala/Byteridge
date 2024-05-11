
import CaseStudy from './Components/CaseStudy';
import FeaturedClients from './Components/FeaturedClients';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Services from './Components/Services';
import Slider from './Components/Slider';
import StayInTouch from './Components/StayInTouch';
import Testimonials from './Components/Testimonials';
import WorkWithUs from './Components/WorkWithUs';

function App() {
  return (
    <div className="App ">
      <Header/>
      <Slider/>
      <WorkWithUs/>
      <Services/>
      <CaseStudy/>
      <Testimonials/>
      <FeaturedClients/>
      <StayInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
