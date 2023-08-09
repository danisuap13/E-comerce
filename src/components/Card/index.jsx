import { useContext } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';


const Card = ( { data } ) => {
	const context = useContext(ShoppingCartContext);

	const showProduct = (productDetail) => {
		context.openProductDetail();
		context.setProductToShow(productDetail)
	}

	const renderIcon = (id) => {
	const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
	
		if(!isInCart) {
			return (
				<div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={(event) => context.openQuantityMenu(event, data)}>
						<PlusIcon className='h-6 w-6 text-black'/>
				</div>
			);
		}
		else {
			return (
				<div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 border-2 border-whiter'>
						<CheckIcon className='h-6 w-6 text-green-300'/>
				</div>
			);
		}
	};

	return(
		<div 
		className='bg-white cursor-pointer w-56 h-60 rounded-lg'
		onClick={() => showProduct(data)}
		>
			<figure className='relative mb-2 w-full h-4/5 rounded-lg border-2 border-gray'>
				<span className='absolute bottom-0 left-0 bg-white/60 rounded-ls text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
				<img className='w-full h-full object-cover rounded-lg ' src={data.image} alt={data.title} />
				{renderIcon(data.id)}
			</figure>
			<p className='flex justify-between'>
				<span className='text-sm font-light'>{data.title.slice(0,20)}...</span>
				<span className='text-sm font-medium'>${data.price}</span>
			</p>
		</div>
	);
};

export default Card;