import { useState } from "react";
import "./sass/main.sass";
import Header from "./components/Header";
import Start from "./components/Start";
import Container from "./components/Container";
import Services from "./components/Services";
import Track from "./components/tracks/Track";
import Habilities from "./components/Habilities";
import Projects from "./components/Projects";
import TrackAnimated from "./components/trackAnimetaded/TrackAnimated";
import WhoIAm from "./components/WhoIAm";
import ContactMe from "./components/ContactMe";
import Footer from './components/Footer'
function App() {
  const copyServices = { title: "Serviços", text: "Como eu posso te ajudar?" };
  const copyProjects = {
    title: "Projetos",
    text: "Alguns destes projetos fazem parte do meu trabalho como freelancer e outros são projetos criados para prática de estudos.",
  };
  return (
    <div className="App">
      <Container>
        <Header />
        <Start />
      </Container>
      <Track title={copyServices.title} text={copyServices.text} />
      <Container>
        <Services />
        <Habilities />
      </Container>
      <Track title={copyProjects.title} text={copyProjects.text} />
      <Projects />
      <TrackAnimated text="Desenvolvedor Web" />
      <Container>
        <WhoIAm />
      </Container>
      <Container>
        <ContactMe />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
