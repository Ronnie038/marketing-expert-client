import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authprovider from './context/authProvider/Authprovider';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Authprovider>
			<App />
			<Toaster />
		</Authprovider>
	</React.StrictMode>
);

reportWebVitals();
