import { useParams } from 'react-router';
import StyledLink from './StyledLink';
import { capitalize } from '../shared/utils';

// Instead of using props, get the id from the URL with useParams();
const PlantInfo = ({ allPlants }) => {

	const { id } = useParams();
	const [ plant ] = [...allPlants].filter(obj => obj.id == id);

	return (
        <>
            <div id="plant-info-container">
                <div>
                    <img src={plant.image} />
                </div>
                <div style={{flexDirection: "column"}}>
                    <h2>{plant.name}</h2>
                    <p>{`(${capitalize(plant.color)})`}</p>
                    {plant.numAvailable} available<br />
                    {plant.numAllocated} allocated 
                </div>
            </div>
            <div style={{margin: "0 auto"}}>
                <StyledLink destination="/">{"Return to main page".toUpperCase()}</StyledLink>
            </div>
        </>
    )
};

export default PlantInfo;
