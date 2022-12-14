import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [submitValue, setSubmitValue] = useState('');

  function handleInputText(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitValue(inputText);
    setInputText('');
  }

  return (
    <div className="App">
      <header role="header">
        <h1>Sarah's To do list {submitValue}</h1>
      </header>
      <form>
        <label htmlFor='todo'>Enter a todo:</label>
        <input id="todo" name="todo" value={inputText} onChange={handleInputText} type="text" className="todo-input" />
        <button role="button" onClick={handleSubmit} className="todo-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
