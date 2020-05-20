import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import logo_desktop from '../../Logos/tidyhive-logo.png';
import logo_mobile from '../../Logos/tidyhive-standalone.png';

const Navigation = () => {
	return (
		<header className='flex items-center justify-between w-screen px-4 py-2 shadow-lg'>
			<div className='w-2/3 h-full px-2'>
				<img src={logo_desktop} alt='' style={{ width: 'auto', height: 50 }} />
			</div>

			<nav className='flex items-center justify-around w-1/3 h-full'>
				<NavLink
					exact
					activeStyle={{ color: '#FFBF69' }}
					className='font-semibold text-1xl hover:text-hive'
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					activeStyle={{ color: '#FFBF69' }}
					className='font-semibold text-1xl hover:text-hive'
					to='/about'
				>
					About
				</NavLink>

				<NavLink
					activeStyle={{ color: '#FFBF69' }}
					className='font-semibold text-1xl hover:text-hive'
					to='/contact'
				>
					Contact Us
				</NavLink>
				<button className='w-24 p-2 font-semibold text-white rounded-full text-1xl bg-hive'>Login</button>
			</nav>
		</header>
	);
};

// const Navigation = () => {
//   return (
//     <div className="wrapper">
//       <div className="marketing-header">
//         <Link to="/">
//           <img
//             src={logo}
//             alt="Tidy Hive Logo"
//             style={{ width: 200, height: "auto" }}
//           />
//         </Link>
//         <nav className="marketing-nav">
//           <div className="nav-buttons">
//             <Link to="/signup">
//               <Button primary>Sign Up</Button>
//             </Link>
//             <Link to="/signin">
//               <Button primary>Sign In</Button>
//             </Link>
//           </div>
//           <div className="nav-links">
//             <NavLink exact to="/" activeClassName="active">
//               Home
//             </NavLink>
//             <NavLink to="/about">About</NavLink>
//             <NavLink to="/features">Features</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

export default Navigation;
