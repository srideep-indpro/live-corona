import React, { Component } from 'react';
import Spinner from '../Spinner';
import Moment from 'react-moment';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
let deathPercent;
let recoveredPercent;
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
				url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php',
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
					let liveData = response.data.latest_stat_by_country[0];
					this.setState({ liveData, loading: false });
				})
				.catch((error) => {
					console.log(error);
				});
		}, 10000);

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
					let liveData = response.data.latest_stat_by_country[0];
					this.setState({ liveData, loading: false });
				})
				.catch((error) => {
					console.log(error);
				});
		}, 10000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		let liveDataCount = Object.keys(this.state.liveData).length;
		const {
			total_cases,
			total_recovered,
			total_deaths,
			record_date,
			active_cases,
			new_cases
		} = this.state.liveData;
		if (total_cases !== undefined && total_deaths !== undefined) {
			let total = parseInt(total_cases.replace(',', ''));
			let deaths = parseInt(total_deaths.replace(',', ''));
			let recovered = parseInt(total_recovered.replace(',', ''));
			let deathRatio = deaths / total;
			let recoveredRatio = recovered / total;
			deathPercent = (deathRatio * 100).toFixed(2);
			recoveredPercent = (recoveredRatio * 100).toFixed(2);
		}
		return (
			<div>
				<Row gutter={24}>
					<Col span={24}>
						<span style={{ fontSize: '15px', float: 'left' }}>
							<b>
								Last updated on <Moment format="DD/MM/YYYY HH:mm">{record_date}</Moment>
							</b>
						</span>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={24}>
						<Card title="Total" bordered={false}>
							<p style={{ fontSize: '30px', color: '#05DFFB' }}>
								{' '}
								<b>{total_cases ? total_cases : <Spinner />}</b>
							</p>
						</Card>
					</Col>
				</Row>
				<Row gutter={24} style={{ marginTop: '20px' }}>
					<Col span={6}>
						<Card title="Active" bordered={false}>
							<p style={{ fontSize: '30px', color: '#0591FB' }}>
								{' '}
								<b>{active_cases ? active_cases : <Spinner />}</b>
							</p>
						</Card>
					</Col>
					<Col span={6}>
						<Card title="New" bordered={false}>
							<p style={{ fontSize: '30px', color: '#FBD905' }}>
								{' '}
								<b>{new_cases ? new_cases : <Spinner />}</b>
							</p>
						</Card>
					</Col>
					<Col span={6}>
						<Card title="Recovered" bordered={false}>
							<p style={{ fontSize: '30px', color: '#8CFB05', display: 'inline' }}>
								{' '}
								<b>{total_recovered ? total_recovered : <Spinner />}</b>
								<p style={{ fontSize: '18px' }}>({recoveredPercent}%)</p>
							</p>
						</Card>
					</Col>
					<Col span={6}>
						<Card title="Deaths" bordered={false}>
							<p style={{ fontSize: '30px', color: '#FB0C05', display: 'inline' }}>
								{' '}
								<b>{total_deaths ? total_deaths : <Spinner />}</b>
								<p style={{ fontSize: '18px' }}>({deathPercent}%)</p>
							</p>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Status;
