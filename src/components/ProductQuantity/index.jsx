import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ChevronDoubleLeftIcon, PlusCircleIcon, ChevronDoubleRightIcon, XCircleIcon } from '@heroicons/react/24/solid';

const ProductQuantity = () => {
	const context = useContext(ShoppingCartContext);
	
	return(
		<div className={`${context.isQuantityMenuOpen ? 'flex' : 'hidden'} flex-col h-full w-full fixed border border-black rounded-lg bg-gray-400 bg-opacity-90 top-0 justify-center`}>
			<aside className='bg-white flex flex-col border rounded-lg w-60 h-40 self-center justify-between border-black'>
			<div className='hover:cursor-pointer self-end'>
				<XCircleIcon className='h-6 w-6 text-red-400' onClick={() => {
					context.closeQuantityMenu()
					context.setQuantityCounter(1)
				}}/>
				</div>
				<div className='flex justify-center'>
				<div className='hover:cursor-pointer ml-2'>
						<ChevronDoubleLeftIcon className='h-6 2-6 text-black select-none' onClick={() => {
							context.quantityCounter > 1 ? context.setQuantityCounter(context.quantityCounter - 1) : context.setQuantityCounter(20)}}/>
				</div>
					<span className='w-2/3 mx-2 text-center border-2 border-black '>{context.quantityCounter}</span>
					<div className='hover:cursor-pointer'>
						<ChevronDoubleRightIcon  className='mr-2 h-6 2-6 text-black select-none' onClick={() => {
							context.quantityCounter < 20 ? context.setQuantityCounter(context.quantityCounter + 1) : context.setQuantityCounter(1)
						}} />
					</div>
				</div>
				<div onClick={() => context.addCount()} className='hover:cursor-pointer self-center pb-5'>
					<PlusCircleIcon className='h-8 w-8 text-emerald-400' />
				</div>
			</aside>
		</div>
	);
}

export default ProductQuantity;