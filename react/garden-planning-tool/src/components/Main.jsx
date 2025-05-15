import Flowerbed from './Flowerbed';
import AvailablePlant from './AvailablePlant';

const Main = ({ allPlants, setAllPlants }) => {
	const handleReturn = thePlant => {
		if (thePlant.numAllocated > 0) {
			let updatedPlants = allPlants.map(aPlant => {
				return aPlant.id !== thePlant.id
					? aPlant
					: {
							...aPlant,
							numAvailable: aPlant.numAvailable + 1,
							numAllocated: aPlant.numAllocated - 1,
					  };
			});
			setAllPlants(updatedPlants);
		}
	};

	const handleAllocate = thePlant => {
		if (thePlant.numAvailable > 0) {
			let updatedPlants = allPlants.map(aPlant => {
				return aPlant.id !== thePlant.id
					? aPlant
					: {
							...aPlant,
							numAvailable: aPlant.numAvailable - 1,
							numAllocated: aPlant.numAllocated + 1,
					  };
			});
			setAllPlants(updatedPlants);
		}
	};

	let availablePlantsJSX = allPlants.map(plant => {
		return (
			<AvailablePlant
				key={plant.id}
				plant={plant}
				returnPlant={handleReturn}
				allocatePlant={handleAllocate}
			/>
		);
	});

	return (
		<main>
			<div id="left-column">
				<div className="full-width">
                    <h3>Available Plants</h3>
                </div>
                <div id="available-plants-grid">
				    {availablePlantsJSX}
                </div>
			</div>
			<div id="right-column">
				<Flowerbed
					selectedPlants={allPlants.filter(plant => plant.numAllocated > 0)}
				/>
			</div>
		</main>
	);
};

export default Main;
