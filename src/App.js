import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Decentralized from './Components/Elements/Decentralized';
import Faqs from './Components/Utils/Faqs';
import Seen from './Components/Elements/Seen';
import Interface from './Components/Elements/Interface';
import Utilities from './Components/Elements/Utilities';
import Youtube from './Components/Elements/Youtube';
import Comparison from './Components/Elements/Comparison';
import Roadmap from './Components/Elements/Roadmap';
import Token from './Components/Elements/Token';



function App() {
  return (
    <div >

      <Header/>
      <Decentralized/>
      <Seen/>
      <Youtube/>
      <Token/>
      <Interface/>
      <Utilities/>
      <Comparison/>
      <Roadmap/>
      <Faqs/>
      <Footer/>

    
    </div>
  );
}

export default App;
