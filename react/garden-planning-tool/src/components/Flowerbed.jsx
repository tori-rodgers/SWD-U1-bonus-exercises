import SelectedPlant from './SelectedPlant';

// Note the destructuring of selectedPlants from the props object
const Flowerbed = ({ selectedPlants }) => {
    
	const plantsJSX = selectedPlants.map(plant => {
		return <SelectedPlant key={plant.id} plant={plant} />;
	});

	return (
		<div className="flowerbed">
			<div>
				<h4>My Flowerbed</h4>
			</div>
			{selectedPlants.length ? (
				<div className="plant-grid">{plantsJSX}</div>
			) : (
				<p>Select a plant to get started!</p>
			)}
		</div>
	);
};

export default Flowerbed;
