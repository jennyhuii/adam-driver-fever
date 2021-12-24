import React from 'react';
import styled from 'styled-components';
import './App.css';
import quotes from './quotes/quotes.json';
import Image from './component/Image';

const SmallText = styled.p`
  font-size: 0.8rem;
`

const App = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);

  return (
    <div className="App">
      <SmallText>Disclaimer: This is a fan page. Not affiliated with Adam Driver.</SmallText>
      <Image />
      <p>
        "{quotes[randomNumber].quote}"
      </p>
      <p>
        - {quotes[randomNumber].by}
      </p>
    </div>
  );
}

export default App;
