import { useState } from 'react';
import SelectedPlant from './SelectedPlant';

// Note the destructuring of selectedPlants from the props object
const Flowerbed = ({ selectedPlants }) => {
	const [flowerbedName, setFlowerbedName] = useState('My Flowerbed');

	const [editing, setEditing] = useState(false);

	const handleNameInput = event => {
		setFlowerbedName(event.target.value);
	};

	const handleOpenForm = () => {
		setEditing(true);
	};

	const handleCloseForm = event => {
		event.preventDefault();
		setEditing(false);
	};

	const plantsJSX = selectedPlants.map(plant => {
		return <SelectedPlant key={plant.id} plant={plant} />;
	});

	return (
		<div className="flowerbed">
			<div
				className="flowerbed-name"
				style={editing ? { opacity: 0.4 } : { opacity: 1 }}>
				<h4>{flowerbedName || 'My Flowerbed'}</h4>
				<button onClick={handleOpenForm} disabled={editing}>
					Edit
				</button>
			</div>
			{editing && (
				<form>
					<input value={flowerbedName} onInput={handleNameInput} />
					<button onClick={handleCloseForm}>Done</button>
				</form>
			)}
			{selectedPlants.length ? (
				<div className="plant-grid">{plantsJSX}</div>
			) : (
				<p>Select a plant to get started!</p>
			)}
		</div>
	);
};

export default Flowerbed;
