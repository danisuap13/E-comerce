import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


const Card = ( { data } ) => {
	const context = useContext(ShoppingCartContext);

	const showProduct = (productDetail) => {
		context.openProductDetail();
		context.setProductToShow(productDetail)
	}

	return(
		<div 
		className='bg-white cursor-pointer w-56 h-60 roudned-lg'
		onClick={() => showProduct(data)}
		>
			<figure className='relative mb-2 w-full h-4/5'>
				<span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
				<img className='w-full h-full object-cover rounded-lg ' src={data.image} alt={data.title} />
				<div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={() => context.setCount(context.count + 1)}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
			</figure>
			<p className='flex justify-between'>
				<span className='text-sm font-light'>{data.title}</span>
				<span className='text-sm font-medium'>${data.price}</span>
			</p>
		</div>
	);
};

export default Card;