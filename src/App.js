import './App.css';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Contents/NavBar";
import { Banner } from "./Contents/Banner";
import { Skills } from "./Contents/Skills";
import { Projects } from "./Contents/Projects";
import { ContactInfo } from './Contents/ContactInfo';
import { Footer } from './Contents/Footer';
function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>My Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="My Portfolio" />
            </Helmet>
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <ContactInfo/>
      <Footer/>
    </div>
  );
}

export default App;
