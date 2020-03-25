import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
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
		// console.log(this.state.liveData);
		const { total_cases, total_recovered, total_deaths, record_date } = this.state.liveData;
		return (
			<Card body inverse color="info" style={{ height: '300px', width: '300px' }}>
				<CardBody>
					<CardTitle>INDIA</CardTitle>
					<CardSubtitle>
						As of <Moment format="DD/MM/YYYY HH:mm">{record_date}</Moment>
					</CardSubtitle>

					<CardText>
						<p style={{ display: 'inline', fontSize: '18px' }}>Total Cases :</p>
						<p style={{ color: 'orange', fontSize: '30px', display: 'inline' }}>
							<b>{total_cases}</b>
						</p>{' '}
					</CardText>
					<CardText style={{ paddingTop: '0px' }}>
						<p style={{ display: 'inline', fontSize: '18px' }}>Total Recovered :</p>
						<p style={{ color: 'green', fontSize: '30px', display: 'inline' }}>
							{' '}
							<b>{total_recovered}</b>
						</p>
					</CardText>
					<CardText>
						<p style={{ display: 'inline', fontSize: '18px' }}>Total Deaths :</p>
						<p style={{ color: '#B12608', fontSize: '30px', display: 'inline' }}>
							{' '}
							<b>{total_deaths}</b>
						</p>
					</CardText>
				</CardBody>
			</Card>
		);
	}
}

export default Status;
