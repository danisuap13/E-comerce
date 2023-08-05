import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
	const context = useContext(ShoppingCartContext);
	console.log('product:', context.productToShow);

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
					<figure className="px-6 flex justify-center">
						<img className='h-full w-3/4 rounded-lg px-10' 
						src={context.productToShow.image} 
						alt={context.productToShow.title} />
					</figure>
					<p className='flex flex-col px-6 py-3'>
						<p className="flex justify-between">
							<div className="flex">
								<span className='font-medium text-md mb-1'>{context.productToShow.rating.rate}</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1">
									<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
								</svg>
							</div>
							<div className="flex">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
								</svg>
								<span className='font-medium text-md mb-1'>{context.productToShow.rating.count}</span>
							</div>							
					</p>
						<span className='font-medium text-2xl mb-3 text-center'>${context.productToShow.price}</span>
						<span className='font-medium text-md mb-1'>{context.productToShow.title}</span>
						<span className='font-light text-md text-justify pb-6'>{context.productToShow.description}</span>
					</p>
				</div>
		</aside>
	);
}

export default ProductDetail; 