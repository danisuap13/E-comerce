import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../components/OrderCard"
import { XMarkIcon } from "@heroicons/react/24/solid";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);

	const handleDelete = (id) => {
		const filteredProducts = context.cartProducts.filter(product => product.id != id);
		context.setCartProducts(filteredProducts);
	};

	return(
		<aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col w-[360px] h-[calc(100vh-68px)] fixed right-0 border border-black rounded-lg bg-white top-20`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>My Order</h2>
				<div onClick={() => context.closeCheckoutSideMenu()} className='hover:cursor-pointer'>
					<XMarkIcon className='h-6 w-6 text-black'/>
				</div>
			</div>
			<div className="px-6 py-4 overflow-y-scroll">
				{
					context.cartProducts.map(product => (
						<OrderCard 
							key = {product.id}
							id= {product.id}
							title = {product.title}
							imageUrl = {product.image}
							price = {product.price}
							handleDelete = {handleDelete}
						/>
					))
				}
			</div>
		</aside>
	);
}

export default CheckoutSideMenu; 