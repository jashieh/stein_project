import React from 'react';
import { Route } from 'react-router-dom';

import './stylesheets/App.scss';

import Nav from './nav/nav.jsx';
import Staff from './staff/staff_container.js';
import Modal from './modal/modal.jsx';

const App = () => (
    <div>
        <Route path ="/" component={Modal} />
        <Route path="/" component={Nav} />
        <Route path="/" component={Staff} />
    </div>
);

export default App;