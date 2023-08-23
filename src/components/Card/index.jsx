import { useContext } from 'react';
import { PlusCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
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
				<div className='absolute top-0 right-0 flex justify-center items-center w-8 h-8 bg-white rounded-full' onClick={(event)=> {
					event.stopPropagation();		
					context.openQuantityMenu(data)
				}}>
						<PlusCircleIcon className='h-full w-full text-lime-700'/>
				</div>
			);
		}
		else {
			return (
				<div className='absolute top-0 right-0 flex justify-center items-center bg-black w-8 h-8 rounded-full m-2 p-1 border-2 border-white'>
						<ShoppingBagIcon className='h-6 w-6 text-white'/>
				</div>
			);
		}
	};

	return(
		<div 
		className='bg-white cursor-pointer w-56 h-60 rounded-lg border border-solid border-gray-500 p-2'
		onClick={() => showProduct(data)}
		>
			<figure className='relative mb-2 w-full h-4/5 rounded-lg border py-1 border-gray-400'>
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