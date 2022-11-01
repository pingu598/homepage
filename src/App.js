import { Container } from 'react-bootstrap';
import './App.css';
import CardIntro from './components/CardIntro';
import TextAndPhoto from './components/PhotoAndText';
import Intern from './components/Intern';
import ContactHere from './components/ContactHere';
import SocialMedia from './components/SocialMedia';
import Projects from './components/Projects';

function App() {
  return (
    <div>     
      <Container>
        <CardIntro/>
        <TextAndPhoto/>
        <Intern/>
        <Projects/>
        <ContactHere/>
        <SocialMedia/>
      </Container>
    </div>
  );
}

export default App;
