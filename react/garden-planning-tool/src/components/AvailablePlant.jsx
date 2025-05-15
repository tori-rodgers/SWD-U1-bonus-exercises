import StyledLink from './StyledLink';
import { capitalize } from '../shared/utils';

const AvailablePlant = props => {
	// Use destructuring to avoid having to use props.plant.id, props.plant.name, etc
	let { plant, returnPlant, allocatePlant } = props;
	let { id, name, color, image, numAvailable } = plant;

	return (
		<div
			className={`card available-plant-card ${
				numAvailable === 0 && 'unavailable'
			}`}>
			<div className="img-txt-combo">
				<img src={image} width="50px" height="50px" alt={`${color} ${name}`} />
				<p>
					<StyledLink destination={`/plant/${id}`}>
						{name}, {capitalize(color)}
					</StyledLink>
					<br />
					<span className="amount-txt">{numAvailable} available</span>
				</p>
			</div>
			<div className="arrow-group">
				<i
					className="chevron-left fa fa-chevron-circle-left"
					title="Remove one plant from flowerbed"
					onClick={() => returnPlant(plant)}></i>
				<i
					className="chevron-right fa fa-chevron-circle-right"
					title="Add one plant to flowerbed"
					onClick={() => allocatePlant(plant)}></i>
			</div>
		</div>
	);
};

export default AvailablePlant;
