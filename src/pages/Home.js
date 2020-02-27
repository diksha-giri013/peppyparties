//#region Main Libs
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
//#endregion

//#region project components

//#endregion

//#region styles and image resources
import '../xstyles/home.css';
//https://unsplash.com/collections/9608840/cms
//#endregion

//#region additional components - to be refactored
//#endregion

const Home = (props) => {
	//#region hooks and variables

	//#endregion
	return (
		<div className='home_container'>
			<section className='hero_container'>
				{/* <Suspense delay={`10ms`} fallback={<h4>Loading the Cool stuff</h4>}>
					<img
						src={
							'https://images.unsplash.com/flagged/photo-1574319523332-4cadaa531506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=100'
						}
						height='800px'
						width='100%'
						alt='a couple who met for the first time at a house party'
						className='hero_img'
						loading='lazy'
						decoding='async'
					/>
				</Suspense> */}
				<div className='hero_overlay'>
					<h5 className='head_mini'>PEPSPOT</h5>
					<h1 className='head_bold'>A bridge between</h1>
					<h3 className='head_thin'>good and great memories</h3>
				</div>
			</section>
		</div>
	);
};

Home.propTypes = {};

export default Home;
