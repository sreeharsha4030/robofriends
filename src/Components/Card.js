import React from 'react';


const Card = (props) => {
	const { name, email, id } = props;

	return (
		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
			<img alt='robots' src={`https://robohash.org/${id}`} width="150" height="150" />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>

		</div>
	);
}

export default Card;
