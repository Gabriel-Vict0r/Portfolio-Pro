import { useState } from 'react'
import './sass/main.sass';
import Header from './components/Header';
import Start from './components/Start';
import Container from './components/Container';
function App() {

  return (
    <div className="App">
      <Container>
        <Header />
        <Start />
      </Container>
    </div>
  );
}

export default App
