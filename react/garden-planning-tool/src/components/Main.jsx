import Flowerbed from './Flowerbed';

const Main = () => {
	return (
		<main>
			<div id="left-column">
				<h3>Available Plants</h3>
				<p id="1">Yellow Daffodil - 5 available</p>
				<p id="2">Blue Hyacinth - 4 available</p>
				<p id="3">Red Tulip - 10 available</p>
			</div>
			<div id="right-column">
				<Flowerbed />
			</div>
		</main>
	);
};

export default Main;
