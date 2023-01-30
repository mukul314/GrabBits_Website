import React from 'react';
import Highlights from '../Highlights/Highlights';
import Swiper from '../Swiper/Swiper';
import classes from './Landing.module.css';
import Faq from '../Faq/Faq';

const Landing = () => {
	return (
		<>
			<div className={classes.landing_bg}>
				<Highlights />
				<Faq />
				<Swiper />
			</div>
		</>
	);
};

export default Landing;
