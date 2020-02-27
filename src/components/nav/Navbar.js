//#region Main Libs
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
//#endregion

//#region project components
import NavLink from './NavLink';

//#endregion

//#region styles and image resources
import logo_wm from '../../xres/pepspot_wordmark.svg';
import male_avatar from '../../xres/avatars/male_jacket_shades.svg';
import { Link } from '@reach/router';
//#endregion

//#region additional components - to be refactored
function UserAvatar(props) {
	return (
		<div className='user_avatar_container'>
			User
			<Suspense delay={`10ms`} fallback={<h4>Loading the Cool stuff</h4>}>
				<img
					src={male_avatar}
					className='user_avatar'
					alt='logo'
					loading='lazy'
					decoding='async'
				/>
			</Suspense>
		</div>
	);
}

UserAvatar.propTypes = {};
// export default UserAvatar;

//#endregion

const Navbar = (props) => {
	//#region hooks and variables

	//#endregion

	return (
		<header className='app_header'>
			<Link to='/'>
				<img
					src={logo_wm}
					className='app_logo'
					alt='logo'
					loading='lazy'
					decoding='async'
				/>
			</Link>
			<nav className='app_nav_links'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/dashboard'>Venues</NavLink>
				<NavLink to='/invoice/42'>Cart</NavLink>
				<NavLink to='/profile'>
					<UserAvatar user={true} />
				</NavLink>
			</nav>
		</header>
	);
};

Navbar.propTypes = {};

export default Navbar;
