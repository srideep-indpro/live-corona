import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.css';
import AppNavbar from './components/AppNavbar';
import Status from './components/Status';
import { Container } from 'reactstrap';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppNavbar />
				<Container style={{ margin: '80px' }}>
					<Status />
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
