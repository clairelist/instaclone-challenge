import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

//this is the new React 18 way of doing things!
const container = document.getElementById('root');
const root = createRoot(container);

root.render(

<App />
 )
