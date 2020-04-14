import React from 'react'

const Robo = ({name, roboImg, emailId}) => {
	return(
	<div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='robo1' src={roboImg}/>
		<div>
		<h2>{name}</h2>
		<h3>{emailId}</h3>
		</div>
	</div>
	);
}

export default Robo;