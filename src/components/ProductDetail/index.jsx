import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
	const context = useContext(ShoppingCartContext);
	console.log('product:', context.productToShow);

	return(
		<aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col w-[360px] h-[calc(100vh-68px)] fixed right-0 border border-black rounded-lg bg-white`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>Detail</h2>
				<div onClick={() => context.closeProductDetail()} className='hover:cursor-pointer'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
			</div>
				<div className='flex flex-col'>
					<figure>
						<img className='w-full h-full rounded-lg px-10 py-2' 
						src={context.productToShow.image} 
						alt={context.productToShow.title} />
					</figure>
					<p className='w-full h-full rounded-lg px-10 py-2'>
						<span>{context.productToShow.price}</span>
						<span>{context.productToShow.title}</span>
						<span>{context.productToShow.description}</span>
					</p>
				</div>
		</aside>
	);
}

export default ProductDetail; 