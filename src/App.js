import { Provider } from 'react-redux';
import React from 'react';
import { store } from '../src/helpers/store';
import './App.css';
import Navbar from './components/NavbarComponent';
import Register from './components/RegisterComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Register />
    </div>
    </Provider>
  );
}

export default App;
