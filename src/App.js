import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import Status from './components/Status';
import { Container } from 'reactstrap';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<AppNavbar />
				<Container style={{ margin: '100px' }}>
					<Status />
				</Container>
			</div>
		);
	}
}

export default App;
