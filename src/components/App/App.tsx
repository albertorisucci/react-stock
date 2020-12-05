import React from 'react';
import Header from '../Header';
import Button from '../../shared/Button';
import './App.css';
import Container from '../../shared/Container';

function TestComponent() {
  return <img 
            width="16" 
            src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" 
            alt="search icon" 
          />
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      
      <Container>
        <Button 
          onClick={() => window.alert('UIIIU')}
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
      </Container>
    </div>
  );
}

export default App;
