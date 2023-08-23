import { useContext } from "react";
import Layout from "../../components/Layout";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import OrdersCard from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext)  
	return (
			<Layout >
				<h1>My Orders</h1>
				{
					context.order.map((order, index)=>{
						<Link key={index} to={`/my-orders/${order.id}`}>
							<OrdersCard 
							
								totalPrice = {order.totalPrice}
								totalProducts = {order.totalProducts}
							/>
						</Link>
					})
				}
			</Layout>
    );
  };
  
export default MyOrders;