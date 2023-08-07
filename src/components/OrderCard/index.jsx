const OrderCard = props => {
	const { title, imageUrl, price } = props;
	return(
		<div className='flex justify-between items-center mb-3 border border-gray-300 rounded-lg'>
			<div className='flex items-center gap-2'>
				<figure className="w-20 h-20">
					<img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
				</figure>
				<p className='text-sm font-light'>{title.slice(0,20)}...</p>
			</div>
			<div className='flex items-center gap-1'>
				<p className="text-lg font-medium ml-2">{price}</p>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
					<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
		</div>
	);
}

export default OrderCard;