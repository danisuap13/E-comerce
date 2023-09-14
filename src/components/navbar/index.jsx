import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
	const context = useContext(ShoppingCartContext);
	const activeStyle = 'underline underline-offset-4';
	
	return(
		<nav className="flex justify-between items-center fixed bg-white border border-b-black rounded-lg z-10 top-0 w-full py-5 px-8 text-sm font-light">
			<ul className='flex items-center gap-3'>
				<li className='font-semibold text-lg'>
					<NavLink top='/'>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink to='/' className= {({ isActive }) => isActive ? activeStyle : undefined }
					onClick={()=> {context.setSearchByCategory(null)
					context.setSearchByTitle(null)}}>
						All
					</NavLink>
				</li>
				<li>
					<NavLink to="/Women's-Clothes" className= {({ isActive }) => isActive ? activeStyle : undefined }
					onClick={()=> context.setSearchByCategory("women's clothing")}
					>
						Women's Clothes
					</NavLink>
				</li>
				<li>
					<NavLink to="/Men's-Clothes" className= {({ isActive }) => isActive ? activeStyle : undefined }
					onClick={()=> context.setSearchByCategory("men's clothing")}
					>
						Men's Clothes
					</NavLink>
				</li>
				<li>
					<NavLink to='/Jewelery' className= {({ isActive }) => isActive ? activeStyle : undefined }
					onClick={()=> context.setSearchByCategory("jewelery")}
					>
						Jewelery
					</NavLink>
				</li>
				<li>
					<NavLink to='/Electronics' className= {({ isActive }) => isActive ? activeStyle : undefined }
					onClick={()=> context.setSearchByCategory("electronics")}
					>
					Electronics
					</NavLink>
				</li>
			</ul>
			<ul className='flex items-center gap-3'>
				<li className="text-black/60">
					danielsuarez@gmail.com
				</li>
				<li>
					<NavLink to='/my-orders' className= {({ isActive }) => isActive ? activeStyle : undefined }>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink to='/my-account' className= {({ isActive }) => isActive ? activeStyle : undefined }>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink to='/sign-in' className= {({ isActive }) => isActive ? activeStyle : undefined }>
						Sign In
					</NavLink>
				</li>
				<li className='flex justify-center hover:cursor-pointer'>
					<ShoppingBagIcon className="w-6 h-6 text-black select-none" onClick={() => {context.closeProductDetail();	
							!context.isCheckoutSideMenuOpen ? context.openCheckoutSideMenu() : context.closeCheckoutSideMenu();
						}}/>
					<div>
						{context.count}
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;