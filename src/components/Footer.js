import React from 'react';
import { Menu } from 'antd';
import { version } from '../../package.json';

export default () => {
	return (
		<Menu mode="horizontal" theme="dark">
			<Menu.Item key="github">
				<span style={{ fontSize: '20px' }}>
					<a href="https://github.com/srideep-indpro/live-corona">Contribute on Github</a>
				</span>
			</Menu.Item>
			<Menu.Item key="version">
				<span style={{ marginLeft: '10px', fontSize: '20px' }}>Version : {version} </span>
			</Menu.Item>
		</Menu>
		// <footer className="bg-dark text-white mt-5 p-4 text-center">
		// 	<a href="https://github.com/srideep-indpro/live-corona">Contribute on Github</a>
		// 	<span style={{ marginLeft: '10px' }}>Version : {version} </span>
		// </footer>
	);
};
