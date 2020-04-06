import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './app';
import jQuery from 'jquery'

const store = new Store();

console.log('test')
jQuery(() => {
  console.log('test')
  var newElement = document.createElement('div');
  newElement.setAttribute('id', 'contentRoot');
  document.body.appendChild(newElement);

  store.ready().then(() => {
  console.log('test')
    render(
      <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('contentRoot'));
  });
})
