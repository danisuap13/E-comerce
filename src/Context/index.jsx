import { useState, useEffect, createContext } from 'react';

export const ShoppingCartContext = createContext();


export const ShoppingCartProvider = ({ children }) => {
	// Shopping Cart ¬ Increment quantity
	const [count, setCount] = useState(0);
	const [data, setData] = useState([]);

	// Add to Cart Quantity Menu ¬ Product Quantity Menu Counter
	const [quantityCounter, setQuantityCounter] = useState(1);

	// Add to Cart Quantity Menu ¬ Open / Close
	const [isQuantityMenuOpen, setIsQuantityMenuOpen] = useState(false);
	const openQuantityMenu =  (cardData) => {
		setData(cardData);
		setIsQuantityMenuOpen(true);
	}
	const closeQuantityMenu =  () => setIsQuantityMenuOpen(false);

	// Product Detail ¬ Open / Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail =  () => setIsProductDetailOpen(true);
	const closeProductDetail =  () => setIsProductDetailOpen(false);
	
	// Checkout Side Menu ¬ Open / Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu =  () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu =  () => setIsCheckoutSideMenuOpen(false);
	
	// Update Quantity Product Shopping Cart
	const [update, setUpdate] = useState(false);
	const updateCardValue = (id) => {
		const index = cartProducts.findIndex(item => item.id == id)
		setData(cartProducts[index])
		setIsCheckoutSideMenuOpen(false);
		setIsQuantityMenuOpen(true);
		setUpdate(true)
	}

	// Quantity Menu Add Button ¬ add product to shopping cart or update quantity counter for product in shopping cart
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

	// Product Detail ¬ Show Product
	const [productToShow, setProductToShow] = useState({})
	
	// Shopping Cart ¬ Add Products to cart
	const [cartProducts, setCartProducts] = useState([])
	
	// Shopping Cart ¬ Order
	const [order, setOrder] = useState([])
	const URL = 'https://fakestoreapi.com/products';

	useEffect(() => {
		fetch(URL)
		.then(response => response.json())
		.then(data => (setItems(data)))
  }, [])

	
	// Get Products
	const [items, setItems] = useState(null);
	const [filteredItems, setFilteredItems] = useState(null);

	// Search Items by title

	const [searchByTitle, setSearchByTitle] = useState(null)
	const filteredItemsByTitle = (items, searchByTitle) => {
		return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
	}

	// Search Items by category

	const [searchByCategory, setSearchByCategory] = useState(null);
  const filteredItemsByCategory = (items, searchByCategory) => {
		return items?.filter(item => item.category.toLowerCase() === searchByCategory.toLowerCase())
	}

	const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
		if(!searchType){
			return items
		}	
		if(searchType === 'BY-TITLE') {
			return filteredItemsByTitle(items, searchByTitle)
		}
		if(searchType === 'BY-CATEGORY') {
			return filteredItemsByCategory(items, searchByCategory)
		}
		if(searchType === 'BY-TITLE-AND-CATEGORY') {
			return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
		}
	}

	console.log(filteredItems)
	
	useEffect(()=>{
		if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY-TITLE-AND-CATEGORY', items, searchByTitle, searchByCategory))
		if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY-CATEGORY', items, searchByTitle, searchByCategory))
		if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY-TITLE', items, searchByTitle))
		if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
		}, [items, searchByTitle, searchByCategory])

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
			updateCardValue,
			order, 
			setOrder,
			items,
			setItems,
			setSearchByTitle,
			searchByTitle,
			filteredItems,
			setSearchByCategory,
			searchByCategory
		}}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
