import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../components/OrderCard"
import { XMarkIcon } from "@heroicons/react/24/solid";
import { totalPrice } from "../../Utils";

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);

	const handleDelete = (id, value) => {
		context.setCount(context.count - value);
		const filteredProducts = context.cartProducts.filter(product => product.id != id);
		context.setCartProducts(filteredProducts);
	};
	
	const handleCheckout = () => {
		if(context.cartProducts.length === 0) {
			context.closeCheckoutSideMenu()	
			return
		}
		const orderToAdd = {
			date: '01-02-2023',
			products: context.cartProducts,
			totalProducts: context.cartProducts.reduce((add, cur) => cur.value + add, 0),
			totalPrice:	totalPrice(context.cartProducts)
		}
		context.setOrder([...context.order, orderToAdd])
		context.setCartProducts([]);
		context.setCount(0)
	};

	return(
		<aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col w-[400px] h-[calc(100vh-68px)] fixed right-0 top-12 mt-6 border border-black rounded-lg bg-white `}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>My Order</h2>
				<div onClick={() => context.closeCheckoutSideMenu()} className='hover:cursor-pointer'>
					<XMarkIcon className='h-6 w-6 text-black'/>
				</div>
			</div>
			<div className="px-6 py-4 overflow-y-scroll flex-1">
				{
					context.cartProducts.map(product => (
						<OrderCard 
							key = {product.id}
							id= {product.id}
							title = {product.title}
							image = {product.image}
							price = {product.price}
							value = {product.value}
							description = {product.description}
							handleDelete = {handleDelete}
						/>
					))
				}
			</div>
			<div className="px-6 mb-6 mt-2">
				<p className="flex justify-between items-center p-2 border border-black rounded-lg mr-5">
					<span className="font-medium text-xl">Total:</span>
					<span className="font-medium text-2xl">${totalPrice(context.cartProducts).toFixed(2)}</span>
				</p>
				<button className= 'bg-black text-white py-2 w-[330px] mt-4 border rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
			</div>
		</aside>
	);
}

export default CheckoutSideMenu; 