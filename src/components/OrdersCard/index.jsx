import { TrashIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props;
	return(
		<div className='flex justify-between items-center mb-3 border border-gray-300 rounded-lg'>
			<p>
				<span>01.02.23</span>
				<span>{totalProducts}</span>
				<span>{totalPrice}</span>
			</p>
		</div>
	);
}

export default OrdersCard;