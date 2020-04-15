import React from 'react'
import Robo from './Robo';

const RoboList = ({roboData}) =>{
	// if(true)
	// {
	// 	return new Error('GOT IT');
	// }
	return(
		<div>
		{
		roboData.map ((val, index) =>{
			return(
				<Robo key={index} name={roboData[index].name} 
					roboImg={`https://robohash.org/${index}?size=200x200`}
					emailId={roboData[index].email}/>
				);
			})
		}
		</div>
	);
}

export default RoboList;
