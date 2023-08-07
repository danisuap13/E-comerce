import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
	const { id, title, imageUrl, price, handleDelete, value} = props;
	return(
		<div className='flex justify-between items-center mb-3 border border-gray-300 rounded-lg'>
			<div className='flex items-center gap-2'>
				<figure className="w-20 h-20">
					<img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
				</figure>
				<p className='text-sm font-light'>{title.slice(0,20)}...</p>
				<p className='text-sm font-light'>{value}</p>
			</div>
			<div className='flex items-center gap-1'>
				<p className="text-lg font-medium ml-2">${price}</p>
				<TrashIcon className='h-6 w-6 text-black mr-1 hover:cursor-pointer' onClick={() => handleDelete(id)}/>
			</div>
		</div>
	);
}

export default OrderCard;