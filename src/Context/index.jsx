import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();


export const ShoppingCartProvider = ({ children }) => {
	// Shopping Cart ¬ Increment quantity
	const [count, setCount] = useState(0);

	// Quantity Menu Counter
	const [quantityCounter, setQuantityCounter] = useState(0);
	
	// Product Detail ¬ Open / Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail =  () => setIsProductDetailOpen(true);
	const closeProductDetail =  () => setIsProductDetailOpen(false);
	
	// Checkout Side Menu ¬ Open / Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu =  () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu =  () => setIsCheckoutSideMenuOpen(false);
	
	// Quantity Menu ¬ Open / Close
	const [isQuantityMenuOpen, setIsQuantityMenuOpen] = useState(false);
	const openQuantityMenu =  () => setIsQuantityMenuOpen(true);
	const closeQuantityMenu =  () => setIsQuantityMenuOpen(false);
		
	// Product Detail ¬ Show Product
	const [productToShow, setProductToShow] = useState({})
	
	// Shopping Cart ¬ Add Products to cart
	const [cartProducts, setCartProducts] = useState([])
	
	return(
		<ShoppingCartContext.Provider value={{
			count,
      setCount,
			quantityCounter,
			setQuantityCounter,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
			isQuantityMenuOpen,
			closeQuantityMenu,
			openQuantityMenu
		}}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
