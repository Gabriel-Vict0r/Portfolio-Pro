import { useState } from 'react'
import './sass/main.sass';
import Header from './components/Header';
import Start from './components/Start';
import Container from './components/Container';
import Services from './components/Services';
import Track from './components/tracks/Track';
function App() {
  const copyServices = { title: "Serviços", text: "Como eu posso te ajudar?" };
  return (
    <div className="App">
      <Container>
        <Header />
        <Start />
      </Container>
      <Track title={copyServices.title} text={copyServices.text} />
      <Container>
        <Services />
      </Container>
    </div>
  );
}

export default App
