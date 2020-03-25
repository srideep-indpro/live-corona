import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import AppNavbar from './components/AppNavbar';
import Status from './components/Status';
import { Container } from 'reactstrap';

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppNavbar />
				<Container style={{ margin: '80px' }}>
					<Status />
				</Container>
			</div>
		);
	}
}

export default App;
