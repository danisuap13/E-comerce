import { CalendarDaysIcon, BanknotesIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props;
	return(
		<div className='flex justify-between items-center mb-3 border border-black rounded-lg w-80 h-20'>
			<div className="flex items-center justify-evenly w-full">
				<div className="flex flex-col">
					<CalendarDaysIcon className="h-6 w-6 self-center"/>
					<span>01.02.23</span>
				</div>
				<div className="flex flex-col">
					<ShoppingCartIcon className="h-6 w-6 self-center"/>
					<span className="self-center">{totalProducts}</span>
				</div>
				<div className="flex flex-col">
					<BanknotesIcon className="h-6 w-6 self-center" />
					<span className="font-medium text-2x1 self-center">{`$${totalPrice.toFixed(2)}`}</span>
				</div>
			</div>
		</div>
	);
}

export default OrdersCard;