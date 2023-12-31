import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/navbar'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import './App.css'
import ProductQuantity from '../../components/ProductQuantity'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: "/Women's-Clothes", element: <Home /> },
    { path: "/Men's-Clothes", element: <Home /> },
    { path: "/Jewelery", element: <Home /> },
    { path: "/Electronics", element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },  
  ]);

  return routes;
} 

const App = () => {
  return (
		<ShoppingCartProvider>
			<BrowserRouter className='bg-black'>
				<AppRoutes />
				<Navbar />
				<CheckoutSideMenu />
				<ProductQuantity />
			</BrowserRouter>
		</ShoppingCartProvider>
  )
}

export default App
