import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
	const context = useContext(ShoppingCartContext);

	return(
		<aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col w-[360px] h-[calc(100vh-68px)] fixed right-0 border border-black rounded-lg bg-white overflow-auto`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>Detail</h2>
				<div onClick={() => context.closeProductDetail()} className='hover:cursor-pointer'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
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