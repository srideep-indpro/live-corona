import React, { Component } from 'react';
import { Menu } from 'antd';

class AppNavbar extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<div>
				<Menu mode="horizontal" theme="dark">
					<Menu.Item key="github">
						<span style={{ fontSize: '25px' }}>
							<i className="fa fa-line-chart" /> &nbsp; <a href="/live-corona">India Corona Tracker</a>
						</span>
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default AppNavbar;
