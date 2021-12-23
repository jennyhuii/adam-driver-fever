import './App.css';
import quotes from './quotes/quotes.json';
import Image from './component/Image';

const App = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);

  return (
    <div className="App">
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
