import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/Header';
import Main from './components/Main';
import PlantInfo from './components/PlantInfo';
import Spinner from './components/Spinner';
import { alphabetize } from './shared/utils';
import './App.css';

function App() {
	// State variable to hold all plant objects
	const [allPlants, setAllPlants] = useState([]);

	// This state variable will allow us to render the page
	// only after fetched data is available
	const [loading, setLoading] = useState(true);

	const fetchPlants = async () => {
		let response = await fetch(
			'https://docs.google.com/document/d/1DjGYPISRGCsP4zHwJYBtciqbKAvae1CZ9EKsci4mTJk/export?format=txt'
		);
		let data = await response.json();

		let plantData = data.map(obj => {
			return { ...obj, numAllocated: 0 };
		});

		alphabetize(plantData, 'name');

		setAllPlants(plantData);
	};

	// Runs once when component first loads
	useEffect(() => {
		fetchPlants();
	}, []);

	// Runs only if the state variable allPlants is updated
	useEffect(() => {
		if (allPlants.length > 0) {
			setLoading(false);
		}
	}, [allPlants]);

	return (
		<div id="page-layout">
			<Header />
			<BrowserRouter>
				<Routes>
					<>
						<Route
							path="/plant/:id"
							element={<PlantInfo allPlants={allPlants} />}
						/>
						<Route
							path="/"
							element={
								loading ? (
									<Spinner />
								) : (
									<Main allPlants={allPlants} setAllPlants={setAllPlants} />
								)
							}
						/>
					</>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
