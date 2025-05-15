import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/Header';
import Main from './components/Main';
import PlantInfo from './components/PlantInfo';
import './App.css';
import data from './data/data.json'; // TEMP until fetching JSON

function App() {
    
	// State variable to hold all plant objects
	const [allPlants, setAllPlants] = useState(
		data.map(obj => {
			return { ...obj, numAllocated: 0 };
		})
	);

	return (
        <div id="page-layout">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/plant/:id"
                        element={<PlantInfo allPlants={allPlants} />}
                    />
                    <Route
                        path="/"
                        element={<Main allPlants={allPlants} setAllPlants={setAllPlants} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
	);
}

export default App;
