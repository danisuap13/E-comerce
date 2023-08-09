import { TrashIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const OrderCard = (props) => {
	const context = useContext(ShoppingCartContext)
	const showProduct = (productDetail) => {
		context.openProductDetail();
		context.setProductToShow(productDetail)
	}
	
	const { id, title, image , price, value, description} = props;
	return(
		<div className='flex justify-between items-center mb-3 border border-gray-300 rounded-lg'>
				<p className='mx-1 text-md font-light border border-black rounded-lg p-2 hover:cursor-pointer hover:border-white' onClick={() => context.updateCardValue(id)} >{value}</p>
			<div className='flex items-center gap-2'>
				<figure className="w-20 h-20">
					<img onClick={()=>showProduct({id, title, image, price, description})} className="w-full h-full rounded-lg object-cover hover:cursor-pointer" src={image} alt={title} />
				</figure>
				<p className='text-sm font-light'>{title.slice(0,20)}...</p>
			</div>
			<div className='flex items-center gap-1'>
				<p className="text-lg font-medium ml-2">${(price*value).toFixed(2)}</p>
				<TrashIcon className='h-6 w-6 text-black mr-1 hover:cursor-pointer' onClick={() => context.handleDelete(id, value)}/>
			</div>
		</div>
	);
}

export default OrderCard;