const SelectedPlant = props => {
    
	let { name, color, image, numAllocated } = props.plant;

	return (
		<div className="card selected-plant-card">
			<img src={image} width="150px" height="150px" alt={`${color} ${name}`} />
			<span className="big-num">{numAllocated}</span>
		</div>
	);
};

export default SelectedPlant;
