import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import { TaDa } from 'Pages/TaDa/TaDa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<TaDa />
	</React.StrictMode>,
);
