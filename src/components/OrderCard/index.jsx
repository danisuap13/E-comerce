import { TrashIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const OrderCard = (props) => {
	const context = useContext(ShoppingCartContext)
	const showProduct = (productDetail) => {
		context.openProductDetail();
		context.setProductToShow(productDetail)
	}
	const { id, title, image , price, value, description, handleDelete, isOrderCard} = props;
	let renderTrashIcon;
	let renderValue;
	let renderImage;
	if(handleDelete) {
		renderTrashIcon = <TrashIcon className='h-6 w-6 text-black mr-1 hover:cursor-pointer' onClick={() => handleDelete(id, value)}/>
	}
	if(isOrderCard) {
		renderValue = <p className='mx-1 text-md font-light border border-black rounded-lg p-2'>{value}</p>
		renderImage = <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
	}
	else {
		renderValue = <p className='mx-1 text-md font-light border border-black rounded-lg p-2 hover:cursor-pointer hover:border-white' onClick={() => context.updateCardValue(id)} >{value}</p>
		renderImage = <img onClick={()=>showProduct({id, title, image, price, description})} className="w-full h-full rounded-lg object-cover hover:cursor-pointer" src={image} alt={title} />
	}

	return(
		<div className='flex justify-between items-center mb-3 border border-gray-300 rounded-lg'>
				{renderValue}
			<div className='flex items-center gap-2'>
				<figure className="w-20 h-20">
					{renderImage}
				</figure>
				<p className='text-sm font-light'>{title.slice(0,20)}...</p>
			</div>
			<div className='flex items-center gap-1'>
				<p className="text-lg font-medium ml-2">${(price*value).toFixed(2)}</p>
				{renderTrashIcon}
			</div>
		</div>
	);
}

export default OrderCard;