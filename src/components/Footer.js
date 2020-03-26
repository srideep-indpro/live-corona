import React from 'react';
import { version } from '../../package.json';

export default () => {
	return (
		<footer className="bg-dark text-white mt-5 p-4 text-center">
			<a href="https://github.com/srideep-indpro/India-corona-tracker">Contribute on Github</a>
			<span style={{ marginLeft: '10px' }}>Version : {version} </span>
		</footer>
	);
};
