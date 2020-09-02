import { Provider } from 'react-redux';
import React from 'react';
import { store } from '../src/helpers/store';
import './App.css';
import RegisterComponent from './components/RegisterComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RegisterComponent />
    </div>
    </Provider>
  );
}

export default App;
