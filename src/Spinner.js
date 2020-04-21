import React from 'react';
import spin from './spin.gif';

export default () => {
	return (
		<div>
			<img src={spin} style={{ width: '50px', margin: 'auto', opacity: '0.2' }} alt="Loading..." />
		</div>
	);
};
