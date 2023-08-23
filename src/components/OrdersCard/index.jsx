import { CalendarDaysIcon, BanknotesIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props;
	return(
		<div className='flex justify-between items-center mb-3 border border-gray-300 rounded-lg w-80 h-20'>
			<p className="flex items-center justify-evenly w-full">
				<CalendarDaysIcon className="h-6 w-6 text-blue-500"/>
				<span>01.02.23</span>
				<ShoppingCartIcon className="h-6 w-6 "/>
				<span>{totalProducts}</span>
				<BanknotesIcon className="h-6 w-6 text-green-400" />
				<span className="font-medium text-2x1">{`$${totalPrice.toFixed(2)}`}</span>
			</p>
		</div>
	);
}

export default OrdersCard;