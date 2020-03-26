import React, { Component } from 'react';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';
import Moment from 'react-moment';
import axios from 'axios';

class Status extends Component {
	constructor(props) {
		super(props);
		let interval;
		this.state = {
			liveData: {},
			loading: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			axios({
				method: 'GET',
				url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php',
				headers: {
					'content-type': 'application/octet-stream',
					'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
					'x-rapidapi-key': '166fcdaa89mshb7338a5af2cf6f8p155c53jsn54f7d7c45dfc'
				},
				params: {
					country: 'India'
				}
			})
				.then((response) => {
					let maxElem = response.data.stat_by_country.length;
					let liveData = response.data.stat_by_country[maxElem - 1];
					this.setState({ liveData, loading: false });
					//console.log(this.state.liveData);
				})
				.catch((error) => {
					console.log(error);
				});
		}, 1000);

		this.interval = setInterval(() => {
			axios({
				method: 'GET',
				url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php',
				headers: {
					'content-type': 'application/octet-stream',
					'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
					'x-rapidapi-key': '166fcdaa89mshb7338a5af2cf6f8p155c53jsn54f7d7c45dfc'
				},
				params: {
					country: 'India'
				}
			})
				.then((response) => {
					let maxElem = response.data.stat_by_country.length;
					let liveData = response.data.stat_by_country[maxElem - 1];
					this.setState({ liveData, loading: false });
					//console.log(this.state.liveData);
				})
				.catch((error) => {
					console.log(error);
				});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		//console.log(this.state.liveData);
		const {
			total_cases,
			total_recovered,
			total_deaths,
			record_date,
			active_cases,
			new_cases
		} = this.state.liveData;
		return (
			<Row>
				<Col sm="12" style={{ marginBottom: '20px' }}>
					<span style={{ fontSize: '20px', color: 'blue', float: 'left' }}>
						<b>
							INDIA (as of <Moment format="DD/MM/YYYY HH:mm">{record_date}</Moment>)
						</b>
					</span>

					{/* as of <Moment format="DD/MM/YYYY HH:mm">{record_date}</Moment> */}
				</Col>
				<Col sm="3" md="3" xs="4">
					<Card body inverse color="info" style={{ height: '200px', width: '200px' }}>
						<CardBody>
							<CardText>
								<p style={{ fontSize: '18px' }}>Cases #</p>
								<p style={{ color: 'orange', fontSize: '30px' }}>
									{' '}
									<b>{total_cases}</b>
								</p>
							</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col sm="3" md="3" xs="4">
					<Card body inverse color="success" style={{ height: '200px', width: '200px' }}>
						<CardBody>
							<CardText>
								<p style={{ fontSize: '18px' }}>Recovered #</p>
								<p style={{ color: 'orange', fontSize: '30px' }}>
									{' '}
									<b>{total_recovered}</b>
								</p>
							</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col sm="3" md="3" xs="4">
					<Card body inverse color="danger" style={{ height: '200px', width: '200px' }}>
						<CardBody>
							<CardText>
								<p style={{ fontSize: '18px' }}>Deaths #</p>
								<p style={{ color: 'orange', fontSize: '30px' }}>
									{' '}
									<b>{total_deaths}</b>
								</p>
							</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col sm="3" md="3" xs="4">
					<Card body inverse color="warning" style={{ height: '200px', width: '200px' }}>
						<CardBody>
							<CardText>
								<p style={{ fontSize: '18px' }}>New #</p>
								<p style={{ color: 'blue', fontSize: '30px' }}>
									{' '}
									<b>{new_cases}</b>
								</p>
							</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col sm="3" md="3" xs="4">
					<Card body inverse color="primary" style={{ height: '200px', width: '200px', marginTop: '20px' }}>
						<CardBody>
							<CardText>
								<p style={{ fontSize: '18px' }}>Active #</p>
								<p style={{ color: 'orange', fontSize: '30px' }}>
									{' '}
									<b>{active_cases}</b>
								</p>
							</CardText>
						</CardBody>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default Status;
