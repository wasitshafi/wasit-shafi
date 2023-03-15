import React from 'react';
import logo from './logo.svg';
import { Typography } from '@mui/material';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Typography variant="h3">Learn React</Typography>
				</a>
			</header>
		</div>
	);
}

export default App;
