import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <Container />
    , document.getElementById('root'));

registerServiceWorker();
