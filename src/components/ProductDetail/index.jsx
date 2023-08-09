import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
	const context = useContext(ShoppingCartContext);

	return(
		<aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col w-[400px] h-[calc(100vh-68px)] fixed left-0 top-12 mt-6 border border-black rounded-lg bg-white overflow-auto`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>Detail</h2>
				<div onClick={() => context.closeProductDetail()} className='hover:cursor-pointer'>
					<XMarkIcon className='h-6 w-6 text-black'/>
				</div>
			</div>
				<div className='flex flex-col'>
					<figure className="flex px-6 justify-center">
						<img className='h-full w-3/4 rounded-lg px-10' 
						src={context.productToShow.image} 
						alt={context.productToShow.title} />
					</figure>
					<p className='flex flex-col px-6 py-3'>
						<span className='font-medium text-2xl mb-3 text-center'>${context.productToShow.price}</span>
						<span className='font-medium text-md mb-1 text-center'>{context.productToShow.title}</span>
						<span className='font-light text-md text-justify pb-6'>{context.productToShow.description}</span>
					</p>
				</div>
		</aside>
	);
}

export default ProductDetail; 