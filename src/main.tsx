import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './assets/styles/reset.css';
import './assets/styles/index.css';

import { RouterProvider } from 'react-router';

import { router } from './router/routes';


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
