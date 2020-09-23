//HOC or Pkgs
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//Components
import App from './components/App';
import store from './redux/store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

