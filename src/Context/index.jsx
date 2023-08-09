import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();


export const ShoppingCartProvider = ({ children }) => {
	// Shopping Cart ¬ Increment quantity
	const [count, setCount] = useState(0);
	const [data, setData] = useState([]);

	// Quantity Menu Counter
	const [quantityCounter, setQuantityCounter] = useState(1);
	
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

	const openQuantityMenu =  (event, cardData) => {
		event.stopPropagation();
		setData(cardData);
		setIsQuantityMenuOpen(true);
	}

	const handleDelete = (id, value) => {
		setCount(count - value);
		const filteredProducts = cartProducts.filter(product => product.id != id);
		setCartProducts(filteredProducts);
	};

	const [update, setUpdate] = useState(false);

	const updateCardValue = (id) => {
		const index = cartProducts.findIndex(item => item.id == id)
		setData(cartProducts[index])
		setIsCheckoutSideMenuOpen(false);
		setIsQuantityMenuOpen(true);
		setUpdate(true)
	}

	const addCount = () => {
		closeQuantityMenu();
		openCheckoutSideMenu();
		if(update) {
			data.value = quantityCounter;
			setUpdate(false);
			setCount(cartProducts.reduce((ac, item)=>item.value + ac,0));
		}
		else {
			setCartProducts([...cartProducts,{...data,value:quantityCounter}]);
			setCount(count + quantityCounter)
		}
		setQuantityCounter(1);
	}

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
			openQuantityMenu,
			addCount,
			handleDelete,
			updateCardValue
		}}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
