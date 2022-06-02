import logo from './logo.svg';
import './App.css';
import {FunctionalGreeting, FunctionalGreetingSix} from './components/FunctionalGreetings';
import {FunctionalGreetingWithProps, FunctionalGreetingSixWithProps} from './components/FunctionalGreetingsWithProps';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting /> 
      <FunctionalGreetingSix />
      <FunctionalGreetingWithProps greetings="nice to meet you" name="Dan" age="25" />
      <FunctionalGreetingSixWithProps greetings="nice to meet you ES6" name="Dave" age="525"/>
    </div>
  );
}

export default App;
