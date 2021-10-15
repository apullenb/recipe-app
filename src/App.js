import './App.css';
import config from '../config';

function App() {

 

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit' />
      </form>
    </div>
  );
}

export default App;
