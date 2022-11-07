import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './pages/Home/Home';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
	]);
	return (
		<div className='App'>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
