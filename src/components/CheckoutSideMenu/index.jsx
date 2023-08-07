import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../components/OrderCard"

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);

	return(
		<aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col w-[360px] h-[calc(100vh-68px)] fixed right-0 border border-black rounded-lg bg-white overflow-auto top-20`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>My Order</h2>
				<div onClick={() => context.closeCheckoutSideMenu()} className='hover:cursor-pointer'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
			</div>
			<div className="px-6 py-4">
				{
					context.cartProducts.map(product => (
						<OrderCard 
							key = {product.id}
							title = {product.title}
							imageUrl = {product.image}
							price = {product.price}
						/>
					))
				}
			</div>
		</aside>
	);
}

export default CheckoutSideMenu; 