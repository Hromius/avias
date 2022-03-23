import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Header from './components/header/header';
import FindPanel from './components/find-panel/find-panel';
import { store } from './redux/store';

export default function App() {
  return (
    <>
      <header className="">
        <Header />
      </header>
      <h1>
        <FindPanel />
      </h1>
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
