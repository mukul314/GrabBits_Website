import React, { useState, useEffect } from 'react';
import http from '../../api';
import classes from './Opportunities.module.css';
import { Card } from '../common';

const Opportunities = () => {
	const [jobData, setJobData] = useState([]);

	useEffect(() => {
		getData();
		console.log(jobData);
	}, []);

	const getData = async () => {
		try {
			http.get('/job/getJobs').then((response) => {
				const data = response.data.jobs;

				setJobData(data);
			});
		} catch (err) {
			console.log(err);
		}
	};

	const search = async (e) => {
		let key = e.target.value;
		if (key) {
			let result = await http.get(`job/getJobs/${key}`);
			console.log(result);
			if (result) {
				setJobData(result.data.job);
			}
		} else {
			getData();
		}
	};

	return (
		<>
			<input
				type="text"
				placeholder="Search"
				className={classes.search_bar}
				onChange={search}
			/>
			<div className={classes.cards}>
				{jobData?.length > 0 ? (
					jobData?.map((opp, i) => {
						return <Card data={opp} key={i} />;
					})
				) : (
					<h1>No Data Found</h1>
				)}
			</div>
		</>
	);
};

export default Opportunities;
